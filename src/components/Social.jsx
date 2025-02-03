import React from "react";

const Social = () => {
  return (
    <div className="flex gap-3">
      <div className="h-12 w-12 bg-black-300 border border-black-200 rounded-full">
        <a href="https://github.com/TejasBobade" target="_blank">
          <img
            src="/assets/github.svg"
            alt="github"
            className="w-1/2 h-1/2 mt-3 ml-3"
          />
        </a>
      </div>
      <div className="h-12 w-12 bg-black-300 border border-black-200 rounded-full">
        <a href="https://x.com/TejasBobad" target="_blank">
          <img
            src="/assets/x.png"
            alt="twitter"
            className="w-1/2 h-1/2 mt-3 ml-3"
          />
        </a>
      </div>
      <div className="h-12 w-12 bg-black-300 border border-black-200 rounded-full">
        <a href="https://www.linkedin.com/in/tejas-bobade" target="_blank">
          <img
            src="/assets/linkedin.png"
            alt="linkedin"
            className="w-1/2 h-1/2 mt-3 ml-3"
          />
        </a>
      </div>
      <div className="h-12 w-12 bg-black-300 border border-black-200 rounded-full">
        <a href="https://www.instagram.com/tejasbobade" target="_blank">
          <img
            src="/assets/instagram.png"
            alt="instagram"
            className="w-1/2 h-1/2 mt-3 ml-3"
          />
        </a>
      </div>
    </div>
  );
};

export default Social;
