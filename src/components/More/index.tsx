import { Link } from "react-router-dom";
import "./style.scss";

function More() {
  return (
    <div className="more">
      <h1>Get more news based on your interests</h1>
      <button>
        <Link to={"https://news.google.com/home?hl=en-US&gl=US&ceid=US%3Aen"}>
          For you
        </Link>
      </button>
    </div>
  );
}

export default More;
