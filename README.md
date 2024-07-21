# Task-Management-App
The Task Management App is a comprehensive tool designed to help users efficiently manage their tasks. Built with a FastAPI backend and a React frontend using Vite, this application provides a seamless and responsive user experience for tracking and organizing tasks.

## Key Features

- Retrieve all tasks
- Create a new task
- Update a task's status
- Delete a task

## Backend Requirements

- Python 3.7+
- SQLite (for local development)
- FastAPI
- SQLAlchemy
- Uvicorn (for development server)

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Create and activate a virtual environment**:

    ```bash
    python -m venv env
    source env/bin/activate  # On Windows, use `env\Scripts\activate`
    ```

3. **Install the required packages**:

    ```bash
    pip install fastapi uvicorn sqlalchemy pydantic
    ```
    or
   ```bash
   pip install -r requirements.txt
   ```

5. **Run the FastAPI server over the local environment**:

    ```bash
    python main.py runserver 127.0.0.1:3001
    ```
    or
   ```bash
   uvicorn main:app --host 0.0.0.0 --port 3001
   ```

## Usage

### Retrieve all tasks

- **Endpoint**: `/api/tasks`
- **Method**: `GET`
- **Response**: List of tasks

### Create a new task

- **Endpoint**: `/api/tasks`
- **Method**: `POST`
- **Body**:
    ```json
    {
        "title": "Task Title",
        "description": "Task Description",
        "status": "todo"
    }
    ```
- **Response**: Created task

### Update a task's status

- **Endpoint**: `/api/tasks/{task_id}`
- **Method**: `PUT`
- **Body**:
    ```json
    {
        "status": "in_progress"
    }
    ```
- **Response**: Updated task

### Delete a task

- **Endpoint**: `/api/tasks/{task_id}`
- **Method**: `DELETE`
- **Response**: `204 No Content`


## Requirements

- Node.js (version 14.x or above)
- npm or yarn

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install the dependencies**:

    ```bash
    npm install
    ```

    Or if you prefer yarn:

    ```bash
    yarn install
    ```

## Development

To start the development server:

```bash
npm run dev
```

Or if you prefer yarn:
```bash
yarn dev
```
