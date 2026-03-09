---
name: "Python Conventions"
description: "Use when: writing or reviewing Python code to enforce PEP 8, type hints, and production best practices"
applyTo: "**/*.py"
---

# Python Code Standards

## Type Hints & Type Safety
- **Always use type hints** on function signatures and class attributes
- Use `from __future__ import annotations` for forward references
- Use `typing` module (or `collections.abc` in Python 3.9+) for complex types
- Run `mypy` or `pyright` with strict mode—aim for zero type errors
- Use `TypedDict` for dictionaries with known structure

## Code Style
- Follow **PEP 8** strictly—use a linter like `ruff` or `flake8`
- Line length: 100-120 characters for readability
- Use f-strings for string formatting (not `%` or `.format()`)
- Meaningful variable names—avoid single letter names except iterators
- Use list comprehensions and generator expressions, but keep them readable

## Functions & Classes
- Single responsibility principle: one function = one clear purpose
- Keep functions small—aim for <50 lines without loss of clarity
- Use dataclasses or Pydantic for structured data
- Properties instead of getters/setters (e.g., `obj.name` not `obj.get_name()`)
- Class methods and static methods explicitly—make intent clear

## Async Code
- Use `async`/`await` for IO-bound operations (not threading for most cases)
- Gather concurrent tasks with `asyncio.gather()` or `asyncio.TaskGroup` (Python 3.11+)
- Always set timeouts on long-running operations
- Handle `asyncio.CancelledError` appropriately

## Error Handling
- Create custom exception classes inheriting from `Exception` (not generic `Exception`)
- Raise specific exceptions—catch only what you handle
- Include error context: message, error code, and relevant data
- Never use bare `except:` or generic exception catching
- Log exceptions with full traceback for debugging

## Performance & Memory
- Use generators for large datasets (not lists)
- Profile code with `cProfile` before optimizing
- Use built-in modules and libraries optimization (C-extensions)
- Avoid global state—prefer dependency injection
- Use `__slots__` in classes with many instances to save memory

## Testing
- Write tests using `pytest` (not unittest)
- Use fixtures for setup/teardown and dependency injection
- Parametrize tests for multiple input scenarios
- Aim for >85% coverage on business logic
- Test edge cases and error paths extensively

## Documentation
- Use docstrings in Google or NumPy style for all public functions/classes
- Include `Args:`, `Returns:`, `Raises:` sections
- Add examples in docstrings for complex functions
- Keep README.md updated with usage examples

## Project Structure
```
project/
├── src/                    # Source code
│   ├── __init__.py
│   └── module.py
├── tests/                  # Test files
├── docs/                   # Documentation
├── pyproject.toml          # Dependencies & config (not setup.py)
└── README.md
```

## Dependencies
- Pin versions in `requirements.txt` or use `pyproject.toml`
- Use virtual environments (`venv` or `uv`)
- Minimize third-party dependencies—use stdlib where possible
- Document why each dependency is needed
