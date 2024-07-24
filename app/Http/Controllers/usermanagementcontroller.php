<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class registrationrequests extends Controller
{

    function totalnumberofusers()
    {
        $result = user::count('*')
                    ->get();

        return $result;
    }

    function getnumberofacademiacandidates()
    {
        $result = user::count('*')
                    ->where('role','=','academia')
                    ->get();

        return $result;
    }
    function getnumberofdeiofficers()
    {
        $result = user::count('*')
                    ->where('role','=','deiofficer')
                    ->get();

        return $result;
    }
    function getnumberofrecruiters()
    {
        $result = user::count('*')
                    ->where('role','=','recruiter')
                    ->get();

        return $result;
    }
    function getnumberofadmins()
    {
        $result = user::count('*')
                    ->where('role','=','admin')
                    ->get();

        return $result;
    }
}