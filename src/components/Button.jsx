/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import classNames from "classnames";
import { bgColor, hoverBgColor } from "../helpers/getColor";

export default function Button({ buttonName, color, width = "full", ...attr }) {
  const buttonStyle = classNames(
    `w-${width}`,
    "mb-1",
    "mt-1",
    "px-6",
    "py-2",
    "text-xs",
    "font-medium",
    "leading-6",
    "text-center",
    "text-white",
    "uppercase",
    "transition",
    bgColor[color] ? bgColor[color] : `bg-${color}-600`,
    "rounded",
    "shadow",
    "ripple",
    "hover:shadow-lg",
    hoverBgColor[color] ? hoverBgColor[color] : `hover:bg-${color}-800`,
    "focus:outline-none"
  );
  return (
    <button className={buttonStyle} {...attr}>
      {buttonName}
    </button>
  );
}
