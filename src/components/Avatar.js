
const Avatar = (props) => {
    console.log(props)
    return (
        <div>
            <h3>Your boy {props.b}</h3>
            <img
                src={props.a}
                alt={props.b}
                width={props.c}
                height={props.d}
            />
        </div>
    )
}

export default Avatar 