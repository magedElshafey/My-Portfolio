import React from "react";
import { social } from "../../../fakers/data";
const Social = () => {
  return (
    <div className="px-3 d-flex align-items-center gap-3 flex-wrap">
      {social.map((item, index) => (
        <a key={index} href={item.ref} target="_blank">
          <img alt="social/img" src={item.img} />
        </a>
      ))}
    </div>
  );
};

export default Social;
