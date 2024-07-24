<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\academic_profile;

class Academicprofile extends Controller
{
    //
    function profileUpdate(request $req)
    {
        $rec = new academic_profile;
        $rec->name = $req->input('name');
        $rec->email = $req->input('email');
        $rec->phone = $req->input('phone');
        $rec->street = $req->input('street');
        $rec->city = $req->input('city');
        $rec->country = $req->input('country');
        $rec->zip = $req->input('zip');
        $rec->about = $req->input('about');

        $rec->save();
        return $rec;
    }
}
