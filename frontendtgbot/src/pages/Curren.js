import React from "react";

const Curren=(props) =>{
    return(
        <div>
            <tr key={props.id}>
                <td style={{whiteSpace: 'nowrap'}}>{props.name}</td>
                <td>{props.nominal}</td>
                <td>{props.course}</td>
                <td>{props.code}</td>
                <td>{props.chCode}</td>
            </tr>
        </div>
    )
}

export default Curren;