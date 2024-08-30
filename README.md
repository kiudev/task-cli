<p align="center">
    <h1 align="center">TASK-CLI</h1>
</p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
</p>
<hr>

## Quick Links

> - [ Repository Structure](#-repository-structure)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Tests](#-tests)
>     - [Add task](#add-task)
>     - [Updated task](#updated-task)
>     - [Delete task](#delete-task)
>     - [Mark task in progress](#mark-task-in-progress)
>     - [Mark task done](#mark-task-done)
>     - [List all tasks](#list-all-tasks)
>     - [List done tasks](#list-done-tasks)
>     - [List in progress tasks](#list-in-progress-tasks)

## Repository Structure

```sh
└── task-cli/
    ├── README.md
    ├── add.js
    ├── delete.js
    ├── list.js
    ├── mark-done.js
    ├── mark-in-progress.js
    ├── read-tasks.js
    └── tasks.json
```

## Getting Started

**_Requirements_**

Ensure you have the following dependencies installed on your system:

- **Node.js**: `version 20.17.0`

### Installation

1. Clone the Task-CLI repository:

```sh
git clone https://github.com/kiudev/task-cli
```

2. Change to the project directory:

```sh
cd task-cli
```

3. Install the dependencies:

```sh
npm install
```

### Tests

The list of commands available in the CLI are:

#### Add task

```sh
node add "Add a new task"
```

#### Updated task

```sh
node update 1 "Update task"
```

#### Delete task

```sh
node delete 1
```

#### Mark task in progress

```sh
node mark-in-progress 1
```

#### Mark task done

```sh
node mark-done 1
```

#### List all tasks

```sh
node list
```

#### List done tasks

```sh
node list done
```

#### List in progress tasks

```sh
node list in-progress
```

---
