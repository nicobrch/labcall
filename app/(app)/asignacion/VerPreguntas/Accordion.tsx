// components/Accordion.tsx
import Loading from "@/app/loading";
import { IQuestion } from "@/backend/interfaces/question";
import QuestionsByNode from "@/components/Lists/QuestionsByNode";
import ArrowTop from "@/components/icons/ArrowTop";
import CloseIcon from "@/components/icons/CloseIcon";
import { useCallGetApi } from "@/hooks/useCallApi";
import classNames from "classnames";
import React, { ReactNode, useEffect, useState } from "react";

var Latex = require("react-latex");

type AccordionProps = {
  question: string;
  node_id: string;
};

const Accordion = ({ question, node_id }: AccordionProps) => {
  const mathJaxConfig = {
    TeX: {
      extensions: [
        "AMSmath.js",
        "AMSsymbols.js",
        "noErrors.js",
        "noUndefined.js",
      ],
    },
  };
  const [active, setActive] = useState(false);
  const [questionsByNode, callQuestions, statusQuestions, errorQuestions] =
    useCallGetApi("/question/by-node_id?node_id=" + node_id);
  useEffect(() => {
    callQuestions();
  }, [callQuestions]);
  const buildQuestions = (questionsByNode: IQuestion[]) => {
    return (
      <Latex>
        <div className="flex flex-col gap-9 dark:border-strokedark dark:shadow-none">
          <ul>
            {questionsByNode?.map((question, index) => (
              <li key={index}>
                <strong>{index + 1}.</strong> {question.questionText}
              </li>
            ))}
          </ul>
        </div>
      </Latex>
    );
  };

  if (!questionsByNode) {
    return <Loading />;
  }

  return (
    <div className="rounded-md border border-stroke p-4 dark:border-strokedark dark:shadow-none sm:p-6 bg-white dark:bg-transparent gap-9 shadow-9">
      <button
        className={classNames({
          "flex w-full items-center gap-1.5 sm:gap-3 xl:gap-6": true,
          active: active,
        })}
        onClick={() => setActive(!active)}
      >
        <div className="flex h-10.5 w-full max-w-10.5 items-center justify-center rounded-md bg-[#F3F5FC] dark:bg-meta-4">
          <ArrowTop active={active} />
        </div>
        <div>
          <h4 className="text-left text-title-xsm font-medium text-black dark:text-white">
            {question}
          </h4>
        </div>
      </button>
      <div
        className={classNames({
          "mt-5 ml-16.5 duration-200 ease-in-out": true,
          block: active,
          hidden: !active,
        })}
      >
        <p className="font-medium">
          <QuestionsByNode data={questionsByNode} />
        </p>
      </div>
    </div>
  );
};

export default Accordion;
