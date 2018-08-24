<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    public function allPosts()
    {
        $posts = Post::all();
        foreach ($posts as $post){
            $post->campanha->cliente;
            $post->criador;
            $post->avaliador;
        }
        return response()->json($posts);
    }
    public function store(Request $request){
        $validator = Validator::make($request->all(),[
            'url' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'nome_post' => 'required',
            'prazo' => 'required',
            'text' => 'required',
            'campanha_id' => 'required',
        ]);
        if ($validator->fails())
        {
            return response()
                ->json(['error' => $validator->errors()], 401);
        }else{
            $url = self::imageUploadPost($request);
            $post = new Post;
            $post->nome_post = $request->nome_post;
            $post->prazo = Carbon::parse($post->prazo)->format('Y-m-d');
            $post->url = $url;
            $post->text = $request->text;
            $post->campanha_id = (int) $request->usuario_criador_id;
            $post->usuario_criador_id = (int) $request->usuario_criador_id;
            $post->save();
            $post->latest()->get();
            return response()->json(["post" => $post],200);
        }
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

    public function aprovar($id) {
        $post = Post::find($id);
        $post->status = 1;
        $post->save();
        return response()->json(["post" => $post],200);
    }

    public function reprovar($id) {
        $post = Post::find($id);
        $post->status = 0;
        $post->save();
        return response()->json(["post" => $post],200);
    }


    private function imageUploadPost(Request $request)
    {
        $destinationPath = 'uploads'.'/'.date('Y').'/'.date('m').'/'.date('d').'/';
        $imageName = time().'.'.$request->url->getClientOriginalExtension();

        $request->url->move(public_path($destinationPath), $imageName);
        $url = url($destinationPath.$imageName);


        return $url;

    }





}
