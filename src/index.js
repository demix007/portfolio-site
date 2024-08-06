import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import './index.css';

// Use createRoot to create a root container
const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);

// Render the App component using the root
root.render(<App />);
