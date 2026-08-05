import React from "react";

const Compprac = (props) => {  // componenet never changes, just the data changes through teh props
    //we are re-using the cards
    return (
    <div>
        <h1>Hello {props.name}</h1>
    </div>
    );
};

export default Compprac;
