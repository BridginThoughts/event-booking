import React from 'react'


function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="header__logo col-md-6">
                        <h1>EVENT APP</h1>
                    </div>
                    <div className="col-md-6">
                        <div className="navbar-collapse " id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">Events</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </header>
    )
}

export default Header
