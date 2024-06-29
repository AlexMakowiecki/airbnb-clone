import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "../assets/data"
import "../styles/App.css"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <main>
              <Hero />
              <section className="cards-list">
                  {cards}
              </section>
            </main>
        </div>
    )
}