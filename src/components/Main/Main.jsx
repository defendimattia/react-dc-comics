import Jumbotron from "./MainJumbotron"
import style from "./Main.module.css"
import Card from "./Card"
import comics from "../../data/comics"


function Main() {
    return (<main>
        <Jumbotron />
        <div className={style.container}>
            <strong className={style["current-series"]}>CURRENT SERIES</strong>
            <div className={style["cards-container"]}>
                {comics.map(comic => {
                    return (<Card comic={comic} key= {comic.id}/>)
                })}
            </div>
            <button className={style["load-more"]}>LOAD MORE</button>
        </div>

    </main>)
}

export default Main