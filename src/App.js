import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Panel from './Pages/Panel';
import Login from './Pages/Login';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Data" element={<Panel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
