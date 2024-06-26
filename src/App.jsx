import React from 'react';
import GlobalStyles from './styles/GlobalStyle';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import CalendarPage from './pages/CalendarPage';
import HomePage from './pages/HomePage';
import ProgramPage from './pages/ProgramPage';
import SearchPage from './pages/SearchPage';
import StatisticsPage from './pages/StatisticsPage';
import WritingPage from './pages/WritingPage';
import CalendarDetailPage from './pages/CalendarDetailPage';
import CalendarAnalysisPage from './pages/CalendarAnalysisPage';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/calendar" element={<CalendarPage />} />
              <Route
                path="/calendar/detail/:date"
                element={<CalendarDetailPage />}
              />
              <Route
                path="/calendar/analysis"
                element={<CalendarAnalysisPage />}
              />
              <Route path="/" element={<HomePage />} />
              <Route path="/program" element={<ProgramPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/statistics" element={<StatisticsPage />} />
              <Route path="/writing" element={<WritingPage />} />
            </Route>
          </Routes>
          
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
