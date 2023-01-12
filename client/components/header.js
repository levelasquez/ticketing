import Link from "next/link";

const Header = ({ currentUser }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          GitTix
        </Link>

        <div className="d-flex justify-content-end">
          <ul className="nav d-flex align-items-center">
            {currentUser ? "Sign out" : "Sign in/up"}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
