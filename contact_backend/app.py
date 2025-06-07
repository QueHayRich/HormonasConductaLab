from flask import Flask, request, jsonify
import smtplib
from email.message import EmailMessage
import os

from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)

EMAIL_ADDRESS = os.getenv("GMAIL_USER")
EMAIL_PASSWORD = os.getenv("GMAIL_PASS")

@app.route("/contact", methods=["POST"])
def contact():
    data = request.json
    msg = EmailMessage()
    msg["Subject"] = f"Mensaje de {data['nombre']}: {data['asunto']}"
    msg["From"] = EMAIL_ADDRESS
    msg["To"] = EMAIL_ADDRESS
    msg.set_content(f"""
Nombre: {data['nombre']}
Correo: {data['email']}
Institución: {data.get('institucion', '')}
Mensaje:
{data['mensaje']}
    """)

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            smtp.send_message(msg)
        return jsonify({"success": True})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500
