import sqlite3

conn = sqlite3.connect('todos.db')
with open('schema.sql', 'r') as f:
    conn.executescript(f.read())
conn.commit()
conn.close()

print("✅ Todo database created successfully!")
