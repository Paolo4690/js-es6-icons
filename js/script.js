const eleContainer = document.querySelector('.container');
let arrType = []
generateCard(arrIcons)

// FUNZIONE CHE MI CREA  LE CARD PER TUTTO L'ARRAY CON FOR IN
function generateCard (array) {
    eleContainer.innerHTML = ''

    array.forEach((elemento) => {
        let cardIcon = `
                        <div class="card-container">
                            <div class="card">
                                <i style="color:#${generateRandomcolor()}" class="${elemento.family} ${elemento.prefix}${elemento.name} ${elemento.type}"></i>
                                <p>${elemento.name}</p>
                            </div>
                        </div>`;

        eleContainer.innerHTML += cardIcon;
    });

    // for (let i in arrIcons) {
    //     let {name, prefix, type, family, color} = array[i];
        
    //     let cardIcon = `
    //                     <div class="card-container">
    //                         <div class="card">
    //                             <i style="color:#${generateRandomcolor()}" class="${family} ${prefix}${name} ${type}"></i>
    //                             <p>${name}</p>
    //                         </div>
    //                     </div>`;

	// 	eleContainer.innerHTML += cardIcon;
    // }
};

// // FUNZIONE CHE CREA ARRAY IN BASE AL VALORE DELLA CHIAVE ('vegetable')
// let arrFilterVegetable = arrIcons.filter(FilterVegetable);

// function FilterVegetable(valoreObj) {
// 	if (valoreObj.type === "vegetable") {
// 		return true;
// 	}
// }

// // FUNZIONE CHE CREA ARRAY IN BASE AL VALORE DELLA CHIAVE ('user')
// let arrFilterUser = arrIcons.filter(FilterUser);

// function FilterUser(valoreObj) {
// 	if (valoreObj.type === "user") {
// 		return true;
// 	}
// }
// // FUNZIONE CHE CREA ARRAY IN BASE AL VALORE DELLA CHIAVE ('animal')
// let arrFilterAnimal = arrIcons.filter(FilterAnimal);

// function FilterAnimal(valoreObj) {
// 	if (valoreObj.type === "animal") {
// 		return true;
// 	}
// }

//FUNZIONE CHE GENERA CARD IN BASE AL SELECT SCELTO ('type)
let eleSelect = document.getElementById('filter-icons')
createSelect(arrIcons)
eleSelect.addEventListener('change', function(){
    let tipoIcon = eleSelect.value

    if (tipoIcon != "tutti") {
        let arrFilter = arrIcons.filter((arrFilterArg) => {
            if (arrFilterArg.type == tipoIcon) {
                return true
            }
        });
        generateCard(arrFilter)
    } else {
        generateCard(arrIcons)
    }

    // if (tipoIcon == 'vegetable'){
    //     generateCard(arrFilterVegetable)
    // } else if(tipoIcon == 'animal') {
    //     generateCard(arrFilterAnimal)
    // } else if(tipoIcon == 'user') {
    //     generateCard(arrFilterUser)
    // } else {
    //     generateCard(arrIcons)
    // }
})

//FUNZIONE CHE CREA COLORI IN ESADECIMALI RANDOM (senza #)
function generateRandomcolor() {
    let colRnd = '';
    let esadecimal = "0123456789abcdef";
    for (let i = 0; i < 6; i++) {
      let x = Math.floor(Math.random() * esadecimal.length);
      colRnd += esadecimal.substring(x, x+1);
    }
    return colRnd;
}

// FUNZIONE CHE CREA OPTION DI UN SELECT CON IL SUO VALUE IN BASE AL VALORE DI UNA CHIAVE DI OGGETTO
function createSelect(arr){
    arr.forEach((elemento) => {
        if(!arrType.includes(elemento.type)){
            arrType.push(elemento.type);
            let option = document.createElement("option");
            option.value = elemento.type;
            option.innerHTML = elemento.type;
            eleSelect.append(option);
        }
    });
}