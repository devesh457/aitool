import React from 'react';
import './aws-config';
import FileUpload from './components/FileUpload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AWS Amplify File Upload Demo</h1>
      </header>
      <main>
        <FileUpload />
      </main>
      <style jsx>{`
        .App {
          text-align: center;
          min-height: 100vh;
          background-color: #f5f5f5;
        }

        .App-header {
          background-color: #282c34;
          padding: 2rem;
          color: white;
          margin-bottom: 2rem;
        }

        h1 {
          margin: 0;
          font-size: 2rem;
        }

        main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
      `}</style>
    </div>
  );
}

export default App;