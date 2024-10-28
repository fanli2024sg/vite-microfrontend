import { Link } from "react-router-dom";

function Component() {
  return (
    <div>
      Remote - Page0
      <br />
      <Link to={"/app1/page1"}>go to page1</Link>
    </div>
  );
}

export { Component };
