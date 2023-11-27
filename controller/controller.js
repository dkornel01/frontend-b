import DataService from "../model/DataService.js";
import AdatView from "../view/urlap/adatview.js";
import InputView from "../view/urlap/InputView.js";

class UrlapController {
    #AdatView
    #UrlapView
    #input
    dataService = new DataService();
    adatVegpont = "api/writer";  
    constructor() { 
        this.asszinkronAdatok();
    }
    asszinkronAdatok() {
        this.dataService.getAxiosData(this.adatVegpont, this.megjelenit);
        this.urlap()
        //this.dataService.postAxiosData(this.adatVegpont,{"nev":"kornel","szuletes":1900})
        /*this.dataService.putAxioData(adatVegpont,{
            "id":1,
            "nev": "József Attila",
            "szuletes": 1931
        })
        this.dataService.deleteAxiosDate(adatVegpont,11);
    */
    }
    /*urlap() {
        const urlapModel = new UrlapModel();
        const urlapView = new UrlapView(urlapModel.adatLeiras, $(".urlap"));
        const ADATOKVIEW = new AdatokView(urlapModel.adat,$(".lista"));
    }
    feldolgoz(data) {
        console.log(data);
    }
   */
  megjelenit(list){
    let szuloElemAdat=$(".lista");
    this.#AdatView=new AdatView(list,szuloElemAdat)
  }

  urlap(){
    this.#input=new InputView()
    $(window).on("uplode",(event)=>{
        console.log(event.detail)
        let nev=document.getElementById("name").value
        let szuletes=document.getElementById("szuletes").value
        this.dataService.postAxiosData(this.adatVegpont,{"nev":nev,"szuletes":szuletes})
    });
    $(window).on("delete",(event)=>{
        let id=document.getElementById("id").value
        id=parseInt(id)
        console.log(id)
        this.dataService.deleteAxiosDate(this.adatVegpont,id);
    });
    $(window).on("update",(event)=>{
        let id=document.getElementById("id").value
        let nev=document.getElementById("name").value
        let szuletes=document.getElementById("szuletes").value
        this.dataService.putAxioData(this.adatVegpont,{
            "id":id,
            "nev": nev,
            "szuletes": szuletes,
        })
    });
  }
}
export default UrlapController;
