import React, { useEffect, useState } from "react";
import axios from "axios";
const Ship = () => {
    //change this to grab from the database. Also no clue how pagenation would be handled currently
    const [ships,setShips] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/ships/").then((payload)=>{
            let body = JSON.parse(payload.request.response);

            body.map((ship,index)=>{
                ship={name: ship.name,author: ship.author,description: "placeholder",version: ship.dataPayload.Version,numStages: ship.dataPayload.AssemblyOABConfig.StagingState.totalStageCount};
                
            });
            setShips([...ships,...body]);
        });
    },[]);

    const parse = (ship) =>{
        if (ship){
            let shipData = JSON.parse(ship);
            // console.log(shipData);
            let name = shipData.AssemblyDefinition.assemblyName;
            let description = shipData.AssemblyDefinition.description;
            let version = shipData.AssemblyDefinition.version;  
            let numStages = shipData.AssemblyOABConfig.StagingState.totalStageCount;
            let payload = shipData;
            // console.log(name);
            // console.log(description);
            // console.log(version);
            // console.log(numStages);
            //grab logged in user from the context here and add it before we store it. store it eventually and probably add confirmation
            setShips([...ships,{name: name,description: description,version: version,numStages: numStages}]);
            axios.post("http://localhost:3001/ships/add",{name: name,author: "placeholder", dataPayload: payload}).then(console.log("Poggers"));
        }
    }
    //Need to clean up the input. Area to paste then area to edit name and description version and add picture.c
    return (
        <div className="Ships">
            <input
            type="text"
            hidden="true"
            //defaultValue={set this to the name of the ship after paste}
            // onSubmit={do something}
            />
            <input
            />
            <input
                type="text"
                onChange={e => parse(e.target.value)}
                autoCorrect="false"
                autoCapitalize={'none'}
                placeholder={"Paste Ship here"}
            />

            
            {/* {console.log(ships)} */}
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