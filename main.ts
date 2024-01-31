document.addEventListener("DOMContentLoaded", () => {
    let szamok: number[] = [];
    let hozzaad = document.getElementById('hozzaad') as HTMLInputElement;
    hozzaad.addEventListener("click", () => {
        let szam = parseInt((document.getElementById('szam')  as HTMLInputElement).value); 
        szamok.push(szam);
    })
    
})    