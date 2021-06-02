import React, {useState, useEffect} from 'react';

const A = () => {
    const [count, setCount]=useState(0);

    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
};

export default A;