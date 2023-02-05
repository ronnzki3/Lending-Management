import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


import Navbar from './components/navbar.component';
import ClientList from './components/client-list.component';
import ClientEdit from './components/client-edit.component';
import ClientNew from './components/client-new.component';

function App() {
  return (
    <Router>
        <Navbar />
         <br/>
        <Routes>
            <Route path="/" exact element={<ClientList />} />
            <Route path="/edit/:id" element={<ClientEdit/>} />
            <Route path="/new" element={<ClientNew/>} />
        </Routes>      
    </Router>
  );
}

export default App;
