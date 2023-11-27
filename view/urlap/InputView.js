class InputView {
    elso
    masodik
    harmadik
    inputElem=$(".urlap")
    constructor(){
        this.Inputok()
        let elsogomb=$(".uplode")
        let masodikgomb=$(".delete")
        let harmadikgomb=$(".update")
        elsogomb.on("click", () => {
        this.parancs("uplode")
        });
        masodikgomb.on("click", () => {
        this.parancs("delete")
        });
        harmadikgomb.on("click", () => {
        this.parancs("update");
        })
    }
    Inputok(){
        this.elso=`<input type="submit" value="uplode" class="uplode"></input>`
        this.masodik=`<input type="button" value="delete" class="delete"></input>`
        this.harmadik=`<input type="button" value="update" class="update"</input>`
    let kiir=`<form>
        <label for="ID">ID</label><br>
        <input type="number" id="id" name="id"><br>
        <label for="name">name:</label><br>
        <input type="text" id="name" name="name"><br>
        <label for="lname">szuletes:</label><br>
        <input type="int" id="szuletes" name="szuletes">
      </form> `
      kiir+=`<table>
      <tr>
      <td>
      ${this.elso}
      </td>
      <td>
      ${this.masodik}
      </td>
      <td>
      ${this.harmadik}
      </td>
        </tr>
      </table>`
      this.inputElem.html(kiir)

    }
    parancs(esemenynev){
        const esemenyem=new CustomEvent(esemenynev,{detail:this});
        window.dispatchEvent(esemenyem)
    }
}
export default InputView

/*
 this.elso=`<button onclick="this.parancs("uploade")">uploade me</button>`
        this.masodik=`<button onclick="this.parancs("delete")">delete me</button>`
        this.harmadik=`<button onclick="this.parancs("update")">update me</button>`
*/