import { Storage } from '@aws-amplify/storage';
import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setError('');
    setSuccess(false);
    setProgress(0);
  };

  const uploadFile = async () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    try {
      await Storage.put(file.name, file, {
        key: file.name,  // Explicitly set the key parameter
        progressCallback(uploadProgress) {
          const currentProgress = (uploadProgress.loaded / uploadProgress.total) * 100;
          setProgress(currentProgress);
        },
        contentType: file.type,
        metadata: {
          fileName: file.name,
          fileType: file.type
        }
      });
      setSuccess(true);
      setFile(null);
      // Reset file input
      document.getElementById('file-upload').value = '';
    } catch (err) {
      console.error('Error uploading file:', err);
      setError('Error uploading file. Please try again.');
    }
  };

  return (
    <div className="file-upload-container">
      <h2>File Upload</h2>
      <div className="upload-form">
        <input
          type="file"
          id="file-upload"
          onChange={handleFileChange}
          className="file-input"
        />
        <button 
          onClick={uploadFile}
          className="upload-button"
          disabled={!file}
        >
          Upload
        </button>
      </div>

      {progress > 0 && progress < 100 && (
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
          <span className="progress-text">{Math.round(progress)}%</span>
        </div>
      )}

      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">File uploaded successfully!</p>}

      <style jsx>{`
        .file-upload-container {
          max-width: 500px;
          margin: 2rem auto;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        h2 {
          margin-bottom: 1.5rem;
          color: #333;
        }

        .upload-form {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .file-input {
          flex: 1;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .upload-button {
          padding: 0.5rem 1rem;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .upload-button:hover {
          background-color: #0051cc;
        }

        .upload-button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        .progress-bar {
          width: 100%;
          height: 20px;
          background-color: #f0f0f0;
          border-radius: 10px;
          overflow: hidden;
          margin: 1rem 0;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background-color: #0070f3;
          transition: width 0.3s ease;
        }

        .progress-text {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          font-size: 12px;
          text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        }

        .error-message {
          color: #dc3545;
          margin-top: 1rem;
        }

        .success-message {
          color: #28a745;
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
};

export default FileUpload;