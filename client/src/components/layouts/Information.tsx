import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// Icons
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import MailOutlinedIcon from "@material-ui/icons/MailOutlined";

const useStyles = makeStyles({
  root: {
    fontSize: "64px",
  },
});

const Information: React.FC = () => {
  const classes = useStyles();

  return (
    <section className="information">
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-4">
            <div className="information__location">
              <div className="information__icon-wrapper">
                <LocationOnOutlinedIcon
                  className={classes.root}
                  classes={{
                    root: "information__icon",
                  }}
                />
              </div>
              <p className="information__icon-text">1</p>
            </div>
          </div>
          <div className="col-6 col-sm-4">
            <div className="information__icon-wrapper">
              <PhoneOutlinedIcon
                className={classes.root}
                classes={{
                  root: "information__icon",
                }}
              />
            </div>
            <p className="information__icon-text">2</p>
          </div>
          <div className="col-6 offset-3 col-sm-4 offset-sm-0">
            <div className="information__icon-wrapper">
              <MailOutlinedIcon
                className={classes.root}
                classes={{
                  root: "information__icon",
                }}
              />
            </div>
            <p className="information__icon-text">3</p>
          </div>
          <div className="col-12">
            <div className="information__description">
              <header>
                <h2>Zapraszamy do kontaktu</h2>
              </header>
              <p>Realizujemy zamówienia na terenie Małopolski i ...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
