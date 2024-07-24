<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\registered_user;

class Registered_UsersController extends Controller
{
    //
    function registered(Request $req){
        $reg=new registered_user();
        $reg->REQUESTEDROLE=$req->input('REQUESTEDROLE');
        $reg->E_Mail=$req->input('E_Mail');
        $reg->Eligibility=$req->input('Eligibility');
        $reg->ApprovalStatus=$req->input('ApprovalStatus');
        $reg->save();
        

        return $reg;
    }
}
