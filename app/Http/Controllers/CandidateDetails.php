<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\candidates;

class CandidateDetails extends Controller
{
    //
    function getCandidate($name)
    {
        $result =  candidates::where('fname',$name)->get();
        return $result;
    }

    //
    function getCandidatebyname(request $name)
    {
        $result =  candidates::where('name',$name)->get();
        return $result;
    }
    
    //
    function getCandidatebyid(request $req, $id)
    {   
        $result =  candidates::where('id',$id)->get();
        return $result;
    }
}
