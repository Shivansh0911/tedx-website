import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import SpeakersPage from './pages/SpeakersPage';
import SponsorsPage from './pages/SponsorsPage';
import ExecutivesPage from './pages/ExecutivesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import ComingSoonPage from './pages/ComingSoonPage';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/executives" element={<ExecutivesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tickets" element={<ComingSoonPage title="Tickets" description="Ticket sales will begin soon. Stay tuned for updates!" />} />
          <Route path="/journey" element={<ComingSoonPage title="Our Journey" description="We are compiling our history and milestones. Check back soon." />} />
          <Route path="/get-involved" element={<ComingSoonPage title="Get Involved" description="Join our team as a volunteer, speaker, or sponsor. Details coming soon!" />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;