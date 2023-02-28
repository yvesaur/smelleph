import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:smellefragrances@gmail.com">
        <Button style={{backgroundColor: "rgba(0, 0, 0, 0.8)", color: "white"}}>
          Email: smellefragrances@gmail.com<br/><br/>
          Contact: 09271314567<br/><br/>
          Address: Quirino Highway corner Regalado<br/>
          Avenue, Barangay Greater Lagro
        </Button>
      </a>
    </div>
  );
};

export default Contact;
