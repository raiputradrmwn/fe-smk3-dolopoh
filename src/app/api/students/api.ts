import { StudentPayload } from "./types";

export async function registerStudent(payload: StudentPayload) {
  const res = await fetch("/api/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Gagal mengirim data");
  return data;
}
