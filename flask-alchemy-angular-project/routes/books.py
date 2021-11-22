from flask import Blueprint, render_template, request, redirect, url_for, flash, jsonify
from models.book import Book
from utils.db import db
from models.book import book_schema, books_schema

books = Blueprint("books", __name__)


@books.route("/", strict_slashes=False)
def index():
    """API with all database information"""
    all_books = Book.query.all()
    results = books_schema.dump(all_books)
    return jsonify(results)


@books.route("/new", methods=["POST"], strict_slashes=False)
def new_book():
    """Method to create a new book in database"""
    title = request.json["title"]
    author = request.json["author"]
    if request.json["read"] == "Yes":
        user_answer = True
    else:
        user_answer = False
    new_book = Book(title=title, author=author, read=user_answer)
    db.session.add(new_book)
    db.session.commit()
    dump_data = book_schema.dump(new_book)
    return dump_data


@books.route("/update/<id>", methods=["GET", "POST"], strict_slashes=False)
def update_book(id):
    """Method to create a edit the book information"""
    book = Book.query.get(id)
    title = request.json["title"]
    author = request.json["author"]
    if request.json["read"] == "Yes":
        user_answer = True
    else:
        user_answer = False
    book.title = title
    book.author = author
    book.read = user_answer

    db.session.commit()
    updated_data = book_schema.dump(book)
    return updated_data


@books.route("/delete", strict_slashes=False)
def delete_book():
    """Method to delete the book"""
    return "I am going to delete you"
