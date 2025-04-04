import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

import './App.css'

const arrItemsMenu = [
  {
    name: "characters",
    link: "#"
  },
  {
    name: "comics",
    link: "#"
  },
  {
    name: "movies",
    link: "#"
  },
  {
    name: "tv",
    link: "#"
  },
  {
    name: "games",
    link: "#"
  },
  {
    name: "collectibles",
    link: "#"
  },
  {
    name: "videos",
    link: "#"
  },
  {
    name: "fans",
    link: "#"
  },
  {
    name: "news",
    link: "#"
  },
  {
    name: "shop",
    link: "#"
  },
]

function App() {

  return (
    <>
      <Header itemsArr={arrItemsMenu} />
      <Main />
      <Footer />
    </>
  )
}

export default App
