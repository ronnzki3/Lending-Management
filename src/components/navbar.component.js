import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Navbar extends Component{

    render(){

        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand" >Lending App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link active" aria-current="page" >Home</Link>
                    </li>  
                    <li className="nav-item">
                        <Link to={'/edit/:id'} className="nav-link" >Edit</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/new'} className="nav-link" >New</Link>
                    </li>
                    </ul>                  
                </div>
                </div>
            </nav>
            
        )
    }
}