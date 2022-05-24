import React from "react";
import ButtonClick from "./ButtonClick";

import { createPopper } from "@popperjs/core";
import { useState } from "react";

export default function Popcorn() {
  const [placement, setPlacement] = useState("top");

  const popcorn = document.querySelector("#popcorn");
  const tooltip = document.querySelector("#tooltip");

  createPopper(popcorn, tooltip, {
    placement: placement,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  return (
    <div className="container text-center overscroll-x-auto">
      <div className="flex justify-center gap-8">
        <ButtonClick
          className=""
          handleClick={() => {
            setPlacement("top-start");
          }}
        />
        <ButtonClick
          className=""
          handleClick={() => {
            setPlacement("top");
          }}
        />
        <ButtonClick
          className=""
          handleClick={() => {
            setPlacement("top-end");
          }}
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center flex-col gap-8">
          <ButtonClick
            className=""
            handleClick={() => {
              setPlacement("left-start");
            }}
          />
          <ButtonClick
            className=""
            handleClick={() => {
              setPlacement("left");
            }}
          />
          <ButtonClick
            className=""
            handleClick={() => {
              setPlacement("left-end");
            }}
          />
        </div>

        <div id="popcorn" className="m-40"></div>
        <div id="tooltip" role="tooltip">
          POPCORN
          <div id="arrow" data-popper-arrow></div>
        </div>

        <div className="flex justify-center flex-col gap-8">
          <ButtonClick
            className=""
            handleClick={() => {
              setPlacement("right-start");
            }}
          />
          <ButtonClick
            className=""
            handleClick={() => {
              setPlacement("right");
            }}
          />
          <ButtonClick
            className=""
            handleClick={() => {
              setPlacement("right-end");
            }}
          />
        </div>
      </div>
      <div className="flex justify-center gap-8">
        <ButtonClick
          className=""
          handleClick={() => {
            setPlacement("bottom-start");
          }}
        />
        <ButtonClick
          className=""
          handleClick={() => {
            setPlacement("bottom");
          }}
        />
        <ButtonClick
          className=""
          handleClick={() => {
            setPlacement("bottom-end");
          }}
        />
      </div>
    </div>
  );
}
