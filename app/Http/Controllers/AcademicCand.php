<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\academic_cand;

class AcademicCand extends Controller
{
    
    function profileCand(request $req)
    {
        $rec = new academic_cand;
        $rec->name = $req->input('name');
       
        
        $rec->save();
        return $rec;
    }
}
