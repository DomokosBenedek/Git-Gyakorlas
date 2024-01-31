document.addEventListener("DOMContentLoaded", () => {
    let szamok: number[] = [];
    let hozzaad = document.getElementById('hozzaad') as HTMLInputElement;
    hozzaad.addEventListener("click", () => {
        let szam = parseInt((document.getElementById('szam')  as HTMLInputElement).value); 
        szamok.push(szam);
    })
    let div = document.getElementById('szamok') as HTMLElement;
    let p = document.createElement("p");
    let szoveg = "";
    szamok.forEach(element => {
        szoveg = szoveg + "; " + element;
    })
    p.textContent = szoveg;
    div.appendChild(p);
})    