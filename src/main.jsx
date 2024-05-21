import React, { Suspense, lazy } from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = lazy(() => import('./App'));
const Computer = lazy(() => import('./pages/Computer'));
const DBMS = lazy(() => import('./pages/DBMS'));
const SAD = lazy(() => import('./pages/SAD'));
const Java = lazy(() => import('./pages/Java'));
const Syllabus = lazy(() => import('./pages/Syllabus'));
const Pdf_Notes = lazy(() => import('./pages/Pdf_Notes'));
const Notes = lazy(() => import('./pages/Notes'));
const NotFound = () => <div>404 Not Found</div>;

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Computer" element={<Computer />} />
          <Route path="/DBMS" element={<DBMS />} />
          <Route path="/SAD" element={<SAD />} />
          <Route path="/Java" element={<Java />} />
          <Route path="/Syllabus" element={<Syllabus />} /> 
          <Route path="/Pdf_Notes" element={<Pdf_Notes />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>
);
