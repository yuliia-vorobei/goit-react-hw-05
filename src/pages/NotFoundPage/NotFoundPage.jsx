import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <h2>Not found!</h2>
      <Link to="/">To Home Page</Link>
    </>
  );
}
