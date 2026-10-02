import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre completo del cliente: ", function(nombre) {

    rl.question("Ingrese la marca/modelo del vehículo: ", function(vehiculo) {

        rl.question("Ingrese el monto base estimado del auto: $", function(entradaMonto) {

            const montoBase = parseFloat(entradaMonto);

            if (isNaN(montoBase) || montoBase <= 0) {
                console.log("Error: El monto ingresado no es válido.");
                rl.close();
                return;
            }

            console.log("\nTIPO DE VEHÍCULO");
            console.log("1. Sedán");
            console.log("2. SUV");
            console.log("3. Pick-up / Camioneta");

            rl.question("Seleccione una opción: ", function(opcion) {

                let porcentajePrima = 0;
                let tipoVehiculo = "";

                switch (opcion) {

                    case "1":
                        porcentajePrima = 0.05;
                        tipoVehiculo = "Sedán";
                        break;

                    case "2":
                        porcentajePrima = 0.08;
                        tipoVehiculo = "SUV";
                        break;

                    case "3":
                        porcentajePrima = 0.12;
                        tipoVehiculo = "Pick-up / Camioneta";
                        break;

                    default:
                        console.log("Error: La opción seleccionada no existe.");
                        rl.close();
                        return;
                }

                const primaAnual = montoBase * porcentajePrima;
                const totalAnual = montoBase + primaAnual;

                const fecha = new Date().toLocaleString();

                console.log("\n========== REPORTE DE COTIZACIÓN ==========");
                console.log("Fecha y hora: " + fecha);
                console.log("Cliente: " + nombre.trim());
                console.log("Vehículo: " + vehiculo.trim());
                console.log("Tipo: " + tipoVehiculo);
                console.log("Valor del vehículo: $" + montoBase.toFixed(2));
                console.log("Prima anual: $" + primaAnual.toFixed(2));
                console.log("Total anual: $" + totalAnual.toFixed(2));
                console.log("============================================");

                rl.close();
            });
        });
    });
});