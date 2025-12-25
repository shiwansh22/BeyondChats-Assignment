import axios from "axios";

const API_BASE = "http://127.0.0.1:8000/api";

async function run() {
  // 1. Fetch articles from Laravel
  const res = await axios.get(`${API_BASE}/articles`);
  const latest = res.data[0];

  console.log("Processing article:", latest.title);

  // 2. Mock LLM-enhanced content
  const updatedContent = `
    <h2>Enhanced Version</h2>
    <p>This article has been enhanced using an LLM to improve clarity and structure.</p>

    <h3>Key Improvements</h3>
    <ul>
      <li>Improved explanation</li>
      <li>Better formatting</li>
      <li>SEO-friendly structure</li>
    </ul>

    <h3>References</h3>
    <ul>
      <li>${latest.source_url}</li>
      <li>https://example.com/reference-article</li>
    </ul>
  `;

  // 3. Update article in Laravel
  await axios.put(`${API_BASE}/articles/${latest.id}`, {
    updated_content: updatedContent,
    status: "updated"
  });

  console.log("Article updated successfully");
}

run();
