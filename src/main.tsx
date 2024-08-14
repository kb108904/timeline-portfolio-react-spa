import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS
import { BrowserRouter } from 'react-router-dom'
import { IS_UNDER_CONSTRUCTION } from '../config'
import UnderConstruction from './components/pages/underConstruction/underConstructionPage.tsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      {IS_UNDER_CONSTRUCTION==='true' ? (
        <UnderConstruction />
      ) : (
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )}
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
