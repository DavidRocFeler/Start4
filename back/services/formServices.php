<?php

require_once 'config/database.php';

class FormService {
    public function submitForm($data) {
        global $conn; // Usamos la conexión global

        $naam = $data['naam'];
        $achternaam = $data['achternaam'];
        $mobielNummer = $data['mobielNummer'];
        $email = $data['email'];
        $diensten = $data['diensten'];
        $subdiensten = $data['subdiensten'];
        $bericht = $data['bericht'];

        // Preparar y ejecutar la consulta
        $stmt = $conn->prepare("INSERT INTO form_submissions (naam, achternaam, mobiel_nummer, email, diensten, subdiensten, bericht) VALUES (:naam, :achternaam, :mobielNummer, :email, :diensten, :subdiensten, :bericht)");

        // Asignar los valores
        $stmt->bindParam(':naam', $naam);
        $stmt->bindParam(':achternaam', $achternaam);
        $stmt->bindParam(':mobielNummer', $mobielNummer);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':diensten', $diensten);
        $stmt->bindParam(':subdiensten', $subdiensten);
        $stmt->bindParam(':bericht', $bericht);

        // Ejecutar la consulta
        $stmt->execute();
        return true; // Retornar true si se envió correctamente
    }
}
