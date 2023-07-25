const rootPath = 'http://localhost:3000'

export async function getRequest(path = "", data = {}) {
    const response = await fetch(rootPath + path, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkwMjkzMzI3LCJleHAiOjE2OTAzMDA1Mjd9.TrbB-Ri_t-RcS-gCVyzCn3-PiGv78SHPOVP4AfZadow"
      },
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }