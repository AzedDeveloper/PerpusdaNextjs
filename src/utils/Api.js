import { BASE_API_URL } from '@/utils/constants';
import { addAllDataKategori, addAllData } from '@/lib/data';

async function fetchKategori() {
  console.log("KATEGORI FETCHING");
  const res = await fetch(`${BASE_API_URL}/api/v1/kategori`, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors",
    credentials: "same-origin",
    next: { revalidate: 0 },
  });
  const result = await res.json();
  addAllDataKategori(result.data);
  return result;
}

async function fetchBuku() {
  console.log("BUKU FETCHING");
  const res = await fetch(`${BASE_API_URL}/api/v1/search`, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors",
    credentials: "same-origin",
    next: { revalidate: 0 },
  });
  const result = await res.json();
  addAllData(result.data);
  return result;
}

export { fetchKategori, fetchBuku }