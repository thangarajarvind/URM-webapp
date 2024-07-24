<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserApproval extends Controller
{
    //
    function userApproval()
    {
        $result = user::where('approval','=','0')
                    ->where('role','=','candidate')
                    ->get();
        return $result;
    }
    function userApproved($id)
    {
        $user = user::find($id);
        $user->approval = '1';

        $user->save();
        return $user;
    }
    function userRejected($id)
    {
        $user = user::find($id);

        $user->delete();
    }
}
