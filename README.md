# Project Timeline

## Description
Project Timeline is a web application built using React and Vite that displays a timeline of events with associated images and descriptions. The content is dynamically fetched from an AWS S3 bucket.

## Features
- Display a timeline of events
- Hover over an event to see a larger image and description
- Dynamically fetch content from AWS S3
- Responsive design with Bootstrap

## Technologies Used
- React
- Vite
- AWS S3
- Bootstrap
- TypeScript

## Installation

### Prerequisites
- Node.js (>= 14.x)
- npm (>= 6.x)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/project-timeline.git
   cd project-timeline
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Configure your AWS credentials:
   Create a `.env` file in the root directory and add your AWS credentials and bucket information:
   ```env
   REACT_APP_AWS_ACCESS_KEY_ID=your-access-key-id
   REACT_APP_AWS_SECRET_ACCESS_KEY=your-secret-access-key
   REACT_APP_AWS_REGION=your-region
   REACT_APP_S3_BUCKET_NAME=your-bucket-name
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. The timeline should display events from your S3 bucket.

## AWS S3 Configuration
1. Ensure your S3 bucket is properly configured for public access.
2. Set up CORS policy for your S3 bucket:
   ```json
   [
     {
       "AllowedHeaders": [
         "*"
       ],
       "AllowedMethods": [
         "GET"
       ],
       "AllowedOrigins": [
         "*"
       ],
       "ExposeHeaders": []
     }
   ]
   ```