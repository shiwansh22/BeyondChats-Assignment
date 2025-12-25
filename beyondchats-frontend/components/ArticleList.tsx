import { Article } from "../lib/types";
import ArticleCard from "./ArticleCard";

export default function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((a) => (
        <ArticleCard key={a.id} article={a} />
      ))}
    </div>
  );
}