import DashEstudiante from "@/components/Dashboard/dashEstudiante";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LabCal",
  description: "",
  // other metadata
};

// pendiente
// se debe hacer la separacion de estudiante y profesor, tendran diferentes dashboard y menus de navegacion

export default function Home() {
  return (
    <>
      <DashEstudiante />
    </>
  );
}
