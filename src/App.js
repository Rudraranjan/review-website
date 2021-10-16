import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Services from './Component/Services/Services';
import Aboutus from './Component/AboutUs/Aboutus';
import Contactus from './Component/ContactUs/Contactus';

function App() {
  return (
    <div className="App">
       <Router>
         <Header></Header>
          <Switch>
           <Route path="/Home">
             <Home></Home>
           </Route>
           <Route path="/Services">
             <Services></Services>
           </Route>
           <Route path="/Aboutus">
             <Aboutus></Aboutus>
           </Route>
           <Route path="/Contactus">
             <Contactus></Contactus>
           </Route>
         </Switch>        
      </Router>
      
    </div>
  );
}

export default App;
