import { useEffect } from "react";

const rootPath = 'http://localhost:3000'

export async function getRequest(path = "") {
  const response = await fetch(rootPath + path, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "Authorization": getToken()
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
      "Authorization": getToken()
    },
  });

  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
  return await response.json();
}

const getToken = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('donationAppToken')
    console.log("!!!!!!!!!!!!", token)
    return localStorage.getItem('donationAppToken')
  }
}