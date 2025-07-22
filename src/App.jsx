import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-flex bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-md border-b border-gray-200 dark:border-gray-800 h-16 flex items-center">
          <nav className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center relative z-20">
            <NavLink to="/" className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">Jimel J. Joseph</NavLink>
            <div className="flex items-center space-x-2 md:space-x-6 mt-2 md:mt-0">
              <NavLink to="/portfolio" className={({isActive}) => isActive ? "text-blue-600 dark:text-blue-400 font-semibold underline" : "text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"}>Portfolio</NavLink>
              <NavLink to="/about" className={({isActive}) => isActive ? "text-blue-600 dark:text-blue-400 font-semibold underline" : "text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"}>About</NavLink>
              <NavLink to="/contact" className={({isActive}) => isActive ? "text-blue-600 dark:text-blue-400 font-semibold underline" : "text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"}>Contact</NavLink>
            </div>
          </nav>
        </header>
        <main className="flex-1 h-full w-full px-4"> {/* Main fills space and stretches vertically */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="bg-white dark:bg-gray-900 text-center py-6 mt-8 text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
          Jimel J. Joseph &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </Router>
  );
}

export default App;
