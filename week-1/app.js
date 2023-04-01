import axios from "axios";

async function getData(id) {
  try {
    const userResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const userData = userResponse.data;

    const postResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?id=${id}`
    );
    const postData = postResponse.data;

    let data = Object.assign(userData, postData);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

export default getData;
