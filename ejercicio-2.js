import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del huésped: ", function(nombre) {

    rl.question("Ingrese la cantidad de noches: ", function(entradaNoches) {

        const noches = Number(entradaNoches);

        if (isNaN(noches) || noches <= 0) {
            console.log("Error: La cantidad de noches no es válida.");
            rl.close();
            return;
        }

        rl.question("Ingrese la tarifa base por noche: $", function(entradaTarifa) {

            const tarifaBase = parseFloat(entradaTarifa);

            if (isNaN(tarifaBase) || tarifaBase <= 0) {
                console.log("Error: La tarifa ingresada no es válida.");
                rl.close();
                return;
            }

            console.log("\nTEMPORADA DE RESERVA");
            console.log("1. Temporada Baja");
            console.log("2. Temporada Media");
            console.log("3. Temporada Alta");

            rl.question("Seleccione una opción: ", function(opcion) {

                let recargo = 0;
                let temporada = "";

                switch (opcion) {

                    case "1":
                        recargo = 0;
                        temporada = "Temporada Baja";
                        break;

                    case "2":
                        recargo = 0.15;
                        temporada = "Temporada Media";
                        break;

                    case "3":
                        recargo = 0.35;
                        temporada = "Temporada Alta";
                        break;

                    default:
                        console.log("Error: La opción seleccionada no existe.");
                        rl.close();
                        return;
                }

                const costoPorNoche = tarifaBase + (tarifaBase * recargo);

                let totalHospedaje = costoPorNoche * noches;

                let descuento = 0;

                if (noches >= 5) {
                    descuento = totalHospedaje * 0.10;
                    totalHospedaje = totalHospedaje - descuento;
                }

                const impuestoTurismo = totalHospedaje * 0.05;

                const totalFinal = totalHospedaje + impuestoTurismo;

                const totalRedondeado = Math.ceil(totalFinal);

                const fechaActual = new Date();

                const fechaCheckout = new Date(fechaActual);

                fechaCheckout.setDate(fechaCheckout.getDate() + noches);

                console.log("\n========== LIQUIDACIÓN DE HOSPEDAJE ==========");
                console.log("Huésped: " + nombre.trim());
                console.log("Temporada: " + temporada);
                console.log("Noches: " + noches);
                console.log("Costo por noche: $" + costoPorNoche.toFixed(2));
                console.log("Descuento: $" + descuento.toFixed(2));
                console.log("Impuesto de turismo: $" + impuestoTurismo.toFixed(2));
                console.log("Total exacto: $" + totalFinal.toFixed(2));
                console.log("Total redondeado: $" + totalRedondeado);
                console.log("Fecha de check-out: " + fechaCheckout.toLocaleDateString());
                console.log("===============================================");

                rl.close();
            });
        });
    });
});