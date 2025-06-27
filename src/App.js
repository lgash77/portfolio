import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";

import Sidebar from './components/sidebar/Sidebar'; 
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

// Project Pages
import EuropeanLeaguesProject from './components/portfolio/pages/EuropeanLeaguesProject';
import PraxisFitnessApp from './components/portfolio/pages/PraxisFitnessApp';
import StrokeLogisticsReport from './components/portfolio/pages/StrokeLogisticsReport';
import JobGeospatialTrends from './components/portfolio/pages/JobGeospatialTrends';
import DegreesPaybackAnalysis from './components/portfolio/pages/DegreesPaybackAnalysis';
import DMVPublicFiguresSQL from './components/portfolio/pages/DMVPublicFiguresSQL';
import PremierLeagueProject from './components/portfolio/pages/PremierLeagueProject';


const MainSite = () => (
  <>
    <Sidebar />
    <main className="main">
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </main>
  </>
);

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<MainSite />} />
            <Route path="/project/european-leagues-project" element={<EuropeanLeaguesProject />} />
            <Route path="/project/praxis-fitness-app" element={<PraxisFitnessApp />} />
            <Route path="/project/stroke-logistics" element={<StrokeLogisticsReport />} />
            <Route path="/project/job-trends-geo" element={<JobGeospatialTrends />} />
            <Route path="/project/degrees-payback" element={<DegreesPaybackAnalysis />} />
            <Route path="/project/dmv-sql" element={<DMVPublicFiguresSQL />} />
            <Route path="/project/premier-league-insights" element={<PremierLeagueProject />} />
        </Routes>
    </Router>
  );
};

export default App;
