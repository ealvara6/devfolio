import { MobileNavbar } from './components/navbar/MobileNavbar';
import { Navbar } from './components/navbar/Navbar';
import { Sections } from './components/sections/Sections';

export const App = () => {
  return (
    <main className=" bg-bg text-text min-h-screen transition-all duration-500 relative">
      <nav className="sm:min-h-16 min-h-14 flex items-center py-6 px-3 justify-end">
        <Navbar />
        <MobileNavbar />
      </nav>
      <Sections />
    </main>
  );
};

export default App;
