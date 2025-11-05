export const TIME_COMPLEXITIES = [
  {
    notation: "O(1)",
    meaning: "Constant time — does not depend on input size.",
  },
  {
    notation: "O(log n)",
    meaning:
      "Logarithmic time — divides problem in half each step (e.g. binary search).",
  },
  {
    notation: "O(n)",
    meaning: "Linear time — single pass through input (e.g. array traversal).",
  },
  {
    notation: "O(n log n)",
    meaning:
      "Linearithmic — common in efficient sorting (Merge Sort, Quick Sort).",
  },
  {
    notation: "O(n²)",
    meaning: "Quadratic — nested loops (e.g. bubble sort, pair comparisons).",
  },
  {
    notation: "O(n³)",
    meaning: "Cubic — triple nested loops (e.g. matrix multiplication).",
  },
  {
    notation: "O(2ⁿ)",
    meaning:
      "Exponential — recursive branching (e.g. subset generation, backtracking).",
  },
  {
    notation: "O(n!)",
    meaning:
      "Factorial — all permutations (e.g. traveling salesman, brute force).",
  },
];

export const SPACE_COMPLEXITIES = [
  {
    notation: "O(1)",
    meaning: "Constant space — no extra data structures used.",
  },
  {
    notation: "O(log n)",
    meaning:
      "Logarithmic space — recursive stack depth (e.g. binary search tree).",
  },
  {
    notation: "O(n)",
    meaning: "Linear space — proportional to input (e.g. arrays, hashmaps).",
  },
  { notation: "O(n²)", meaning: "Quadratic space — 2D arrays, DP tables." },
];

export const DSA_PATTERNS = [
  {
    pattern: "Sliding Window",
    description:
      "Find subarrays/substrings that meet a condition (fixed or dynamic size).",
  },
  {
    pattern: "Two Pointers",
    description:
      "Use two indices moving toward each other or through array to optimize search.",
  },
  {
    pattern: "Fast and Slow Pointers",
    description:
      "Use different speed pointers to detect cycles or find middle elements.",
  },
  {
    pattern: "Merge Intervals",
    description: "Combine overlapping intervals or find free time ranges.",
  },
  {
    pattern: "Cyclic Sort",
    description: "Sort arrays where elements are in a limited range (1..n).",
  },
  {
    pattern: "In-place Reversal of Linked List",
    description: "Reverse linked lists or sublists without extra memory.",
  },
  {
    pattern: "Tree Traversal (DFS/BFS)",
    description: "Traverse binary trees using recursion or queue/stack.",
  },
  {
    pattern: "Binary Search",
    description:
      "Search or optimize within sorted arrays or monotonic functions.",
  },
  {
    pattern: "Depth-First Search (DFS)",
    description: "Explore all possible paths in tree, graph, or recursion.",
  },
  {
    pattern: "Breadth-First Search (BFS)",
    description: "Explore level-by-level using a queue (for shortest paths).",
  },
  {
    pattern: "Backtracking",
    description:
      "Try all possible combinations recursively and backtrack when invalid.",
  },
  {
    pattern: "Dynamic Programming (DP)",
    description:
      "Break problem into subproblems and store overlapping results.",
  },
  {
    pattern: "Greedy",
    description:
      "Choose locally optimal decisions for globally optimal results.",
  },
  {
    pattern: "Heap / Priority Queue",
    description: "Find top K elements or dynamically track min/max.",
  },
  {
    pattern: "Graph (Adjacency List / Matrix)",
    description: "Use graph traversal or connectivity algorithms.",
  },
  {
    pattern: "Union Find / Disjoint Set",
    description: "Detect connected components or cycles efficiently.",
  },
  {
    pattern: "Topological Sort",
    description: "Linear ordering of nodes with dependencies (DAG).",
  },
  {
    pattern: "Bit Manipulation",
    description: "Use bitwise operations for optimization or sets.",
  },
  {
    pattern: "Mathematical / Number Theory",
    description: "Problems involving divisibility, primes, or modular math.",
  },
  {
    pattern: "Prefix Sum / Cumulative Sum",
    description: "Precompute cumulative totals for range queries.",
  },
  {
    pattern: "Monotonic Stack / Queue",
    description:
      "Maintain increasing/decreasing stacks for next greater/smaller elements.",
  },
  {
    pattern: "Recursion / Divide and Conquer",
    description: "Split problem recursively and merge results.",
  },
  {
    pattern: "Hashing / Frequency Counting",
    description: "Count or lookup occurrences efficiently using maps.",
  },
  {
    pattern: "Matrix Traversal",
    description:
      "Traverse 2D arrays in specific patterns (spiral, diagonal, etc.).",
  },
  {
    pattern: "Top-K Elements",
    description:
      "Select K smallest/largest elements using heap or quickselect.",
  },
  {
    pattern: "Intervals + Sorting",
    description:
      "Sort and process ranges for scheduling or overlapping problems.",
  },
];

export const problemFields = [
  { name: "title", label: "Title", input: "input", type: "text" },
  {
    name: "leetCodeNo",
    label: "Leetcode Problem Number",
    input: "input",
    type: "number",
  },
  {
    name: "difficultyLevel",
    label: "Difficult Level",
    input: "select",
    type: "text",
  },
  { name: "pattern", label: "Pattern", input: "input", type: "text" },
  {
    name: "timeComplexity",
    label: "Time Complexity",
    input: "input",
    type: "text",
  },
  {
    name: "spaceComplexity",
    label: "Space Complexity",
    input: "input",
    type: "text",
  },
  { name: "idea", label: "Idea", input: "textarea" },
  { name: "steps", label: "Steps", input: "textarea" },
  { name: "code", label: "Code", input: "codeViewer" },
  { name: "otherInfo", label: "Other Information", input: "textarea" },
];

export const difficultLevel = [
  { name: "easy", label: "Easy" },
  { name: "medium", label: "Medium" },
  { name: "hard", label: "Hard" },
];
