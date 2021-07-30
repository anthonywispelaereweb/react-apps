import { Link } from "react-router-dom";
const NotFround = () => {
  const requestUrl = document.location.pathname.substr(
    1,
    document.location.pathname.length
  );
  return (
    <div className="container mb-4">
      <h1>Page "{requestUrl}" not Found</h1>
      <Link to="/">
        <input type="button" value="Home" />
      </Link>
    </div>
  );
};
export default NotFround;
