<?php
    function calculo_imc($peso, $altura) {
        return $peso / pow($altura, 2);
    }

    $input_peso = $_REQUEST['peso'];
    $input_altura = $_REQUEST['altura'];

    $result = [
        'imc' => calculo_imc($input_peso, $input_altura)
    ];
    
    echo json_encode($result);
    
?>
