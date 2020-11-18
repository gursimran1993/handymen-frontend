import logo from '../../logo.svg';
import Layout from "../Layout"
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import "../../Scss/app.scss"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
