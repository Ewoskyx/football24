/* eslint-disable no-unused-vars */
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Countries from './components/Countries/Countries';
import Home from './components/Home/Home';
import Individual from './components/Individual/Individual';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/country" element={<Individual />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
