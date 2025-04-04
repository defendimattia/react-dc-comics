import BlueBarItem from "./BlueBarItem"
const arrItemsBlueBar = [
    {
        title: "digital comics",
        img: "digital-comics.png",
        alt: "digital-comics",
        url: "#"
    },
    {
        title: "dc merchandise",
        img: "merchandise.png",
        alt: "merch",
        url: "#"
    },
    {
        title: "subscription",
        img: "subscriptions.png",
        alt: "subscription",
        url: "#"
    },
    {
        title: "comic shop locator",
        img: "locator.png",
        alt: "locator",
        url: "#"
    },
    {
        title: "dc power visa",
        img: "visa.svg",
        alt: "visa",
        url: "#"
    }
]

function FooterBlueBar() {
    return (
        <div className="blue-bar-footer">
            <div className="container">
                <ul>
                    <BlueBarItem title={arrItemsBlueBar[0].title} img={arrItemsBlueBar[0].img} alt={arrItemsBlueBar[0].alt} url={arrItemsBlueBar[0].url} />
                    <BlueBarItem title={arrItemsBlueBar[1].title} img={arrItemsBlueBar[1].img} alt={arrItemsBlueBar[1].alt} url={arrItemsBlueBar[1].url} />
                    <BlueBarItem title={arrItemsBlueBar[2].title} img={arrItemsBlueBar[2].img} alt={arrItemsBlueBar[2].alt} url={arrItemsBlueBar[2].url} />
                    <BlueBarItem title={arrItemsBlueBar[3].title} img={arrItemsBlueBar[3].img} alt={arrItemsBlueBar[3].alt} url={arrItemsBlueBar[3].url} />
                    <BlueBarItem title={arrItemsBlueBar[4].title} img={arrItemsBlueBar[4].img} alt={arrItemsBlueBar[4].alt} url={arrItemsBlueBar[4].url} />

                </ul>
            </div>
        </div >
    )
}

export default FooterBlueBar