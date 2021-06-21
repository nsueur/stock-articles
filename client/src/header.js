import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import Corpus from './Corpus';

function Header (){

return (
    <Router>
    <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Stock articles</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/homme">Homme</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/femme">Femme</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/enfant">Enfant</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/add-article">Ajout articles</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        
    </header>
    <Corpus />
        
    </Router>
    );
}

export default Header