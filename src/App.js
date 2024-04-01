import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { themeColor } from './theme/style';
import { GlobalStyles } from './GlobalStyles';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={themeColor}>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/projetos/:id" element={<Project />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
