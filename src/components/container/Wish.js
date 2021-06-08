import React, { useContext, useEffect, useState } from "react";
import { wishListContext } from "./DetailsRouter";
import "../../styles/files.css";
import "../../styles/info.css";
import { Result } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
const Wish = () => {
  const [wishList, setWishList] = useContext(wishListContext);
  localStorage.setItem("wishList", wishList);

  const deleteHandler = (e, clickedItem) => {
    e.preventDefault();
    let newList = wishList.filter((item) => item.name !== clickedItem);
    setWishList(newList);
    localStorage.setItem("wishList", newList);
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
            <Result status="404" subTitle="Sorry, your Wish-list is Empty.." />
          </div>
        )}
        {wishList.length > 0 &&
          wishList.map((ele, idx) => (
            <div className="card" key={idx}>
              <a
                href={ele.url}
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginBottom: "1px",
                }}
              >
                {ele.name}{" "}
              </a>
              <DeleteTwoTone
                style={{ height: "15px" }}
                className={ele.name}
                onClick={(e) => {
                  deleteHandler(e, ele.name);
                }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Wish;
