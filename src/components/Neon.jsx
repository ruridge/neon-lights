import React from "react";
import PropTypes from "prop-types";
import "./Neon.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const COLORS = {
  DEFAULT: "default",
  RED: "red",
  GREEN: "green",
  BLUE: "blue",
};
const COLOR_MAP = {
  [COLORS.DEFAULT]: "",
  [COLORS.RED]: "Neon-red",
  [COLORS.GREEN]: "Neon-green",
  [COLORS.BLUE]: "Neon-blue",
};

function Neon(props) {
  return (
    <div className={classNames("Neon", COLOR_MAP[props.color])}>
      {props.children}
    </div>
  );
}

Neon.color = COLORS;

Neon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(COLORS)),
};

export { Neon };
