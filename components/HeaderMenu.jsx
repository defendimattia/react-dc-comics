const arrItemsMenu = [
    {
        name: "characters",
        link: "#"
    },
    {
        name: "comics",
        link: "#"
    },
    {
        name: "movies",
        link: "#"
    },
    {
        name: "tv",
        link: "#"
    },
    {
        name: "games",
        link: "#"
    },
    {
        name: "collectibles",
        link: "#"
    },
    {
        name: "videos",
        link: "#"
    },
    {
        name: "fans",
        link: "#"
    },
    {
        name: "news",
        link: "#"
    },
    {
        name: "shop",
        link: "#"
    },
]

function HeaderMenu() {
    return (<ul className="menu-list">
        <a href="#"><li>CHARACTERS</li></a>
        <a href="#" className="selected"><li>COMICS</li></a>
        <a href="#"><li>MOVIES</li></a>
        <a href="#"><li>TV</li></a>
        <a href="#"><li>GAMES</li></a>
        <a href="#"><li>COLLECTIBLES</li></a>
        <a href="#"><li>VIDEOS</li></a>
        <a href="#"><li>FANS</li></a>
        <a href="#"><li>NEWS</li></a>
        <a href="#"><li>SHOP</li></a>
    </ul>)

}

export default HeaderMenu