const rootPath = 'http://localhost:3000'

export async function getRequest(path = "") {
  const response = await fetch(rootPath + path, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkwMjkzMzI3LCJleHAiOjE2OTAzMDA1Mjd9.TrbB-Ri_t-RcS-gCVyzCn3-PiGv78SHPOVP4AfZadow"
    },
  });
  return response.json();
}

export async function postRequest(path = "", data: BodyInit) {
  const response = await fetch(rootPath + path, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    body: data,
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkwMjkzMzI3LCJleHAiOjE2OTAzMDA1Mjd9.TrbB-Ri_t-RcS-gCVyzCn3-PiGv78SHPOVP4AfZadow"
    },
  });
  return response.json();
}