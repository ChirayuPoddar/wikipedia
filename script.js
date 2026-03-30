let id = document.querySelector(".id");
let ques = document.querySelector(".ques");
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let d = document.querySelector(".d");
let btn = document.querySelectorAll(".btn");
let start = document.querySelector(".start");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let scard = document.querySelector(".scard");
let replay = document.querySelector(".replay");
let home = document.querySelector(".home");
let timer = document.querySelector(".timer")
let category = document.querySelector(".category");
let difficulty=document.querySelector(".difficulty")

const questions = [
  {
    id: 1,
    category: "JS",
    question: "What is the output of `console.log(typeof NaN)`?",
    options: ["number", "NaN", "undefined", "object"],
    answer: "number",
    difficulty: "medium",
  },
  {
    id: 2,
    category: "WebD",
    question: "Which HTTP method is non-idempotent?",
    options: ["GET", "PUT", "POST", "DELETE"],
    answer: "POST",
    difficulty: "hard",
  },
  {
    id: 3,
    category: "JS",
    question: "Which keyword is used to declare a block-scoped variable?",
    options: ["var", "let", "set", "def"],
    answer: "let",
    difficulty: "easy",
  },
  {
    id: 4,
    category: "WebD",
    question: "In CSS, what does the 'Z-index' property control?",
    options: ["Text size", "Element transparency", "Stack order", "Zoom level"],
    answer: "Stack order",
    difficulty: "easy",
  },
  {
    id: 5,
    category: "JS",
    question: "Which of the following is NOT a primitive data type in JS?",
    options: ["String", "Boolean", "Object", "Symbol"],
    answer: "Object",
    difficulty: "medium",
  },
  {
    id: 6,
    category: "WebD",
    question: "What does semantic HTML mean?",
    options: [
      "Using tags that describe meaning",
      "Using only <div> tags",
      "Writing JS in HTML",
      "Minifying HTML code",
    ],
    answer: "Using tags that describe meaning",
    difficulty: "medium",
  },
  {
    id: 7,
    category: "JS",
    question: "What is 'hoisting' in JavaScript?",
    options: [
      "Moving declarations to the top",
      "Increasing memory",
      "Compressing code",
      "Triggering events",
    ],
    answer: "Moving declarations to the top",
    difficulty: "hard",
  },
  {
    id: 8,
    category: "WebD",
    question: "Which tag is used to link an external CSS file?",
    options: ["<script>", "<style>", "<link>", "<css>"],
    answer: "<link>",
    difficulty: "easy",
  },
  {
    id: 9,
    category: "JS",
    question: "What is the result of `false == '0'`?",
    options: ["true", "false", "undefined", "TypeError"],
    answer: "true",
    difficulty: "hard",
  },
  {
    id: 10,
    category: "WebD",
    question: "What is the default value of the 'position' property in CSS?",
    options: ["absolute", "relative", "fixed", "static"],
    answer: "static",
    difficulty: "medium",
  },
  {
    id: 11,
    category: "DSA",
    question:
      "What is the time complexity of searching in a Hash Table (Average case)?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: "O(1)",
    difficulty: "medium",
  },
  {
    id: 12,
    category: "DSA",
    question: "Which data structure uses LIFO (Last In First Out)?",
    options: ["Queue", "Stack", "Linked List", "Array"],
    answer: "Stack",
    difficulty: "easy",
  },
  {
    id: 13,
    category: "DSA",
    question:
      "Which sorting algorithm has the best worst-case time complexity?",
    options: ["Bubble Sort", "Quick Sort", "Merge Sort", "Selection Sort"],
    answer: "Merge Sort",
    difficulty: "medium",
  },
  {
    id: 14,
    category: "DSA",
    question: "A tree where each node has at most two children is called?",
    options: ["Binary Tree", "B-Tree", "Trie", "Heap"],
    answer: "Binary Tree",
    difficulty: "easy",
  },
  {
    id: 15,
    category: "DSA",
    question: "Which traversal of a BST gives elements in sorted order?",
    options: ["Pre-order", "Post-order", "In-order", "Level-order"],
    answer: "In-order",
    difficulty: "medium",
  },
  {
    id: 16,
    category: "DSA",
    question: "Which data structure is used for Breadth First Search (BFS)?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue",
    difficulty: "medium",
  },
  {
    id: 17,
    category: "DSA",
    question:
      "What is the space complexity of an adjacency matrix for a graph with V vertices?",
    options: ["O(V)", "O(E)", "O(V^2)", "O(V+E)"],
    answer: "O(V^2)",
    difficulty: "hard",
  },
  {
    id: 18,
    category: "DSA",
    question: "Which of these is a stable sorting algorithm?",
    options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
    answer: "Merge Sort",
    difficulty: "hard",
  },
  {
    id: 19,
    category: "DSA",
    question: "What is the height of a balanced binary tree with N nodes?",
    options: ["O(N)", "O(log N)", "O(N log N)", "O(1)"],
    answer: "O(log N)",
    difficulty: "easy",
  },
  {
    id: 20,
    category: "DSA",
    question: "Which pointer is used to implement a circular linked list?",
    options: ["Null pointer", "Tail to Head", "Head to Tail", "Double pointer"],
    answer: "Tail to Head",
    difficulty: "easy",
  },
  {
    id: 21,
    category: "Aptitude",
    question: "A clock shows 3:00. What is the angle between the hands?",
    options: ["45°", "90°", "120°", "180°"],
    answer: "90°",
    difficulty: "easy",
  },
  {
    id: 22,
    category: "Aptitude",
    question: "If 'APPLE' is coded as 'BQQMF', how is 'BANANA' coded?",
    options: ["CBOBOB", "CBPOBO", "CBOPOB", "CBPOBP"],
    answer: "CBOBOB",
    difficulty: "medium",
  },
  {
    id: 23,
    category: "Aptitude",
    question: "What is the next number in the series: 2, 6, 12, 20, 30, ...?",
    options: ["40", "42", "44", "46"],
    answer: "42",
    difficulty: "easy",
  },
  {
    id: 24,
    category: "Aptitude",
    question:
      "A train 150m long passes a pole in 15 seconds. What is its speed?",
    options: ["10 m/s", "15 m/s", "20 m/s", "25 m/s"],
    answer: "10 m/s",
    difficulty: "easy",
  },
  {
    id: 25,
    category: "Aptitude",
    question:
      "If 5 men can build a wall in 10 days, how many days will 10 men take?",
    options: ["20", "15", "5", "2"],
    answer: "5",
    difficulty: "medium",
  },
  {
    id: 26,
    category: "JS",
    question: "What is the use of 'use strict' in JS?",
    options: [
      "Enforces stricter parsing",
      "Speeds up code",
      "Adds new features",
      "Minifies code",
    ],
    answer: "Enforces stricter parsing",
    difficulty: "medium",
  },
  {
    id: 27,
    category: "WebD",
    question: "Which of the following is a CSS preprocessor?",
    options: ["React", "Sass", "Vue", "Node"],
    answer: "Sass",
    difficulty: "easy",
  },
  {
    id: 28,
    category: "DSA",
    question: "What is the worst-case time complexity of Quick Sort?",
    options: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"],
    answer: "O(n^2)",
    difficulty: "medium",
  },
  {
    id: 29,
    category: "JS",
    question: "Which method is used to add an element at the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
    difficulty: "easy",
  },
  {
    id: 30,
    category: "Aptitude",
    question: "Find the odd one out: 27, 64, 81, 125.",
    options: ["27", "64", "81", "125"],
    answer: "81",
    difficulty: "hard",
  },
  {
    id: 31,
    category: "WebD",
    question: "What does DOM stand for?",
    options: [
      "Data Object Model",
      "Document Object Model",
      "Digital Object Mode",
      "Direct Object Management",
    ],
    answer: "Document Object Model",
    difficulty: "easy",
  },
  {
    id: 32,
    category: "JS",
    question: "What will `1 + '1' - 1` result in?",
    options: ["11", "10", "1", "NaN"],
    answer: "10",
    difficulty: "hard",
  },
  {
    id: 33,
    category: "DSA",
    question:
      "Which algorithm is used to find the shortest path in a weighted graph?",
    options: ["Prim's", "Dijkstra's", "Kruskal's", "DFS"],
    answer: "Dijkstra's",
    difficulty: "hard",
  },
  {
    id: 34,
    category: "Aptitude",
    question:
      "The average of three numbers is 20. If two numbers are 15 and 25, what is the third?",
    options: ["20", "25", "30", "10"],
    answer: "20",
    difficulty: "medium",
  },
  {
    id: 35,
    category: "JS",
    question: "Which operator is used for strict equality?",
    options: ["=", "==", "===", "!="],
    answer: "===",
    difficulty: "easy",
  },
  {
    id: 36,
    category: "WebD",
    question: "What is the purpose of the 'alt' attribute in an image tag?",
    options: ["Styling", "Source link", "Alternative text", "Image size"],
    answer: "Alternative text",
    difficulty: "easy",
  },
  {
    id: 37,
    category: "DSA",
    question: "What is the time complexity of pushing an element onto a Stack?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    answer: "O(1)",
    difficulty: "easy",
  },
  {
    id: 38,
    category: "JS",
    question: "Which function is used to parse a string to an integer?",
    options: ["Integer()", "parseStr()", "parseInt()", "toInt()"],
    answer: "parseInt()",
    difficulty: "easy",
  },
  {
    id: 39,
    category: "WebD",
    question: "What does 'Box Sizing: border-box' do?",
    options: [
      "Includes padding/border in width",
      "Removes borders",
      "Floats the box",
      "Makes the box round",
    ],
    answer: "Includes padding/border in width",
    difficulty: "hard",
  },
  {
    id: 40,
    category: "Aptitude",
    question:
      "A person sells an item for $120 making a 20% profit. What was the cost price?",
    options: ["$100", "$90", "$110", "$80"],
    answer: "$100",
    difficulty: "medium",
  },
  {
    id: 41,
    category: "JS",
    question: "What is an IIFE?",
    options: [
      "Internal Function",
      "Immediately Invoked Function Expression",
      "In-line Function",
      "Isolated Function",
    ],
    answer: "Immediately Invoked Function Expression",
    difficulty: "medium",
  },
  {
    id: 42,
    category: "WebD",
    question: "Which tag is used for the largest heading?",
    options: ["<h6>", "<head>", "<heading>", "<h1>"],
    answer: "<h1>",
    difficulty: "easy",
  },
  {
    id: 43,
    category: "DSA",
    question: "Which data structure is best for implementing a priority queue?",
    options: ["Array", "Linked List", "Heap", "Stack"],
    answer: "Heap",
    difficulty: "medium",
  },
  {
    id: 44,
    category: "Aptitude",
    question:
      "How many degrees does the minute hand of a clock turn in 20 minutes?",
    options: ["60°", "120°", "90°", "180°"],
    answer: "120°",
    difficulty: "medium",
  },
  {
    id: 45,
    category: "JS",
    question: "What is the output of `console.log(0.1 + 0.2 === 0.3)`?",
    options: ["true", "false", "undefined", "Error"],
    answer: "false",
    difficulty: "hard",
  },
  {
    id: 46,
    category: "WebD",
    question: "What is a 'Media Query' used for?",
    options: [
      "Playing videos",
      "Responsive design",
      "Database queries",
      "Caching",
    ],
    answer: "Responsive design",
    difficulty: "medium",
  },
  {
    id: 47,
    category: "DSA",
    question: "Which search algorithm requires a sorted array?",
    options: ["Linear Search", "Binary Search", "DFS", "BFS"],
    answer: "Binary Search",
    difficulty: "easy",
  },
  {
    id: 48,
    category: "JS",
    question: "What does the `Map()` function return?",
    options: ["A new array", "The same array", "An object", "A string"],
    answer: "A new array",
    difficulty: "medium",
  },
  {
    id: 49,
    category: "Aptitude",
    question:
      "If a sum of money doubles in 5 years at simple interest, what is the rate?",
    options: ["10%", "20%", "25%", "50%"],
    answer: "20%",
    difficulty: "hard",
  },
  {
    id: 50,
    category: "WebD",
    question: "Which CSS property is used to change text color?",
    options: ["background-color", "text-style", "font-color", "color"],
    answer: "color",
    difficulty: "easy",
  },
  {
    id: 51,
    category: "JS",
    question: "Which of these is used to handle asynchronous code in JS?",
    options: ["Promises", "For loops", "If statements", "CSS"],
    answer: "Promises",
    difficulty: "easy",
  },
  {
    id: 52,
    category: "DSA",
    question: "What is a 'Collision' in a Hash Table?",
    options: [
      "Two keys mapping to same index",
      "Memory leak",
      "Infinite loop",
      "Array index out of bounds",
    ],
    answer: "Two keys mapping to same index",
    difficulty: "medium",
  },
  {
    id: 53,
    category: "WebD",
    question: "Which status code represents 'Not Found'?",
    options: ["200", "404", "500", "301"],
    answer: "404",
    difficulty: "easy",
  },
  {
    id: 54,
    category: "Aptitude",
    question:
      "A is twice as good a workman as B. Together they finish a task in 14 days. How many days for A alone?",
    options: ["21", "28", "42", "14"],
    answer: "21",
    difficulty: "hard",
  },
  {
    id: 55,
    category: "JS",
    question: "What is the purpose of `Object.freeze()`?",
    options: [
      "Deleting an object",
      "Preventing modifications",
      "Copying an object",
      "Freezing the UI",
    ],
    answer: "Preventing modifications",
    difficulty: "medium",
  },
  {
    id: 56,
    category: "DSA",
    question: "Which sort has a best-case O(n) complexity?",
    options: ["Selection Sort", "Quick Sort", "Insertion Sort", "Merge Sort"],
    answer: "Insertion Sort",
    difficulty: "hard",
  },
  {
    id: 57,
    category: "WebD",
    question: "What does SQL stand for?",
    options: [
      "Structured Question Language",
      "Simple Query Language",
      "Structured Query Language",
      "Source Query List",
    ],
    answer: "Structured Query Language",
    difficulty: "easy",
  },
  {
    id: 58,
    category: "Aptitude",
    question: "Complete the pattern: 1, 4, 9, 16, ...",
    options: ["20", "24", "25", "36"],
    answer: "25",
    difficulty: "easy",
  },
  {
    id: 59,
    category: "JS",
    question: "What is 'this' keyword in JS?",
    options: [
      "Refers to the current object",
      "Refers to the previous variable",
      "A loop counter",
      "A reserve word for HTML",
    ],
    answer: "Refers to the current object",
    difficulty: "medium",
  },
  {
    id: 60,
    category: "WebD",
    question: "Which unit is relative to the font-size of the root element?",
    options: ["em", "rem", "px", "vh"],
    answer: "rem",
    difficulty: "medium",
  },
  {
    id: 61,
    category: "DSA",
    question: "A linked list where the last node points back to the first is?",
    options: [
      "Doubly Linked List",
      "Circular Linked List",
      "Singly Linked List",
      "Reverse List",
    ],
    answer: "Circular Linked List",
    difficulty: "easy",
  },
  {
    id: 62,
    category: "JS",
    question: "What is the result of `typeof []`?",
    options: ["array", "object", "list", "undefined"],
    answer: "object",
    difficulty: "medium",
  },
  {
    id: 63,
    category: "Aptitude",
    question:
      "A bag has 3 red and 2 blue balls. Probability of picking a blue ball?",
    options: ["2/5", "3/5", "1/2", "2/3"],
    answer: "2/5",
    difficulty: "easy",
  },
  {
    id: 64,
    category: "WebD",
    question: "Which attribute is used to open a link in a new tab?",
    options: [
      "target='_self'",
      "target='_new'",
      "target='_blank'",
      "href='new'",
    ],
    answer: "target='_blank'",
    difficulty: "medium",
  },
  {
    id: 65,
    category: "DSA",
    question:
      "What is the time complexity of accessing an element in an array by index?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: "O(1)",
    difficulty: "easy",
  },
  {
    id: 66,
    category: "JS",
    question: "Which keyword is used for constants in JS?",
    options: ["constant", "var", "let", "const"],
    answer: "const",
    difficulty: "easy",
  },
  {
    id: 67,
    category: "WebD",
    question: "In the box model, what is outside the border?",
    options: ["Padding", "Margin", "Content", "Outline"],
    answer: "Margin",
    difficulty: "easy",
  },
  {
    id: 68,
    category: "Aptitude",
    question: "If today is Monday, what day will it be in 61 days?",
    options: ["Saturday", "Sunday", "Friday", "Thursday"],
    answer: "Saturday",
    difficulty: "hard",
  },
  {
    id: 69,
    category: "JS",
    question: "What is the value of `null == undefined`?",
    options: ["true", "false", "TypeError", "NaN"],
    answer: "true",
    difficulty: "hard",
  },
  {
    id: 70,
    category: "DSA",
    question: "What is the primary disadvantage of an array?",
    options: ["Slow access", "Fixed size", "High memory", "Complex to use"],
    answer: "Fixed size",
    difficulty: "easy",
  },
  {
    id: 71,
    category: "WebD",
    question: "Which tag is used to create a numbered list?",
    options: ["<ul>", "<li>", "<ol>", "<list>"],
    answer: "<ol>",
    difficulty: "easy",
  },
  {
    id: 72,
    category: "JS",
    question: "What does `Array.prototype.slice()` do?",
    options: [
      "Modifies original array",
      "Returns a shallow copy",
      "Deletes last element",
      "Sorts the array",
    ],
    answer: "Returns a shallow copy",
    difficulty: "medium",
  },
  {
    id: 73,
    category: "Aptitude",
    question: "Ratio of 1 hour to 300 seconds is?",
    options: ["1:12", "12:1", "1:5", "5:1"],
    answer: "12:1",
    difficulty: "medium",
  },
  {
    id: 74,
    category: "DSA",
    question: "Which data structure is used to implement recursion?",
    options: ["Queue", "Stack", "List", "Tree"],
    answer: "Stack",
    difficulty: "medium",
  },
  {
    id: 75,
    category: "WebD",
    question:
      "What is the default value of the 'display' property for a <div>?",
    options: ["inline", "block", "inline-block", "flex"],
    answer: "block",
    difficulty: "easy",
  },
  {
    id: 76,
    category: "JS",
    question:
      "Which of the following is used to check if a property exists in an object?",
    options: ["exists", "has", "in", "within"],
    answer: "in",
    difficulty: "medium",
  },
  {
    id: 77,
    category: "Aptitude",
    question: "Profit = ?",
    options: ["SP - CP", "CP - SP", "SP + CP", "CP / SP"],
    answer: "SP - CP",
    difficulty: "easy",
  },
  {
    id: 78,
    category: "DSA",
    question: "A Graph with no cycles is called a?",
    options: ["Tree", "Clique", "Loop", "Path"],
    answer: "Tree",
    difficulty: "medium",
  },
  {
    id: 79,
    category: "WebD",
    question: "What is 'Hoisting' in CSS?",
    options: [
      "Variable lifting",
      "Specific selector priority",
      "It doesn't exist",
      "Media query order",
    ],
    answer: "It doesn't exist",
    difficulty: "medium",
  },
  {
    id: 80,
    category: "JS",
    question: "What does `NaN` stand for?",
    options: [
      "Not a Number",
      "New array Name",
      "Null and None",
      "Native Arithmetic Node",
    ],
    answer: "Not a Number",
    difficulty: "easy",
  },
  {
    id: 81,
    category: "DSA",
    question: "Which algorithm uses the 'Divide and Conquer' strategy?",
    options: ["Bubble Sort", "Merge Sort", "Linear Search", "Dijkstra"],
    answer: "Merge Sort",
    difficulty: "medium",
  },
  {
    id: 82,
    category: "JS",
    question: "Which event occurs when a user clicks on an element?",
    options: ["onmouseclick", "onclick", "onchange", "onhover"],
    answer: "onclick",
    difficulty: "easy",
  },
  {
    id: 83,
    category: "WebD",
    question: "Which property is used to change the font of an element?",
    options: ["font-family", "font-weight", "text-font", "font-style"],
    answer: "font-family",
    difficulty: "easy",
  },
  {
    id: 84,
    category: "Aptitude",
    question:
      "A shopkeeper gives 10% discount and still makes 20% profit. What is the markup percentage?",
    options: ["33.33%", "25%", "30%", "40%"],
    answer: "33.33%",
    difficulty: "hard",
  },
  {
    id: 85,
    category: "DSA",
    question: "What is the time complexity of Binary Search?",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    answer: "O(log n)",
    difficulty: "easy",
  },
  {
    id: 86,
    category: "JS",
    question: "What will `Boolean('false')` return?",
    options: ["true", "false", "undefined", "Error"],
    answer: "true",
    difficulty: "hard",
  },
  {
    id: 87,
    category: "WebD",
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "styles", "style", "font"],
    answer: "style",
    difficulty: "easy",
  },
  {
    id: 88,
    category: "Aptitude",
    question: "What is the square root of 625?",
    options: ["15", "25", "35", "45"],
    answer: "25",
    difficulty: "easy",
  },
  {
    id: 89,
    category: "DSA",
    question: "In a min-heap, where is the smallest element located?",
    options: ["Root", "Leaf", "Left child", "Right child"],
    answer: "Root",
    difficulty: "easy",
  },
  {
    id: 90,
    category: "JS",
    question: "What is the result of `[] + []` in JavaScript?",
    options: ["[]", "0", "''", "undefined"],
    answer: "''",
    difficulty: "hard",
  },
  {
    id: 91,
    category: "WebD",
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Program Integration",
      "Apple Protocol Index",
      "App Path Internals",
    ],
    answer: "Application Programming Interface",
    difficulty: "medium",
  },
  {
    id: 92,
    category: "Aptitude",
    question: "A car travels at 60 km/hr. How far does it go in 15 minutes?",
    options: ["10km", "15km", "20km", "25km"],
    answer: "15km",
    difficulty: "medium",
  },
  {
    id: 93,
    category: "DSA",
    question:
      "Which data structure adds at one end and removes from the other?",
    options: ["Stack", "Queue", "Array", "Binary Tree"],
    answer: "Queue",
    difficulty: "easy",
  },
  {
    id: 94,
    category: "JS",
    question: "Which method converts a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.toObj()",
      "JSON.convert()",
    ],
    answer: "JSON.parse()",
    difficulty: "medium",
  },
  {
    id: 95,
    category: "WebD",
    question: "What is the 'Viewport' in web design?",
    options: [
      "Visible area of a web page",
      "The browser console",
      "The backend server",
      "A meta tag for SEO",
    ],
    answer: "Visible area of a web page",
    difficulty: "medium",
  },
  {
    id: 96,
    category: "Aptitude",
    question: "If 1st Jan 2024 was Monday, what day is 1st Jan 2025?",
    options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    answer: "Wednesday",
    difficulty: "hard",
  },
  {
    id: 97,
    category: "DSA",
    question: "What is the formula for the load factor of a hash table?",
    options: ["n/m", "m/n", "n*m", "n-m"],
    answer: "n/m",
    difficulty: "hard",
  },
  {
    id: 98,
    category: "JS",
    question: "What is the purpose of the 'debugger' keyword?",
    options: [
      "Stop execution",
      "Fix errors automatically",
      "Speed up code",
      "Clean memory",
    ],
    answer: "Stop execution",
    difficulty: "medium",
  },
  {
    id: 99,
    category: "WebD",
    question: "Which CSS property controls the vertical spacing between lines?",
    options: ["line-height", "letter-spacing", "text-spacing", "word-spacing"],
    answer: "line-height",
    difficulty: "easy",
  },
  {
    id: 100,
    category: "DSA",
    question: "Which of the following is a non-linear data structure?",
    options: ["Array", "Linked List", "Stack", "Graph"],
    answer: "Graph",
    difficulty: "easy",
  },
];

let cnt = 1;
let idx;
let seen = [];
let flag = true;
let score = 0;

function restartTimer() {
  timer.style.animation = "none";
  timer.offsetHeight;
  timer.style.animation = "slider 15s linear forwards";
  timer.style.background = "linear-gradient(to right, #00ff87, #60efff)";
}

function shuffle() {
  let options = [...questions[idx].options];
  options.sort(() => Math.random() - 0.5);
  btn.forEach((ele, i) => {
    ele.innerText = options[i];
  });
}

function check() {
  idx = Math.floor(Math.random() * questions.length);
  if (seen.length === questions.length) {
    seen = [];
  }
  while (seen.includes(idx)) {
    idx = Math.floor(Math.random() * questions.length);
  }
  seen.push(idx);
}

function display() {
  box1.style.opacity = "0";
  btn.forEach((b) => (b.style.pointerEvents = "auto"));
  setTimeout(() => {
    restartTimer();
    check()
    id.innerText = `Question ${cnt} / 10`;
    ques.innerText = questions[idx].question;
    category.innerText = questions[idx].category;
    difficulty.innerText = questions[idx].difficulty;
    shuffle();
    box1.style.opacity = "1";
  }, 150);
}

start.addEventListener("click", () => {
  box2.style.display = "none";
  box1.style.visibility = "visible";
  display();
});

function isIncorrectAuto() {
  btn.forEach((ele) => {
    if (ele.innerText == questions[idx].answer) {
      ele.classList.add("correct");
    }
  });
}

function scoreCard() {
  box1.style.visibility = "hidden";
  box3.style.display = "block";
  scard.innerText = `You got ${score} out of 10 correct 🥳`;
}

function delay() {
  setTimeout(() => {
    btn.forEach((ele) => {
      ele.classList.remove("correct", "wrong");
      ele.style.pointerEvents = "auto";
    });
    if (cnt < 10) {
      cnt++;
      display();
    } else {
      scoreCard(score);
    }
    flag = true;
  }, 1000);
}

timer.addEventListener("animationend", () => {
  if (!flag) return;
  btn.forEach((b) => (b.style.pointerEvents = "none"));
  flag = false;
  timer.style.background = "#f87171";
  isIncorrectAuto();
  delay();
});

function isCorrect(element) {
  score++;
  element.classList.add("correct");
}

function isIncorrect(element) {
  element.classList.add("wrong");
  btn.forEach((ele) => {
    if (ele.innerText == questions[idx].answer) {
      ele.classList.add("correct");
    }
  });
}

btn.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (flag) {
      flag = false;
      timer.style.animation = "none";
      btn.forEach((b) => (b.style.pointerEvents = "none"));
      e.target.innerText == questions[idx].answer
        ? isCorrect(e.target)
        : isIncorrect(e.target);
      delay();
    }
  });
});

replay.addEventListener("click", () => {
  cnt = 1;
  flag = true;
  score = 0;
  seen.length = 0;
  box3.style.display = "none";
  box1.style.visibility = "visible";
  timer.style.animation = "none";
  timer.offsetHeight;
  display();
});

home.addEventListener("click", () => {
  cnt = 1;
  flag = true;
  score = 0;
  seen.length = 0;
  box3.style.display = "none";
  box1.style.visibility = "hidden";
  box2.style.display = "flex";
  box1.style.opacity = "1";
});