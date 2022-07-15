import React from 'react';

type OnOffPropsType = {
    on: boolean
}

function OnOff(props: OnOffPropsType) {
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display:'inline-block',
        padding:'2px',
        backgroundColor: props.on ? 'green' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '2px',
        display:'inline-block',
        padding:'2px',
        backgroundColor: props.on ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        marginLeft: '5px',
        display:'inline-block',
        backgroundColor: props.on ? 'green' : 'red'
    };
    return (
        <div>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

export default OnOff;