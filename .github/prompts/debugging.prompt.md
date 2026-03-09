---
description: "Use for: debugging and fixing code issues, tracing execution flows, and understanding unexpected behavior"
argument-hint: "Describe the issue, include error messages, and paste relevant code"
---

# Code Debugging & Troubleshooting

Debug the provided code issue by:

1. **Understanding the Problem**
   - Analyze error messages and stack traces
   - Identify the expected vs actual behavior
   - Determine where the failure occurs
   - Trace execution flow to the root cause

2. **Root Cause Analysis**
   - Question assumptions about data types and values
   - Check boundary conditions and edge cases
   - Verify external dependencies and API contracts
   - Look for timing or concurrency issues
   - Review recent changes that might have introduced the bug

3. **Diagnosis**
   - Add strategic logging to trace execution
   - Use REPL/debugger to inspect state
   - Simplify the problem to isolate the issue
   - Create minimal reproduction case

4. **Solution**
   - Provide the fix with clear explanation
   - Suggest preventive measures (tests, assertions)
   - Document the root cause for the team
   - Explain why this fix works

5. **Verification**
   - Test the fix against the original problem
   - Test edge cases to ensure no regressions
   - Verify the fix in integration with other code
   - Provide test cases to prevent reoccurrence

## Output
Provide:
- Root cause explanation (what went wrong and why)
- Fixed code with inline comments for changes
- Detailed explanation of the fix
- Reproduction test case
- Prevention strategies (assertions, types, tests)
- Any temporary debugging aids if needed for investigation
