"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchArticle } from "../../../lib/api";
import { Article } from "../../../lib/types";
import ArticleDetail from "../../../components/ArticleDetail";

export default function ArticlePage() {
  const params = useParams();
  const id = Number(params.id);
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticle(id).then(setArticle).finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!article) return <p>Article not found</p>;

  return <ArticleDetail article={article} />;
}