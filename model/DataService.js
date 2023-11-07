
// https://github.com/axios/axios
class DataService {
    #list = [];
    constructor() {}
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
     postAxiosData(url, data){
        axios.post(url, data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}
export default DataService;
