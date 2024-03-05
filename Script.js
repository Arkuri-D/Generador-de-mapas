// script.js
const tileSet = [
    { nombre: '000000a', set: [0, 0, 0, 0, 0, 0], clase: 'Cave' },
    { nombre: '100000a', set: [1, 0, 0, 0, 0, 0], clase: 'Cave' },
    { nombre: '200000a', set: [2, 0, 0, 0, 0, 0], clase: 'Cave' },
    { nombre: '110000a', set: [1, 1, 0, 0, 0, 0], clase: 'Cave' },
    { nombre: '120000a', set: [1, 2, 0, 0, 0, 0], clase: 'Cave' },
    { nombre: '220000a', set: [2, 2, 0, 0, 0, 0], clase: 'Cave' },
    { nombre: '101000a', set: [1, 0, 1, 0, 0, 0], clase: 'Cave' },
    { nombre: '102000a', set: [1, 0, 2, 0, 0, 0], clase: 'Cave' },
    { nombre: '111000a', set: [1, 1, 1, 0, 0, 0], clase: 'Cave' },
    { nombre: '112000a', set: [1, 1, 2, 0, 0, 0], clase: 'Cave' },
    { nombre: '121000a', set: [1, 2, 1, 0, 0, 0], clase: 'Cave' },
    { nombre: '122000a', set: [1, 2, 2, 0, 0, 0], clase: 'Cave' },
    { nombre: '202000a', set: [2, 0, 2, 0, 0, 0], clase: 'Cave' },
    { nombre: '212000a', set: [2, 1, 2, 0, 0, 0], clase: 'Cave' },
    { nombre: '222000a', set: [2, 2, 2, 0, 0, 0], clase: 'Cave' },
    { nombre: '100100a', set: [1, 0, 0, 1, 0, 0], clase: 'Cave' },
    { nombre: '100200a', set: [1, 0, 0, 2, 0, 0], clase: 'Cave' },
    { nombre: '101100a', set: [1, 0, 1, 1, 0, 0], clase: 'Cave' },
    { nombre: '101200a', set: [1, 0, 1, 2, 0, 0], clase: 'Cave' },
    { nombre: '102100a', set: [1, 0, 2, 1, 0, 0], clase: 'Cave' },
    { nombre: '102200a', set: [1, 0, 2, 2, 0, 0], clase: 'Cave' },
    { nombre: '110200a', set: [1, 1, 0, 2, 0, 0], clase: 'Cave' },
    { nombre: '111100a', set: [1, 1, 1, 1, 0, 0], clase: 'Cave' },
    { nombre: '111200a', set: [1, 1, 1, 2, 0, 0], clase: 'Cave' },
    { nombre: '112100a', set: [1, 1, 2, 1, 0, 0], clase: 'Cave' },
    { nombre: '112200a', set: [1, 1, 2, 2, 0, 0], clase: 'Cave' },
    { nombre: '120200a', set: [1, 2, 0, 2, 0, 0], clase: 'Cave' },
    { nombre: '121200a', set: [1, 2, 1, 2, 0, 0], clase: 'Cave' },
    { nombre: '122100a', set: [1, 2, 2, 1, 0, 0], clase: 'Cave' },
    { nombre: '122200a', set: [1, 2, 2, 2, 0, 0], clase: 'Cave' },
    { nombre: '200200a', set: [2, 0, 0, 2, 0, 0], clase: 'Cave' },
    { nombre: '201200a', set: [2, 0, 1, 2, 0, 0], clase: 'Cave' },
    { nombre: '202200a', set: [2, 0, 2, 2, 0, 0], clase: 'Cave' },
    { nombre: '211200a', set: [2, 1, 1, 2, 0, 0], clase: 'Cave' },
    { nombre: '212200a', set: [2, 1, 2, 2, 0, 0], clase: 'Cave' },
    { nombre: '222200a', set: [2, 2, 2, 2, 0, 0], clase: 'Cave' },
    { nombre: '101010a', set: [1, 0, 1, 0, 1, 0], clase: 'Cave' },
    { nombre: '101020a', set: [1, 0, 1, 0, 2, 0], clase: 'Cave' },
    { nombre: '101110a', set: [1, 0, 1, 1, 1, 0], clase: 'Cave' },
    { nombre: '101120a', set: [1, 0, 1, 1, 2, 0], clase: 'Cave' },
    { nombre: '101210a', set: [1, 0, 1, 2, 1, 0], clase: 'Cave' },
    { nombre: '101220a', set: [1, 0, 1, 2, 2, 0], clase: 'Cave' },
    { nombre: '102020a', set: [1, 0, 2, 0, 2, 0], clase: 'Cave' },
    { nombre: '102120a', set: [1, 0, 2, 1, 2, 0], clase: 'Cave' },
    { nombre: '102220a', set: [1, 0, 2, 2, 2, 0], clase: 'Cave' },
    { nombre: '110110a', set: [1, 1, 0, 1, 1, 0], clase: 'Cave' },
    { nombre: '110120a', set: [1, 1, 0, 1, 2, 0], clase: 'Cave' },
    { nombre: '110220a', set: [1, 1, 0, 2, 2, 0], clase: 'Cave' },
    { nombre: '111020a', set: [1, 1, 1, 0, 2, 0], clase: 'Cave' },
    { nombre: '111110a', set: [1, 1, 1, 1, 1, 0], clase: 'Cave' },
    { nombre: '111120a', set: [1, 1, 1, 1, 2, 0], clase: 'Cave' },
    { nombre: '111210a', set: [1, 1, 1, 2, 1, 0], clase: 'Cave' },
    { nombre: '111220a', set: [1, 1, 1, 2, 2, 0], clase: 'Cave' },
    { nombre: '112020a', set: [1, 1, 2, 0, 2, 0], clase: 'Cave' },
    { nombre: '112110a', set: [1, 1, 2, 1, 1, 0], clase: 'Cave' },
    { nombre: '112120a', set: [1, 1, 2, 1, 2, 0], clase: 'Cave' },
    { nombre: '112210a', set: [1, 1, 2, 2, 1, 0], clase: 'Cave' },
    { nombre: '112220a', set: [1, 1, 2, 2, 2, 0], clase: 'Cave' },
    { nombre: '120120a', set: [1, 2, 0, 1, 2, 0], clase: 'Cave' },
    { nombre: '120210a', set: [1, 2, 0, 2, 1, 0], clase: 'Cave' },
    { nombre: '120220a', set: [1, 2, 0, 2, 2, 0], clase: 'Cave' },
    { nombre: '121020a', set: [1, 2, 1, 0, 2, 0], clase: 'Cave' },
    { nombre: '121120a', set: [1, 2, 1, 1, 2, 0], clase: 'Cave' },
    { nombre: '121210a', set: [1, 2, 1, 2, 1, 0], clase: 'Cave' },
    { nombre: '121220a', set: [1, 2, 1, 2, 2, 0], clase: 'Cave' },
    { nombre: '122020a', set: [1, 2, 2, 0, 2, 0], clase: 'Cave' },
    { nombre: '122120a', set: [1, 2, 2, 1, 2, 0], clase: 'Cave' },
    { nombre: '122210a', set: [1, 2, 2, 2, 1, 0], clase: 'Cave' },
    { nombre: '122220a', set: [1, 2, 2, 2, 2, 0], clase: 'Cave' },
    { nombre: '202020a', set: [2, 0, 2, 0, 2, 0], clase: 'Cave' },
    { nombre: '202120a', set: [2, 0, 2, 1, 2, 0], clase: 'Cave' },
    { nombre: '202220a', set: [2, 0, 2, 2, 2, 0], clase: 'Cave' },
    { nombre: '211120a', set: [2, 1, 1, 1, 2, 0], clase: 'Cave' },
    { nombre: '211220a', set: [2, 1, 1, 2, 2, 0], clase: 'Cave' },
    { nombre: '212120a', set: [2, 1, 2, 1, 2, 0], clase: 'Cave' },
    { nombre: '212220a', set: [2, 1, 2, 2, 2, 0], clase: 'Cave' },
    { nombre: '220220a', set: [2, 2, 0, 2, 2, 0], clase: 'Cave' },
    { nombre: '221220a', set: [2, 2, 1, 2, 2, 0], clase: 'Cave' },
    { nombre: '222220a', set: [2, 2, 2, 2, 2, 0], clase: 'Cave' },
    { nombre: '111111a', set: [1, 1, 1, 1, 1, 1], clase: 'Cave' },
    { nombre: '111112a', set: [1, 1, 1, 1, 1, 2], clase: 'Cave' },
    { nombre: '111122a', set: [1, 1, 1, 1, 2, 2], clase: 'Cave' },
    { nombre: '111212a', set: [1, 1, 1, 2, 1, 2], clase: 'Cave' },
    { nombre: '111222a', set: [1, 1, 1, 2, 2, 2], clase: 'Cave' },
    { nombre: '112112a', set: [1, 1, 2, 1, 1, 2], clase: 'Cave' },
    { nombre: '112122a', set: [1, 1, 2, 1, 2, 2], clase: 'Cave' },
    { nombre: '112222a', set: [1, 1, 2, 2, 2, 2], clase: 'Cave' },
    { nombre: '121212a', set: [1, 2, 1, 2, 1, 2], clase: 'Cave' },
    { nombre: '121222a', set: [1, 2, 1, 2, 2, 2], clase: 'Cave' },
    { nombre: '122122a', set: [1, 2, 2, 1, 2, 2], clase: 'Cave' },
    { nombre: '122222a', set: [1, 2, 2, 2, 2, 2], clase: 'Cave' },
    { nombre: '222222a', set: [2, 2, 2, 2, 2, 2], clase: 'Cave' }
];


function checkAndShiftTile(tile, pattern, validTiles) {
    const maxShifts = 5;

    for (let shift = 0; shift <= maxShifts; shift++) {
        const shiftedTile = shiftArray(tile.set, shift);

        // Verificar si el tile original cumple con el patrón
        if (matchesPattern(shiftedTile, pattern)) {
            validTiles.push({
                tile: tile.nombre,
                shifts: shift,
                shiftedTile: shiftedTile,
                mirror: 0 // No es un espejo
            });
        }
        
        // Crear el tile espejo solo si no se han encontrado tiles válidos hasta el momento
    if (validTiles.length === 0) {
    console.log("Creando tiles espejo"); // Agregar un console log para mostrar cuando se crea el tile espejo
    const mirroredSet = shiftArray([...tile.set].reverse(), shift);

            // Verificar si el tile espejo cumple con el patrón
            if (matchesPattern(mirroredSet, pattern)) {
                validTiles.push({
                    tile: tile.nombre,
                    shifts: shift,
                    shiftedTile: mirroredSet,
                    mirror: 1 // Es un espejo
                });
            }
        }
    }
}

function shiftArray(arr, positions) {
    // Función para desplazar un array hacia la derecha en la cantidad de posiciones dadas
    const shiftedArray = arr.slice();
    for (let i = 0; i < positions; i++) {
        const lastElement = shiftedArray.pop();
        shiftedArray.unshift(lastElement);
    }
    return shiftedArray;
}

function matchesPattern(tile, pattern) {
    // Verifica si un tile coincide con el patrón
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] !== 'x' && pattern[i] !== tile[i]) {
            return false;
        }
    }
    return true;
}

const patternToMatch = [0, 'x', 'x', 'x', 0, 0];
const validTiles = [];

function findValidTilesAndUpdatePattern() {
    validTiles.length = 0; // Restablecer validTiles a un array vacío al inicio de la función
    tileSet.forEach(tile => {
        checkAndShiftTile(tile, patternToMatch, validTiles);
    });
}

function getOppositeShift(shiftsArray, index) {
    // Ajustar el índice sumando o restando 3
    index = (index + 3) % 6;
    // Retornar el valor del array en el nuevo índice
    const oppositeShift = shiftsArray[index];
    //console.log(`Valor obtenido en getOppositeShift: ${oppositeShift}`);
    return oppositeShift;
}

function getTileAtPosition(row, col) {
    /*console.log(row);
    console.log(col);*/
    return modifiedTilesArray.find(tile => tile.fila === row && tile.columna === col);
}

const mapContainer = document.getElementById('map-container');
const generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', generar);

const maxWidth = 350; // Ancho máximo para las imágenes
const mapSizeColumns = 6; // Cambia según el número de columnas deseado
const mapSizeRows = mapSizeColumns / 2; // La mitad de filas
const modifiedTilesArray = []; // Array para almacenar los objetos modifiedTile

function loadAllImages() {
    let index = 0;

    for (let row = 0; row < mapSizeRows; row++) {
        for (let col = 0; col < mapSizeColumns; col++) {
            console.log(`Esta es la iteración número: ${index} **************************************`);
            const hexTile = document.createElement('div');
            hexTile.className = 'hex-tile';

            findValidTilesAndUpdatePattern();
            const randomValidTile = validTiles[Math.floor(Math.random() * validTiles.length)];

            const modifiedTile = {
                nombre: `${randomValidTile.tile}.png`,
                shifts: randomValidTile.shifts,
                mirror: randomValidTile.mirror,
                set: randomValidTile.mirror === 1 ? 
                    shiftArray([...tileSet.find(tile => tile.nombre === randomValidTile.tile).set].reverse(), randomValidTile.shifts) :
                    shiftArray(tileSet.find(tile => tile.nombre === randomValidTile.tile).set, randomValidTile.shifts),
                fila: row + 1,
                columna: col + 1,
            };
            modifiedTilesArray.push(modifiedTile); // Agrega el objeto modifiedTile al array

            const img = document.createElement('img');
            img.src = `Hexs/${randomValidTile.tile}.png`; // Cambia aquí al nombre de tu imagen
            img.alt = `Hex Tile ${row}-${col}`;
            img.style.maxWidth = `${maxWidth}px`;// Limita el ancho de la imagen
            img.style.height = 'auto'; // Mantiene la proporción de aspecto
            const rotationAngle = 60 * modifiedTile.shifts; // Cada desplazamiento implica una rotación de 60 grados
            img.style.transform = `rotate(${rotationAngle}deg)`; // Aplicar rotación a la imagen
            img.style.transform = `rotate(${rotationAngle}deg)`; // Aplicar rotación a la imagen
            if (modifiedTile.mirror === 1) { // Cambio en la condición
                img.style.transform += ' scaleX(-1)'; // Aplicar escala para espejo horizontal si mirror es 1
}
            hexTile.appendChild(img);

            // Calcula la posición para que los hexágonos encajen
            const hexSize = maxWidth; // Calcula el alto basado en la proporción
            let offsetX = col * (hexSize * 0.99);
            let offsetY = row * (hexSize * 0.85) + (hexSize / 2);

            // Añade desplazamiento a las columnas solo para las filas pares
            if (row % 2 === 0) {
                offsetX += 0.5 * maxWidth;
                offsetY += (hexSize * 0);
            }

            hexTile.style.position = 'absolute';
            hexTile.style.width = `${hexSize}px`;
            hexTile.style.height = `${hexSize}px`;
            hexTile.style.left = `${offsetX}px`;
            hexTile.style.top = `${offsetY}px`;

            mapContainer.appendChild(hexTile);

            console.log(patternToMatch);
            updatePattern(modifiedTilesArray.length - 1); // Actualizar el patrón antes de la segunda iteración
            console.log(patternToMatch);

            console.log(validTiles);
            //console.log(patternToMatch);
            console.log(modifiedTilesArray);
            
            index++;
        }
    }
}

function updatePattern(index) { 
    const modifiedTile = modifiedTilesArray[index]; 
    //console.log(`Fila original: ${modifiedTile.fila}, Columna original: ${modifiedTile.columna}`);
    // Calcular la fila y columna de la próxima posición donde se colocará el tile
    const nextRow = modifiedTile.columna === mapSizeColumns ? modifiedTile.fila + 1 : modifiedTile.fila;
    const nextCol = modifiedTile.columna === mapSizeColumns ? 1 : modifiedTile.columna + 1;
    //console.log(`Fila próxima: ${nextRow}, Columna próxima: ${nextCol}`);

    // Determinar si la fila es par o impar
    const isEvenRow = nextRow % 2 === 0;
    //console.log(`Próxima fila: ${nextRow}`);
    // Definir las direcciones según si la fila es par o impar
    const directions = isEvenRow ? [
        { name: 'norEste2', row: nextRow - 1, col: nextCol },
        { name: 'este2', row: nextRow, col: nextCol + 1 },
        { name: 'surEste2', row: nextRow + 1, col: nextCol },
        { name: 'surOeste2', row: nextRow + 1, col: nextCol - 1 },
        { name: 'oeste2', row: nextRow, col: nextCol - 1 },
        { name: 'norOeste2', row: nextRow - 1, col: nextCol - 1 }
    ] : [
        { name: 'norEste1', row: nextRow - 1, col: nextCol + 1 },
        { name: 'este1', row: nextRow, col: nextCol + 1 },
        { name: 'surEste1', row: nextRow + 1, col: nextCol + 1 },
        { name: 'surOeste1', row: nextRow + 1, col: nextCol - 1 },
        { name: 'oeste1', row: nextRow, col: nextCol - 1 },
        { name: 'norOeste1', row: nextRow - 1, col: nextCol}
    ];

    let indexPattern = 0; 
    directions.forEach(direction => {
        const { name, row, col } = direction;
        //console.log(`Dirección: ${name}`);
        //console.log(`Fila modificada: ${row}, Columna modificada: ${col}`);
        if (row <= 0 || row > mapSizeRows || col <= 0 || col > mapSizeColumns) {
            patternToMatch[indexPattern] = 0; 
        } else {
            const tile = getTileAtPosition(row, col); 
            //console.log(tile);
            if (!tile) {
                patternToMatch[indexPattern] = 'x'; 
            } else {
                patternToMatch[indexPattern] = getOppositeShift(tile.set, indexPattern);
                //console.log(tileValue);
                //console.log(getOppositeShift(tile.set, indexPattern)); // Console log agregado aquí
            }
        }
        //console.log(indexPattern);
        indexPattern++; 
    });
}

let contador = 0; // Definir un contador global inicializado en 0

function generar() {
    if (contador === 1) {
        // Si el contador es 1, restablecer todos los valores y luego llamar a loadAllImages
        modifiedTilesArray.length = 0; // Vacía el array modifiedTilesArray sin asignar un nuevo array
        mapContainer.innerHTML = ''; // Borra todo el contenido dentro de mapContainer
        patternToMatch.splice(0, patternToMatch.length, 0, 'x', 'x', 'x', 0, 0);
        // Llama a loadAllImages después de restablecer los valores
        loadAllImages();
    } else {
        // Si el contador no es 1, aumenta su valor en 1 y llama a loadAllImages
        contador++;
        loadAllImages();
    }
}

document.getElementById("download-btn").addEventListener("click", function() {
var element = document.getElementById("map-container");
html2canvas(element, {
    onrendered: function(canvas) {
    // Convertir el lienzo a una URL de datos
    var imageData = canvas.toDataURL("image/png");
    
    // Crear un enlace temporal para la descarga
    var downloadLink = document.createElement("a");
    downloadLink.href = imageData;
    downloadLink.download = "mapa.png"; // Nombre del archivo de descarga
    
    // Hacer clic en el enlace para descargar la imagen
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    }
});
});