import React, {useContext} from 'react';
import '../styles/info.css'
import {wishListContext} from './DetailsRouter';
const Info = (props) => {
    const [wishList,setWishList] = useContext(wishListContext);

    const wishHandler =async  ()=>{
        await setWishList([...wishList,{'name':props.repoName, 'url':props.url}]);
        console.log(wishList);
    }
    return (
        <div className="card" >
            <a href={props.url} style={{textDecoration:"none", color:"black",marginBottom:"1px"}}>{props.repoName}</a>
            {props.dis!==null && <h5>{props.dis}</h5>}
            {props.lang!==null && <h4>language: {props.lang}</h4>}
            <div className='selector' onClick={wishHandler}/>
        </div>
    );
};

export default Info;