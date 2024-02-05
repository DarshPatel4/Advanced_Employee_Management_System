# app.py
from flask import Flask, render_template, request, redirect, url_for
import mysql.connector

app = Flask(__name__)

# MySQL Database Configuration
db = mysql.connector.connect(
    host="localhost",
    user="your_username",
    password="your_password",
    database="employee_management"
)

cursor = db.cursor()

@app.route('/')
def index():
    return render_template('index.html')

# Add more routes for handling employee-related operations (view, add, edit, delete)

if __name__ == '__main__':
    app.run(debug=True)
    