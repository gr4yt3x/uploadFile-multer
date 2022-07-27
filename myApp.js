const express = require('express');
const app = express();

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/main.html');
})

app.post('/upload', upload.single('file'), (req, res) => {
    console.log("Done :)");
});

app.listen(3000);
