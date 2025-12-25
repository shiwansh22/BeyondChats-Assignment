import { Article } from "../lib/types";
import StatusBadge from "./StatusBadge";
import ArticleContent from "./ArticleContent";

export default function ArticleDetail({ article }: { article: Article }) {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <StatusBadge status={article.status} />
      <ArticleContent article={article} />
    </div>
  );
}