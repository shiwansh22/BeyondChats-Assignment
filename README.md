# BeyondChats – Full Stack Assignment

## Overview

This repository contains my submission for the **BeyondChats Full Stack Assignment**.

The project demonstrates an end-to-end system to:
- Store blog articles
- Enhance article content using an LLM-style workflow
- Display original and updated versions on a frontend UI

The goal of this assignment is to show **problem-solving approach, system design, and execution under time constraints**, rather than building a perfectly automated production system.

---

## Tech Stack

- **Backend:** Laravel (REST APIs)
- **Worker:** NodeJS (content enhancement pipeline)
- **Frontend:** React (Next.js)
- **Database:** SQLite
- **Deployment:**  
  - Frontend → Vercel  
  - Backend → Render (Docker-based)

---

## Architecture / Data Flow
React (Next.js Frontend)
↓
Laravel REST APIs
↓
Database (Articles)
↑
NodeJS Worker (LLM-based content enhancement)

## Data Flow Explanation (Simple)

1. Original BeyondChats blog articles are stored in the backend database.
2. Laravel exposes APIs to fetch and update articles.
3. A NodeJS worker fetches an article and enhances its content using an LLM-style approach.
4. The updated content is saved back to the backend.
5. The frontend fetches articles and allows switching between **Original** and **Updated** content.

---

## Phase-wise Implementation

### Phase 1 – Backend (Laravel)

- Stored the **5 oldest BeyondChats blog articles**
- Preserved:
  - Original article content
  - Source URLs
- Implemented REST APIs:
  - Fetch all articles
  - Fetch a single article
  - Update article with enhanced content

---

### Phase 2 – NodeJS Worker (Content Enhancement)

- Fetches an article from Laravel APIs
- Enhances content to improve:
  - Structure
  - Readability
  - Formatting
- Publishes the updated article back to Laravel
- Adds reference links at the bottom of the updated content

#### Google Search & Scraping Note

Due to time constraints, **Google Search scraping was not fully automated**.

Instead:
- Reference articles were manually identified
- This demonstrates the complete enhancement pipeline end-to-end

The architecture is designed so automated search and scraping (e.g., SerpAPI + Cheerio) can be added later without changing the overall system.

---

### Phase 3 – Frontend (React / Next.js)

- Fetches articles from backend APIs
- Displays articles in a clean, responsive UI
- Shows article status:
  - Original
  - Updated
- Allows toggling between original and enhanced content

---

## Local Setup Instructions

### Backend (Laravel)

bash
cd beyondchats-backend
composer install
php artisan migrate
php artisan serve

Backend runs at:

http://127.0.0.1:8000

Frontend (Next.js)
cd beyondchats-frontend
npm install
npm run dev


# Frontend runs at:

http://localhost:3000

NodeJS Worker
cd node-worker
npm install
node index.js

# Live Link (Frontend)

🔗 Live Demo:
https://beyond-chats-assignment-eta.vercel.app/

# Backend Deployment Note

The backend is deployed on Render using Docker.
Since the free Render instance uses SQLite with temporary storage, data may reset after inactivity or redeployment, which can result in empty API responses on the live backend.
When run locally, the backend works fully as expected with seeded articles and updates.
This trade-off was accepted to focus on clean architecture and correct implementation within the given time constraints.

# Project Output / Screenshots

Screenshots showing:
- Article list view
- Original vs Updated content toggle
- Article detail page are available in the assets/ folder of this repository.

# Trade-offs & Assumptions

- Articles were manually inserted to prioritize API correctness.
- Google Search scraping was simplified due to limited time.
- LLM output is mocked to demonstrate integration and data flow.
- Authentication and production hardening were intentionally skipped.
- These decisions were made consciously to maximize clarity and completeness within the available time.

# AI Usage Disclosure
- AI tools were used as a productivity aid for:
- Boilerplate code
- Initial drafts

All architectural decisions, integrations, debugging, and trade-offs were performed and validated manually.

# Final Notes

This submission prioritizes:

End-to-end system completeness
Clear architecture and data flow
Honest trade-offs under time constraints
