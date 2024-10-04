<?php

require_once 'services/formServices.php';

class FormController {
    private $formService;

    public function __construct() {
        $this->formService = new FormService();
    }

    public function handleFormSubmission() {
        // Verificar si se recibieron datos del formulario
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Captura de datos del formulario
            $data = [
                'naam' => $_POST['naam'],
                'achternaam' => $_POST['achternaam'],
                'mobielNummer' => $_POST['mobielNummer'],
                'email' => $_POST['email'],
                'diensten' => $_POST['diensten'],
                'subdiensten' => $_POST['subdiensten'],
                'bericht' => $_POST['bericht']
            ];

            // Enviar datos al servicio
            if ($this->formService->submitForm($data)) {
                echo "Form successfully submitted.";
            } else {
                echo "Failed to submit the form.";
            }
        }
    }
}
