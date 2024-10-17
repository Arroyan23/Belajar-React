// ini page untuk manage seperti navbar dan sebagainya

import { Link, Outlet, NavLink } from "react-router-dom";
// membuat link untuk menambahkan separasi
// sehingga ada dynamic style nya
import "../style/index.css";

function RootLayout() {
  return (
    <>
      {/* membuat navbarnya adalah di bagian atas */}
      {/* menggunakan nav link sama seperti menggunakan onclick di js */}
      {/* dengan hanya 1 perintah maka react sudah membuatkan navigasi */}
      {/* yang stylenya dinamis untuk semua navlink */}
      <NavLink
        className={({ isActive, isPending }) => {
          return isActive ? "active" : isPending ? "pending" : "";
        }}
        to="/"
      >
        Home
      </NavLink>{" "}
      | <NavLink to="/about">About</NavLink> |{" "}
      <NavLink to="/blogs">Blogs</NavLink>
      <p />
      {/* ini untuk menampilkan element pada router nya */}
      <Outlet />
    </>
  );
}

export default RootLayout;
