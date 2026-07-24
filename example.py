import sqlite3

def add_todo(title, description=""):
    conn = sqlite3.connect('todos.db')
    conn.execute("INSERT INTO todos (title, description) VALUES (?, ?)", (title, description))
    conn.commit()
    conn.close()
    print(f"✅ Added: {title}")

def show_todos():
    conn = sqlite3.connect('todos.db')
    cursor = conn.execute("SELECT * FROM todos")
    print("\nYour Todos:")
    for row in cursor:
        print(row)
    conn.close()

if __name__ == "__main__":
    add_todo("Finish homework", "Math exercises")
    show_todos()
