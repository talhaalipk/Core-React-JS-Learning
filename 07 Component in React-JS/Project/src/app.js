import { createRoot } from "react-dom/client";
import "./styles.css";

const root = createRoot(document.querySelector("#root"));

//React Component
function Card({ id, quote, author }) {
	// its destructuring
	return (
		<div className="Quote" key={id}>
			<h1>{quote}</h1>
			<p>
				Author : <span>{author}</span>
			</p>
		</div>
	);
}

// root.render(<Card id={1} quote={"Life isn't about getting and having, it's about giving and being."} author={"Kevin Kruse"} />);

fetch("https://dummyjson.com/quotes")
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		const Element = data.quotes.map((ele) => {
			return <Card id={ele.id} quote={ele.quote} author={ele.author} />;
		});

		root.render(Element);
	});


