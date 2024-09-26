import { Link } from "react-router-dom";

export default function Header() {
  // console.log("Header called");
  return (
    <>
      <header className="header-container">
        <div className="header-content">
          <h2 className="title">
            <Link to={"/"}>Where in the world?</Link>
          </h2>
          <p className="theme-changer">
            <i className="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode
          </p>
        </div>
      </header>
    </>
  );
}
