---
description: "Use for: refactoring code to improve readability, maintainability, and structure"
argument-hint: "Describe the refactoring goal (readability, simplification, testing, etc.) and paste the code"
---

# Code Refactoring

Refactor the provided code to improve quality in the specified area:

1. **Readability & Clarity**
   - Simplify complex logic into understandable chunks
   - Use clearer variable and function names
   - Break long functions into smaller, focused functions
   - Reduce cognitive load of the code

2. **Maintainability**
   - Extract duplicated code into shared utilities
   - Reduce function/class complexity (cyclomatic complexity)
   - Apply SOLID principles
   - Remove dead code and unused variables

3. **Testability**
   - Inject dependencies instead of hardcoding them
   - Reduce side effects and global state
   - Make pure functions where possible
   - Separate business logic from I/O logic

4. **Performance & Efficiency**
   - Optimize algorithms and data structures
   - Remove unnecessary computations
   - Cache expensive operations appropriately
   - Use lazy evaluation where beneficial

5. **Design Patterns**
   - Apply appropriate design patterns (Factory, Strategy, Observer, etc.)
   - Use standard idioms for the language/framework
   - Reduce boilerplate with better abstractions
   - Improve type safety and constraint expression

## Output
Provide:
- Refactored code with inline explanations for major changes
- Before/after comparison highlighting improvements
- Trade-offs if any (performance vs readability, etc.)
- Testing strategy for the refactored code
- Migration path if this is a critical change
