from utils.db import db
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
import uuid
"""
This file we have all the Classes of the program
"""


class Book(db.Model):
    """Create Book class inheritance from db.Model where
    we are going to instanciate id, title, author and read"""

    id = db.Column(db.String(100), primary_key=True)
    title = db.Column(db.String(250), nullable=False)
    author = db.Column(db.String(100), nullable=False)
    read = db.Column(db.Boolean, default=False, nullable=False)

    def __init__(self, title, author, read):
        self.id = uuid.uuid4().hex
        self.title = title
        self.author = author
        self.read = read


class BookSchema(SQLAlchemyAutoSchema):
    class Meta:
        fields = ("id", "title", "author", "read")


book_schema = BookSchema()
books_schema = BookSchema(many=True)
