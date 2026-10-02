import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del vendedor: ", function(vendedor) {

    rl.question("Ingrese el nombre del producto: ", function(producto) {

        rl.question("Ingrese el precio base del producto: $", function(entradaPrecio) {

            const precioBase = parseFloat(entradaPrecio);

            if (isNaN(precioBase) || precioBase <= 0) {
                console.log("Error: El precio ingresado no es válido.");
                rl.close();
                return;
            }

            console.log("\nCATEGORÍAS");
            console.log("A. Línea Blanca");
            console.log("B. Electrónica");
            console.log("C. Mueblería");
            console.log("D. Accesorios/Varios");

            rl.question("Seleccione una categoría: ", function(entradaCategoria) {

                const categoria = entradaCategoria.toUpperCase();

                let descuentoPorcentaje = 0;
                let nombreCategoria = "";

                switch (categoria) {

                    case "A":
                        descuentoPorcentaje = 0.10;
                        nombreCategoria = "Línea Blanca";
                        break;

                    case "B":
                        descuentoPorcentaje = 0.05;
                        nombreCategoria = "Electrónica";
                        break;

                    case "C":
                        descuentoPorcentaje = 0.15;
                        nombreCategoria = "Mueblería";
                        break;

                    case "D":
                        descuentoPorcentaje = 0;
                        nombreCategoria = "Accesorios/Varios";
                        break;

                    default:
                        console.log("Error: La categoría seleccionada no existe.");
                        rl.close();
                        return;
                }

                rl.question("¿Desea agregar garantía extendida? (S/N): ", function(respuesta) {

                    const garantia = respuesta.toUpperCase();

                    const descuento = precioBase * descuentoPorcentaje;

                    let subtotal = precioBase - descuento;

                    let costoGarantia = 0;

                    if (garantia === "S") {
                        costoGarantia = 25;
                        subtotal = subtotal + costoGarantia;
                    }

                    const iva = subtotal * 0.13;

                    const total = subtotal + iva;

                    const totalRedondeado = Math.round(total);

                    const fecha = new Date();

                    console.log("\n======================================");
                    console.log("           FACTURA DE VENTA");
                    console.log("======================================");
                    console.log("Fecha: " + fecha.toLocaleDateString());
                    console.log("Hora: " + fecha.toLocaleTimeString());
                    console.log("Vendedor: " + vendedor.trim());
                    console.log("Producto: " + producto.trim());
                    console.log("Categoría: " + nombreCategoria);
                    console.log("--------------------------------------");
                    console.log("Precio base: $" + precioBase.toFixed(2));
                    console.log("Descuento: $" + descuento.toFixed(2));
                    console.log("Garantía: $" + costoGarantia.toFixed(2));
                    console.log("Subtotal: $" + subtotal.toFixed(2));
                    console.log("IVA 13%: $" + iva.toFixed(2));
                    console.log("--------------------------------------");
                    console.log("Total exacto: $" + total.toFixed(2));
                    console.log("Total aproximado: $" + totalRedondeado);
                    console.log("======================================");

                    rl.close();
                });
            });
        });
    });
});