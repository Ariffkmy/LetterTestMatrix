from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/process-xml', methods=['POST'])
def process_xml():
    file = request.files.get('file')
    if file:
        # You can read the file and process it as needed here
        content = file.read().decode('utf-8')
        print(content)
        return {'message': 'File received and read successfully'}, 200
    else:
        return {'message': 'No file received'}, 400

if __name__ == '__main__':
    app.run(debug=True)