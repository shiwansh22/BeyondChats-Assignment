import Link from "next/link";
import { Article } from "../lib/types";
import StatusBadge from "./StatusBadge";

export default function ArticleCard({ article }: { article: Article }) {
  const date = new Date(article.created_at).toLocaleDateString();
  return (
    <Link href={`/articles/${article.id}`}>
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
        <StatusBadge status={article.status} />
        <p className="text-sm text-gray-600 mt-2">Published: {date}</p>
      </div>
    </Link>
  );
}