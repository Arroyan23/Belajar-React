// ini adalah halaman untuk mengatur bagian blogs
// dengan json dummy
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// buat useLoaderData dari router react
// lalu gunakan useloader data kepost
import { useLoaderData } from "react-router-dom";

function Blogs() {
  const externalData = useLoaderData();

  return (
    <>
      <h2>Ini adalah Halaman Data dummy nya</h2>
      {externalData.map((item, index) => {
        return (
          <>
            <Link to={`/blogs/${item.id}`}>- {item.title}</Link>
            <br />
          </>
        );
      })}
    </>
  );
}

export default Blogs;
