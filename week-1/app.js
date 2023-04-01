import axios from "axios"; //axios imported

async function getData(id) {
  try {
    // Request is sent to retrieve user data
    const userResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const userData = userResponse.data;

    // Request is sent to retrieve post data
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
