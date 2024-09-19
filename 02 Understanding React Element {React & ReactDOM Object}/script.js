/* First Element in react */

// const h1 = React.createElement(
//     "h1",
//     { style: {width: "50%", margin: "auto" } },
//     "My first React Element"
// );

// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(h1);

/* Creating caard using React.createElement() */

const card = React.createElement(
	"div",
	{
		id: "card",
		style: {
			width: "300px",
			height: "300px",
			borderRadius: "10px",
			backgroundColor: "#d079f5",
			display: "flex",
			flexDirection: "column",
			padding: "20px",
			margin: "120px auto",
		},
	},
	[
		React.createElement(
			"h1",
			{
				key: 1,
			},
			"React.createElement()"
		),
		React.createElement(
			"p",
			{
				key: 2,
			},
			"👋 Hello, I'm Talha Ali 🎓 Software Engineering Student @ Superior University 📚 Currently in my 4th Semester Happy coding! 🚀 👋 Hello, I'm Talha Ali 🎓 Software Engineering Student @ Superior University 📚 Currently in my 4th Semester Happy coding! 🚀  "
		),
		React.createElement(
			"button",
			{
				key: 3,
				style: {
					margin: "0px auto",
					width: "40%",
				},
			},
			"Contact Us"
		),
	]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(card);