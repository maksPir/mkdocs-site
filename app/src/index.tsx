import { createElement } from 'react';
import { createRoot } from 'react-dom/client'
import { MainPage } from './pages/MainPage';

const rootContainer = document.getElementById('root') as HTMLElement;

const root = createRoot(rootContainer);
root.render(<MainPage/>)