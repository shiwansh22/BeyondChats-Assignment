import axios from "axios";
import { Article } from "./types";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api",
});

export const fetchArticles = async (): Promise<Article[]> => {
  const res = await api.get("/articles");
  return res.data;
};

export const fetchArticle = async (id: number): Promise<Article> => {
  const res = await api.get(`/articles/${id}`);
  return res.data;
};