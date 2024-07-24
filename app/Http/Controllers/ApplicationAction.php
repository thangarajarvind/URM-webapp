<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\application;

class ApplicationAction extends Controller
{
    //
    function application()
    {
        return application::all();
    }
    function applicationEdit($id)
    {
        $result =  application::where('id',$id)->get();
        return $result;
    }
    function applicationUpdate(request $req, $id)
    {
        $app = application::find($id);
        $app->i_date = $req->input('i_date');
        $app->iid = $req->input('iid');
        $app->status = $req->input('status');
        $app->notes = $req->input('notes');

        $app->save();
        return $app;
    }
}
