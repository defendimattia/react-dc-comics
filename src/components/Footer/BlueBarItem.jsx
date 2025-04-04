function BlueBarItem(props) {
    return(<a href={props.url}><li>
        <img src={props.img} alt={props.alt} />
        {props.title.toUpperCase()}
    </li></a>)
}

export default BlueBarItem