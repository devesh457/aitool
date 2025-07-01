import { Amplify } from 'aws-amplify';

Amplify.configure({
  Storage: {
    AWSS3: {
      bucket: 'ai-review-dpr',
      region: 'us-east-1',
      // Optional: If you're using a custom domain
      // customPrefix: 'uploads/',
    }
  }
});