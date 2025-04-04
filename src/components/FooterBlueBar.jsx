import BlueBarItem from "./BlueBarItem"
const arrItemsBlueBar = [
    {
        title: "digital comics",
        img: "digital-comics.png",
        alt: "digital-comics",
        link: "#"
    },
    {
        title: "dc merchandise",
        img: "merchandise.png",
        alt: "merch",
        link: "#"
    },
    {
        title: "subscription",
        img: "subscriptions.png",
        alt: "subscription",
        link: "#"
    },
    {
        title: "comic shop locator",
        img: "locator.png",
        alt: "locator",
        link: "#"
    },
    {
        title: "dc power visa",
        img: "visa.svg",
        alt: "visa",
        link: "#"
    }
]

function FooterBlueBar() {
    return (
        <div className="blue-bar-footer">
            <div className="container">
                <ul>
                    <BlueBarItem title={arrItemsBlueBar[0].title} img={arrItemsBlueBar[0].img} alt={arrItemsBlueBar[0].alt} link={arrItemsBlueBar[0].link} />
                    <BlueBarItem title={arrItemsBlueBar[1].title} img={arrItemsBlueBar[1].img} alt={arrItemsBlueBar[1].alt} link={arrItemsBlueBar[1].link} />
                    <BlueBarItem title={arrItemsBlueBar[2].title} img={arrItemsBlueBar[2].img} alt={arrItemsBlueBar[2].alt} link={arrItemsBlueBar[2].link} />
                    <BlueBarItem title={arrItemsBlueBar[3].title} img={arrItemsBlueBar[3].img} alt={arrItemsBlueBar[3].alt} link={arrItemsBlueBar[3].link} />
                    <BlueBarItem title={arrItemsBlueBar[4].title} img={arrItemsBlueBar[4].img} alt={arrItemsBlueBar[4].alt} link={arrItemsBlueBar[4].link} />

                </ul>
            </div>
        </div >
    )
}

export default FooterBlueBar