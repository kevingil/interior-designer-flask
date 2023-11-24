from flask import Flask
from flask_cors import CORS
from flask_sslify import SSLify
from .routes.api import api

app = Flask(__name__)
CORS(app)
sslify = SSLify(app)

app.register_blueprint(api, url_prefix='/api')
