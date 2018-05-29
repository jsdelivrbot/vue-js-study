//Expressでローカルに建てたAPIサーバ越しにアクセスする。
const API_URI = "http://localhost:3000/samples";

const vm = new Vue({
  el: "#myApp",
  data:{
    recordList: [] //データの格納場所。宣言時は空
  },
  created : function () { //TODO fetch()を再利用したい
      axios.get(API_URI + '/airTable/fetch')
      .then((response) => {
        this.recordList = response.data;
      })
    },
  methods : {
    fetch(){
      axios.get(API_URI + '/airTable/fetch')
      .then((response) => {
        this.recordList = response.data;
      })
    },
    update(){
      //Fetch APIか、axios で GET/PUT/POST/PATCH/DELETE の記法を調査します。
    },
    create(){
      let params = new URLSearchParams();
      params.append('data',
        {
          "fields": {
            "ISBN": "B000024FDQ(NEW)",
            "musician": "Bobby Mcferrin(NEW)",
            "albumTitle": "Cirlcle Song(NEW)"
          }
        });

      axios.post(API_URI + '/airTable/create', params)
        .then((response) =>{
          console.log(resnponse);
          //再表示

       })
    }
  },
});
