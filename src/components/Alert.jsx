import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div className="absolute top-14 left-0 right-0 flex justify-center items-center z-20 animate-bounce">
      <div
        className={`${
          type === "danger" ? "bg-red-500" : "bg-blue-400"
        } py-2 px-4 text-indigo-100 leading-none rounded-2xl flex flex-col items-center justify-center w-fit`}
        role="alert"
      >
        <p
          className={`${
            type === "danger" ? "bg-red-500" : "bg-blue-400"
          } flex rounded-full uppercase px-2 py-1 font-bold text-xl `}
        >
          {type === "danger" ? "Oh no!" : "Yayy!"}
        </p>
        <p className="mr-2 text-lg text-left flex-auto">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
