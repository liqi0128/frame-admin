import React, { useState, useCallback } from 'react';
 
const set = new Set();
 
function Callback() {
    const [count, setCount] = useState(1);
    const [val, setVal] = useState('');
    // console.log('Callback组件');
    const callback = useCallback(() => {
        console.log(count);
    }, [count]);
    set.add(callback);
 
 
    return <div>
        <h4>{count}</h4>
        <h4>{set.size}</h4>
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={callback}>callback</button>
            <input value={val} onChange={event => setVal(event.target.value)}/>
        </div>
    </div>;
}



function UseCallback(){
    return <div>
        <h2>useCallback</h2>
        <Callback/>
    </div>
}

export default UseCallback