// IMPROVE SEARCH ENGINE
import { useEffect, useState } from "react";
import posts from "../posts.json";
import Article from "../components/article";
import Search from "../components/search";
import ExternalData from "../components/externalData";

function Homepage() {
  const [wasup, setWasup] = useState(posts);
  const [jumlahFind, taroJumlahFind] = useState(0);
  const [externalData, setExternalData] = useState([]);
  const ambilDariFile = (value) => {
    const filterDataJSON = posts.filter((data) => data.judul.includes(value));
    setWasup(filterDataJSON);
    taroJumlahFind(filterDataJSON.length);
  };

  useEffect(() => {
    fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((response) => response.json())
      .then((response) => setExternalData(response));
  }, []);

  useEffect(() => {
    console.log("Ada perubahan pada post");
  }, [wasup]);

  return (
    <>
      <h1>Selamat Datang di Artikel Kami!</h1>
      <small>Data yang ditemukan sebanyak : {jumlahFind}</small>
      <Search onSetSearch={ambilDariFile} />
      {wasup.map((elements) => {
        return (
          <>
            <Article
              title={elements.judul}
              genre={elements.genre}
              tags={elements.tags}
              isFact={elements.isFact}
            />
          </>
        );
      })}
      <hr />
      {/* <h2>External Data</h2>
      {externalData.map((e) => {
        return (
          <>
            <p key={e.id}>Provinsi: {e.name}</p>
          </>
        );
      })} */}
      <ExternalData data={externalData} />
    </>
  );
}

export default Homepage;
