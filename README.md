# To-Do List App

A simple and interactive React-based To-Do List application with the ability to **add**, **delete**, **move tasks up/down**, and **save/load tasks in JSON format**.

## Features
- 📌 **Add Tasks**: Enter a task and click submit to add it to the list.
- ❌ **Delete Tasks**: Remove tasks from the list.
- ⬆️ **Move Up**: Reorder tasks by moving them up.
- ⬇️ **Move Down**: Reorder tasks by moving them down.
- 💾 **Save to JSON**: Download your tasks as a JSON file.
- 📂 **Upload JSON**: Load tasks from a previously saved JSON file.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/todo-list-app.git
   ```
2. Navigate into the project folder:
   ```sh
   cd todo-list-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage
1. Start the development server:
   ```sh
   npm start
   ```
2. Open **http://localhost:3000/** in your browser.
3. Start adding, moving, deleting, and saving your tasks!

## File Structure
```
📂 todo-list-app
├── 📂 src
│   ├── 📂 components
│   │   ├── header.js
│   │   ├── inputField.js
│   │   ├── list.js
│   │   ├── submitBtn.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
├── 📄 package.json
├── 📄 README.md
```

## How It Works
### **Adding Tasks**
- Type a task into the input field and press **Submit**.

### **Deleting a Task**
- Click the ❌ button next to a task.

### **Reordering Tasks**
- Use the ⬆️ and ⬇️ buttons to move tasks up or down.

### **Saving Tasks to JSON**
- Click **"Save to JSON"** to download your list as a `.json` file.

### **Loading Tasks from JSON**
- Click **"Upload JSON"**, select a previously saved `.json` file, and it will populate the list.

## Example JSON File Format
```json
[
  "Buy groceries",
  "Finish project",
  "Call mom"
]
```

## Technologies Used
- ⚛ **React.js** – UI framework
- 🎨 **CSS** – Styling
- 📝 **JavaScript (ES6+)** – Logic and functionality
