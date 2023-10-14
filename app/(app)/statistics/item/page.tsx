"use client";
import { useCallGetApi } from "@/hooks/useCallApi";
import React, { useEffect, useState } from "react";

type Props = {};

const Item = (props: Props) => {
  const [nodes, callNodes] = useCallGetApi("/node/all");

  useEffect(() => {
    callNodes();
  }, [callNodes]);

  console.log(nodes);

  return (
    <div>
      <div className=" bg-white p-4 my-4">
        <h3 className=" font-bold text-lg">Estadísticas de Item</h3>
      </div>
      <div className="bg-white p-4"></div>
    </div>
  );
};

export default Item;
