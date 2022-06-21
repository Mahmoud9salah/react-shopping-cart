import React from 'react';

export default function Input (props) {
    return (
        <div>
            <lable> {props.label} </lable>
            <input 
            type={props.type}
            required
            name={props.name}
            onChange={props.onChange}
            />
        </div>
    )
}