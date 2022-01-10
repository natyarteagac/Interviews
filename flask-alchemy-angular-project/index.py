from app import app
from utils.db import db
from flask_cors import CORS

CORS(app, resources={r"/api/v1/*": {"originis": '0.0.0.0'}})

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
