import { Navbar } from './components/Navbar';
import { Sections } from './components/sections/Sections';

export const App = () => {
  return (
    <main className=" bg-bg text-text min-h-screen transition-all duration-500 relative">
      <Navbar />
      <Sections />
    </main>
  );
};

export default App;
