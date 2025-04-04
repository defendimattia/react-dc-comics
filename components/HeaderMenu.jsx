import MenuItem from "./HeaderMenuItem"

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
        <MenuItem name={arrItemsMenu[0].name} link={arrItemsMenu[0].link}/>
        <MenuItem name={arrItemsMenu[1].name} link={arrItemsMenu[1].link}/>
        <MenuItem name={arrItemsMenu[2].name} link={arrItemsMenu[2].link}/>
        <MenuItem name={arrItemsMenu[3].name} link={arrItemsMenu[3].link}/>
        <MenuItem name={arrItemsMenu[4].name} link={arrItemsMenu[4].link}/>
        <MenuItem name={arrItemsMenu[5].name} link={arrItemsMenu[5].link}/>
        <MenuItem name={arrItemsMenu[6].name} link={arrItemsMenu[6].link}/>
        <MenuItem name={arrItemsMenu[7].name} link={arrItemsMenu[7].link}/>
        <MenuItem name={arrItemsMenu[8].name} link={arrItemsMenu[8].link}/>
        <MenuItem name={arrItemsMenu[9].name} link={arrItemsMenu[9].link}/>
    </ul>)

}

export default HeaderMenu