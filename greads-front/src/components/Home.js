import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <aside className="splash-page">
      <Link to="/books">
        <div className="splash-card">
          <h3>Books</h3>
        </div>
      </Link>

      <Link to="/authors">
        <div className="splash-card">
          <h3>Authors</h3>
        </div>
      </Link>
    </aside>
  );
};

export default Home;
