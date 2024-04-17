import React from 'react'

async function fetchKategori() {
  console.log("Fetch Kategori");
  const res = await fetch(`${process.env.NODE_ENV=="development"?process.env.API_DEV:process.env.API_PROD}/api/v1/kategori`, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
  });
  return res.json();
}

export { fetchKategori }