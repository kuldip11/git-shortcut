import React, {useContext, useEffect, useState} from 'react';
import {wishListContext} from './DetailsRouter';
import '../styles/files.css';
import '../styles/info.css';
const Wish = () => {
    const [wishList] = useContext(wishListContext);
    const [state,setState] = useState(0);
    useEffect(()=>{setState(state+1)},[wishList]);
    return (
        <div className="discription">
            <div className="data-box" >
            <h1>{wishList}</h1>
                {wishList.map((ele,idx)=>{
                    <div className="card">
                        <p>{idx}</p>
                        <a href={ele.url} style={{textDecoration:"none", color:"black",marginBottom:"1px"}}>{ele.name}</a>
                        <div className='selector' />
                    </div>
                })}
            </div>
        </div>
    );
};

export default Wish;