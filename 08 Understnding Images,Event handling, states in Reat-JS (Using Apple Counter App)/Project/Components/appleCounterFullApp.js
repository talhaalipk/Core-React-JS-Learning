import Basket from "./basket";
import ArrowImage from "./arrowImage";
import leftArrowImg from "../assets/images/leftArrow.png";
import rightArrowImg from "../assets/images/rightArrow.png";
import "./styles/styles.css";
import { useState } from "react";

export default function AppleCounterFullApp() {
	//states
	const totalApples = 20;
	const [LeftApples, setLeftApples] = useState(20);
	const [rightApples, setRightApples] = useState(totalApples - LeftApples);

	//left arrow click function
	const leftClick = () => {
		console.log("left clicked");

		if (LeftApples < totalApples) {
			// setLeftApples(LeftApples+1)
			// setRightApples(rightApples-1)

			setLeftApples((preVau) => {
				return preVau + 1;
			});
			setRightApples((preVaue) => {
				return preVaue - 1;
			});
		}
	};

	//right arrow click function
	const rigtClick = () => {
		console.log("right clicked");
		if (rightApples < totalApples) {
			// setLeftApples(LeftApples-1)
			// setRightApples(rightApples+1)

			setLeftApples((preVaue) => {
				return preVaue - 1;
			});
			setRightApples((preVaue) => {
				return preVaue + 1;
			});
		}
	};

	//Return
	return (
		<section className="fullAppSection">
			<Basket name={"baskit 1"} title={"left Baskit"} number={LeftApples} />
			<ArrowImage
				src={leftArrowImg}
				title={"left Arrow"}
				clickFunction={leftClick}
			/>
			<ArrowImage
				src={rightArrowImg}
				title={"Right Arrow"}
				clickFunction={rigtClick}
			/>
			<Basket name={"baskit 2"} title={"Right Baskit"} number={rightApples} />
		</section>
	);
}
