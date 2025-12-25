export interface Article {
  id: number;
  title: string;
  status: "original" | "updated";
  original_content: string;
  updated_content?: string | null;
  created_at: string;
}