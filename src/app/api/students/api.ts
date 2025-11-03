import { api } from "@/lib/axios";
import { StudentPayload, StudentResponse } from "./types";

export async function createStudent(payload: StudentPayload) {
  const { data } = await api.post<StudentResponse>("/students", payload);
  return data;
}
