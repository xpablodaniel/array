
const almuerzoMenu = [
    "Ensalada de pollo a la parrilla",
    "Sándwich de atún con ensalada de col",
    "Pizza vegetariana con champiñones y aceitunas"
];
almuerzoMenu.push("Milanesa con puré");
const cenaMenu = [
    "Pasta con salsa de tomate y albóndigas",
    "Pollo a la cordon bleu con puré de papas",
    "Salmón a la parrilla con espárragos asados"
];
cenaMenu.push("Costillas de cerdo con vegetales grillados");
const postreMenu = [
    "Pastel de manzana con crema batida",
    "Helado de vainilla con salsa de chocolate",
    "Flan casero con caramelo"
];


postreMenu.push("Arroz con leche");

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

