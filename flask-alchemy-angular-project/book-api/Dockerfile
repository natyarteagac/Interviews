FROM python:3.8.10-slim-buster

EXPOSE 5000

WORKDIR /home/app

COPY . .

RUN pip3 install -r requirements.txt && pip3 install cryptography

CMD ["python3", "index.py"]
