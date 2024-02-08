
// eslint-disable-next-line react/prop-types
export default function Fruits({fruits}){
    console.log(typeof fruits);
    return(
        <div>
            <h1>{fruits + ", "}</h1>
        </div>
    )
}