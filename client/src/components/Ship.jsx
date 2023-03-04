const Ship = () => {
    const parse = (ship) =>{
        let shipData = JSON.parse(ship);
        console.log(shipData);
        let name = shipData.AssemblyDefinition.assemblyName;
        let description = shipData.AssemblyDefinition.description;
        let version = shipData.AssemblyDefinition.version;  
        let numStages = shipData.AssemblyOABConfig.StagingState.totalStageCount;
        console.log(name);
        console.log(description);
        console.log(version);
        console.log(numStages);

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