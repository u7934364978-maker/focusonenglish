import { redirect } from "next/navigation";

export default function AdminHomePage() {
  // Redirigimos al primer panel útil del área admin.
  // (Evita que "/admin" quede en blanco o 404.)
  redirect("/admin/a1-analytics");
}

