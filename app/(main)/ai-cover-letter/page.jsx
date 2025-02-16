import { getCoverLetters } from "@/actions/cover-letter";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverLetterList from "./_components/cover-letter-list";

export default async function CoverLetterPage() {
  const coverLetters = await getCoverLetters();

  return (
    <div style={{ marginTop: "5rem" }}>
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between mb-5 mt-5">
        <h1 className="text-4xl font-bold">Cover Letter</h1>
        <Link href="/ai-cover-letter/new">
          <Button className="buttonn-effect">Create New</Button>
        </Link>
      </div>

      <CoverLetterList coverLetters={coverLetters} />
    </div>
  );
}
