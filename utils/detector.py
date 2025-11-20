def detect_code_type(code: str) -> str:
    code_lower = code.lower()
    if "select" in code_lower or "from" in code_lower or "join" in code_lower:
        return "sql"
    elif "import" in code_lower or "def" in code_lower or "pandas" in code_lower:
        return "python"
    else:
        return "unknown"