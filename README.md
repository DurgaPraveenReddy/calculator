Final project in TOP foundations course.

# Rculator 🧮
**A Sleek, Logic-Driven Calculator Project by RDP**

Rculator is a modern web-based calculator that blends a sophisticated **Neumorphic design** with a robust mathematical engine. Built with a focus on clean code and user experience, it handles complex operator precedence (order of operations) using a custom stack-based implementation of the Shunting-Yard logic.

---

## ✨ Features

- **Neumorphic UI**: A tactile, "soft-3D" interface that provides visual feedback on clicks and keyboard presses.
- **Smart Logic Engine**: Correctly evaluates expressions using mathematical order of operations (e.g., `2 + 3 * 4 = 14`).
- **Full Keyboard Support**: Map physical keys (`Enter`, `Backspace`, `Escape`, and `Operators`) directly to calculator functions.
- **Precision Control**: Automatically handles floating-point arithmetic to prevent long decimal errors.
- **Error Handling**: Includes safeguards against division by zero and multiple decimal point entries.

---

## 🛠️ Built With

- **HTML5**: Semantic markup for structure.
- **CSS3**: Advanced styling featuring custom shadows, transitions, and flexbox layouts.
- **Vanilla JavaScript (ES6)**: Custom logic engine built without external libraries or the `eval()` function.

---

## 🧠 Technical Insight: How it Works

Unlike basic calculators that solve equations strictly from left to right, **Rculator** utilizes a stack-based evaluation process:

1. **Tokenization**: The input string is parsed into numbers and operators.
2. **Operator Precedence**: A hierarchy is defined where `*` and `/` have higher priority than `+` and `-`.
3. **The Stacks**: 
    - A **Value Stack** stores the numbers.
    - An **Operator Stack** stores operations until they are ready to be executed based on their precedence.
4. **Final Evaluation**: The stacks are processed until a single final result remains on the value stack.

---

## ⌨️ Keyboard Mapping

| Key | Action |
| :--- | :--- |
| **0 - 9** | Input Numbers |
| **+ - * /** | Mathematical Operations |
| **.** | Decimal Point |
| **Enter** | Equals / Calculate |
| **Backspace** | Delete Last Entry |
| **Escape** | Clear All (CLR) |