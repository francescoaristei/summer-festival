[Link to the website](https://summer-festival.herokuapp.com)

# Team ****🧑🏼‍💻****

- [Francesco Aristei](https://github.com/francescoaristei)
- [Leonardo Barone](https://github.com/baroneleonardo)
- [Michele Lorenzo Miranda](https://github.com/michelelorenzo)
- [Andrea Verrone](https://github.com/AndreaVerrone)

# Project description

The website was built for a summer festival event, in order to promote artists and events that will take place during the festival other than the festival itself. It includes information about the festival *events*, *artists* and a list of *places* where the events will be hosted.

The project is part of the examination for the *Hypermedia Application (Web and Multimedia)* class offered by *Politecnico di Milano*.

## Technical architecture

The website is built using HTML, CSS and is based on the Nuxt framework, which makes it easy to create and manage static and dynamic websites.

All pages were created in the ‘pages’ folder. The ‘assets’ contains all the images displayed in the several pics, ‘static’ contains vector images for buttons and icons. 

### Nuxt

the framework has been very helpful for the creation of dynamic content. All the cards present in the website are dynamically generated, making it easier for development. Examples of dynamic pages are: events, artists, places. Every information is retrieved from the database via api and then correctly shown on the page according to the dynamic id. The static pages fetch data from the database as well. (is this still true? we gotta check) 
The basic elements of the pages are reused thanks to components: footer, header, tab-bar.

- ROUTING: To navigate and route we used NuxtLink and $router

### Storage and database

All content of the website is stored on a database. For local development we used **PostgresSQL** to store all needed info. For production and release purposes, instead, the team used the **Heroku** platform. The framework to manage data and storage used is **Sequelize**. 
The server has 2 *js* file, `api.js` and `initialize.js`: 

1. *api.js* contains all the functions to create the database’s tables and association. It also contains all the apis to get data from the database and static pages data.
2. *initialize.js* accounts for the tables data filling. Every table was easily populated thanks to the `bulkCreate` function offered by **Sequelize**. 
