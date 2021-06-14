import React, { useContext, useState } from "react";
import "../../styles/header.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import { GithubFilled } from "@ant-design/icons";
import UserPicture from "./UserPicture";
import { infoContext } from "../../App";

const Header = () => {
  const [state, setState] = useState("");
  const [user, setUser, userDetails, setUserDetails, page, setPage] =
    useContext(infoContext);

  const urlHandler = () => {
    if (state !== "") {
      fetch(`https://api.github.com/users/${state}`)
        .then((res) => res.json())
        .then((res) => setUserDetails(res))
        .then(() => setUser(state))
        .catch((err) => alert(err.message));
    } else {
      alert("Invalid user name!!");
    }
  };

  return (
    <div className="header-container">
      <GithubFilled style={{ fontSize: '350%', marginLeft:"20px"}} />
      <input
        className="repo"
        onChange={(e) => {
          setState(e.target.value);
        }}
        placeholder="Enter username"
      />
      <button type="submit" name="Submit" onClick={urlHandler}>
        Search
      </button>

      {userDetails !== "" && (
        <div>
          <a className="name" href={userDetails.html_url} target="_blank">
            {" "}
            {userDetails.login}{" "}
          </a>
          <UserPicture
            name={userDetails.name}
            avatar_url={userDetails.avatar_url}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
