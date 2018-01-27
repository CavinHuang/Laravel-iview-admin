<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    //
  public function profile(){

    return $this->ajaxReturn(200, 1, '查询用户信息成功', Auth::guard('api')->user());
  }
}
