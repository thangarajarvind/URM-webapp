<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\chat;

class ChatController extends Controller
{
    //Retrieve Chat Messages
    function getchats(request $req, $identifier)
    {
        $chats = chat::where('identifier',$identifier)->get();
        return $chats;
    }

    //Send Message
    function sendMessage(request $req)
    {
        $sender = $req->input('sender_id');
        $reciever = $req->input('reciever_id');
        if ($sender<$reciever){
            $ident = "[$sender,$reciever]";
        }
        else{
            $ident = "[$reciever,$sender]";
        }
        echo "Identifier:",$ident;
        $chat = new chat;
        $chat->sender_id = $req->input('sender_id');
        $chat->reciever_id = $req->input('reciever_id');
        //$chat->identifier = $req->input('identifier');
        $chat->identifier = $ident;
        $chat->message = $req->input('message');
        $chat->save();
        return $chat;
    }
}
