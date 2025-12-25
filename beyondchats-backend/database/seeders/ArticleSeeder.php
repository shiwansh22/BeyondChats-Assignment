<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Article;

class ArticleSeeder extends Seeder
{
    public function run(): void
    {
        Article::insert([
            [
                'title' => 'Introduction to Chatbots',
                'original_content' => '<p>Chatbots are AI-powered tools that simulate conversations.</p>',
                'source_url' => 'https://beyondchats.com/blogs/introduction-to-chatbots/',
                'status' => 'original',
            ],
            [
                'title' => 'Live Chatbot',
                'original_content' => '<p>Live chatbots help businesses engage users in real time.</p>',
                'source_url' => 'https://beyondchats.com/blogs/live-chatbot/',
                'status' => 'original',
            ],
            [
                'title' => 'Virtual Assistant',
                'original_content' => '<p>Virtual assistants automate customer support workflows.</p>',
                'source_url' => 'https://beyondchats.com/blogs/virtual-assistant/',
                'status' => 'original',
            ],
            [
                'title' => 'Lead Generation Chatbots',
                'original_content' => '<p>Chatbots capture and qualify potential leads.</p>',
                'source_url' => 'https://beyondchats.com/blogs/lead-generation-chatbots/',
                'status' => 'original',
            ],
            [
                'title' => 'Chatbots for Small Business Growth',
                'original_content' => '<p>Chatbots help small businesses scale customer engagement.</p>',
                'source_url' => 'https://beyondchats.com/blogs/chatbots-for-small-business-growth/',
                'status' => 'original',
            ],
        ]);
    }
}
