let inicio = prompt("Bienvenido a la Bruja Tuerta, ¿eres mago o bruja?").toUpperCase()


    if (inicio == "MAGO") {
        alert( "Bienvenido")
        console.log("Eres un mago")
    }
    else if (inicio == "BRUJA") {
        alert("Bienvenida")
        console.log("Eres una bruja")
    } else {
        alert("¡No se permiten Muggles!")
    }


    if(( inicio == "MAGO") || (inicio == "BRUJA")){
        let edad =  Number(prompt("Ingresa tu edad"))
        if (edad >= 18) {
            alert("Adelante")
            console.log(edad)
            console.log("Eres mayor de edad")
        } 
        
        else 
            alert("No aceptamos menores de edad, ¡vuelve cuando crezcas!")
            console.log("Fin de la ejecución")

    
    if ((( inicio == "MAGO") || (inicio == "BRUJA")) && (edad >= 18)){
        for (let i = 1; i <= 5; i++) {
            let clases = prompt("Ingresa tus 5 clases favoritas en Hogwarts en orden").toUpperCase();
            alert(clases + " es tu materia número " + i)
            console.log(clases + " " + i)

            }
            let house = "SLYTHERIN"
            let password = "BASILISCO"
                    
            if ((( inicio == "MAGO") || (inicio == "BRUJA")) && (edad >= 18)){
                do{
                    house = prompt("Por favor ingresa tu casa en Hogwarts").toUpperCase()
                    password = prompt("Por favor ingresa la contraseña").toUpperCase()
                    
                    } while(house != "SLYTHERIN" && password != "BASILISCO")
                    console.log(house)
                    console.log(password)
                    }
        
            if ((( inicio == "MAGO") || (inicio == "BRUJA")) && (edad >= 18)){
                    let nombre = prompt("Por favor ingrese su nombre").toUpperCase()
                    let apellido = prompt("Por favor ingrese su apellido").toUpperCase()
                
                    function saludo (nombre, apellido) {
                        alert("Hola de nuevo " + " " + nombre + " " + apellido)   
                        console.log("Hola de nuevo " + " " + nombre + " " + apellido)
                    }
                
                    saludo(nombre, apellido)
            }}
    }
