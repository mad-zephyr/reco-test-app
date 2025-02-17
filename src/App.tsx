import './App.css';

import { Header } from './modules';
import { Layout } from './modules/layout/layout';
import { AppView } from './view';

function App() {
  return (
    <>
      <Header />
      <Layout>
        <AppView />
      </Layout>
    </>
  );
}

export default App;
