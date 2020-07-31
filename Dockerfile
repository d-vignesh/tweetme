#Base image
FROM python:3-slim

# create and set working directory
RUN mkdir /app
WORKDIR /app

# add current directory code to working directory
ADD . /app/

# set default environment vairables
ENV PYTHONUNBUFFERED 1

# install packages in requirements.txt
RUN pip install -r requirements.txt

# make migrations
CMD python manage.py makemigrations
CMD python manage.py migrate

# start the app
CMD gunicorn tweetme.wsgi:application --bind :8000
