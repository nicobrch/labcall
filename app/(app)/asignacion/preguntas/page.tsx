"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Accordion from "./Accordion";
import { useCallGetApi } from "@/hooks/useCallApi";
import { INode } from "@/backend/interfaces/node";

const CrearCuestionario = () => {
  const [nodes, callNodes, statusNodes, errorNodes] =
    useCallGetApi("/node/all");

  useEffect(() => {
    callNodes();
  }, [callNodes]);

  const axisWithAbility = (node: INode) => {
    const axis = node.axis;
    const ability = node.ability;
    const axisWithAbility = axis + " - " + ability;
    return axisWithAbility;
  };

  return (
    <div>
      <Breadcrumb pageName="Items de preguntas" />

      <div className="grid grid-cols-1 ">
        <div className="flex flex-col gap-9 dark:border-strokedark dark:shadow-none">
          {nodes?.map((node: INode, index: number) => {
            return (
              <Accordion
                key={index}
                question={axisWithAbility(node)}
                node_id={String(node.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CrearCuestionario;
