<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\users;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //Register New User
    function Uregister(request $req)
    {
        $user = new users;
        $user->fname = $req->input('first_name');
        $user->lname = $req->input('last_name');
        $user->email = $req->input('email');
        $user->address = $req->input('address');
        $user->phone = $req->input('phone');
        $user->role = $req->input('role');
        $user->password = $req->input('password');
        $user->approval = 0;
        $user->save();
        return $user;
    }
    
    //Get User by email
    function getIDbymail(request $req, $email)
    {
        $user = users::where('email',$email)->get();
        return $user;
    }


    //Login New User
    function Ulogin(request $req){
        $result = ["","","",""];
        $input_password = $req->input('password');
        $user =  users::where('email',$req['userid'])->get();
        if ($user == []){
            $result = ["User Not Found","","",""];
        }
        else{
            $a = $user[0];
            $fetched_password = $a['password'];
            if ($input_password == $fetched_password){
                $message=""; 
                $role  = $a['role'];
                $id  = $a['id'];
                $name  = $a['fname'];
                $result = [$message,$role,$id,$name];     
             }
             else {
                $result = ["Incorrect Password","","",""];
             }
        }
        return $result;
    }
}