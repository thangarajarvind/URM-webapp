<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\academic_job;

class AcademicJob extends Controller
{
    
    function profileCreate(request $req)
    {
        $rec = new academic_job;
        $rec->organisation = $req->input('organisation');
        $rec->salary = $req->input('salary');
        $rec->about = $req->input('about');
        

        $rec->save();
        return $rec;
    }
}
