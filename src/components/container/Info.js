import React, { useContext, useState } from "react";
import "../../styles/info.css";
import { wishListContext } from "./DetailsRouter";
import { CheckCircleOutlined, CheckCircleFilled   } from "@ant-design/icons";

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
      <span>
          <a
            href={props.url}
            target="_blank"
            style={{ textDecoration: "none", color: "black", marginBottom: "1px" }}
            
          >
            {props.repoName}
          </a>
        <span>
          {state  && <CheckCircleOutlined style={{position:"absolute", right:"10px"}} onClick ={wishHandler} />}
          {!state && <CheckCircleFilled style={{position:"absolute", right:"10px"}}/>}
        </span>
      </span>
      {props.dis !== null && <h5 style={{fontFamily:"Segoe UI"}}>{props.dis}</h5>}
      {props.lang !== null && <h4>language: {props.lang}</h4>}
    </div>
  );
};

export default Info;
