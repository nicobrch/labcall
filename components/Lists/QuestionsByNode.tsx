import React, { useState, useEffect } from "react";
import ArrowTop from "../icons/ArrowTop";
import Alternativas from "./Alternativas";
import { MathJax } from "better-react-mathjax";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

interface IProps {
	data: any[];
}

const Question: React.FC<any> = (props) => {
	const { index, question } = props;
	const [active, setActive] = useState(false);

	return (
		<li key={index}>
			<div className="border-b mb-3 pb-1 flex flex-row">
				<div>
					<strong>{index + 1}.</strong>{" "}
					<Latex
						delimiters={[
							{ left: "$", right: "$", display: false },
							{ left: "\\[", right: "\\]", display: true },
							{ left: "\\", right: "\\", display: true }
						]}
					>
						{question.questionText}
					</Latex>
				</div>
				<div className="flex flex-row my-auto ml-3">
					<div className="flex h-10.5 w-full max-w-10.5 items-center justify-center rounded-md bg-[#F3F5FC] dark:bg-meta-4">
						<button onClick={() => setActive(!active)}>
							<ArrowTop active={active} />
						</button>
					</div>
				</div>
			</div>
			<div>
				<Alternativas data={[]} />
			</div>
		</li>
	);
};

const QuestionsByNode: React.FC<IProps> = (props) => {
	const { data } = props;

	return (
		<div className="flex flex-col gap-9 dark:border-strokedark dark:shadow-none">
			<ul>
				{data?.map((question, index) => (
					<Question key={question.id} index={index} question={question} />
				))}
			</ul>
		</div>
	);
};

export default QuestionsByNode;
