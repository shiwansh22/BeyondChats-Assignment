"use client";

import { useState } from "react";
import { Article } from "../lib/types";

export default function ArticleContent({ article }: { article: Article }) {
  const hasUpdated = !!article.updated_content;
  const [tab, setTab] = useState(hasUpdated ? "updated" : "original");
  const html = tab === "original" ? article.original_content : article.updated_content || "";

  return (
    <div className="mt-6">
      <div className="flex gap-2 mb-4">
        <button onClick={() => setTab("original")} className={`px-3 py-2 rounded ${tab==="original"?"bg-blue-500 text-white":"bg-gray-200"}`}>
          Original
        </button>
        {hasUpdated && (
          <button onClick={() => setTab("updated")} className={`px-3 py-2 rounded ${tab==="updated"?"bg-blue-500 text-white":"bg-gray-200"}`}>
            Updated
          </button>
        )}
      </div>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}