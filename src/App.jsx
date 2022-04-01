import { Routes, Route } from 'react-router-dom';
import { Footer, Backdrop } from './components';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

const App = () => (
  <>
    <div className="container flex flex-col items-center justify-start min-h-[90vh] pt-12">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer />
    <Backdrop />
  </>
);

export default App;
