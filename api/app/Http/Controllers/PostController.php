<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function allPosts()
    {
        return response()->json(Post::all());
    }
    public function store(Request $request){
        $posts = Post::create($request->all());
        if(!count($post)){
            return response()->json(['error' => 'Post não cadastrado'], 401);

        }
        return response()->json(Post::all());
    }
    public function showById($id){
        $post = Post::find($id);
        if(!$post){
            return response()->json(['error' => 'Post não encontrado'], 401);
        }
        return response()->json($post);
    }
    public function showByStatus($status){
        $post = Post::where('status','=',$status)->get();
        if(!$post){
            return response()->json(['error' => 'Post não encontrado'], 401);
        }
        return response()->json($post);
    }
}
