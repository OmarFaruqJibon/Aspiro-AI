export default async function EditCoverLetterPage({ params }) {
    const { id } = await params;
    return (
        <div>
            CoverLetter: {id}
        </div>
    );
}
