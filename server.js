const express = require('express')
const app = express()
app.use(express.json())

let data = [
    {id:1, nama:"Laptop", harga:10000000},
    {id:2, nama:"Mouse", harga:200000}
]

app.get('/produk', (req,res)=>{
    res.json(data)
})

app.get('/produk/:id', (req,res)=>{
    const id = parseInt(req.params.id)
    const produk = data.find(p => p.id === id)

    if(!produk){
        return res.status(404).json({message:"Data tidak ditemukan"})
    }

    res.json(produk)
})

app.post('/produk',(req,res)=>{
    const produkBaru = {
        id:data.length + 1,
        nama:req.body.nama,
        harga:req.body.harga
    }

    data.push(produkBaru)
    res.json(produkBaru)
})

app.put('/produk/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const produk = data.find(p => p.id === id)

    if(!produk){
        return res.status(404).json({message:"Data tidak ditemukan"})
    }

    produk.nama = req.body.nama
    produk.harga = req.body.harga

    res.json(produk)
})

app.delete('/produk/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    data = data.filter(p => p.id !== id)

    res.json({message:"Data berhasil dihapus"})
})

app.listen(3000, ()=>{
    console.log("Server berjalan di http://localhost:3000")
})