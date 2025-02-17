import './App.css';

import { BrowserRouter, Outlet, Route, Routes } from 'react-router';

import { Header, Layout } from './modules';
import { AppView } from './view';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route index element={<AppView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
