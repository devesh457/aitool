# AWS Amplify File Upload Demo

A React application demonstrating file upload functionality using AWS Amplify Storage.

## Features

- File upload to AWS S3
- Real-time upload progress tracking
- Error handling
- Modern and responsive UI
- Progress bar visualization

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- AWS Account
- Configured AWS Amplify CLI

## Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd aws-amplify-file-upload
```

2. Install dependencies:
```bash
npm install
```

3. Configure AWS Amplify:
   - Open `src/aws-config.js`
   - Replace `YOUR_S3_BUCKET_NAME` with your S3 bucket name
   - Replace `YOUR_AWS_REGION` with your AWS region

4. Start the development server:
```bash
npm start
```

## Project Structure

```
├── src/
│   ├── components/
│   │   └── FileUpload.js    # File upload component
│   ├── App.js              # Main application component
│   └── aws-config.js       # AWS Amplify configuration
├── package.json
└── README.md
```

## Usage

1. Open the application in your browser
2. Click the file input to select a file
3. Click the upload button
4. Monitor the upload progress

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.