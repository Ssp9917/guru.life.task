import React, { useState } from "react";

const Contact = () => {
  const [buttonClass, setButtonClass] = useState("");

  return (
    <>
      <div className="w-full flex justify-center items-center h-screen ">
        <button
          onClick={() => {
            setButtonClass("animation"),
              setTimeout(() => {
                setButtonClass("");
              }, 2000);
          }}
          className={`bg-red-500 text-white border pl-5  pt-3 pe-5 pb-3 rounded-full ${buttonClass}`}
        >
          Click me
        </button>
      </div>
    </>
  );
};

export default Contact;
