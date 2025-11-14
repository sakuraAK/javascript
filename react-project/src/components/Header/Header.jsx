import  "./Header.css";
import reactImg from "../../assets/react.svg"

function Header() {
  return (
    <>
        <header>
            <img src={reactImg} alt="React image"></img>
            <h1>React Essentials</h1>
            <p>
                Fundamental React concepts you will need for almost any app you are going to build!
            </p>
        </header>
    </>
  );
}


export default Header;
