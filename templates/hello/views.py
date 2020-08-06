from flask import render_template, Blueprint

hello_blueprint = Blueprint('hello',__name__)
@hello_blueprint.route('/')
@hello_blueprint.route('/hello')
def index():
    return render_template("index.html")

@hello_blueprint.route('/mother')
def mother():
    return render_template("mother.html")

@hello_blueprint.route('/3d_viewer')
def vtkViewer():
    return render_template("index.html", path="../../../public/data_object.vti")
