"use client";

import { useEffect, useState } from "react";
import { fetchArticles } from "../lib/api";
import { Article } from "../lib/types";
import ArticleList from "../components/ArticleList";

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchArticles()
      .then(setArticles)
      .catch(() => setError("Failed to load articles"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return <ArticleList articles={articles} />;
}