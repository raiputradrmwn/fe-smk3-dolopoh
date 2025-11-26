import { getAllCareers } from "@/app/api/careers/api";
import { CareerList } from "./components/CareerList";

export default async function CareerPage() {
  const data = await getAllCareers(1, 10);

  return <CareerList initialData={data.data} />;
}
