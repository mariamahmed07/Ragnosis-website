# Ragnosis 🩺

### Clinical Evidence Assistant

**Ragnosis** is a clinical AI interface designed to provide grounded, evidence-backed answers for preventive-care eligibility and drug-safety questions.

The application is designed around one core principle:

> **No supported evidence → No confident answer.**

Ragnosis focuses on transparent retrieval, evidence-based responses, and deliberate refusals when the available clinical evidence is insufficient.

---

## 🎯 The Problem

Clinical guidance is often distributed across different recommendation documents and drug-safety labels. Finding and cross-referencing the right evidence manually can be slow and error-prone.

At the same time, general-purpose AI systems can produce confident-sounding clinical answers even when the underlying evidence does not support them.

Ragnosis addresses these challenges by providing:

* Evidence-grounded clinical answers
* Transparent supporting evidence
* Source-aware responses
* Retrieval-focused question answering
* Explicit refusal when evidence is insufficient

---

## 💡 The Solution

Ragnosis combines a curated clinical knowledge base with a retrieval-augmented generation pipeline.

The system is designed to:

```text
User Question
      ↓
Safety Pre-filter
      ↓
Hybrid Retrieval
(BM25 + Semantic Search)
      ↓
Score Merging
      ↓
Cross-Encoder Reranking
      ↓
Confidence Gate
      ↓
Grounded Generation
      ↓
Faithfulness Check
      ↓
Cited Answer / Refusal
```

The goal is not simply to generate an answer, but to make the answer **traceable to clinical evidence**.

---

## ✨ Key Features

### 🔎 Hybrid Retrieval

Combines:

* **BM25 keyword search** for exact clinical terminology
* **Semantic search** for conceptual similarity
* **Cross-encoder reranking** for improved evidence precision

This helps retrieve both exact drug names and passages expressing the same clinical concept in different wording.

### 📚 Evidence Transparency

Retrieved evidence can be reviewed alongside the generated response, allowing users to understand **why** an answer was produced.

Each evidence item preserves source metadata such as:

* Document
* Section
* Page
* Source type

### 🛡️ Confidence Gate

Ragnosis is designed to prevent weak evidence from reaching the generation stage.

If retrieval confidence is insufficient, the system can refuse the query rather than generate an unsupported answer.

### 🚫 Built-in Refusals

The system intentionally supports responses such as:

> "I don't have sufficient evidence in the current clinical corpus to answer this question."

This is especially important for clinical safety, where an unsupported answer can be more dangerous than an explicit refusal.

### ✅ Grounded Generation

The generation layer is instructed to answer only from retrieved evidence and associate claims with their supporting evidence.

### 🧪 Evaluation

Ragnosis includes an evaluation workflow for measuring evidence coverage and retrieval behavior across predefined clinical test queries.

---

## 🏥 Clinical Scope

The current Ragnosis corpus focuses on a deliberately narrow clinical domain.

### Preventive-Medication Eligibility

Recommendation evidence covering:

* Aspirin for primary prevention of cardiovascular disease
* Statin use for primary prevention of cardiovascular disease

### Drug Safety

Safety-label evidence including:

* Atorvastatin contraindications
* Warnings and precautions
* Documented drug interactions

The narrow scope is intentional: **precision and reliable grounding are prioritized over broad but unreliable medical coverage.**

---

## 📖 Evidence Sources

The clinical evidence base is built around official sources including:

* **USPSTF** — Aspirin Use to Prevent Cardiovascular Disease
* **USPSTF** — Statin Use for the Primary Prevention of Cardiovascular Disease
* **DailyMed / FDA labeling** — Atorvastatin calcium labeling

The system is designed to preserve document and page-level metadata so retrieved evidence can be traced back to its original source.

---

## 🖥️ Frontend

This repository contains the **Ragnosis frontend**.

The interface is built to make the clinical AI pipeline understandable and reviewable rather than presenting the user with a simple chatbot.

### Frontend includes

* 📊 Clinical dashboard
* 💬 Query interface
* 📚 Evidence review
* 📖 Sources page
* 🧪 Evaluation view
* ⚠️ Refusal and safety states

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* JavaScript
* CSS

### Backend Architecture

The complete Ragnosis system is designed around:

* FastAPI
* Hybrid BM25 + semantic retrieval
* Cross-encoder reranking
* Supabase vector storage
* Grounded LLM generation
* Faithfulness validation

> **Note:** The backend and data pipeline are not included in this frontend repository.

---

## 📂 Repository Structure

```text
Ragnosis/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── ...
│
├── public/
│
├── package.json
├── vite.config.js
└── README.md
```

*The exact structure may vary depending on the current frontend implementation.*

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd Ragnosis
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The application will then be available through the local development URL provided by Vite.

---

## ⚠️ Clinical Safety & Limitations

Ragnosis is a **clinical evidence assistant**, not a replacement for a qualified healthcare professional.

The current system has important limitations:

* The evidence corpus is intentionally limited.
* It does not provide general medical advice.
* A refusal does not mean that no clinical evidence exists; it means the available corpus does not provide sufficient evidence for the query.
* Results depend on the underlying retrieval and generation infrastructure.
* Clinical decisions should always be independently verified against current authoritative guidance.

---

## 🔬 Why Ragnosis?

Most AI systems are optimized to answer.

**Ragnosis is designed to know when it should not answer.**

Its core design principles are:

| Principle    | Approach                        |
| ------------ | ------------------------------- |
| Evidence     | Curated clinical sources        |
| Retrieval    | BM25 + semantic search          |
| Precision    | Cross-encoder reranking         |
| Safety       | Confidence gating               |
| Grounding    | Evidence-constrained generation |
| Transparency | Retrieved evidence + citations  |
| Uncertainty  | Explicit refusals               |
| Evaluation   | Dedicated clinical test queries |

---

## 🎯 Project Goal

Ragnosis explores how Retrieval-Augmented Generation can be applied to **clinical safety** while making retrieval quality, evidence provenance, and uncertainty visible to the user.

The objective is not to build a general medical chatbot.

It is to build a system that can answer a **small, well-defined set of clinical questions reliably — and refuse when it cannot.**

---

## ⚕️ Disclaimer

Ragnosis is an experimental AI project developed for educational and research purposes.

It is **not a medical device and should not be used as a substitute for professional medical judgment or clinical care.**

---

## 👩‍💻 Project

**Ragnosis — Clinical Evidence Assistant**

> **Evidence you can check. Answers you can trust.**
