import sqlite3
import migrations

con = sqlite3.connect("pokemon.sql")
cur = con.cursor()
cur.execute("")