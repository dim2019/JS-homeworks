class Countries {
    constructor(url) {
        if (typeof url !== 'string') throw new TypeError("`url` isn't string")
        this.url = url
    }
    send(city) {
        if (typeof city !== 'string') throw new TypeError("parameter isn't a string")
        const Url = this.url.substring(0, 50) + `${city}` + this.url.substring(50, this.url.length);
        return new Promise((resolve, reject) => {
            get(Url, (error, meta, body) => {
                if (meta.status == 200) {
                    const data = JSON.parse(body)
                    resolve(data.wind)
                }
                reject(`We have error, status code: ${meta.status}`)
            })
        })
    }
}
const get = require('fetch').fetchUrl;
const url = 'https://api.openweathermap.org/data/2.5/weather?q=&appid=299fb2133133f9d8fc214f5ae28ca753';
const countries = new Countries(url);

(async() => {
    try {
        const data = await countries.send('Tbilisi');
        console.log(data); // array of countries
    } catch (error) {
        console.log(error);
    }
})();