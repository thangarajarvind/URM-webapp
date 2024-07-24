<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\interview;

class InterviewDetails extends Controller
{
    //
    function interview(request $req)
    {
        $inter = new interview;
        $inter->jid = $req->input('jid');
        $inter->uid = $req->input('uid');
        $inter->iid = $req->input('iid');
        $inter->date = $req->input('date');
        $inter->time = $req->input('time');
        $inter->app_no = $req->input('app_no');
        $inter->meet_link = $req->input('meet_link');
        $inter->notes = $req->input('notes');

        $inter->save();
        return $inter;
    }
}
