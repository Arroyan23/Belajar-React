// ini untuk menampilkan external data

function ExternalData(props) {
  const fetch = props.data;
  return (
    <>
      <h2>Ini adalah Data dari api luar</h2>
      {fetch.map((e) => {
        return (
          <>
            <p>Provinsi : {e.name}</p>
          </>
        );
      })}
      <a href="/">Menuju Halaman Home</a>
    </>
  );
} 

export default ExternalData;
