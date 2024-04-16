import React from 'react'

async function fetchKategori() {
  const res = await fetch("http://localhost:3000/api/v1/kategori", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
  });
  return res.json();
}

export { fetchKategori }