document.addEventListener("DOMContentLoaded", () => {
    let szamok: number[] = [];
    let hozzaad = document.getElementById('hozzaad') as HTMLInputElement;
    let max = document.getElementById('maximum') as HTMLInputElement;
    let min = document.getElementById('minimum') as HTMLInputElement;
    hozzaad.addEventListener("click", () => {
        let szam = parseInt((document.getElementById('szam')  as HTMLInputElement).value); 
        szamok.push(szam);
    })
    /*
    function Kiiras(() => {

    })
    */
    let div = document.getElementById('szamok') as HTMLElement;
    let p = document.createElement("p");
    let szoveg = "";
    szamok.forEach(element => {
        szoveg = szoveg + "; " + element;
    })
    p.textContent = szoveg;
    div.appendChild(p);

    /*
        function Kiiras(() => {

    })*/
    min.addEventListener("click", () => {
        let min = 9999999999999999999;
        let div = document.getElementById('szamok') as HTMLElement;
        let p = document.createElement("p");
        szamok.forEach(element => {
            if(element > min){
                min = element;
            }
        })
        p.textContent = `A legkisebb szám: ` + min;
        div.appendChild(p);
    })

    max.addEventListener("click", () => {
        let max = 0;
        let div = document.getElementById('szamok') as HTMLElement;
        let p = document.createElement("p");
        szamok.forEach(element => {
            if(element < max){
                max = element;
            }
        })
        p.textContent = `A legnagyobb szám: ` + max;
        div.appendChild(p);
    })
    
})    