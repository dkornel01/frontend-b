/*import UrlapModel from "../model/UrlapModel.js";
import UrlapView from "../view/urlap/UrlapView.js";*/
import DataService from "../model/DataService.js";
//import AdatokView from "../view/AdatokView.js";

class UrlapController {
    #dataService;
   
    constructor() {
        
        //this.urlap()
        /* this.#dataService = new DataService();
        this.#dataService.getData(adatVegpont, feldolgoz); */
        this.asszinkronAdatok();
    }
    asszinkronAdatok() {
        let adatVegpont = "http://localhost:8000/writers";
        this.#dataService = new DataService();
        //this.#asszinkron.getData(adatVegpont, this.feldolgoz);
        this.#dataService.getAxiosData(adatVegpont, this.megjelenit);
        this.#dataService.postAxiosData(adatVegpont,{"nev":"kornel","szuletes":1900})
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
  }
}
export default UrlapController;
