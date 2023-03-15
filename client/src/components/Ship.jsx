import React, { useEffect, useState } from "react";
import axios from "axios";
const Ship = () => {
    //change this to grab from the database. Also no clue how pagenation would be handled currently
    const [ship,setShip] = useState();
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [ships,setShips] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/ships/").then((payload)=>{
            let body = JSON.parse(payload.request.response);

            body.forEach((ship)=>{
                console.log(ship);
                ship={auhtor:"placeholder",payload: ship.payload};
            });
            setShips([...ships,...body]);
        });
    },[]);
    const parse = (ship) =>{ //ship consists of (name,desc,version,author,stages,jsonPayload)
        if (ship){;
            let shipData = JSON.parse(ship);//could possibly break this out later down the line. With bigger ships and alot on view this could be slow I Dont know.
            console.log(shipData);
            // let shipName = shipData.AssemblyDefinition.assemblyName;
            // let shipDescription = shipData.AssemblyDefinition.description;
            // let shipVersion = shipData.AssemblyDefinition.version;  
            // let shipNumStages = shipData.AssemblyOABConfig.StagingState.totalStageCount;
            //grab logged in user from the context here and add it before we store it. store it eventually and probably add confirmation
            let shipObject = {author: "placeholder",payload: shipData};
            setShip(shipObject);
            // axios.post("http://localhost:3001/ships/add",shipObject).then(console.log("Poggers"));
        }
    }

    const submitShip = () => {
        let temp = ship;
        temp.payload.AssemblyDefinition.assemblyName = name;//this probably should be capped or needs to be capped for safety
        temp.payload.AssemblyDefinition.description = description;//same with this
        setShip(temp);
        setShips([...ships,temp]);
        console.log("uploading ",ship);
        axios.post("http://localhost:3001/ships/add",ship).then(setShip());
    }
    //Need to clean up the input. Area to paste then area to edit name and description version and add picture.c
    return (
        <div className="Ships">
            {ship &&
                <div>
                    <label>Ship Name</label>
                    <input
                        type="text"
                        name="nameOfShip"
                        defaultValue={ship.payload.AssemblyDefinition.assemblyName}
                        onChange={e => setName(e.target.value)}
                // onSubmit={do something}
                    />
                    <label>Ship Description</label>
                    <input
                        type="text"
                        name="drescriptionOfShip"
                        defaultValue={ship.payload.AssemblyDefinition.description}
                        onChange={e=> setDescription(e.target.value)}
                    />
                    <input
                        type="button"
                        name="sendShip"
                        onClick={e => submitShip()}
                    />
                </div>
            }
            {!ship && 
                <input
                type="text"
                onChange={e =>{
                    parse(e.target.value);
                }}
                autoCorrect="false"
                autoCapitalize={'none'}
                placeholder={"Paste Ship here"}
                />
            }
            {ships.map((dat,index)=>{//add a edit button later down the line maybe
                {console.log(dat);}
                return (
                    <div className="shipst">
                        <h2>{dat.payload.AssemblyDefinition.assemblyName}</h2>
                        <p>{dat.payload.AssemblyDefinition.description}</p>
                        <p>versoin:{dat.payload.AssemblyDefinition.version}</p>
                        <p>Number of stages: {dat.payload.AssemblyOABConfig.StagingState.totalStageCount}</p>
                        {/* on button click we should fire off an increment but only once per user per ship. Im unsure how this works imediatly maybe disable the button afterwards. */}
                        <button>Upvote</button>
                    </div>  
                );
            })}
        </div>
    );
}
export default Ship;