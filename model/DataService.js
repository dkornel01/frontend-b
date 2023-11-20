
// https://github.com/axios/axios
class DataService {
    #list = [];
    constructor() {
      axios.default.baseURL="http://localhost:8000/api/writer";
    }
    
    getAxiosData(url, callback){
        axios.get(url)
        .then(function (response) {
          // handle success
          console.log(response);
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);
          callback(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
          console.log("finally")
        });
    }

    postData(url, callback) {
      async function getData(url = "") {
          const response = await fetch(url, {
              method: "GET", 
              mode: "cors", 
              cache: "no-cache", 
              credentials: "same-origin", 
              headers: {
                  "Content-Type": "application/json",
              },
              redirect: "follow", 
              referrerPolicy: "no-referrer", 
          });
          return response.json();
      }

      getData(url).then((data) => {
          console.log(data); 
          callback(data);
      });
    }

     postAxiosData(url, data){
        axios.post(url, data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    putAxioData(url,data){
      console.log(data)
      console.log(`${url}/${data.id}`);
      axios
        .put(`${url}/${date.id}`,data)
        .then((response)=>{
          console.log("Resp",response);
        })
        .catch((error))
    }
    deleteAxiosDate(url, id){
      console.log(`${url}/${id}`);
      axios
        .delete(`${url}/${id}`)
        .then((response)=>{
          console.log("Resp",response);
        })
        .catch((error)=>{
          console.log("hiba",error);
        })
    }
}
export default DataService;
