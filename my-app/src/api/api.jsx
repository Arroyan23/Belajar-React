// halaman untuk mengatur api loader
export const getSingleApi = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos");
};

// tidak perlu menggunakan then karena sudah di handle oleh reactnya
// itu sendiri

export const getApiWithId = ({ params }) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
};
