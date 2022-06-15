const express = require('express');
const Joi = require('joi'); //used for validation
const app = express();
app.use(express.json());
 
const players = [
{name: 'Lionel Messi', id: 1},
{name: 'Cristiano Ronaldo', id: 2},
{name: 'Neymar Jr', id: 3}
]
 
//READ Request Handlers
app.get('/', (req, res) => {
res.send('Welcome to Football Players Database!');
});
 
app.get('/players', (req,res)=> {
res.send(players);
});
 
app.get('/players/:id', (req, res) => {
const player = players.find(c => c.id === parseInt(req.params.id));
 
if (!player) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Player not found!</h2>');
res.send(player);
});
 
//CREATE Request Handler
app.post('/players', (req, res)=> {
const player = {
id: players.length + 1,
name: req.body.name
};
players.push(player);
res.send(player);
});
 
//UPDATE Request Handler
app.put('/players/:id', (req, res) => {
const player = players.find(c=> c.id === parseInt(req.params.id));
if (!player) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');
player.name = req.body.name;
res.send(player);
});
 
//DELETE Request Handler
app.delete('/players/:id', (req, res) => {
 
const player = players.find( c=> c.id === parseInt(req.params.id));
if(!player) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');
 
const index = players.indexOf(player);
players.splice(index,1);
 
res.send(player);
});
 
 
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8900;
app.listen(port, () => console.log(`Listening on port ${port}..`));