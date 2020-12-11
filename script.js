function pageLoad() {
	console.log("Hello");
	/*to do app készítése, alapértelmezésben 10 üres mező áll rendelkezésre, de hozzá tudunk adni újakat, és minden mezőben van egy checkbox, text input mező, törlés gomb) */

	/*Változó létrehozása, amibe deklaráljuk a root idjű divet.*/
	let rootE = document.getElementById("root");

	/*To Do lista címének létrehozása */
	/*rootE.insertAdjacentHTML('afterbegin', '<h1>To Do List</h1>');*/

	/*Kell egy div, ami befoglalja az input mezőt.*/
	/*rootE.insertAdjacentHTML('afterbegin', '<div class="toDoList"></div>');
	let toDoList = document.querySelector(".toDoList");*/

	/*El kell tárolnunk a sorok számának a maximális értéktét.*/
	let checkListNumber = 10;

	/*Egy to Do list sort elmenteni változóba */

	let rowItem = `                 
		<div class="checkItemContainer">
			<input class="checkList" type="checkbox">
			<input type="text" class="toDoText">
			<button class="deleteButton">Delete</button>
		</div>
	`;


	/*A tageket egy for ciklussal 10x kell létrehozatni és hozzá kell adni (insertAdjacentHTML) a root idjű divhez.*/
	for (let index = 0; index < checkListNumber; index++) {

		rootE.insertAdjacentHTML("beforeend", rowItem);
	}

	/*Gombot (Új teendeő) létrehozni  a listán kívülre insertAdjacentHTML('afterend1',''), amivel hozzá tudunk adni egy új input elemet a listához. 9:51*/
	rootE.insertAdjacentHTML('afterend', '<button id="addItem">Add to do!</button>');

	/*Click eseményt hozzáadni az "Új teendő" gombhoz. Azért nem tesszük ki a függvény neve után a (), mert...az eseményfigyelőnek nem mi adjuk meg a paramétereit, mert ő a sajátjáal returnöl.
	*/

	function newItem() {
		rootE.insertAdjacentHTML('beforeend', rowItem);
	}

	/*TO DO RÁ KÉNE TENNI AZ ESEMÉNYFIGYELŐT AZ ÚJONNAN LÉTREHOZOTT SOROKra.*/

	document.getElementById('addItem').addEventListener('click', newItem);

	/*Minden checklisthez*/

	/*Class név alapján kijelölöm az összes törlés gombot és elmentem egy változóba querySelectorAll().*/
	let removeButtons = rootE.querySelectorAll(".deleteButton");
	console.log(removeButtons);


	// Minden törlés gombhoz hozzáadjuk a click eseményt for ciklussal.
	function removeItem(e) {
		console.log(e.target);
		e.target.parentElement.remove();
	}

	for (let index = 0; index < removeButtons.length; index++) {		
		removeButtons[index].addEventListener("click", removeItem);
	}


	/*Hogy azonosítsuk be az a tagekte, amit ki akarunk törölni?*/


}

window.addEventListener('load', pageLoad);
