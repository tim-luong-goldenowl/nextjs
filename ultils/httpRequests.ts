import axios from "axios";

const rootPath = 'http://localhost:3000'

const axiosRequest = axios.create({
  baseURL: rootPath,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
  timeout: 300000,
  transformRequest: [function (data) {
    return JSON.stringify(data)
  }]
})

export async function getRequest(path = "", headers = {}) {
  const response = await axiosRequest({
    url: path,
    method: 'GET',
    headers
  })

  if (response.status == 200) {
    return response.data;
  } else {
    return Promise.reject("Invalid response");
  }
}

export async function postRequest(path = "", data, headers = {}) {
  try {
    const response = await axiosRequest({
      url: path,
      method: 'POST',
      data: JSON.parse(data),
      headers
    });
    
    return response.data;
  } catch (err) {
    if (err.response) {
      // ✅ log status code here
      console.log(err.response.status);
      console.log(err.message);
      console.log(err.response.headers); // 👉️ {... response headers here}
      console.log(err.response.data); // 👉️ {... response data here}
    }
  }
}
