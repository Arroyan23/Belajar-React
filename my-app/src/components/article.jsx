// MEMBUAT AGAR MENJADI FUNGSI YANG REUSABLE
// dengan memberi parameter props di dalam fungsinya itu sendiri
// halaman untuk mengatur dari home page itu sendiri

//  MENGGUNAKAN FUNCTION UNTUK MEMBUAT RENDER CONDITIONING
// import variabelnya dengan global context
import { GlobalContext } from "../db/context";
// untuk menggunakannya gunakan useContext
import { useContext } from "react";

function CekArtikel(props) {
  return props.isFact ? "Benar" : "Salah";
}
function Article(props) {
  // masukkan ke dalam variabel dan
  // gunakan useContext yang isinya adalah context yang di import
  const user = useContext(GlobalContext);
  // kita tinggal memberikan variabel ke dalam tag html article di app js
  // menggunakan operator ternary di dalam react js
  // conditioning rendering
  return (
    <>
      <h2>{props.title}</h2>
      <small>
        Genre : {props.genre} Tags : {props.tags.join(",")}
        {props.isFact ? " Benar" : " Salah"}
        {/* menggunakan pemanggilan tag html sebagai render condition */}
        <CekArtikel isFact={props.isFact} />
        <p>Ditulis Oleh: {user.username}</p>
      </small>
    </>
  );
}

export default Article;
