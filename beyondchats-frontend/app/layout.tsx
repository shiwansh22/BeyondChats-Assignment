import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BeyondChats Articles",
  description: "Minimal frontend to display BeyondChats articles",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <header className="bg-white border-b shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold">BeyondChats Articles</h1>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}