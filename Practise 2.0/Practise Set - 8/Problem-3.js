const fetchContent = async (url) => {
  con = await fetch(url);
  let a = await con.json();
  return a;
};

setInterval(async function () {
  let url = "https://jsonplaceholder.typicode.com/todos/1";
  console.log(await fetchContent(url));
}, 5000);
