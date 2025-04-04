import HeaderMenu from "./HeaderMenu"

function Header() {
    return (<header>
        <nav className="container">
            {/* logo */}
            <a href=""><img src="dc-logo.png" alt="logo" /></a>
            <HeaderMenu />            
        </nav>
    </header>)
}

export default Header