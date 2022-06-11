import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./components/search";
import { HashRouter ,Link ,Switch, Route } from "react-router-dom";
import City from "./pages/city";

function App() {
  return (
    <HashRouter>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <div className="navbar-collapse">
         <div className="nav navbar-nav">
           <ul className="nav navbar-nav">
           <li>
             <Link className="nav-item nav-link" to="/city/bucharest,ro">
               Bucharest
             </Link>
           </li>
           <li>
             <Link className="nav-item nav-link" to="/city/budapest,hu">
             Budapest
             </Link>
           </li>
           <li>
             <Link className="nav-item nav-link" to="/city/warsaw,pl">
             Warsaw
             </Link>
           </li>
           </ul>
           <div className="form-inline">
           <Search></Search>
           </div>
         </div>
         </div>
         </nav>
    <Switch>
      <Route path="/city/:cityCode" component={City}></Route>
    </Switch>
    </HashRouter>
  
  );
}

export default App;
