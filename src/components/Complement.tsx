interface Props {
    text: String;
}

const Complement : React.FC<Props> = ({text}) => {
    return (
        <>
            <h1>{text}</h1>
        </>
    )
}

export default Complement