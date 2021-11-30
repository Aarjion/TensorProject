from flask.templating import render_template
import psycopg2
from psycopg2 import Error

from flask import Flask, jsonify
from flask_cors import CORS

DEBUG = True

app = Flask(__name__)
app.config.from_object(__name__)

CORS(app)
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/registration')
def reg():
    return 'reg'

if __name__ == '__main__':
    app.run()

try:
    # Подключение к существующей базе данных
    connection = psycopg2.connect(user="postgres",
                                  # пароль, который указали при установке PostgreSQL
                                  password="7105",
                                  host="127.0.0.1",
                                  port="5432",
                                  database="tensor")

    # Курсор для выполнения операций с базой данных
    cursor = connection.cursor()
    # SQL-запрос для создания новой таблицы
    # insert_query = """ INSERT INTO mobile (ID, MODEL, PRICE) VALUES (1, 'Iphone12', 1100)"""
    # cursor.execute(insert_query)
    # connection.commit()
    # print("1 запись успешно вставлена")
    # Получить результат
    cursor.execute("SELECT * from materials WHERE id > 5")
    record = cursor.fetchall()
    print("Результат", record)


except (Exception, Error) as error:
    print("Ошибка при работе с PostgreSQL", error)
finally:
    if connection:
        cursor.close()
        connection.close()
        print("Соединение с PostgreSQL закрыто")