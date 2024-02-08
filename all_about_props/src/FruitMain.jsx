import Fruits from "./Fruits"
export default function FruitMain(){
    const fruits = [
        {emoji: "🍎", name: "Apple", price: "$9"},
        {emoji: "🥝", name: "Kiwi", price: "$12"},
        {emoji: "🍊", name: "Tangerine", price: "$5"},
        {emoji: "🍇", name: "Grapes", price: "$7"}
    ]
    return(
        <div>
            {fruits.map((fruit) => (
                <Fruits emoji={fruit.emoji} name={fruit.name} price= {fruit.price} key={fruit.name}/>
            ))}
        </div>
    )
}