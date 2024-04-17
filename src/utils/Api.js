import React from 'react'

async function fetchKategori() {
  console.log("Fetch Kategori");
  const res = await fetch(`http://localhost:3000/api/v1/kategori`, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
  });
  return res.json();
}

export { fetchKategori }