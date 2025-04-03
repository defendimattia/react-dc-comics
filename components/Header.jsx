
function Header() {
    return (<header>
        <nav>
            {/* logo */}
            <a href=""><img src="/dc-logo.png" alt="logo" /></a>
            {/* menu */}
            <ul className="menu-list">
                <a href="#"><li>CHARACTERS</li></a>
                <a href="#"><li>COMICS</li></a>
                <a href="#"><li>MOVIES</li></a>
                <a href="#"><li>TV</li></a>
                <a href="#"><li>GAMES</li></a>
                <a href="#"><li>COLLECTIBLES</li></a>
                <a href="#"><li>VIDEOS</li></a>
                <a href="#"><li>FANS</li></a>
                <a href="#"><li>NEWS</li></a>
                <a href="#"><li>SHOP</li></a>
            </ul>
        </nav>
    </header>)
}

export default Header