import axios from 'axios';

const baseUrl = 'http://localhost:4000';

const getAllPost = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "userid": "231312",
      "blogtitle": "qweqw",
      "blogdescription": "das",
      "blgIMG_64": "dsad",
      "cateGory": "ads",
      "publishdate": "12312"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };
    
    fetch("http://localhost:4000/api/blogpost", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)

        return result;
      })
      .catch(error => {
        
        return error;

      });
};

export default getAllPost;
