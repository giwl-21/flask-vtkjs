from flask import render_template, Blueprint

hello_blueprint = Blueprint('hello',__name__)
@hello_blueprint.route('/')
@hello_blueprint.route('/hello')
def index():
    path = '../../../public/data_object.vti'
    return render_template("index.html", path = path)