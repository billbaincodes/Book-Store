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

      <div className="splash-card fade">
        <h3>Authors</h3>
      </div>
    </aside>
  );
};

export default Home;
