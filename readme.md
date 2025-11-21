# Day 48 Task | Cohort 2.0

This project is my **Day 48 Task**, where I built a fully interactive **Virtual Piano** using **HTML, CSS, and JavaScript**.
The piano responds to both **keyboard presses** and **mouse clicks**, plays actual sound files, highlights keys, and shows which key was pressed.

This task helped me understand **event handling**, **audio control**, **DOM mapping**, and how to simulate real musical instruments using web technologies.

## 🎥 Demo

Here is a quick demo of the project:

![Demo GIF](./assets/demo.gif)

## 📌 About the Day 48 Task

Day 48 focused on creating a realistic **virtual piano**, where I learned how to:

* Map **keyboard keys → piano keys**
* Play different **audio files** for each key
* Handle both **keydown** and **click** events
* Highlight pressed keys dynamically
* Display the **pressed key** inside the piano
* Work with **z-index**, **animations**, and **DOM traversal**
* Use JavaScript objects as **key–sound maps** and **key–div maps**

This helped me understand how real digital pianos and music apps detect input and play mapped audio.


## ✨ Task Features

| Feature                              | Description                                                 |
| ------------------------------------ | ----------------------------------------------------------- |
| 🎹 **21 White Keys + 15 Black Keys** | Full interactive piano layout.                              |
| ⌨️ **Keyboard Input Support**        | Keys like A, S, D, Q, W, E play the piano.                  |
| 🖱️ **Mouse Click Support**          | Clicking white/black keys plays sound.                      |
| 🔊 **Mapped Audio System**           | Each key has its own `.mp3` piano note.                     |
| 💡 **Pressed Key Indicator**         | Shows the pressed keyboard letter inside the key.           |
| 💭 **Key Highlighting**              | Light-blue flash effect while playing.                      |
| ⬆️ **Realistic Key Behavior**        | White keys move behind black keys on press (z-index logic). |
| 🔄 **Reusable Mapping System**       | Uses `sounds{}` + `keyMap{}` for clean logic.               |
| 🎯 **Accurate Piano Layout**         | Black keys placed exactly like a real piano pattern.        |

## 🛠️ Technologies Used

* **HTML** – Piano structure & keys
* **CSS** – Styling, positioning, key layout, animations
* **JavaScript (ES6)** – Event handling, sound mapping, key logic
* **Audio Files** – 63 different `.mp3` notes
* **VS Code** – Development environment


## 📖 Learning Outcome

By completing this task, I learned:

* How to detect keyboard and mouse events
* How to attach sounds using the `Audio()` constructor
* How to map multiple keys using JavaScript objects
* How DOM traversal works with `.closest()`
* How to change styles dynamically with JavaScript
* How z-index layering works in real-world UIs
* How to build responsive interactive components

This task improved my skills in **JavaScript interaction**, **audio APIs**, and **dynamic UI effects**.

## 🌟 Acknowledgement

This Day 48 task helped me understand how interactive applications like **virtual instruments, games, music apps**, and **soundboards** work.
Thank you to **Cohort 2.0** for helping me learn by building fun and creative projects.

---