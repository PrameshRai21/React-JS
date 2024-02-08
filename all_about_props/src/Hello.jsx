
export default function Hello(props){
    const {greet, username} = props;
    return(
        <h1>{greet} ! {username}</h1>
    )
}