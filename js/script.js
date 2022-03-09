const eleContainer = document.querySelector('.container');

generate1Card(arrIcons)



// FUNZIONE CHE MI CREA  LE CARD PER TUTTO L'ARRAY CON FOR IN
function generate1Card (array) {
    for (let i in arrIcons) {
        let {name, prefix, type, family, color} = array[i];
        
        let cardIcon = `
                        <div class="card-container">
                            <div class="card">
                                <i style="color:${color}" class="${family} ${prefix}${name} ${type}"></i>
                                <p>${name}</p>
                            </div>
                        </div>`;

		eleContainer.innerHTML += cardIcon;
    }
};

// FUNZIONE CHE CREA ARRAY IN BASE AL VALORE DELLA CHIAVE ('VEGETABLE')
let arrFilterVegetable = arrIcons.filter(FilterVegetable);

function FilterVegetable(valoreObj) {
	if (valoreObj.type === "vegetable") {
		return true;
	}
}

// FUNZIONE CHE CREA ARRAY IN BASE AL VALORE DELLA CHIAVE ('VEGETABLE')
let arrFilterAnimal = arrIcons.filter(FilterAnimal);

function FilterAnimal(valoreObj) {
	if (valoreObj.type === "animal") {
		return true;
	}
}

// FUNZIONE CHE CREA ARRAY IN BASE AL VALORE DELLA CHIAVE ('VEGETABLE')
let arrFilterUser = arrIcons.filter(FilterUser);

function FilterUser(valoreObj) {
	if (valoreObj.type === "user") {
		return true;
	}
}


console.log (arrFilterAnimal)
console.log (arrFilterUser)
console.log (arrFilterVegetable)