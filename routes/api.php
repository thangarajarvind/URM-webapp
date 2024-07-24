<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserApproval;

use App\Http\Controllers\CandidateController;

use App\Http\Controllers\RecruiterProfile;
use App\Http\Controllers\JobPosting;
use App\Http\Controllers\CandidateDetails;

use App\Http\Controllers\InterviewDetails;
use App\Http\Controllers\ApplicationAction;

use App\Http\Controllers\AdminController;

use App\Http\Controllers\Academicprofile;
use App\Http\Controllers\AcademicJob;
use App\Http\Controllers\AcademicCand;

use App\Http\Controllers\ChatController;

use App\Http\Controllers\usermanagementcontroller;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//User Table routes
Route::post('Uregister',[UserController::Class,'Uregister']);
Route::post('Ulogin',[UserController::Class,'Ulogin']);
Route::post('getID',[UserController::Class,'getID']);
Route::get('getIDbymail/{id}',[UserController::class,'getIDbymail']);


//Candidate routes
Route::post('Cregister',[CandidateController::Class,'Cregister']);
Route::post('cpUpdate',[CandidateController::Class,'cpUpdate']);

//Recruiter Routes
Route::put('profileUpdate/{id}',[RecruiterProfile::class,'profileUpdate']);
Route::post('rec_register',[RecruiterProfile::class,'rec_register']);

//Candidate Details
Route::get('getCandidate/{name}',[CandidateDetails::class,'getCandidate']);
Route::get('searchCandidate/{name}',[CandidateDetails::class,'searchCandidate']);
Route::get('getCandidatebyname',[CandidateDetails::class,'getCandidatebyname']);
Route::get('getCandidatebyid/{id}',[CandidateDetails::class,'getCandidatebyid']);

//Job Postings
Route::post('jobPosting',[JobPosting::class,'jobPosting']);
Route::get('jobList',[JobPosting::class,'jobList']);
Route::get('jobCount',[JobPosting::class,'jobCount']);
Route::get('job_desc/{jid}',[JobPosting::class,'job_desc']);

//Interview
Route::post('interview',[InterviewDetails::class,'interview']);

//Applications
Route::get('application',[ApplicationAction::class,'application']);
Route::get('applicationEdit/{id}',[ApplicationAction::class,'applicationEdit']);
Route::put('applicationUpdate/{id}',[ApplicationAction::class,'applicationUpdate']);


//Academia
Route::post('profileUpdate',[Academicprofile::class,'profileUpdate']);
Route::post('profileCreate',[AcademicJob::class,'profileCreate']);
Route::post('profileCand',[AcademicCand::class,'profileCand']);

//Registered User Controller
Route::post('registered',[Registered_UsersController::class,'registered']);

//Admin
Route::post('admin_register',[AdminController::class,'admin_register']);

//User Approval
Route::get('userApproval',[UserApproval::class,'userApproval']);
Route::put('userApproved/{id}',[UserApproval::class,'userApproved']);
Route::delete('userRejected/{id}',[UserApproval::class,'userRejected']);

//Chat Routing
Route::get('getchats/{identifier}',[ChatController::class,'getchats']);
Route::post('sendMessage',[ChatController::class,'sendMessage']);

//User management
Route::get('getnumberofacademiacandidates',[currentusers::Class,'getnumberofacademiacandidates']);
Route::get('getnumberofdeiofficers',[currentusers::Class,'getnumberofdeiofficers']);
Route::get('getnumberofrecruiters',[currentusers::Class,'getnumberofrecruiters']);
Route::get('getnumberofadmins',[currentusers::Class,'getnumberofadmins']);