import React from "react";
import accountLogo from "../images/noun-account.png";
import "./Top.css";

function Top() {
  const styles = {
    accountLogo: {
      width: 40,
      height: 40,
    },
  };
  return (
    <div className="nav">
      <h1>market finder</h1>
      <img src={accountLogo} alt="accountLogo" style={styles.accountLogo} />
    </div>
  );
}

export default Top;
