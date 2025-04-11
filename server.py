from flask import Flask, request, jsonify, send_from_directory, render_template, flash, redirect, url_for
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__, static_folder='.', static_url_path='')
app.secret_key = os.getenv('SECRET_KEY', 'fallback-secret-key')  # Always use proper secret key

# Ensure directories exist
os.makedirs('logs', exist_ok=True)
os.makedirs('templates', exist_ok=True)
os.makedirs('static/css', exist_ok=True)
os.makedirs('static/js', exist_ok=True)

# Login logging endpoint
@app.route('/log_login', methods=['POST'])
def log_login():
    try:
        print("Request received!")  # Debug line
        data = request.json
        print(f"Received data: {data}")  # Debug line
        
        if not data:
            return jsonify({"status": "invalid_data"}), 400

        log_entry = f"{datetime.now()}|{data.get('username')}|{data.get('rememberMe','false')}\n"
        print(f"Writing log: {log_entry}")  # Debug line

        with open('logs/logins.txt', 'a') as f:
            f.write(log_entry)
            f.flush()  # Force immediate write

        return jsonify({"status": "success"})

    except Exception as e:
        print(f"ERROR: {str(e)}")  # Critical for debugging
        return jsonify({"status": "server_error"}), 500

# Home page
@app.route('/')
def home():
    return send_from_directory('.', 'login.html')

# About page
@app.route('/about')
def about():
    return render_template('about.html', last_updated=datetime.now().strftime("%Y-%m-%d"))

@app.route('/contact')
def contact():
    """Display contact information page"""
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(port=5000, debug=True)