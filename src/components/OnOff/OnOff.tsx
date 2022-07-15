import React, {useState} from 'react';

function OnOff() {
    let [on, setOn] = useState(false);
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '2px',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        marginLeft: '5px',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red'
    };
    return (
        <div>
            <div style={onStyle} onClick={() => !on && setOn(true)}>On</div>
            {/*чтобы избежать двойного рендеринга можно проверить до вызова сетера какое значение находится в on*/}
            <div style={offStyle} onClick={() => on && setOn(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

export default OnOff;