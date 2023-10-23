import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextBox(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");

  };

  const handletextClear = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };
  const handletoCase = () => {
    let newtext = text
      .toUpperCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toLowerCase() + word.slice(1);
      })
      .join(" ");
    setText(newtext);
    props.showAlert("Converted to toggalcase!", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };
  const handleExtraSpace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };
  const [text, setText] = useState("");
  return (
    <div className="container">
      <h2 className={`my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
        {props.heading}
      </h2>
      <div className="my-5">
        <textarea
          className={`form-control bg-${
            props.mode === "dark" ? "dark" : "light"
          } text-${props.mode === "light" ? "dark" : "light"}`}
          value={text}
          onChange={handleOnChange}
          id="myText"
          rows="8"
        ></textarea>
      </div>
      <div className="my-3 d-flex justify-content-center align-items-center flex-wrap">
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0}  onClick={handleUpCase}>
          Convert To Uppercase
        </button>
        <button className="btn btn-success mx-1 my-1" disabled={text.length===0}  onClick={handleLoCase}>
          Convert To LowerCase
        </button>
        <button className="btn btn-danger mx-1 my-1" disabled={text.length===0}  onClick={handletextClear}>
          Clear Text
        </button>
        <button className="btn btn-warning mx-1 my-1" disabled={text.length===0}  onClick={handletoCase}>
          Convert To Toggalcase
        </button>
        <button className="btn btn-secondary mx-1 my-1" disabled={text.length===0}  onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-info mx-1 my-1" disabled={text.length===0}  onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className={`container  text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h5 class="my-2">Your text summary</h5>
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
          words and {text.length} characters
        </p>
        <h5 class="my-1">Preview</h5>
        <p class="mt-1">{text.length === 0 ? "Nothing To Preview" : text}</p>
        <div className="my-2">
          {text.split(/\s+/).filter((element) => element.length !== 0).length *
            0.08}{" "}
          minutes read
        </div>
      </div>
    </div>
  );
}
TextBox.propTypes = {
  heading: PropTypes.string,
};

TextBox.defaultProps = {
  heading: "Enter Your Text",
};
