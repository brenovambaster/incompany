<?php

abstract class BaseController extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        $method = $_SERVER['REQUEST_METHOD'];
        if ($method == "OPTIONS") {
            die();
        }
    }

    public function detectar_acao()
    {
        
        $method = $_SERVER["REQUEST_METHOD"];
        $registro = $this->get_dados();
        $is_delete = !empty($registro->op);

        if ($method === "POST" && $is_delete) {
            $registro = $registro->data;
            $this->remover($registro);
        } elseif ($method === "POST") {
            $this->persistir($registro);
        }
        
        return $method;
    }

    public function get_dados(){
        $json_str = file_get_contents('php://input');
        $registro = json_decode($json_str);
        return $registro;
    }

    abstract protected function persistir($categoria);
    abstract protected function remover($categoria);

    public function resposta_json($flag, $msg, $obj)
    {
        $res = (object) array(
         'flag'=>$flag,
         'msg'=> $msg,
         'obj'=>$obj
       );
      
        return json_encode($res);
    }

    public function get_validador($registro){
        $this->form_validation->set_error_delimiters('', '|');
        $this->form_validation->set_data($registro);
        return $this->form_validation;
    }

    public function get_errors(){
       $erros = explode("|", validation_errors());
       array_pop($erros);
       return $erros;
    }
}
