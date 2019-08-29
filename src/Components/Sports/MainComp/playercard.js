import React from "react";

const PlayerCard = (props) => {
    return (
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <h3>{props.player.name}</h3><h3>{props.player.team}</h3><h3>{props.player.position}</h3>
        </div>
    )
}

export default PlayerCard;