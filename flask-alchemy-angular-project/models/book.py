from utils.db import db
from flask_marshmallow import Marshmallow
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema


class Book(db.Model):
    """Create the Principal class"""

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250))
    author = db.Column(db.String(100))
    read = db.Column(db.Boolean, default=False, nullable=False)

    def __init__(self, title, author, read):
        self.title = title
        self.author = author
        self.read = read


class BookSchema(SQLAlchemyAutoSchema):
    class Meta:
        fields = ("id", "title", "author", "read")


book_schema = BookSchema()
books_schema = BookSchema(many=True)
