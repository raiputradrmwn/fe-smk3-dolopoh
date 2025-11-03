import axios from "axios";
import type { NewsDetailResponse, NewsListResponse } from "./types";

// 🔹 Axios instance — base URL diambil dari .env
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// 🔹 Ambil semua berita (pagination default 10)
export async function getAllNews(page = 1, limit = 10) {
  const res = await api.get<NewsListResponse>(`/news/published?page=${page}&limit=${limit}`);
  return res.data;
}

// 🔹 Ambil 3 berita terbaru untuk beranda
export async function getLatestNews() {
  const res = await api.get<NewsListResponse>(`/news/published?page=1&limit=3`);
  return res.data;
}
export async function getNewsById(id: string) {
  const res = await api.get<NewsDetailResponse>(`/news/${id}`);
  return res.data;
}
