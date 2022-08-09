const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require("sequelize")
const initialize = require('./initialize').default
app.use(express.json())

// Development
// const database = new Sequelize("postgres://michele:4BmhdKHgWmeJ@localhost:5432/summerfestival")
const database = new Sequelize("postgres://aiateam:aiateam@localhost:5432/summerfestival")
// Production


/*
const pg = require('pg')
pg.defaults.ssl = true
 const database = new Sequelize(process.env.DATABASE_URL, {
   ssl: true,
   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
 })

*/

// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
    await database.authenticate()

    const Place = database.define("Place", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: DataTypes.STRING,
        description: DataTypes.TEXT,
        map: DataTypes.STRING,
    }, {timestamps:false})

    const Event = database.define("Event",{
       id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: DataTypes.STRING,
        description: DataTypes.TEXT,
        type: DataTypes.STRING,
        date: DataTypes.STRING,
        ticket: DataTypes.STRING
    },{timestamps:false})

    const Artist = database.define("Artist",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        info: DataTypes.STRING,
        img: DataTypes.STRING,
    },{timestamps:false})

    // -----ASSOCIATIONS-----
    // <------- 1 : N --------->
    // PoiId column created in Service table
    Place.hasMany(Event)
    Event.belongsTo(Place)


    // <-------- N : N ------->
    // new table Events_Artists created with columns poiId and itineraryId

    const Events_Artists = database.define('Events_Artists', {
        eventId: {
            type: DataTypes.INTEGER,
            references: {
            model: Event,
            key: 'id'
        }
    },
        artistId: {
            type: DataTypes.INTEGER,
            references: {
            model: Artist,
            key: 'id'
            }
    }
    },{timestamp:false})

    await database.sync({ force: true })
    return {
        Place,
        Event,
        Artist,
        Events_Artists
    }
}

// With this line, our server will know how to parse any incoming request
// that contains some JSON in the body
const pageContentObject = {
    index: {
        title: "Homepage",
        img1: "all_itineraries",
        img2: "all_poi",
        img3: "front_page",
        img4: "Marathon",
        description1:"MILAN IS A FANTASTIC CITY TO EXPLORE. WITH ALL ITS HISTORY AND MODERN CULTURE. EVERYONE COULD FIND SOMETHING INTERESTING TO DO",
        description2: "FROM SPORTS TO MUSEUM, YOU JUST HAVE TO PICK WHICH EVENT SUITS YOU NEEDS. YOU REALLY HAVE PLENTY OF CHOOSE",
        description3: "EVEN IF YOU'RE NOT INTO EVENTS. MILAN HAS SO MUCH MORE TO OFFER. DISCOVER SOME OF THE BEAUTIFUL PLACES HERE IN MILAN",
        description4: "OR START A JOURNEY FOLLOWING ONE OF THE ITINERARY WE HAVE PREPARED FOR YOU",
    },
    aboutUs: {
        title: "Milan Arts Experience",
        festival_description:
        `
            Milan Arts Experience welcomes hundreds of thousands of people each summer and aims to bring the biggest names in the art industry
            from the widest variety of genres. Milan Arts Experience, however, is not only about the artistic experiences, 
            but a whole lot more: It's about love, art and freedom in all possible forms! It's a cultural festival offering visitors 
            the summer of a lifetime full of concerts, art programs, performances and much more. Is a place for for you to truly be yourself!
            Life at the festival just never stops. Each day, the greatest of bands and artists come on and walk off stage in the most spectacular scenes of Milan and Verona:
            The Arena di Verona, the Teatro alla Scala, the Parco Sempione or the Stadio San Siro and so on. Concerts and artistic performances go on from early 
            afternoon every day and last until the break of dawn. If you feel like catching a small break in-between gigs, you can choose from the widest scale of activities Milan has to offer, 
            watching art site, getting artsy, doing sports offline or online or just chilling around the city.
        `,
        when: "During the months of August and September",
        where:"Milan and Verona",
        map: ""
    },
    contactUs:{
        title: "CONTACT US",
        phone: 'PHONE: +39 333 333 3333',
        email: 'EMAIL: aiateam@mail.it',
        whenOpen:"We are open every week day 9:30 - 12:00, 15:00 - 18:00",
        address: "Piazza Leonardo da Vinci, 32, 20133 Milano MI",
        map: "https://www.google.com/maps/d/u/1/embed?mid=1rThwlxeZznE2nn-ZOFixr3rV0bVzHZE&ehbc=2E312F"
    },
    allPlaces:{
        title:"ALL POINTS OF INTEREST",
        image:"../assets/poi/all_poi.jpg",
        introduction:""
    },
    allEvents:{
        title:"ALL SERVICES",
        img: "../assets/serviceTypes/all_services.jpg",
        introduction: ""
    },
    allArtists:{
        title:"ALL ITINERARIES",
        img: "../assets/itineraries/all_itineraries.jpg",
        introduction:""
    }
}

async function runMainApi() {
    const models = await initializeDatabaseConnection()
    await initialize(models)

    // HTTP GET calls to get single items from the list defined in the initialize.js
    app.get('/page-info/:topic', (req, res) => {
        const { topic } = req.params
        const result = pageContentObject[topic]
        return res.json(result)
    })

    app.get('/places/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Place.findOne({ where: { id } })
        return res.json(result)
    })

    app.get('/events/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Event.findOne({ where: { id } })
        return res.json(result)
    })

    app.get('/Artist/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Artist.findOne({ where: { id } })
        return res.json(result)
    })

    app.get('/events_of_artist/:ArtistId', async (req, res) => {
        const artist = +req.query.ArtistId
        const events = await models.Events_Artists.findAll({attributes: ['eventId'], where: { artistId: artist} })
        const filtered_events = []
        for(const element of events){
            filtered_events.push({
                id: element.artistId,
            })
        }
        const events_list = []

        for (const data of filtered_events) {
            events_list.push(data.id)
        }
        console.log(events_list)

        const filtered = []

        const result = await models.Event.findAll({ where: { id: events_list } })
        for(const element of result){
            filtered.push({
                id: element.id,
                name: element.name,
                img: element.img,
                description: element.description,
                type: element.type
            })
        }
        console.log(filtered)
        return res.json(filtered)
    })


    app.get('/artists_of_event/:EventId', async (req, res) => {
        const event = +req.query.EventId
        const artists = await models.Events_Artists.findAll({attributes: ['artistId'], where: { eventId: event} })
        const filtered_artists = []
        for(const element of artists){
            filtered_artists.push({
                id: element.eventId,
            })
        }
        const artists_list = []

        for (const data of filtered_artists) {
            artists_list.push(data.id)
        }
        console.log(artists_list)

        const filtered = []

        const result = await models.Artist.findAll({ where: { id: artists_list } })
        for(const element of result){
            filtered.push({
                id: element.id,
                name: element.name,
                img: element.img,
                description: element.description,
                info: element.info
            })
        }
        console.log(filtered)
        return res.json(filtered)
    })

    app.get('/events_place/:PlaceId', async(req, res) =>{
        const place = req.query.PlaceId
        const result = await models.Place.findAll({where: { PlaceId: place} })
        const filtered = []
        for(const element of result){
            filtered.push({
                name: element.name,
                img: element.img
            })
        }
        return res.json(filtered)
    })


    // HTTP GET api that returns all the cats in our actual database
    app.get("/places", async (req, res) => {
        const result = await models.Poi.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                id: element.id,
                name: element.name,
                description: element.description,
                map: element.map,
                img: element.img,
            })
        }
        return res.json(filtered)
    })

    app.get("/events", async (req, res) => {
        const result = await models.Event.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                id: element.id,
                name: element.name,
                img: element.img,
                description: element.description,
                type: element.type,
                pratical_info: element.pratical_info,
                place: element.PlaceId
            })
        }
        return res.json(filtered)
    })

    app.get("/artists", async (req, res) => {
        const result = await models.Itinerary.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                id: element.id,
                name: element.name,
                description: element.description,
                info: element.info,
                img: element.img,
            })
        }
        return res.json(filtered)
    })


    app.get("/events_artists", async (req, res) => {
        const result = await models.Events_Artists.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                place: element.placeId,
                event: element.eventId
            })
        }
        return res.json(filtered)
    })


    // HTTP POST api, that will push (and therefore create) a new element in
    // our actual database

    app.post("/events", async (req, res) => {
        const { body } = req
        await models.Event.create(body);
        return res.sendStatus(200)
    })

    app.post("/places", async (req, res) => {
        const { body } = req
        await models.Place.create(body);
        return res.sendStatus(200)
    })

    app.post("/artists", async (req, res) => {
        const { body } = req
        await models.Artist.create(body);
        return res.sendStatus(200)
    })
}

runMainApi()
export default app

