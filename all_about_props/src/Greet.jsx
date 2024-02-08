
export default function Greet({person}){

    return(
        <h1>{person.greet} {person.emoji} {person.name} {person.seatNum}</h1>
    )
}