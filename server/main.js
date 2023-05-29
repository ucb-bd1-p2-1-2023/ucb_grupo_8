const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: '*'
}));

const port = 3000;


app.get('/', (req, res) => {
  res.send('API is working');
})

app.post('/user',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO user(firstName,fono,lastName, email) VALUES ('${body.firstName}','${body.fono}' '${body.lastName}','${body.email}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})

app.post('/drivers',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO drivers(firstName, driver_id, email, placa_vehiculo, estado_disponible, contrasenia, telefono) VALUES ('${body.firstName}', '${body.driver_id}', '${body.email}', '${body.placa_vehiculo}', '${body.estado_disponible}', '${body.contrasenia}', '${body.telefono}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})

app.post('/Cars',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO Cars(vehicle_id, modelo, marca, conductor_id, capacidad_pasajeros, anio) VALUES ('${body.vehicle_id}', '${body.modelo}', '${body.marca}', '${body.conductor_id}', '${body.capacidad_pasajeros}', '${body.anio}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})

app.post('/Notifications',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO Notifications(notification_id, ususario_id, mensaje, leida) VALUES ('${body.notification_id}', '${body.ususario_id}', '${body.mensaje}', '${body.leida}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})

app.post('/Payments',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO Payments(payment_id, metodo_pago, monto, trip_id, pasajero_id) VALUES ('${body.payment_id}', '${body.metodo_pago}', '${body.monto}', '${body.trip_id}', '${body.pasajero_id}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})

app.post('/Ratings',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO Ratings(rating_id, puntuacion, comentario, trip_id, pasajero_id) VALUES ('${body.rating_id}', '${body.puntuacion}', '${body.comentario}', '${body.trip_id}', '${body.pasajero_id}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})

app.post('/Trips',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO Trips(trip_id, title, estado_viaje, conductor_id, pasajero_id, origen, destino) VALUES ('${body.trip_id}', '${body.title}', '${body.estado_viaje}', '${body.conductor_id}', '${body.pasajero_id}', '${body.origen}', '${body.pasajero_id}', '${body.origen}', '${body.destino}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})

app.listen(port, () => {
  console.log(`Project sample is running on: ${port}`)
})

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'toor',
  database: 'db1'
})

connection.connect();