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
import PageNot from './Component/PageNotFound/PageNot';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
       <Router>
         <Header></Header>         
          <Switch>
           <Route exact path="/">
             <Home></Home>
           </Route>
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
           <Route path="*">
             <PageNot></PageNot>
           </Route>
         </Switch> 
         <Footer></Footer>       
      </Router>
      
    </div>
  );
}

export default App;
