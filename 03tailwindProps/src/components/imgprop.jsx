import React from 'react';

const Imgprop = (props) => {
    return (
        <div>
            <img src ={props.image} alt={props.name} width="200" />
            <h1>i'm {props.name}!</h1>
        </div>
    );
}

export default Imgprop;
