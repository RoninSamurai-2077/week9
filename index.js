const express = require('express')
const app = express()

app.use('view engine', 'ejs');
app.get('/:userQuery', (req, res) => {
    res.render('index',{data : {userQuery: req.params.userQuery}});
})
 
app.listen(3000)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})