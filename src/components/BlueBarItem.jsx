function BlueBarItem(props) {
    return(<a href={props.link}><li>
        <img src={props.img} alt={props.alt} />
        {props.title.toUpperCase()}
    </li></a>)
}

export default BlueBarItem