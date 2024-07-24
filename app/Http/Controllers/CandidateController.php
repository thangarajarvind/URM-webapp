<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\candidates;
class CandidateController extends Controller
{

    //Register New Candiate
    function Cregister(request $req)
    {
        $user = new candidates;
        $user->id = $req->input('id');
        $user->fname = $req->input('fname');
        $user->lname = $req->input('lname');
        $user->email = $req->input('email');
        $user->address = $req->input('address');
        $user->phone = $req->input('phone');
        $user->save();
        return $user;
        
    }



    //UpdateCandidateProfile
    function cpUpdate(request $req,$id)
    {
        $cand = candidates::find($id);
        $cand->fname = $req->input('fname');
        $cand->lname = $req->input('lname');
        $cand->dob = $req->input('dob');
        $cand->phone = $req->input('phone');
        $cand->email = $req->input('email');
        $cand->address = $req->input('address');
        $cand->nationality = $req->input('nationality');
        $cand->ethnicity = $req->input('ethnicity');
        $cand->edu = $req->input('edu');
        $cand->publications = $req->input('publication');
        $cand->aoi = $req->input('aoi');
        $cand->pref_pos = $req->input('pref_pos');
        $cand->pref_uni = $req->input('pref_uni');
        $cand->pref_loc = $req->input('pref_loc');
        $cand->save();
        return $cand;
    }

    function profileCand(request $req)
    {
        $rec = new academic_cand;
        $rec->name = $req->input('name');
       
        
        $rec->save();
        return $rec;
    }
}
