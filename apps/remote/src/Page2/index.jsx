import { Link } from "react-router-dom";

function Component() {
  return (
    <div>
      Remote - Page2
      <br />
      <Link to={"/app1/page3"}>go to page3</Link>
    </div>
  );
}

export { Component };
