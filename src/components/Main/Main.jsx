import Jumbotron from "./MainJumbotron"
import style from "./Main.module.css"

function Main() {
    return (<main>
        <Jumbotron />
        <div className={style.container}>
            <strong className={style["current-series"]}>CURRENT SERIES</strong>
        </div>

    </main>)
}

export default Main