var express = require('express');
var router = express.Router();
const ContenedorMemoria = require('../Contenedor/contenedorMemoria')
const data = new ContenedorMemoria();
router.get('/', function (req, res, next) {
  res.send({ data: data.getAll() });
});

router.get('/:id', (req, res) => {
  let obj = data.getOne(req.params.id)
  if (obj.length == 0) {
    res.send('No se encuentra el producto')
  } else {
    res.send({ data: obj })
  }
})
router.post('/', ({ body }, res) => {
  data.addOne(body)
  res.send({ datos: body })
})
router.put('/:id', (req, res) => {
  let id = req.params.id;
  res.send({ datos: req.body })
})
router.delete('/:id', (req, res) => {
  let newData = data.deleteOne(req.params.id)
  res.send({ datos: newData })
})

module.exports = router;
