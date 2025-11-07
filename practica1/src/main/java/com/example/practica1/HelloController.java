package com.example.practica1;

import org.springframework.web.bind.annotation.*;

@RestController
public class HelloController {
    @PostMapping("/saludo")
    public String saludo(@RequestParam String nombre, @RequestParam String apellido){
        return "<h1> Hola como estas "+nombre+" "+apellido+" Espero estes muy bien. </h1>";
    } 
}
