import { Link } from "react-router-dom";

function Component() {
  return (
    <div>
      Remote - Page3
      <br />
      <Link to={"/app1"}>go back</Link>
    </div>
  );
}

export { Component };
