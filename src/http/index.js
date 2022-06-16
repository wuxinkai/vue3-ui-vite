import axios from 'axios'

axios.get('https://api.apiopen.top/getJoke?page=1&count=2&type=video')
  .then(function (response) {
    console.log(666,response);
  })
