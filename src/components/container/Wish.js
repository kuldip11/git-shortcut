import React, { useContext, useEffect, useState } from "react";
import { wishListContext } from "./DetailsRouter";
import "../../styles/files.css";
import "../../styles/info.css";
import { Result } from "antd";
import { DeleteOutlined  } from "@ant-design/icons";
// import 'antd/dist/antd.css';
// import { message,space } from 'antd';

const Wish = () => {
  const [wishList, setWishList] = useContext(wishListContext);
  const deleteHandler = (e, clickedItem) => {
    e.preventDefault();
    let newList = wishList.filter((item) => item.name !== clickedItem);
    setWishList(newList);
    // message.success('repository successfully deleted');
  };

  return (
    <div className="discription">
      <div className="data-box">
        {wishList.length === 0 && (
          <div
            style={{
              display: "flex",
              height: "73vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Result status="404" subTitle="Sorry, your Wishlist is Empty..." />
          </div>
        )}
        {wishList.length > 0 &&
          wishList.map((ele, idx) => (
            <div className="card" key={idx}>
              <span>
                <a
                  href={ele.url}
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginBottom: "1px",
                    fontWeight:"normal"
                  }}
                >
                  {ele.name}{" "}
                </a>
                <span>
                  <DeleteOutlined
                    style={{ height: "15px", position:"absolute", right: "10px", top: "9px"}}
                    className={ele.name}
                    onClick={(e) => {
                      deleteHandler(e, ele.name);
                    }}
                  />
                </span>
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Wish;
