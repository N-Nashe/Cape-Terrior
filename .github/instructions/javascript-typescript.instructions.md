---
name: "JavaScript/TypeScript Conventions"
description: "Use when: writing or reviewing JavaScript and TypeScript code to enforce modern standards, type safety, and best practices"
applyTo: "**/*.{js,jsx,ts,tsx}"
---

# JavaScript/TypeScript Code Standards

## Type Safety
- **Always use TypeScript** for new code. Type all parameters, return values, and complex objects
- Use `strict: true` in `tsconfig.json`
- Avoid `any` type—use `unknown` and type guards instead
- Use discriminated unions for complex type logic

## Code Style
- Use `const` by default, `let` when reassignment needed—never `var`
- Arrow functions for anonymous functions; named functions for reusable code
- Template literals for string interpolation
- Destructuring for objects and arrays when it improves readability
- Use optional chaining (`?.`) and nullish coalescing (`??`)

## Async & Promises
- Prefer `async`/`await` over promise chains
- Always handle promise rejections—no unhandled promise rejections
- Use `Promise.all()` or `Promise.allSettled()` for concurrent operations
- Name async functions with `async` prefix if return type isn't obvious (e.g., `asyncFetchUser`)

## Error Handling
- Create custom error classes extending `Error` for domain-specific errors
- Always provide error context (message + code or stack trace for debugging)
- Use try/catch with specific error type checks, not catch-all
- Log errors with sufficient context for production debugging

## Performance
- Avoid unnecessary re-renders in React (use `useMemo`, `useCallback` appropriately)
- Lazy load modules and components with dynamic imports
- Debounce/throttle high-frequency handlers
- Use native array methods (`map`, `filter`, `reduce`) instead of loops where clearer
- Avoid creating large objects in hot loops

## Testing
- Write unit tests for all public APIs and complex logic
- Use `describe`/`it` blocks with descriptive names
- Mock external dependencies; test behavior not implementation
- Aim for >80% code coverage on critical paths

## Module Organization
- One concept per file
- Named exports for reusable logic (allows better tree-shaking)
- Default export for main entry points
- Clear dependency flow—no circular imports

## Documentation
- JSDoc comments for public functions with `@param`, `@returns`, `@throws`
- Comments for "why" not "what"—code should be self-documenting for "what"
- Type signatures serve as inline documentation
