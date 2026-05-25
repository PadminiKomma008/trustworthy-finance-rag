# 🧠 Trustworthy Finance RAG

## 📌 Overview
Trustworthy Finance RAG is an AI-powered system that helps users understand financial market movements by combining real-time news with intelligent analysis. Instead of manually reading multiple articles, users can ask a question, and the system retrieves relevant financial news, processes it, and generates a structured answer including key drivers, sentiment, confidence level, and source links. This ensures fast, reliable, and explainable insights for better decision-making.

---

## 🏗️ Tech Stack

### 🔹 Frontend
- React
- Vite
- CSS

### 🔹 Backend
- FastAPI
- Uvicorn

### 🔹 Data & Processing
- feedparser
- trafilatura
- Custom chunking logic

### 🔹 AI / ML
- Sentence Transformers
- ChromaDB
- Ollama
- Models: Qwen, Llama

### 🔹 Deployment
- Cloudflare Tunnel
- LocalTunnel

---

## ⚙️ How It Works

1. User asks a financial question  
2. System retrieves relevant news  
3. Converts text into embeddings  
4. Searches similar content in vector DB  
5. Sends context to LLM  
6. Generates structured response  
7. Displays results in UI  

---

## 🚀 Features
- Source-backed answers  
- Sentiment & confidence analysis  
- Clean UI  
- Real-time processing  
- Local LLM  

---

## 📦 Run Locally

### Backend
```bash
cd backend
venv\Scripts\activate
uvicorn main:app --reload


cd frontend
npm run dev