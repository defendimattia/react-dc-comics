import MenuItem from "./HeaderMenuItem"


function HeaderMenu({ itemsArr }) {
    return (<ul className="menu-list">
        <MenuItem name={itemsArr[0].name} link={itemsArr[0].link}/>
        <MenuItem name={itemsArr[1].name} link={itemsArr[1].link}/>
        <MenuItem name={itemsArr[2].name} link={itemsArr[2].link}/>
        <MenuItem name={itemsArr[3].name} link={itemsArr[3].link}/>
        <MenuItem name={itemsArr[4].name} link={itemsArr[4].link}/>
        <MenuItem name={itemsArr[5].name} link={itemsArr[5].link}/>
        <MenuItem name={itemsArr[6].name} link={itemsArr[6].link}/>
        <MenuItem name={itemsArr[7].name} link={itemsArr[7].link}/>
        <MenuItem name={itemsArr[8].name} link={itemsArr[8].link}/>
        <MenuItem name={itemsArr[9].name} link={itemsArr[9].link}/>
    </ul>)

}

export default HeaderMenu