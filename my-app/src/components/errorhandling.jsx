// untuk menghandle error maka akan di arahkan ke halaman yang ini
// untuk error handling ketika tidak ditemukan router yang di arahkan
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function ErrorHandle() {
  const error = useRouteError();

  return (
    <>
      <h2>Terjadi Kesalahan Pada link anda</h2>
      <Link to="/">Kembali ke halaman utama</Link>
    </>
  );
}

export default ErrorHandle;
