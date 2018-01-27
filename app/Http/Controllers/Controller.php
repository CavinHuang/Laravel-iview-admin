<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

  /**
   * response json data
   * @methods
   * @desc
   * @author slide
   *
   * @param int    $code
   * @param int    $success
   * @param string $msg
   * @param string $data
   * @param string $url
   *
   * @return \Illuminate\Http\JsonResponse
   *
   */
  public function ajaxReturn ($code = 200, $success = 1, $msg = '',  $data = '', $url = ''){
    $returnArr = [
      'success' => $success,
      'msg'     => $msg
    ];

    if($data) {
      $returnArr['data'] = $data;
    }

    if($url) {
      $returnArr['url'] = $url;
    }


    return response()->json($returnArr, $code);
  }

}
