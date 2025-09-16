import { useCallback, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Drawer } from './components/Drawer';
import { Sections } from './components/sections/Sections';

export const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <main className=" bg-bg text-text min-h-screen transition-all duration-500 relative">
      <Navbar openMenu={openDrawer} />
      <Drawer open={drawerOpen} onClose={closeDrawer} />
      <Sections />
    </main>
  );
};

export default App;
