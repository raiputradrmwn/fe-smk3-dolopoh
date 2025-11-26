import axios from "axios";
import type { CareerDetailResponse, CareerListResponse } from "./types";

// 🔹 Axios instance — base URL diambil dari .env
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// 🔹 Ambil semua lowongan kerja (pagination default 10)
export async function getAllCareers(page = 1, limit = 10) {
  const res = await api.get<CareerListResponse>(`/careers?page=${page}&limit=${limit}`);
  return res.data;
}

// 🔹 Ambil lowongan kerja berdasarkan ID
export async function getCareerById(id: string) {
  const res = await api.get<CareerDetailResponse>(`/careers/${id}`);
  return res.data;
}
