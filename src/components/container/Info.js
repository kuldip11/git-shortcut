import React, { useContext, useState } from "react";
import "../../styles/info.css";
import { wishListContext } from "./DetailsRouter";
const Info = (props) => {
  const [wishList, setWishList] = useContext(wishListContext);
  const [state, setState] = useState(true);
  const wishHandler = async () => {
    const key = props.repoName;
    await setWishList([...wishList, { name: props.repoName, url: props.url }]);
    setState(!state);
  };
  return (
    <div className="card">
      <a
        href={props.url}
        target="_blank"
        style={{ textDecoration: "none", color: "black", marginBottom: "1px" }}
      >
        {props.repoName}
      </a>
      {props.dis !== null && <h5>{props.dis}</h5>}
      {props.lang !== null && <h4>language: {props.lang}</h4>}
      <div className={state ? "selector" : "selected"} onClick={wishHandler} />
    </div>
  );
};

export default Info;
