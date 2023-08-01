const express = require('express')
const router = express.Router()
const tugas4controller = require ('../controller/tugas4controller')
const tugascontroller = require ('../controller/tugascontroller')

router.get('/product',tugas4controller.index)
router.get('/product/:id',tugas4controller.show)
router.post('/product',tugas4controller.store)
router.put('/product/:id',tugas4controller.update)
router.delete('/product/:id',tugas4controller.destroy)
router.get('/stok',tugas4controller.index2)
router.get('/stok/:id',tugas4controller.show2)
router.post('/stok',tugas4controller.store2)
router.put('/stok/:id',tugas4controller.update2)
router.delete('/stok/:id',tugas4controller.destroy2)
router.get('/isi',tugascontroller.isi)
router.get('/keluar',tugascontroller.keluar)
router.get('/masuk',tugascontroller.masuk)
router.get('/stoks',tugascontroller.stok)


module.exports = router