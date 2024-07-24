<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\rec_profile;

class RecruiterProfile extends Controller
{
    //Update Profile By ID
    function profileUpdate(request $req, $id)
    {
        $rec = rec_profile::find($id);
        $rec->fname = $req->input('fname');
        $rec->mname = $req->input('mname');
        $rec->lname = $req->input('lname');
        $rec->mobile = $req->input('mobile');
        $rec->email = $req->input('email');
        $rec->institution = $req->input('institution');
        $rec->preference = $req->input('preference');
        $rec->id = $req->input('id');

        $rec->save();
        return $rec;
    }

    //Register New Recruiter
    function rec_register(request $req)
    {
        $user = new rec_profile;
        $user->id = $req->input('id');
        $user->fname = $req->input('fname');
        $user->lname = $req->input('lname');
        $user->email = $req->input('email');
        $user->mobile = $req->input('phone');
        $user->save();
        return $user;
    }

}
