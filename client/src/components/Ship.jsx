import React, { useState } from "react";

const Ship = () => {
    //change this to grab from the database. Also no clue how pagenation would be handled currently
    const [ships,setShips] = useState([]);

    const parse = (ship) =>{
        let shipData = JSON.parse(ship);
        console.log(shipData);
        let name = shipData.AssemblyDefinition.assemblyName;
        let description = shipData.AssemblyDefinition.description;
        let version = shipData.AssemblyDefinition.version;  
        let numStages = shipData.AssemblyOABConfig.StagingState.totalStageCount;
        // console.log(name);
        // console.log(description);
        // console.log(version);
        // console.log(numStages);
        //grab logged in user from the context here and add it before we store it. store it eventually and probably add confirmation
        setShips([...ships,{name: name,description: description,version: version,numStages: numStages}]);

    }

    return (
        <div className="Ships">
            <input
                type="text"
                onChange={e => parse(e.target.value)}
                autoCorrect="false"
                autoCapitalize={'none'}
                placeholder={"Paste Ship here"}/>
            
            {console.log(ships)}
            {ships.map((dat,index)=>{
                return (
                    <div className="shipst">
                        <h2>{dat.name}</h2>
                        <p>{dat.description}</p>
                        <p>{dat.version}</p>
                        <p>Number of stages: {dat.numStages}</p>
                        {/* on button click we should fire off an increment but only once per user per ship. Im unsure how this works imediatly maybe disable the button afterwards. */}
                        <button>Upvote</button>
                    </div>  
                );
            })}
        </div>
    );
}
export default Ship;