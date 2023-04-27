import Layout from './component/Layout';
import Kesfet from './pages/Kesfet';
import Work from './pages/Work';
import Game from './pages/Game';
import Home from './pages/Home';
import Development from './pages/Development';
import Categories from './pages/Categories';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discovery" element={<Kesfet />} />
          <Route path="/work" element={<Work />} />
          <Route path="/game" element={<Game />} />
          <Route path="/development" element={<Development />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
