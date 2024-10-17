// ini page untuk manage seperti navbar dan sebagainya

import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      {/* membuat navbarnya adalah di bagian atas */}
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
      <p />
      {/* ini untuk menampilkan element pada router nya */}
      <Outlet />
    </>
  );
}

export default RootLayout;
