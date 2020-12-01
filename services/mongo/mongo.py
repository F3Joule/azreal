import os
import json
from flask import Flask, request, make_response, jsonify
from dotenv import load_dotenv
from pymongo import MongoClient
from bson.objectid import ObjectId
from gridfs import GridFS
from flask_cors import CORS

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
if os.path.exists(dotenv_path):
    load_dotenv(dotenv_path)

app = Flask(__name__)
CORS(app)
port = os.getenv('PORT')

mongo_client = MongoClient(os.getenv('MONGO_HOSTNAME'))
db = mongo_client['files']
grid_fs = GridFS(db)

@app.route("/add", methods=["POST"])
def add_files():
    user_file = request.files['file']
    if user_file is not None:
        with grid_fs.new_file(filename=user_file.filename, content_type=user_file.mimetype) as fp:
            fp.write(user_file.read())
            file_id = fp._id

        if grid_fs.find_one(file_id) is not None:
            return json.dumps({'status': 'File saved successfully', 'id': str(file_id) }), 200
        else:
            return json.dumps({'status': 'Error occurred while saving file.'}), 500
    else:
        return json.dumps({'status': 'File in request is not found'}), 400

@app.route("/get/<file_id>", methods=["GET"])
def get_file(file_id):
    file = grid_fs.get(ObjectId(file_id))
    if file is not None:
        response = make_response(file.read())
        response.headers['Content-Type'] = file.content_type
        response.headers["Content-Disposition"] = "attachment; filename={}".format(file.filename)
        return response
    else: 
        return {'status': 'File is not found'}, 404

@app.route("/delete/<file_id>", methods=["DELETE"])
def delete_file(file_id):
    grid_fs.delete(ObjectId(file_id))
    return {'status': 'File delete successfully'}, 200

if __name__ == '__main__':
    app.run(debug=True, port=port)
