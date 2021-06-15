import React, { useState, useContext } from "react";
import "../../styles/files.css";
import { infoContext } from "../../App";
import notFound from "../../svg/notFound.svg";
import 'antd/dist/antd.css';
import { message, space } from 'antd';
import debounce from "just-debounce-it";
let myStatus ;

const Issues = () => {
  const [user, setUser, userDetails, setUserDetails, repoList, setRepoList] = useContext(infoContext);
  const [state, setState] = useState("");
  const [result, setResult] = useState([]);
  const issueHandler = async (val) => {
    if (val !== "") {

      fetch(`https://api.github.com/repos/${user}/${val}/issues`)
        .then((res) => {myStatus=res.status; return res.json()})
        .then((res) => {setResult(res);console.log()})
        .then(() => setState(val))
        .then(() => {if(myStatus===404)message.warning("repository Not Found")})
    } else {
      message.warning("Enter Repository name");
    }
  };

  const debounceIssue = debounce(issueHandler, 1000);

  return (
    <div className="discription">
      <div className="data-box">
        <input
          className="issue"
          // onKeyDown={(e) => {
          //   if (e.key === "Enter") {
          //     setState(e.target.value);
          //     issueHandler(e.target.value);
          //   }
          // }}
          onChange={(text) => {debounceIssue(text.target.value)}}
          style={{ border: "1px solid rgb(71, 69, 69)", outline:"none" }}
          placeholder="Enter repository name"
        />
        <hr />
        {myStatus === 404 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              height: "30vh",
              width: "25vw",
              marginTop: "10vh",
            }}
          >
            <img src={notFound} alt="404" />
            <h3>No such Issue found!</h3>
          </div>
        )}
        {myStatus === 200 &&
          result.map((ele, idx) => (
            <div className="card" key={idx}>
              <a
                href={ele.html_url}
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginBottom: "1px",
                  fontFamily:"Segoe UI"
                }}
              >
              {ele.title}
              </a>
              <h4 style={{marginBottom:"2px"}}>state: {ele.state}</h4>
              <h5 style={{marginTop:"2px"}}>created_at: {ele.created_at.split("T")[0]}</h5>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Issues;
