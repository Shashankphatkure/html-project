import React from "react";

const sizeClasses = {
  txtMontserratRegular18: "font-montserrat font-normal",
  txtMontserratBold15: "font-bold font-montserrat",
  txtMontserratBold24: "font-bold font-montserrat",
  txtMontserratRegular36: "font-montserrat font-normal",
  txtMontserratRegular48: "font-montserrat font-normal",
  txtMontserratRegular15: "font-montserrat font-normal",
  txtMontserratRegular56: "font-montserrat font-normal",
  txtMontserratMedium15: "font-medium font-montserrat",
  txtComfortaaRegular2844: "font-comfortaa font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
