# Cape Terrior — Copilot Workspace Instructions

These instructions guide all Copilot interactions within this workspace.

## Philosophy

- **Excellence over convenience**: Code should be correct, performant, and maintainable—not quick
- **Deep understanding**: Always read and understand context before suggesting changes
- **Production-ready**: All generated code should meet industry standards
- **Continuous learning**: Document decisions and patterns for team knowledge

## Code Quality Standards

### Always Apply
- **No obvious bugs**: Edge cases handled, error conditions managed
- **Performance conscious**: Algorithms chosen appropriately, no wasteful operations
- **Security first**: Input validation, safe dependencies, no credentials in code
- **Well-tested**: Public APIs have unit tests, critical paths verified

### Language-Specific
See `.github/instructions/` for detailed standards:
- [JavaScript/TypeScript](./instructions/javascript-typescript.instructions.md)
- [Python](./instructions/python.instructions.md)
- [C/C++](./instructions/cpp-c.instructions.md)

## Common Workflows

Use these prompts from `.github/prompts/` for specialized tasks:

- **/performance-analysis**: Find bottlenecks and inefficient patterns
- **/security-review**: Audit code for vulnerabilities and unsafe practices
- **/refactoring**: Improve readability, structure, and design
- **/feature-implementation**: Build complete features with tests
- **/debugging**: Trace and fix issues with root cause analysis

## Agent Selection

Use the **Intelligent Coder** agent for:
- Complex analysis and code review
- Feature development and implementation
- Performance optimization and refactoring
- Debugging and troubleshooting

## Before/After Checklist

### Before Asking for Code Help
1. Provide context: What's the goal? What constraints exist?
2. Share relevant existing code (patterns, styles used)
3. Specify preferred language/framework if not obvious
4. Mention any blocking issues or assumptions

### After Receiving Code
1. Read the entire solution—don't copy-paste blindly
2. Understand the approach and any trade-offs mentioned
3. Run tests if provided
4. Verify it matches style and patterns in your codebase
5. Ask questions if logic isn't clear

## Key Conventions

### General
- No `//TODO`, `//HACK`, `//FIXME` comments in production—use issues instead
- Dependencies must be documented with "why this library" reasoning
- Deprecated APIs are removed, not left with warnings
- Secrets: never in code, config files, or git history

### Testing
- New features include unit tests
- Edge cases and error paths are tested
- Test names describe the behavior tested
- Flaky tests are fixed, not ignored

### Documentation
- Code comments explain "why", not "what"
- Public APIs include examples in docstrings
- README.md reflects current state
- Architecture decisions documented in `/docs` if complex

### Performance
- No premature optimization, but no wasteful defaults either
- Profile before claiming something is slow
- Document performance-critical code with complexity notes
- Benchmark-driven optimization for hot paths

## Asking Good Questions

**Clear**:
> "Refactor this TypeScript service to reduce cyclomatic complexity while maintaining the same API surface. Here's the current implementation: [code]. We need to keep the error handling as-is."

**Vague** (avoid):
> "Make this code better"

**Specific**:
> "Write a Python function that validates email addresses according to RFC 5322, including tests for 10+ edge cases. Return a custom ValidationError with descriptive messages."

**Generic** (avoid):
> "Write an email validator"

## Tools & Enforcement

### Recommended Tools
```bash
# JavaScript/TypeScript
npm install --save-dev @typescript-eslint/eslint-plugin prettier tsc

# Python
pip install mypy ruff pytest

# C/C++
apt install clang-format clang-tidy
```

### CI/CD Should Enforce
- Type checking (strict mode)
- Linting and formatting
- Unit test coverage >80%
- Security scanning
- Performance regression detection

## Customization & Extensions

This workspace includes:
- **Agent**: Intelligent Coder (`.github/agents/intelligent-coder.agent.md`)
- **Instructions**: Language-specific in `.github/instructions/`
- **Prompts**: Task-focused in `.github/prompts/`

## Questions?

If Copilot doesn't follow these standards or seems confused:
1. Provide explicit examples from your codebase
2. Reference specific files or patterns
3. Use the specialized agents/prompts if available
4. Ask clarifying questions to guide the response

---

**Last Updated**: March 9, 2026  
**Maintainer**: Development Team
