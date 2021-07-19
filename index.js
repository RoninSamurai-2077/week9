const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('/:userQuery', (req, res) => {
    res.render('index',{data : {userQuery: req.params.userQuery}});
})
Server.listen(5000)
app.listen(3000);
let port = 3000;
    console.log(`Server is listening on ${port}`);