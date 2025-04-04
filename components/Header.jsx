import HeaderMenu from "./HeaderMenu"

function Header({ itemsArr }) {
    return (<header>
        <nav className="container">
            {/* logo */}
            <a href=""><img src="dc-logo.png" alt="logo" /></a>
            <HeaderMenu itemsArr={itemsArr} />
        </nav>
    </header>)
}

export default Header