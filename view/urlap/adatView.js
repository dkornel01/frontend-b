class AdatView {
    #tipus = {};
    #kulcs = {};
    #szuloElem
    constructor(adat,szuloElem) {
        this.#szuloElem = szuloElem;
        this.htmlOsszallit(adat);
    }

    htmlOsszallit(adat) {
        let kiir=""
        kiir +=`<table class="tablazat">`
        let tarto=Object.keys(adat[0])
        kiir+=`<tr class="tr">`
        let tarto2=Object.values(adat)
        let elsomeret=tarto.length-2
        let masodikmeret=tarto2.length-2
        for (let index=0;index<elsomeret;index++){
            kiir+=`<th class="th">${tarto[index]}</th>`
        }
        kiir+=`</tr>`

        for (let k=0;k<tarto2.length;k++){
            kiir+=`<tr class="tr">`
            let element=Object.values(tarto2[k])
            for (let x = 0; x < elsomeret; x++) {
                kiir +=`
                <td class="td">${element[x]}</td>
                `
            }
        kiir+=`</tr>`
        }
        kiir+=`</table>`
        this.#szuloElem.html(kiir)
    }
}
export default AdatView;