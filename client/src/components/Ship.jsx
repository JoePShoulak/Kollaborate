const Ship = () => {
    const parse = (ship) =>{
        let input = JSON.parse(ship);
        console.log(input);
    }

    return (
        <>
            <input
            type="text"
            onChange={e => parse(e.target.value)}
            autoCorrect="false"
            autoCapitalize={'none'}
            placeholder={"Paste Ship here"}
            />
        </>
    );
}
export default Ship;