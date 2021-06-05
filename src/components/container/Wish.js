import React, {useContext, useEffect, useState} from 'react';
import {wishListContext} from './DetailsRouter';
import DeleteIcon from '@material-ui/icons/Delete';
import '../../styles/files.css';
import '../../styles/info.css';
const Wish = () => {
    const [wishList,setWishList] = useContext(wishListContext);
    const [state,setState] = useState(0);
    useEffect(()=>{setState(state+1)},[wishList]);

    return (
        <div className="discription">
            <div className="data-box" >
                {wishList.length===0 && <h4>No repository Found!!</h4>}
                {wishList.length>0 && wishList.map(ele=>(
                   <div className="card">
                        <a href={ele.url} style={{textDecoration:"none", color:"black",marginBottom:"1px"}}>{ele.name} </a>
                        <DeleteIcon style={{height:'15px'}} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wish;