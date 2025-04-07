import Jumbotron from "./MainJumbotron"
import style from "./Main.module.css"

function Main() {
    return (<main>
        <Jumbotron />
        <div className={style.container}>
            <strong className={style["current-series"]}>CURRENT SERIES</strong>
            <button className={style["load-more"]}>LOAD MORE</button>
        </div>

    </main>)
}

export default Main