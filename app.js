const { exec } = require('child_process');
const express = require('express')
const app = express()


app.get('/exec/', (req, res) => {
    // your code here
    if (req.query.what){
        return res.send(`got what=${req.query.what}`);
    }
    exec('ifconfig', (err, stdout, stderr) => {
        if (err) {
          // node couldn't execute the command
          return res.status(500).send(err);
        }
        res.send(stdout);
      })

})

app.use(express.static('public'))


app.listen(3000, () => console.log('Example app listening on port 3000!'))