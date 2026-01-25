import { promises as fs } from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ExamClientPage from "./ExamClientPage";

export default async function ExamPage({ params }: { params: Promise<{ examId: string }> }) {
  const { examId } = await params;
  
  const filePath = path.join(process.cwd(), "src", "content", "exams", `${examId}.json`);
  
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const exam = JSON.parse(raw);
    
    return <ExamClientPage exam={exam} />;
  } catch (e) {
    notFound();
  }
}
