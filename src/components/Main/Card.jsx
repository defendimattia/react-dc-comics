import style from "./Main.module.css"


function Card(props) {

    const comic = props.comic

    return (
        <div className={style.card}>

            <a href="#">
                <div className={style["card-img"]}>
                    <img src={comic.thumb} alt={comic.title} />
                </div>
                
                <span>{(comic.series).toUpperCase()}</span>
            </a>

        </div>


    )

}

export default Card