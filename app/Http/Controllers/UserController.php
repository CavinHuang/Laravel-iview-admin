<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    //
  public function profile(){
    return response(['state' => 1, 'user' => Auth::guard('api')->user()]);
  }
}
