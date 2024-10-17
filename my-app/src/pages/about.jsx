// adalah halaman fungsi about
import { useState } from "react";
import Wadap from "../components/externalData";
import { useEffect } from "react";
function About() {
  const [externalData, setExternalData] = useState([]);
  useEffect(() => {
    fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((response) => response.json())
      .then((response) => setExternalData(response));
  }, []);

  return (
    <>
      <h1>Ini adalah halaman about</h1>
      <hr />
      <Wadap data={externalData} />
    </>
  );
}

export default About;
