<?php

namespace App\Http\Controllers;

class AuthController extends Controller
{


  /**
   * Get a JWT via given credentials.
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function login()
  {
    $credentials = request(['email', 'password']);

    if (! $token = auth()->attempt($credentials)) {
      return $this->ajaxReturn(200, 0, '账号或密码错误');
    }

    return $this->ajaxReturn(200, 1, '登录成功', $this->respondWithToken($token));
  }

  /**
   * Get the authenticated User.
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function me()
  {
    return response()->json(auth()->user());
  }

  /**
   * Log the user out (Invalidate the token).
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function logout()
  {
    auth()->logout();

    return response()->json(['message' => 'Successfully logged out']);
  }

  /**
   * Refresh a token.
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function refresh()
  {
    return $this->respondWithToken(auth()->refresh());
  }

  /**
   * Get the token array structure.
   *
   * @param  string $token
   *
   * @return \Illuminate\Http\JsonResponse
   */
  protected function respondWithToken($token)
  {
    $info = [
      'access_token' => $token,
      'token_type' => 'bearer',
      'expires_in' => auth()->factory()->getTTL() * 60,
      'user_info' => auth()->user()
    ];
    return $info;
  }
}
