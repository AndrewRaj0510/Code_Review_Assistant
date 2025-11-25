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
- **Backend:** FastAPI (Python backend), LM Studio/Local LLM Integration, OpenAI API Compatible Interface, Custom /review endpoint for code review, Environment variable support via(.env).
- **Tools:** Git & GitHub, Node.js, Python 3.10+, LM Studio, VS Code

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

## Snippets
<img width="1919" height="866" alt="Screenshot 2025-11-24 121126" src="https://github.com/user-attachments/assets/66747be0-f1e8-4f45-8b64-663aa8e2f765" />
<img width="1919" height="866" alt="Screenshot 2025-11-24 121909" src="https://github.com/user-attachments/assets/157d0e71-7466-4110-b562-6fbbfd89777d" />
<img width="1919" height="866" alt="Screenshot 2025-11-24 121958" src="https://github.com/user-attachments/assets/5fc4cca8-46f4-40d8-91cf-5b98b033e281" />
