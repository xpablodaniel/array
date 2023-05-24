
const almuerzoMenu = [
    "Empanadas Criollas", "Ensalada Capresse", "Ensalada Lucho’s Cheff", "Tortillin de papa", "Papas cheddar y puerro"
    // "Ensalada de pollo a la parrilla",
    // "Sándwich de atún con ensalada de col",
    // "Pizza vegetariana con champiñones y aceitunas"
];
almuerzoMenu.push("Crunch de Pollo con Ali - Oli");
const cenaMenu = [
    "Muslo braseado al limón con ensalada del Cheff", "Milanesa de peceto con puré marmolado de espinacas", "Ravioli de espinaca mediterráneo",
     "Suprema de pollo con arroz pilaf", "Carne al horno braseada a la criolla con mix de hojas verdes"
    // "Pasta con salsa de tomate y albóndigas",
    // "Pollo a la cordon bleu con puré de papas",
    // "Salmón a la parrilla con espárragos asados"
];
cenaMenu.push("Carne al Horno Braseada con Ensalada");
const postreMenu = [
    "Flan de naranja con dulce de leche", "Ensalada de frutas de estación", "Helado de americana con praline de frutos secos",
    " Budín de pan con crema montada", "Bombón suizo con frutos rojos"
    // "Pastel de manzana con crema batida",
    // "Helado de vainilla con salsa de chocolate",
    // "Flan casero con caramelo"
];


postreMenu.push("Manzanas Asadas con Crema");

const almuerzoSelect = document.getElementById('almuerzo-select');
const cenaSelect = document.getElementById('cena-select');
const postreSelect = document.getElementById('postre-select');

// función para agregar opciones al menú desplegable
function addToSelect(item, select) {
    let option = document.createElement('option');
    option.textContent = item;
    select.appendChild(option);
}

// agregar opciones a los menús desplegables

almuerzoMenu.forEach(item => addToSelect(item, almuerzoSelect));
cenaMenu.forEach(item => addToSelect(item, cenaSelect));
postreMenu.forEach(item => addToSelect(item, postreSelect));


window.addEventListener('load', function() {
    almuerzoSelect = document.getElementById('almuerzo-select');
    cenaSelect = document.getElementById('cena-select');
    postreSelect = document.getElementById('postre-select');
});

