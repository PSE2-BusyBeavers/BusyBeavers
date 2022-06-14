import TopBar from '@src/components/TopBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
}

export default App;
