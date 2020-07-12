import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faBeer,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

function Nav({ create, setCreate }) {
  return (
    <header>
      <h1 className="title">
        Toms Home Brew <FontAwesomeIcon icon={faBeer} />
      </h1>
      <div className={create ? "add-new rotate" : "add-new"}>
        <FontAwesomeIcon
          icon={faPlusCircle}
          onClick={() => setCreate(!create)}
        />
      </div>
    </header>
  );
}

export default Nav;
