import React from "react";

export default function ArrowImage({ src, title ,clickFunction}) {
	return (
		<div className="arrowImage" onClick={clickFunction}>
			<img src={src} alt={title} title={title} />
		</div>
	);
}
