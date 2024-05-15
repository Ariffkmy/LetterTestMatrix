let lastSelectedFile;

function updateContent(message) {
  const contentHeading = document.getElementById('content-heading');
  const uploadSection = document.getElementById('upload-section');
  const fileDisplaySection = document.getElementById('file-display-section');

  if (message === 'Single File Upload') {
    uploadSection.style.display = "block";
    if (lastSelectedFile) {
      fileDisplaySection.style.display = "block";
    } else {
      fileDisplaySection.style.display = "none";
    }
  } else {
    uploadSection.style.display = "none";
    fileDisplaySection.style.display = "none";
  }

  contentHeading.textContent = message;
}

function uploadSingleFile() {
  updateContent('Single File Upload');
}

function uploadFile() {
  var fileInput = document.getElementById('file-upload');
  var file = fileInput.files[0];
  lastSelectedFile = file;
  var reader = new FileReader();
  reader.onload = function(e) {
    var content = e.target.result;
    console.log(content);
  }
  reader.readAsText(file);
}

function clearUploadFile() {
  document.getElementById('file-upload').value = '';
  document.getElementById('file-display-section').textContent = '';
  document.getElementById('file-display-section').style.display = "none";
  lastSelectedFile = null;
}

function displayFileContent() {
  var fileInput = document.getElementById('file-upload');
  if (fileInput.files.length > 0) {
    uploadFile();
  }
}


function testnow() {
  var fileInput = document.getElementById('file-upload');
  var file = fileInput.files[0];
  console.log('test now clicked');

  var formData = new FormData();
  formData.append("file", file);

  fetch('http://127.0.0.1:5000/process-xml', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      console.log('File sent and read successfully');
    } else {
      console.log('Error: ' + response.statusText);
    }
  })
  .catch(error => console.error('Error:', error));
}