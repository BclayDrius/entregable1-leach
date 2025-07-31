const gastos = [];
let totalGastos = 0;

function ingresarGasto() {
  const nombre = prompt("Ingrese el nombre del gasto:");
  if (!nombre) {
    alert("Debe ingresar un nombre para el gasto.");
    return;
  }
  let monto = prompt("Ingrese el monto del gasto:");
  monto = parseFloat(monto);
  if (isNaN(monto) || monto <= 0) {
    alert("Debe ingresar un monto válido y mayor a 0.");
    return;
  }
  gastos.push({ nombre, monto });
  alert(`Gasto "${nombre}" de $${monto} agregado correctamente.`);
}

function calcularTotal() {
  totalGastos = 0;
  for (let i = 0; i < gastos.length; i++) {
    totalGastos += gastos[i].monto;
  }
  return totalGastos;
}

function mostrarResumen() {
  if (gastos.length === 0) {
    alert("No hay gastos registrados.");
    return;
  }
  let mensaje = "Resumen de gastos:\n";
  for (let i = 0; i < gastos.length; i++) {
    mensaje += `- ${gastos[i].nombre}: $${gastos[i].monto.toFixed(2)}\n`;
  }
  mensaje += `\nTotal gastado: $${calcularTotal().toFixed(2)}`;
  alert(mensaje);
  console.log(mensaje);
}

// Función principal que controla el flujo del simulador
function simuladorGastos() {
  alert("Bienvenido/a al simulador de gastos.");
  let continuar = true;
  while (continuar) {
    ingresarGasto();
    continuar = confirm("¿Desea agregar otro gasto?");
  }
  mostrarResumen();
  alert("Gracias por usar el simulador de gastos.");
}

simuladorGastos();
