---
name: "C/C++ Conventions"
description: "Use when: writing or reviewing C and C++ code to enforce safety, performance, and modern standards"
applyTo: "**/*.{cpp,c,h,hpp,cc,cxx}"
---

# C/C++ Code Standards

## Modern C++ (C++17+)
- Use C++17 or later—leverage modern features (structured bindings, std namespace improvements)
- Use `std::` containers and algorithms—avoid raw arrays and manual memory management
- Use smart pointers (`std::unique_ptr`, `std::shared_ptr`)—never `new`/`delete`
- Use `std::optional` instead of null pointers
- Use `std::variant` for type-safe unions

## Type Safety & Memory Safety
- Use const-correctness everywhere—mark const methods, parameters, and variables
- Avoid implicit type conversions—use explicit casts when necessary
- Use `static_cast`, `dynamic_cast`, `const_cast` (not C-style casts)
- Enable compiler warnings: `-Wall -Wextra -Wpedantic`
- Use memory sanitizers during development (AddressSanitizer, MemorySanitizer)

## Function Design
- Keep functions focused and small
- Use references for output parameters, not pointers
- Pass large objects by const reference
- Use `noexcept` specifications where applicable
- Avoid global state—use RAII principles

## Resource Management
- **RAII (Resource Acquisition Is Initialization)** is fundamental
- All resources (memory, files, sockets) must be tied to object lifetime
- Use smart pointers for dynamic memory
- Use `.reset()` or move semantics to transfer ownership explicitly
- Never leak file handles or acquire resources in a way that doesn't guarantee cleanup

## Error Handling
- Use exceptions for error handling in modern C++ (not error codes)
- Catch exceptions by const reference
- Provide strong exception safety guarantees
- Use `std::expected` (C++23) or custom result types for recoverable errors
- Document which functions throw exceptions

## Performance
- Profile before optimizing—use profilers like `perf` or `gprof`
- Understand your data structures—choose right containers for your use case
- Use move semantics to avoid unnecessary copies
- Inline hot paths, but prefer compiler optimization over manual inlining
- Avoid virtual function calls in tight loops when possible (with justification)

## Concurrency
- Prefer higher-level synchronization primitives (condition variables, mutexes)
- Use `std::thread` with proper lifetime management
- Use `std::lock_guard` or `std::unique_lock` for RAII-based locking
- Document thread safety guarantees for shared data
- Avoid deadlocks: establish consistent lock ordering

## Testing
- Use a testing framework like GoogleTest or Catch2
- Write unit tests for public APIs and complex logic
- Test edge cases, boundary conditions, and error paths
- Use mocking frameworks (GoogleMock) for external dependencies
- Aim for >80% code coverage on critical paths

## Code Style
- Follow Google C++ Style Guide or LLVM Coding Standards
- Use clang-format with `.clang-format` configuration file
- Snake_case for variables and functions, PascalCase for classes
- Comments for "why" not "what"
- Use `//` for comments (not `/* */`)

## Documentation
- Document public APIs with clear comments
- Explain complex algorithms or non-obvious logic
- Use `doxygen` style comments for automatic documentation
- Include examples for public APIs in source or separate file

## Build & Dependencies
- Use CMake for cross-platform builds (CMakeLists.txt)
- Pin external dependencies with version constraints
- Use conan or vcpkg for package management
- Separate build phases clearly (compile, link, test)
- Enable all compiler warnings in CI/CD

## Common Pitfalls to Avoid
- Raw pointer arithmetic—use `std::span` (C++20) or sized iterators
- Manual buffer management—use `std::string`, `std::vector`
- Unbounded loops—always have clear exit conditions
- Uninitialized variables—initialize all variables at declaration
- Shadowing variable names across scopes
