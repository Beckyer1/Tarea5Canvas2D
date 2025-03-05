const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 3. CÍRCULO
// 3.1 Definir el inicio del trazo
ctx.beginPath();
// 3.2 Definir los estilos
ctx.fillStyle = 'white';
// 3.3 Especificamos la figura
// ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
ctx.moveTo(500, 500); // Mover al centro del círculo
ctx.ellipse(500, 500, 500, 500, Math.PI, 0, Math.PI / 2); // Dibujar el arco de 1/4 de círculo
ctx.lineTo(500, 500); // Volver al centro para cerrar la rebanada
// 3.4 Dibujar el relleno o el contorno
ctx.fill();

// Círculo rojo 1, volteado 90 grados
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.moveTo(0, 1000); // Mover al centro del círculo
ctx.ellipse(0, 1000, 500, 500, -Math.PI / 2, 0, Math.PI / 2); // Volteado 90 grados
ctx.lineTo(0, 1000); // Volver al centro para cerrar la rebanada
ctx.fill();

// Círculo rojo 2, volteado 90 grados
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.moveTo(500, 1000); // Mover al centro del círculo
ctx.ellipse(500, 1000, 500, 500, -Math.PI / 2, 0, Math.PI / 2); // Volteado 90 grados
ctx.lineTo(500, 1000); // Volver al centro para cerrar la rebanada
ctx.fill();

// Círculo blanco 1
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.moveTo(1000, 500); // Mover al centro del círculo
ctx.ellipse(1000, 500, 500, 500, Math.PI, 0, Math.PI / 2); // Dibujar el arco de 1/4 de círculo
ctx.lineTo(1000, 500); // Volver al centro para cerrar la rebanada
ctx.fill();
