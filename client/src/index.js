import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import './index.css';
import 'styles/globalStyles.module.css'; // 동작하는지 확인 피료

const root = document.getElementById('root');
const rootInstance = createRoot(root);
rootInstance.render(<App />);
