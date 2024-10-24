const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());

app.get('/repos', async (req, res) => {
    fetch('https://api.github.com/users/freeCodeCamp/repos')
        .then((result) => result.json())
        .then((data) => {
            const dataRes = data.filter(item => !item.fork && item.forks > 5)
            res.json({data: dataRes});
        })
        .catch((e) => {
            console.log({e});
            res.status(500).json({error: 'Failed to fetch data'});
        });
})

app.listen(3002, () => {
    console.log('Server is running')
})