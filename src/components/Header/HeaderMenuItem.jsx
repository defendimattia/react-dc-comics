function MenuItem(props) {

    return <a href={props.link}><li>{props.name.toUpperCase()}</li></a>
}

export default MenuItem