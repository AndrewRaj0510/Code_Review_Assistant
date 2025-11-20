from langchain_openai import ChatOpenAI
from dotenv import load_dotenv
import os

load_dotenv()

class CodeReviewer:
    def __init__(self):
        self.llm = ChatOpenAI(
            model=os.getenv("MODEL_NAME"),
            openai_api_base=os.getenv("OPENAI_API_BASE"),
            openai_api_key=os.getenv("OPENAI_API_KEY"),
            temperature=0.3
        )

    def review_code(self, code_text: str, language: str):
        prompt = f"""
        You are a senior software engineer reviewing code.

        Review the following {language} code for:
        - Code quality and best practices
        - Logical or structural issues
        - Performance and readability improvements
        - Security vulnerabilities (if any)

        Provide your response in this structured format:
        1. Summary
        2. Issues Found
        3. Recommendations
        4. Example Fixes

        Code:
        {code_text}
        """

        response = self.llm.invoke(prompt)
        return response.content