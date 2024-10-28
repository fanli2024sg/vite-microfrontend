import { Link } from "react-router-dom";

function Component() {
  return (
    <div>
      Remote - Page1
      <br />
      <Link to={"/app1/page2"}>go to page2</Link>
    </div>
  );
}

export { Component };
