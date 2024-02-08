
export default function Fruits({emoji, name, price}){
    console.log(emoji);
    return(
       <ul>
         <li><h2>{emoji} {name} {price}</h2></li>
       </ul>
    )
}