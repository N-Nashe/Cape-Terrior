---
description: "Use for: analyzing code for performance bottlenecks, memory leaks, or inefficient algorithms"
argument-hint: "Describe the code concern or paste the code snippet to analyze"
---

# Code Performance Analysis

Analyze the provided code or codebase for:

1. **Performance Bottlenecks**
   - Identify O(n²) or worse complexity patterns
   - Find inefficient loops or recursive calls
   - Spot unnecessary iterations, redundant computations
   - Check for memory allocation in hot paths

2. **Algorithm Efficiency**
   - Evaluate if a better algorithm exists
   - Compare time/space complexity trade-offs
   - Suggest data structure optimizations

3. **Memory Issues**
   - Detect memory leaks or wasteful allocations
   - Identify large object copies in loops
   - Check for unbounded growth or resource leaks

4. **Execution Flow**
   - Trace critical paths through the code
   - Find redundant operations
   - Identify opportunities for caching or memoization

## Output
Provide:
- Priority-ordered list of issues (critical → minor)
- Specific code locations and line numbers
- Concrete solutions with code examples
- Expected performance improvement metrics if measurable
