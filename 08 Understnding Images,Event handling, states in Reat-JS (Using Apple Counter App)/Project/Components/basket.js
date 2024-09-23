export default function Basket({ number, name, title }) {
	return (
		<div className="basket" title={title}>
			<h1>
				{" "}
				<span>{number}</span> Apples
			</h1>
			<h2>{name}</h2>
		</div>
	);
}
