import { FC } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages/Home";

export const Application: FC = () => {
  const home = <Home />;
  const about =  <Home />;

  return (
    <div>
      <nav>
        <Link data-testid="link-home" to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/about" element={about} />
        <Route path="/" element={home} />
      </Routes>
    </div>
  );
};
