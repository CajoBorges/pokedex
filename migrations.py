import sqlite3
def migrations(path):
    con = sqlite3.connect(path)
    cur = con.cursor()
    cur.execute()