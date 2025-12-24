import NaramGaramPage2 from "@/components/NaramGaram";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Naram-Garam | Pure Veg Family Restaurant",
  description: "Authentic flavors, pure vegetarian, and family friendly dining at Naram-Garam.",
};

export default function Home() {
  return (
    <main>
      <NaramGaramPage2 />
    </main>
  );
}
