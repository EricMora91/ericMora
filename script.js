let inicio = prompt(`¿Quién anda ahí?, ¿eres mago o bruja?`).toUpperCase()


    if (inicio == `MAGO`) {
        alert( `Bienvenido`)
        console.log(`Eres un mago`)
    }
    else if (inicio == `BRUJA`) {
        alert(`Bienvenida`)
        console.log(`Eres una bruja`)
    } else {
        alert(`¡No se permiten Muggles!`)
        console.log(`No debes ingresar aquí`)
    }

if( inicio == `MAGO` || inicio == `BRUJA`){
    let edad =  Number(prompt(`Ingresa tu edad`))
    
    while( isNaN(edad)){
        alert(`Por favor ingrese solo números`)
        edad = Number(prompt(`Ingresa tu edad`))
    }
    if (edad >= 18) {
        alert(`Adelante`)
        console.log(edad)
        console.log(`Eres mayor de edad`)
    } 
        
    else 
        alert(`No aceptamos menores de edad, ¡vuelve cuando crezcas!`)
        console.log(`Eres menor de edad`)
        console.log(`Fin de la ejecución`)

    if ( (inicio == `MAGO` || inicio == `BRUJA`) && edad >= 18){

            let name = prompt(`Por favor ingrese su nombre`).toUpperCase()
            let apellido = prompt(`Por favor ingrese su apellido`).toUpperCase()

            function saludo (name, apellido) {
                alert(`Bienvenido a Hogwarts ` + name +` `+ apellido)
                console.log(`Bienvenido a Hogwarts ` + name +` ` + apellido)
            }

            saludo(name, apellido)
    
        class Casas{
            constructor(id, nombre, valores){
                this.id = id,
                this.nombre = nombre,
                this.valores = valores
            }
        }

            const casasG = new Casas(1,`Gryffindor` , `Valor, Fuerza, Audacia`);
            const casasH = new Casas(2, `Hufflepuff` , `Justicia, Lealtad, Paciencia`);
            const casasR = new Casas(3, `Ravenclaw` , `Creatividad, Erudición, Inteligencia`);
            const casasS = new Casas(4, `Slytherin` , `Ambición, Determinación, Astucia`)

            const houses = [casasG, casasH, casasR, casasS]

            console.log(houses)

            alert(`Por favor elige sabiamente cuál es la casa a la que te gustaría pertenecer: 
            \nElige ${houses[0].id} para ${houses[0].nombre}. Valores: ${houses[0].valores}
            \nElige ${houses[1].id} para ${houses[1].nombre}. Valores: ${houses[1].valores}
            \nElige ${houses[2].id} para ${houses[2].nombre}. Valores: ${houses[2].valores}
            \nElige ${houses[3].id} para ${houses[3].nombre}. Valores: ${houses[3].valores}
            \nElige 99 para salir`
            )

            if ((inicio == `MAGO` || inicio == `BRUJA`) && edad >= 18){
                let accionUsuario = Number(prompt(`¿Cuál casa eliges?`))
                let casaFinal = []

                while( isNaN(accionUsuario)){
                    alert(`Por favor ingrese solo números`)
                    accionUsuario = Number(prompt(`¿Cuál casa eliges?`))
                }

                while(accionUsuario != 99){
                    switch(accionUsuario) {
                        case 1:
                            alert(`Has elegido ser parte de ${houses[0].nombre}`)
                            console.log(`Ahora perteneces a ${houses[0].nombre}`)
                            casaFinal.push(`${houses[0].nombre}`)
                            break;

                        case 2:
                            alert(`Has elegido ser parte de ${houses[1].nombre}`)
                            console.log(`Ahora perteneces a ${houses[1].nombre}`)
                            casaFinal.push(`${houses[1].nombre}`)
                            break;

                        case 3:
                            alert(`Has elegido ser parte de ${houses[2].nombre}`)
                            console.log(`Ahora perteneces a ${houses[2].nombre}`)
                            casaFinal.push(`${houses[2].nombre}`)
                            break;

                        case 4:
                            alert(`Has elegido ser parte de ${houses[3].nombre}`)
                            console.log(`Ahora perteneces a ${houses[3].nombre}`)
                            casaFinal.push(`${houses[3].nombre}`)
                            break;

                        default: 
                            console.log(`Dato inexistente`)
                            alert(`Dato incorrecto, prueba otra vez.`);
                            break
                    }
                    if(accionUsuario == 1 || accionUsuario ==2 || accionUsuario == 3 || accionUsuario == 4 ){
                        break
                    }   else{
                        accionUsuario = Number(prompt(`¿Cuál casa eliges?`)) 
                        }
                
                }
                    if ((inicio == `MAGO` || inicio == `BRUJA`) && (edad >= 18 ) && (accionUsuario <= 4)){
            
                        const asignaturas = [`Astronomía`, `Encantamientos`, `Defensa Contra las Artes Oscuras`, `Vuelo`, `Herbología`, `Historia de la Magia`, `Pociones`, `Transformaciones`] 
                        console.log(asignaturas)  
            
                        alert(`A continuación verás una lista de las materias obligatorias a cursar. \nElige 1 materia que NO quieras cursar este  semestre:
                        \nElige 1 para ${asignaturas[0]}
                        \nElige 2 para ${asignaturas[1]}
                        \nElige 3 para ${asignaturas[2]}
                        \nElige 4 para ${asignaturas[3]}
                        \nElige 5 para ${asignaturas[4]}
                        \nElige 6 para ${asignaturas[5]}
                        \nElige 7 para ${asignaturas[6]}
                        \nElige 8 para ${asignaturas[7]}
                        \nElige 99 para salir`)
                    
                            let ordenMaterias = Number(prompt(`Elige 1 materia obligatoria a descartar`))

                            while(isNaN(ordenMaterias)){
                                alert(`Por favor ingrese solo números`)
                                ordenMaterias = Number(prompt(`Elige 1 materia obligatoria a descartar`)) 
                            }
                    
                            while(ordenMaterias != 99){
                                switch(ordenMaterias) {
                                    case 1:
                                        alert(`Has elegido a ${asignaturas[0]}`)
                                        asignaturas.splice(0,1)
                                        break;
                    
                                    case 2:
                                        alert(`Has elegido a ${asignaturas[1]}`)
                                        asignaturas.splice(1,1)
                                        break;
                    
                                    case 3:
                                        alert(`Has elegido a ${asignaturas[2]}`)
                                        asignaturas.splice(2,1)
                                        break;
                    
                                    case 4:
                                        alert(`Has elegido a ${asignaturas[3]}`)
                                        asignaturas.splice(3,1)
                                        break;
                    
                                    case 5:
                                        alert(`Has elegido a ${asignaturas[4]}`)
                                        asignaturas.splice(4,1)
                                        break;
                    
                                    case 6:
                                        alert(`Has elegido a ${asignaturas[5]}`)
                                        asignaturas.splice(5,1)
                                        break;
                    
                                    case 7:
                                        alert(`Has elegido a ${asignaturas[6]}`)
                                        asignaturas.splice(6,1)
                                        break;
                    
                                    case 8:
                                        alert(`Has elegido a ${asignaturas[7]}`)
                                        asignaturas.splice(7,1)
                                        break;
                    
                                    default: 
                                        console.log(`Dato inexistente`)
                                        alert(`Dato incorrecto, prueba otra vez.`);
                                        break
                                } ordenMaterias = Number(prompt(`Elige 1 materia obligatoria a descartar`))
                            } 
                                                    
                            alert(`Tus materias obligatorias este semestre son:
                                    \n1 ${asignaturas[0]}
                                    \n2 ${asignaturas[1]}
                                    \n3 ${asignaturas[2]}
                                    \n4 ${asignaturas[3]}
                                    \n5 ${asignaturas[4]}
                                    \n6 ${asignaturas[5]}
                                    \n7 ${asignaturas[6]}`)
                            console.log(asignaturas)

                            if ((inicio == `MAGO` || inicio == `BRUJA`) && (edad >= 18 ) && (accionUsuario <= 4)){

                            class MateriasOp{
                                constructor(id, nombre,){
                                    this.id = id,
                                    this.nombre = nombre
                                }
                            }

                            const materiaOp1 = new MateriasOp(1,`Estudio de Runas Antiguas`);
                            const materiaOp2 = new MateriasOp(2, `Aritmancia`);
                            const materiaOp3 = new MateriasOp(3, `Estudios Muggles`);
                            const materiaOp4 = new MateriasOp(4, `Cuidado de Criaturas Mágicas`)
                            const materiaOp5 = new MateriasOp(5,`Adivinación`);
                            const materiaOp6 = new MateriasOp(6, `Alquimia`);

                            const asignaturasOp = [materiaOp1, materiaOp2, materiaOp3, materiaOp4, materiaOp5, materiaOp6] 
                            console.log(asignaturasOp) 

                            alert(`A continuación verás una lista de las materias optativas a cursar. \nElige las 3 de mayor interés para ti:
                            \nElige ${asignaturasOp[0].id} para ${asignaturasOp[0].nombre}
                            \nElige ${asignaturasOp[1].id} para ${asignaturasOp[1].nombre}
                            \nElige ${asignaturasOp[2].id} para ${asignaturasOp[2].nombre}
                            \nElige ${asignaturasOp[3].id} para ${asignaturasOp[3].nombre}
                            \nElige ${asignaturasOp[4].id} para ${asignaturasOp[4].nombre}
                            \nElige ${asignaturasOp[5].id} para ${asignaturasOp[5].nombre}
                            \nElige 99 para salir`)

                            const miPreferenciaOp = []
                            let ordenMateriasOp = Number(prompt(`Elige 3 materias optativas`))

                            while(isNaN(ordenMateriasOp)){
                                alert(`Por favor ingrese solo números`)
                                ordenMateriasOp = Number(prompt(`Elige 3 materias optativas`)) 
                            }
                    
                            while(ordenMateriasOp != 99){
                                switch(ordenMateriasOp) {
                                    case 1:
                                        alert(`Has elegido a ${asignaturasOp[0].nombre}`)
                                        miPreferenciaOp.push(asignaturasOp[0].nombre)
                                        break;
                    
                                    case 2:
                                        alert(`Has elegido a ${asignaturasOp[1].nombre}`)
                                        miPreferenciaOp.push(asignaturasOp[1].nombre)
                                        break;
                    
                                    case 3:
                                        alert(`Has elegido a ${asignaturasOp[2].nombre}`)
                                        miPreferenciaOp.push(asignaturasOp[2].nombre)
                                        break;
                    
                                    case 4:
                                        alert(`Has elegido a ${asignaturasOp[3].nombre}`)
                                        miPreferenciaOp.push(asignaturasOp[3].nombre)
                                        break;
                    
                                    case 5:
                                        alert(`Has elegido a ${asignaturasOp[4].nombre}`)
                                        miPreferenciaOp.push(asignaturasOp[4].nombre)
                                        break;
                    
                                    case 6:
                                        alert(`Has elegido a ${asignaturasOp[5].nombre}`)
                                        miPreferenciaOp.push(asignaturasOp[5].nombre)
                                        break;
                    
                                    default: 
                                        console.log(`Dato inexistente`)
                                        alert(`Dato incorrecto, prueba otra vez.`);
                                        break
                                } ordenMateriasOp = Number(prompt(`Elige 3 materias optativas`))
                                
                            } 
                                                    
                            alert(`Tus materias optativas quedaron asignadas en el siguiente orden:
                                    \n1 ${miPreferenciaOp[0]}
                                    \n2 ${miPreferenciaOp[1]}
                                    \n3 ${miPreferenciaOp[2]}`)
                            console.log(miPreferenciaOp)

                            const perfil ={
                                nombre:  name,
                                apellido: apellido,
                                edad: edad,
                                casa: casaFinal,
                                materiasObligatorias: asignaturas,
                                materiasOptativas: miPreferenciaOp
                            }

                            console.log(perfil)
                            console.log(asignaturas)

                            alert(`Hola ${name} ${apellido}, tienes ${edad} años, eres de la Casa de ${casaFinal} y cursas las asignaturas obligatorias ${asignaturas.join(`, `)} y las asignaturas optativas ${miPreferenciaOp.join(`, `)}`)


                                const uniforme = [
                                    {Nombre: `Túnica sencilla de trabajo`, Unidades: 3, precio: 50,},
                                    {Nombre: `Sombrero negro puntiagudo`, Unidades: 3, precio: 30,},
                                    {Nombre: `Par de guantes`, Unidades: 3, precio: 25,},
                                    {Nombre: `Capa de invierno`,Unidades: 3, precio: 50}
                                ]
                                
                                function porCadaUno(array, funcionRecibida){
                                    let triple = []
                                for(const el of array){
                                    triple.push(funcionRecibida(el))
                                }
                                    return triple
                                }

                                function triplicarValor(uniforme) {
                                    return uniforme.precio * 3
                                }
                                let triplicado = porCadaUno (uniforme, triplicarValor)
                                console.log(triplicado)

                                const triple2 = uniforme.map((el) => (el).precio * 3)
                                console.log(triple2)

                                const equipo = [
                                    {nombre: `Varita`, Unidades: 1, precio: 300,},
                                    {nombre: `Caldero`, Unidades: 1, precio: 200,},
                                    {nombre: `Telescopio`, Unidades: 1, precio: 400,},
                                    {nombre: `Balanza de latón`,Unidades: 1, precio: 500}
                                ]

                                const resultado = equipo.filter((el) => (el).precio < 500)
                                console.log(resultado)

                                const nombres = equipo.map((el) => (el).nombre)
                                console.log(nombres)

                                const libros = [
                                    {nom: `El Libro Reglamentario de Hechizos, Miranda Goshawk`, Unidades: 1, Precio: 80,},
                                    {nom: `Una Historia de la Magia, Bathilda Bagshot`, Unidades: 1, Precio: 100},
                                    {nom: `Teoría Mágica, Adalbert Waffling`, Unidades: 1, Precio: 150,},
                                    {nom: `Guía de Transformaciones para principiantes, Emeric Switch`,Unidades: 1, Precio: 200 },
                                    {nom: `Mil Hierbas y hongos mágicos, Phyllida Spore`, Unidades: 1, Precio: 150},
                                    {nom: `Filtros y Pociones Mágicas, Arsenius Jigger`, Unidades: 1, Precio: 180},                                   
                                    {nom: `Mil Hierbas y hongos mágicos, Phyllida Spore`, Unidades: 1, Precio: 140},                                  
                                    {nom: `Animales Fantásticos y Dónde Encontrarlos, Newton Scamander`, Unidades: 1, Precio: 130},
                                    {nom: `Las Fuerzas Oscuras. Una guía para la autoprotección, Quentim Trimble`, Unidades: 1, Precio: 150}
                                ]

                                    libros.sort((a, b) => {
                                        if(a.nom > b.nom){
                                            return 1;
                                        }
                                        if(a.nom < b.nom){
                                            return -1;
                                        }
                                        return 0;
                                    })
                                    console.log(libros)
                            }
                            
                    }
                        else{
                            alert(`Hasta luego`)
                            console.log(`Fin del proceso`)
                        }
                }       
            }
    }
