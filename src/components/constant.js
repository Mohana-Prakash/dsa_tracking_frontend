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

const difficultLevel = [
  { meaning: "easy", notation: "Easy" },
  { meaning: "medium", notation: "Medium" },
  { meaning: "hard", notation: "Hard" },
];

const TIME_COMPLEXITIES = [
  {
    notation: "Constant - O(1)",
    meaning: "O(1)",
  },
  {
    notation: "Logarithmic - O(log n)",
    meaning: "O(log n)",
  },
  {
    notation: "Linear - O(n)",
    meaning: "O(n)",
  },
  {
    notation: "Linearithmic - O(n log n)",
    meaning: "O(n log n)",
  },
  {
    notation: "Quadratic - O(n²)",
    meaning: "O(n²)",
  },
  {
    notation: "Cubic - O(n³)",
    meaning: "O(n³)",
  },
  {
    notation: "Exponential - O(2ⁿ)",
    meaning: "O(2ⁿ)",
  },
  {
    notation: "Factorial - O(n!)",
    meaning: "O(n!)",
  },
];

const SPACE_COMPLEXITIES = [
  {
    notation: "Constant - O(1)",
    meaning: "O(1)",
  },
  {
    notation: "Logarithmic - O(log n)",
    meaning: "O(log n)",
  },
  {
    notation: "Linear - O(n)",
    meaning: "O(n)",
  },
  {
    notation: "Quadratic - O(n²)",
    meaning: "O(n²)",
  },
];

export const ProblemFields = [
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
    options: difficultLevel,
  },
  { name: "pattern", label: "Pattern", input: "input", type: "text" },
  {
    name: "timeComplexity",
    label: "Time Complexity",
    input: "select",
    type: "text",
    options: TIME_COMPLEXITIES,
  },
  {
    name: "spaceComplexity",
    label: "Space Complexity",
    input: "select",
    type: "text",
    options: SPACE_COMPLEXITIES,
  },
  { name: "idea", label: "Idea", input: "textarea" },
  { name: "steps", label: "Steps", input: "textarea" },
  { name: "code", label: "Code", input: "codeViewer" },
  { name: "otherInfo", label: "Other Information", input: "textarea" },
];
