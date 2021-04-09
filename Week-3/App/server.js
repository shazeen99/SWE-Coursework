const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const {Restaurant} = require('./src/restaurant');
const {Menu} = require('./src/menu');
const {Item} = require('./src/item');

const app = express();
const port = 3000;

// setup our templating engine
const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})
app.engine('handlebars', handlebars)
app.set('view engine', 'handlebars')

// serve static assets from the public/ folder
app.use(express.static('public'));


// this route matches any GET request to the top level URL
// app.get('/', (request, response) => {
//     response.render('restaurants', {date: new Date()})
// })
app.get('/', async (req, res) => {
    const restaurants = await Restaurant.findAll({
        include: [
            {
                model: Menu, as: 'menus',
                include: [{model:Item, as: 'items'}]
            }
        ],
        nest: true
    })
    res.render('home', {restaurants})
})

app.get('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id)
    const menus = await restaurant.getMenus({
        include: [{model: MenuItem, as: 'items'}],
        nest: true
    })
    res.render('restaurant', {restaurant, menus})
    console.log("get restaurant with ID:", req.params.id)
   //res.send()
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

