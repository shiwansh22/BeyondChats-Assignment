<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        return Article::latest()->get();
    }

    public function show($id)
    {
        return Article::findOrFail($id);
    }

    // 👇 ADD THIS METHOD
    public function update(Request $request, $id)
    {
        $article = Article::findOrFail($id);

        $article->update([
            'updated_content' => $request->updated_content,
            'status' => $request->status ?? 'updated',
        ]);

        return $article;
    }
}
