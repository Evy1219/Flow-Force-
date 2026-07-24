CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'pending',
    priority INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    due_date DATE
);

INSERT OR IGNORE INTO todos (title, description, status, priority) VALUES 
    ('Learn SQLite', 'Complete this tutorial', 'pending', 3),
    ('Buy milk', NULL, 'pending', 2);
