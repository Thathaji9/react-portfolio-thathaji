import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useSearchParams } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import UseScrollToTop from './hooks/useScrollToTop';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));
const NotFound = lazy(() => import('./pages/NotFound'));

const Loader = () => (
  <div className="flex min-h-[50vh] items-center justify-center">
    <div className="loader-orbit" aria-label="Loading" />
  </div>
);

function App() {
  return (
    <AnimatePresence>
      <div className="page-grain min-h-screen bg-paper text-ink transition-colors duration-300">
        <Router>
          <ScrollToTop />
          <AppHeader />
          <main>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:slug" element={<ProjectSingle />} />
                <Route
                  path="projects/single-project"
                  element={<LegacyProjectRedirect />}
                />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <AppFooter />
        </Router>
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  );
}

const LegacyProjectRedirect = () => {
  const [params] = useSearchParams();
  const title = params.get('title') || '';
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  const aliases = {
    'checkred-security-platform': 'checkred-security-platform',
    'insightflow-ai-data-storyteller': 'insightflow-ai',
    'custom-report-service': 'custom-report-service',
    'dynamic-dashboard-builder': 'dynamic-dashboard-builder',
    'custom-radar-chart': 'custom-radar-chart',
    'dynamic-table': 'dynamic-table',
  };

  return <Navigate to={`/projects/${aliases[slug] || slug || 'checkred-security-platform'}`} replace />;
};

export default App;
