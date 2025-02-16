import { getCoverLetters } from "@/actions/cover-letter";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CoverLetterList from "./_components/cover-letter-list";

export const metadata = {
  title: "Aspiro AI | Cover Letter",
};
export default async function CoverLetterPage() {
  const coverLetters = await getCoverLetters();

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between mb-5">
        <h1 className="text-3xl md:text-4xl font-bold small-screen">
          Cover Letter
        </h1>
        <Link href="/ai-cover-letter/new">
          <Button className="buttonn-effect">Create New</Button>
        </Link>
      </div>

      <CoverLetterList coverLetters={coverLetters} />
    </div>
  );
}
