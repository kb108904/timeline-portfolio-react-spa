# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

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

## Project Structure
```
project-timeline/
├── public/
├── src/
│   ├── components/
│   │   ├── Timeline.tsx
│   │   ├── DetailPage.tsx
│   ├── context/
│   │   ├── FilesContext.tsx
│   ├── pages/
│   │   ├── MainPage.tsx
│   │   ├── DetailPage.tsx
│   ├── App.tsx
│   ├── index.tsx
│   ├── config.ts
│   ├── models/
│   │   ├── timelineItems.ts
│   ├── styles/
│       ├── _timeline.css
│       ├── main.css
├── .env
├── package.json
├── vite.config.ts
```

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

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [AWS S3](https://aws.amazon.com/s3/)