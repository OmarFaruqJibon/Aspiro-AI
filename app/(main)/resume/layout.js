import { BarLoader } from "react-spinners";
import { Suspense } from "react";
export const metadata = {
    title: "Aspiro AI | Resume",
};
export default function Layout({ children }) {
    return (
        <div className="px-5 grid-background-dashboard">
            <div className="flex items-center justify-between mb-5">
                {/* <h1 className="text-4xl font-bold">Resume</h1> */}
            </div>
            <Suspense
                fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}
            >
                {children}
            </Suspense>
        </div>
    );
}
