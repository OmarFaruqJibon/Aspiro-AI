"use client";

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";

const CoverLetterPreview = ({ content }) => {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Cover_Letter",
    removeAfterPrint: true,

    contentRef: componentRef,
  });

  return (
    <div className="py-4 flex flex-col items-center gap-3 small-screen-card">
      <div className=" p-4 rounded-md shadow-md min-h-[700px] border border-gray-400">
        <div ref={componentRef} className="p-4 print:bg-white print:text-black">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="whitespace-pre-wrap"
          >
            {content || "No content available to print"}
          </ReactMarkdown>
        </div>
      </div>
      <Button
        onClick={handlePrint}
        className="mt-4 px-4 py-2 buttonn-effect"
        disabled={!content}
      >
        Download PDF
      </Button>
    </div>
  );
};

export default CoverLetterPreview;
