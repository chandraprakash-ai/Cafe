import RetroCafePage from "@/components/RetroCafe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RetroCafe | Soft & Spicy",
  description: "RetroCafe: Where soft meets spicy. An explosion of authentic flavors for the whole family.",
};

export default function Home() {
  return (
    <main>
      <RetroCafePage />
    </main>
  );
}
