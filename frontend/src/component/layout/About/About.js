import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";


const About = () => {
  const visitSocials = () => {
    window.location = "https://github.com/";
  };

  return (
    <div className="aboutSectionWrapper">
      <div className="aboutSection">
        <div></div>
        <div className="aboutSectionGradient"></div>
        <div className="aboutSectionContainer">
          <Typography component="h1">Administrators</Typography>
          <div>
            <div>
              <Avatar
                style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                src="https://avatars.githubusercontent.com/u/71697033?v=4"
                alt="Founder"
              />
              <Typography><b>Yves Christian Casio</b></Typography>
              <Button onClick={visitSocials} color="primary">
                Visit Socials
              </Button>
              
              <Avatar
                style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                src="https://res.cloudinary.com/dgthmx0xc/image/upload/v1677571279/Villaruel_Adrian_Julius_ruvrlt.jpg"
                alt="Founder"
              />
              <Typography><b>Adrian Julius Villaruel</b></Typography>
              <Button onClick={visitSocials} color="primary">
                Visit Socials
              </Button>

              <Avatar
                style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                src="https://res.cloudinary.com/dgthmx0xc/image/upload/v1677571292/pat_ln6d6v.jpg"
                alt="Founder"
              />
              <Typography><b>Patricia Caguimbal</b></Typography>
              <Button onClick={visitSocials} color="primary">
                Visit Socials
              </Button>

              <Avatar
                style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                src="https://res.cloudinary.com/dgthmx0xc/image/upload/v1677571251/Breetch_v0kmgd.jpg"
                alt="Founder"
              />
              <Typography><b>Breech Son</b></Typography>
              <Button onClick={visitSocials} color="primary">
                Visit Socials
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
