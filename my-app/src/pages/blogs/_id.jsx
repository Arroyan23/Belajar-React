// ini halaman untuk mengatur single id nya agar mendapatkan
// nilai yang sama

import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// use params untuk mengambil data dari parameter yang dituju

function SingleParams() {
  //   const params = useParams();
  //   const [externalData, setExternalData] = useState(null);

  //   useEffect(() => {
  //     // ambil params id sesuai dengan nama path yang di setting di router
  //     // yang tertulis di router /blogs/:id
  //     // /:id ini akan mengambil dengan yang nama nya id di params tersebut
  //     fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
  //       .then((response) => response.json())
  //       .then((responses) => setExternalData(responses));
  //   });

  const externalData = useLoaderData();

  return (
    <>
      {/* berikan tanda tanya agar render pada saat dia sudah siap */}
      {/* sehingga tidak menimbulkan error pada saat proses loading  */}
      <h2>{externalData?.title}</h2>
      <p>
        Parameter true: {externalData?.completed ? "Ini Benar" : "Ini Salah"}
      </p>
    </>
  );
}

export default SingleParams;
