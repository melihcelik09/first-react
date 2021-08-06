import axios from "axios";

async function getData(userId) {
  const { data: users } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + Number(userId)
  );

  const { data: posts } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + Number(userId)
  );
  let infos = {
    user: users,
    posts: posts,
  };

  return console.log(infos);
}

export default getData;
