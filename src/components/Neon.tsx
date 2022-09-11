import clsx from "clsx";
import "./Neon.css";

const COLORS = {
  DEFAULT: "default",
  RED: "red",
  GREEN: "green",
  BLUE: "blue",
} as const;

const COLOR_MAP = {
  [COLORS.DEFAULT]: "",
  [COLORS.RED]: "Neon-red",
  [COLORS.GREEN]: "Neon-green",
  [COLORS.BLUE]: "Neon-blue",
};

type Color = typeof COLORS[keyof typeof COLORS];
function Neon(props: { children: React.ReactNode; color: Color }) {
  return (
    <div className={clsx("Neon", COLOR_MAP[props.color])}>{props.children}</div>
  );
}

export { Neon };
