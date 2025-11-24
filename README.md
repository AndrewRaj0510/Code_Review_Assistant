# Code Review Assistant

A modern full stack web application that analyzes and reviews code using **LLMs**, with a sleek UI built using **Next.js** and **Tailwind CSS**. The system provides real time code review, formatting, and suggestions to help developers write cleaner and more efficient code.

## Features
- Clean and responsive UI for seamless user experience
- Code visualization and review capabilities
- Dark and light mode support
- Component-based architecture for easy scalability
- Paste or Upload file & review code
- LLM-generated suggestions
- Copy review output

## Tech Stack
- **Frontend:** Next.js, React, Tailwind CSS, Framer Motion (animations), Lucide Icons, ShadCN UI Components, Syntax Highlighter for code display, Dark & Light mode support.
- **Backend:** FastAPI (Python backend), LM Studio / Local LLM Integration, OpenAI API Compatible Interface, Custom /review endpoint for code review, Environment variable support via(.env).
- **Tools:** Git & GitHub, Node.js, Python 3.10+, LM Studio, VS Code

Code_Review_Assistant/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   ├── .env
│   ├── review_engine.py
│   └── utils/
└── UI/
    ├── src/
    │   ├── app/
    │   ├── components/
    ├── package.json
    ├── tailwind.config.js
    ├── next.config.js

## Getting Started

### Prerequisites
- Node.js >= 18.x
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/AndrewRaj0510/Code_Review_Assistant.git
   ```
2. Navigate to the project folder:
    ```bash
    cd code_review_assistant
    ```
3. Install dependencies(refer requirements.txt)
4. Start the FastAPI server:
    ```bash
    venv\Scripts\activate
    cd backend
    uvicorn main:app --reload
    ```
5. Start the development server:
    ```bash
    cd code_review_assistant/UI
    npm run dev
    ```
6. Open http://localhost:3000 in your browser.

### How the System Works
1. User pastes their code into the UI.
2. They click Review button.
3. The frontend sends the code to the /review API endpoint.
4. Backend passes the code to the LLM via LM Studio.
5. The LLM returns:
    Code review
    Issues identified
    Suggestions
    Possible improvements
6. The result is displayed in a clean UI panel with proper formatting.