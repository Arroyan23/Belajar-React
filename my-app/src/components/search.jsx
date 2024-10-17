import { useState } from "react";
// tambahkan parameter props untuk mengambil value yang di inginkan oleh props html
function Search(props) {
  // masukkan value ke dalam homepage
  const [search, setSearch] = useState("");
  const onSetSearch = () => {
    // parameter setelah props harus sama dengan nanti yang dipanggil pada tag html
    // <Search onSetSearch={} />
    props.onSetSearch(search);
  };

  return (
    <>
      <div>
        Cari Artikel :{" "}
        <input onChange={(e) => setSearch(e.target.value)}></input>
        <button onClick={onSetSearch}>Cari</button>
        <p>Anda mencari kata = {search}</p>
      </div>
    </>
  );
}

export default Search;
