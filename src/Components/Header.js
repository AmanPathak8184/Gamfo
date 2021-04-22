import './Header.css';
import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (

            <header>
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4"  >
                        <h5 className="text-white h4">All Game Related News</h5>
                        <span className="text-muted">Scroll and view latest updates</span>
                    </div>
                </div>
                <nav className="navbar navbar-dark  p-0 mb-2 bg-body "  id="HeadColor">
                    <div className="container-fluid d-flex justify-content-between" >

                        <span className=" text-light " ><h2>Gamfo</h2></span>
                        <button className="navbar-toggler " type="button"
                            data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent"
                            aria-controls="navbarToggleExternalContent" aria-expanded="false"
                            aria-label="Toggle navigation ">
                            <h1 className="bi bi-justify text-light " > </h1>
                        </button>

                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
