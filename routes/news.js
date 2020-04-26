const fetch = require('node-fetch');

module.exports = {
    async topic(topic) {
        const today = new Date();
        const apiKey = 'acef062b396a4219a8e009b9395a424d';
        const country = 'US';
        const from = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
        const url = `http://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=${country}&q=${topic}&sortBy=popularity&from=${from}`;
        const response = await fetch(url);
        return response.json();
    },
};

// eslint-disable-next-line import/prefer-default-export
// export const topic = async (apiKey, country, q, from) => {
//     const response = await fetch(`http://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=${country}&q=${q}&from=${from}`);
//     const data = await response.json();
//     return data;
// };
