const express = require('express')
const multer = require('multer')

const app = express()

const storage = multer.diskStorage({
    destination : './files',
    filename : (req,file,cb)=>{
        cb(null, file.originalname)
    }
})

const uploader = multer({storage})

app.post('/image', uploader.single('image'), (req,res)=>{
    const file = req.file;
    const meta = req.body;

    console.log(file,meta)

    res.end();
})

app.listen(8080, ()=> console.log('Listening on port 3000'))