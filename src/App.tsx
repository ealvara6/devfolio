import { useCallback, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Drawer } from './components/Drawer';

export const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <main className=" bg-bg text-text min-h-screen transition-all relative">
      <Navbar openMenu={openDrawer} />
      <Drawer open={drawerOpen} onClose={closeDrawer} />
    </main>
  );
};

export default App;
