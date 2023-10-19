const models = require('./models');
app.get('/salas', (req, res) => {
  // Get all the rooms from the database
  models.salas.findAll().then(salas => {
    res.send(salas);
  });
});
app.post('/salas', (req, res) => {
  // Create a new room in the database
  models.salas.create(req.body).then(room => {
    res.send(room);
  });
});
app.put('/salas/:id', (req, res) => {
  // Update the room with the specified ID in the database
  models.salas.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(room => {
    res.send(room);
  });
});
app.delete('/salas/:id', (req, res) => {
  // Delete the room with the specified ID from the database
  models.salas.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.send('Room deleted');
  });
});