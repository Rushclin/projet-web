import '../App.css'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <a href="#">
                    <h3 className="h3 text-primary">TEEMES</h3>
                </a>

                <button className="menu-toggle-btn" data-nav-toggle-btn>
                    <ion-icon name="menu-outline"></ion-icon>
                </button>

                <nav className="navbar">
                    <ul className="navbar-list">
                        {/*  <li>
                            <a href="" className="navbar-link">Index</a>
                        </li>
                        <li>
                            <a href="" className="navbar-link">Home</a>
                        </li> */}
                    </ul>

                    <div className="header-actions">
                        <a href="" className="header-action-link">GET STARTED</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header