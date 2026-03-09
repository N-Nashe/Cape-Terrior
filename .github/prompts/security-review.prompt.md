---
description: "Use for: reviewing code for security vulnerabilities, injection risks, and unsafe patterns"
argument-hint: "Describe the security concern or paste the code to review"
---

# Security Code Review

Analyze the provided code for security vulnerabilities and unsafe patterns:

1. **Injection Vulnerabilities**
   - SQL injection, command injection, template injection
   - Check input validation and parameterized queries
   - Identify unsafe string interpolation in dynamic code

2. **Cryptography & Secrets**
   - Weak or improper use of cryptographic functions
   - Hardcoded credentials, API keys, sensitive data in code
   - Missing encryption for sensitive data in transit or at rest

3. **Authentication & Authorization**
   - Broken access control logic
   - Missing or bypassed permission checks
   - Session management flaws

4. **Unsafe Operations**
   - Deserialization of untrusted data
   - Unsafe use of `eval()`, `exec()`, or dynamic code execution
   - Missing boundary checks or buffer overflows
   - Race conditions in concurrent code

5. **Dependency Risks**
   - Known vulnerabilities in dependencies
   - Outdated versions with security patches available
   - Supply chain risks

6. **Error Handling & Logging**
   - Sensitive information in error messages or logs
   - Information disclosure vulnerabilities
   - Missing security event logging

## Output
Provide:
- Severity levels (Critical, High, Medium, Low)
- Specific vulnerable code locations
- Concrete fixes and secure alternatives
- References to OWASP or CWE standards if applicable
