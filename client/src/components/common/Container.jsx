import React from "react";
const Container = ({ children, ClassName }) => {
  console.log("🚀 ~ Container ~ ClassName:", ClassName)
  return <div className={`w-full px-[10%] ${ClassName}`}>{children}</div>;
};
export default Container;
