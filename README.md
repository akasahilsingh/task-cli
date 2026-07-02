# Task CLI

A simple and lightweight command-line interface (CLI) application for managing your daily tasks. Built with Node.js, this tool allows you to create, view, and update tasks with ease.

---

## 📋 Table of Contents

- [Task CLI](#task-cli)
  - [📋 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [📦 Prerequisites](#-prerequisites)
  - [🚀 Installation](#-installation)
  - [📖 Usage](#-usage)
    - [Add a Task](#add-a-task)
    - [List All Tasks](#list-all-tasks)
    - [Update a Task](#update-a-task)
  - [📁 Project Structure](#-project-structure)
  - [🗂️ Data Format](#️-data-format)
  - [💡 Examples](#-examples)
    - [Example 1: Create a Daily Task List](#example-1-create-a-daily-task-list)
    - [Example 2: Update an Incorrect Task](#example-2-update-an-incorrect-task)
    - [Example 3: View All Tasks](#example-3-view-all-tasks)
  - [🔮 Future Enhancements](#-future-enhancements)
  - [🤝 Contributing](#-contributing)
  - [📄 License](#-license)
  - [📧 Support](#-support)
  - [🙏 Acknowledgments](#-acknowledgments)

---

## ✨ Features

- **Add Tasks**: Create new tasks with automatic ID assignment and timestamps
- **List Tasks**: View all tasks stored in the system
- **Update Tasks**: Modify existing task descriptions
- **Persistent Storage**: Tasks are stored in a JSON file for easy access and backup
- **Timestamps**: Automatic creation and update timestamps for tracking
- **Simple CLI Interface**: Intuitive command-based interaction

---

## 📦 Prerequisites

- Node.js (v12 or higher)
- npm (comes with Node.js)

---

## 🚀 Installation

1. Clone or download this repository:
   ```bash
   git clone <repository-url>
   cd task-cli
   ```

2. Install dependencies (if any):
   ```bash
   npm install
   ```

---

## 📖 Usage

Run the CLI with the following commands:

### Add a Task

Add a new task to your task list.

**Command:**
```bash
npm start add <task description>
```

**Example:**
```bash
npm start add Study Node.js for 2 hours
npm start add Buy milk and eggs
npm start add Complete project documentation
```

**Output:**
```
Task added successfully (ID: 8)
```

---

### List All Tasks

Display all tasks currently stored in the system.

**Command:**
```bash
npm start list
```

**Output:**
```
[
  {
    "id": 1,
    "task": "Study 2 hrs",
    "completed": false,
    "createdAt": "2026-07-02T08:37:30.969Z",
    "updatedAt": "2026-07-02T08:37:30.969Z"
  },
  {
    "id": 2,
    "task": "Buy me milk",
    "completed": false,
    "createdAt": "2026-07-02T08:37:48.440Z",
    "updatedAt": "2026-07-02T08:37:48.441Z"
  }
]
All tasks listed
```

---

### Update a Task

Modify an existing task description by its ID.

**Command:**
```bash
npm start update <task-id> <new description>
```

**Example:**
```bash
npm start update 1 Study Node.js and Express for 3 hours
npm start update 5 Buy organic milk and eggs
```

**Output:**
```
id 1 task is updated successfully
```

---

## 📁 Project Structure

```
task-cli/
├── package.json          # Project metadata and scripts
├── task-cli.js          # Main CLI application file
├── task.json            # Task storage file (auto-generated)
└── README.md            # This file
```

**Files:**
- **package.json**: Contains project configuration, dependencies, and npm scripts
- **task-cli.js**: Core application logic handling CLI commands
- **task.json**: JSON file storing all tasks (created automatically on first task addition)
- **README.md**: Documentation and usage guide

---

## 🗂️ Data Format

Tasks are stored in `task.json` with the following structure:

```json
[
  {
    "id": 1,
    "task": "Task description",
    "completed": false,
    "createdAt": "2026-07-02T08:37:30.969Z",
    "updatedAt": "2026-07-02T08:37:30.969Z"
  }
]
```

**Fields:**
- **id**: Unique identifier for each task (auto-incremented)
- **task**: The task description or content
- **completed**: Boolean flag indicating task completion status
- **createdAt**: Timestamp when the task was created
- **updatedAt**: Timestamp when the task was last modified

---

## 💡 Examples

### Example 1: Create a Daily Task List

```bash
npm start add Wake up early
npm start add Drink water
npm start add Exercise for 30 minutes
npm start add Study Node.js
npm start add list
```

### Example 2: Update an Incorrect Task

```bash
# Task ID 3 has a typo
npm start add Buy chicke

# Update it with correct description
npm start update 3 Buy chicken and vegetables
```

### Example 3: View All Tasks

```bash
npm start list
```

---

## 🔮 Future Enhancements

Potential features to improve the application:

- **Delete Tasks**: Remove completed or unwanted tasks
- **Mark as Complete**: Toggle task completion status
- **Priority Levels**: Add priority classification (High, Medium, Low)
- **Due Dates**: Set and track task deadlines
- **Categories/Tags**: Organize tasks by category
- **Search/Filter**: Find tasks by keyword or status
- **Bulk Operations**: Perform actions on multiple tasks at once
- **Data Export**: Export tasks to CSV or other formats
- **Task Statistics**: Show completion rate and productivity metrics
- **Colored Output**: Enhanced terminal UI with colors and formatting
- **Config File**: User preferences and customization options
- **API Integration**: Sync tasks with cloud storage

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 📧 Support

For issues, suggestions, or questions:
- Open an issue on the repository
- Check existing documentation
- Review the code comments for additional details

---

## 🙏 Acknowledgments

Built as a learning project to understand Node.js CLI development, file operations, and JSON data management.

---

**Happy Task Managing! 🎯**
