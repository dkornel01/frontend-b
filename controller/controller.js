/*import UrlapModel from "../model/UrlapModel.js";*/
import UrlapView from "../view/urlap/UrlapView.js";
import DataService from "../model/DataService.js";
//import AdatokView from "../view/AdatokView.js";

class UrlapController {
    
   
    constructor() {
        
        //this.urlap()
        /* this.#dataService = new DataService();
        this.#dataService.getData(adatVegpont, feldolgoz); */
        this.asszinkronAdatok();
    }
    asszinkronAdatok() {
        let adatVegpont = "api/writer";
        this.dataService = new DataService();
        //this.#asszinkron.getData(adatVegpont, this.feldolgoz);
        this.dataService.getAxiosData(adatVegpont, this.megjelenit);
        this.dataService.postAxiosData(adatVegpont,{"nev":"kornel","szuletes":1900})
        this.dataService.putAxioData(adatVegpont,{
            "id":1,
            "nev": "József Attila",
            "szuletes": 1931
        })
        this.dataService.deleteAxiosDate(adatVegpont,11);
        //this.dataService.getAxiosData(adatVegpont,this.megjelenit)
    }//http://localhost:3000/adat
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
    console.log(list);
    //this.urlap();
  }

  urlap(){
    const UrlapModel=new urlapModel();
    const urlap=new UrlapView(UrlapModel.adatleiras,$(".urlap"));
  }
}
export default UrlapController;
