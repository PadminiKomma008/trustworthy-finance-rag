import { useState } from "react";
import { askQuestion } from "./api";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(false);

  const extractSection = (label) => {
    const regex = new RegExp(`###\\s*${label}\\s*([\\s\\S]*?)(?=###|$)`, "i");
    const match = answer.match(regex);
    return match ? match[1].trim() : "Not available";
  };

  const cleanAnswer = () => {
    return answer
      .replace(/###\s*Key Drivers[\s\S]*?(?=###|$)/i, "")
      .replace(/###\s*Sentiment[\s\S]*?(?=###|$)/i, "")
      .replace(/###\s*Confidence[\s\S]*?(?=###|$)/i, "")
      .replace(/###/g, "")
      .trim();
  };

  const handleAsk = async () => {
    setLoading(true);
    setAnswer("");
    setSources([]);

    try {
      const data = await askQuestion(question);
      setAnswer(data.answer || "");
      setSources(data.sources || []);
    } catch {
      setAnswer("Error connecting to backend.");
    }

    setLoading(false);
  };

  return (
    <div className="app">
      {/* Header */}
      <h1 className="main-title">Finance AI Insights</h1>

      {/* Question Block */}
      <div className="question-box">
        <textarea
          placeholder="Ask your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button onClick={handleAsk} disabled={loading || !question}>
          {loading ? "Analyzing..." : "Ask"}
        </button>
      </div>

      {/* Cards Grid */}
      <div className="card-grid">
        {/* Answer */}
        <div className="card">
          <h3>Answer</h3>
          <p>{loading ? "Loading..." : cleanAnswer()}</p>
        </div>

        {/* Sources */}
        <div className="card">
          <h3>Sources</h3>
          {sources.length === 0 ? (
            <p>No sources</p>
          ) : (
            sources.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noreferrer">
                {s.title}
              </a>
            ))
          )}
        </div>

        {/* Sentiment */}
        <div className="card">
          <h3>Sentiment</h3>
          <p>{extractSection("Sentiment")}</p>
        </div>

        {/* Confidence */}
        <div className="card">
          <h3>Confidence</h3>
          <p>{extractSection("Confidence")}</p>
        </div>
      </div>
    </div>
  );
}

export default App;