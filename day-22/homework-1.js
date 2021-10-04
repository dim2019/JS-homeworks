const get = require('fetch').fetchUrl
const send = url =>
    new Promise((resolve, reject) => {
        get(url, (error, meta, body) => {
            if (meta.status == 200) {
                const data = JSON.parse(body)
                resolve(data)
            }
            reject(`We have error, status code: ${meta.status}`)
        })
    });


const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=299fb2133133f9d8fc214f5ae28ca753';

send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });