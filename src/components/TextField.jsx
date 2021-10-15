/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from "react";
import classNames from "classnames";
import { useField, ErrorMessage } from "formik";
import Input from "./Input";

export default function TextField({ labelText, name, type, ...attr }) {
  const [field, meta] = useField({ name, type });
  const [focused, setFocused] = useState(false);
  const textFieldStyle = classNames(
    "w-full",
    "border",
    "rounded-lg",
    "border-blue-800",
    "p-2",
    "outline-none",
    "focus:bg-blue-500",
    "focus:text-white"
  );
  const placeholderStyle = classNames({
    "placeholder-transparent": focused,
  });
  const labelRef = useRef(null);

  function handleStyle() {
    setFocused((prev) => !prev);
    labelRef.current.style.display = "inline";
  }

  return (
    <div className="mb-5 w-full h-20">
      <label
        ref={labelRef}
        htmlFor={name}
        className={`text-blue-700 ${placeholderStyle}`}
      >
        {labelText}
      </label>
      <div className="flex items-center justify-center w-full">
        <Input
          // eslint-disable-next-line react/jsx-no-bind
          onClick={handleStyle}
          className={`${textFieldStyle} ${placeholderStyle}`}
          name={name}
          type={type}
          {...attr}
          {...field}
        />
      </div>

      <div>
        <ErrorMessage
          name={field.name}
          component="span"
          className="text-red-400"
        />
      </div>
    </div>
  );
}
