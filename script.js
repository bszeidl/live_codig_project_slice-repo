/*to do app készítése, alapértelmezésben 10 üres mező áll rendelkezésre, de hozzá tudunk adni újakat, és minden mezőben van egy checkbox, text input mező, törlés gomb) */
/* lépések  
Változó létrehozása, amibe deklaráljuk a root idjű divet.
A sorok tagjét deklarálni.
Kell egy div, ami befoglalja az input mezőt.
El kell tárolnunk a sorok számának a maximális értéktét.
A tageket egy for ciklussal 10x kell létrehozatni és hozzá kell adni (insertAdjacentHTML) a root idjű divhez.
Gombot (Új teendeő) létrehozni  a listán kívülre insertAdjacentHTML('afterend1',''), amivel hozzá tudunk adni egy új input elemet a listához.
Click eseményt hozzáadni az "Új teendő" gomboz.
Class név alapján kijelölöm az összes törlés gombot és elmentem egy változóba querySelectorAll().
Minden input tagre rátenni egy click eseményt egy for ciklussal.
Hogy azonosítsuk be az a tagekt, amit ki akarunk törölni?
*/

function pageLoad() {
let rootE = document.getElementById("root");
console.log("Hello");

}

window.addEventListener('load', pageLoad);
