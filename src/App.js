import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { themeColor } from './theme/style';
import { GlobalStyles } from './GlobalStyles';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';

function App() {
  return (
    <ThemeProvider theme={themeColor}>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Project />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
