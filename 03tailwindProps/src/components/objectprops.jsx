import React from 'react';

const Objectprops = (props) => {
    return (
        <div>
            <h1>hello {props.student.name}</h1>
            <h2>hello {props.student.age}</h2>
            <h3>hello {props.student.cgpa}</h3>
        </div>
    );
}

export default Objectprops;
