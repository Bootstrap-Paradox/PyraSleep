from Sleep_Calculator import app

from flask import request, render_template, redirect, url_for, flash


@app.route('/')
@app.route('/home')
def home():
    # flash('Note - Webpage might be Buggy', "success")
    return render_template('home.html', title="Home")

@app.route('/about')
def about():
    return render_template('about.html', title='About')


@app.route('/sleep/calculate')
def sleep_calculate():
    return render_template('sleep/calculate.html', title='Calculate')


@app.route('/sleep/information')
def sleep_information():
    return render_template('sleep/information.html', title='Information')
