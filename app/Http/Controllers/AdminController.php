<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\admin;

class AdminController extends Controller
{
    //Register New Candiate
    function admin_register(request $req)
    {
        $user = new admin;
        $user->id = $req->input('id');
        $user->fname = $req->input('fname');
        $user->lname = $req->input('lname');
        $user->email = $req->input('email');
        $user->address = $req->input('address');
        $user->phone = $req->input('phone');
        $user->password = $req->input('password');
        $user->save();
        return $user;
        
    }
    
}
