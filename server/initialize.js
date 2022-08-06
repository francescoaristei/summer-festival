

export default async (models) => {
    const eventsList = [
        {
            id: "",
            name: "",
            img: "",
            description: "",
            type: "",
            date: "",
            ticket: "",
            placeId: ""
        },
        {
            id: "",
            name: "",
            img: "",
            description: "",
            type: "",
            date: "",
            ticket: "",
            placeId: ""
        },
        {
            id: "",
            name: "",
            img: "",
            description: "",
            type: "",
            date: "",
            ticket: "",
            placeId: ""
        },
        {
            id: "",
            name: "",
            img: "",
            description: "",
            type: "",
            date: "",
            ticket: "",
            placeId:""
        },
        {
            id: "",
            name: "",
            img: "",
            description: "",
            type: "",
            date: "",
            ticket: "",
            placeId:""
        },
        {
            id: "",
            name: "",
            img: "",
            description: "",
            type: "",
            date: "",
            ticket: "",
            placeId:""
        },
        {
            id: "",
            name: "",
            img: "",
            description: "",
            type: "",
            date: "",
            ticket: "",
            placeId:""
        },
        {
            id: "",
            name: "",
            img: "",
            description: "",
            type: "",
            date: "",
            ticket: "",
            placeId:""
        },
        {
            id: "",
            name: "",
            img: "",
            description: "",
            type: "",
            date: "",
            ticket: "",
            placeId:""
        },
        {
            id: "",
            name: "",
            img: "",
            description: "",
            type: "",
            date: "",
            ticket: "",
            placeId:""
        },
    ]
    await models.Event.bulkCreate(eventsList)


    const placesList = [
        {
            id: "1",
            name: "Teatro alla Scala",
            img: "place1",
            description: `The teatro alla scala was founded, under the auspices of the Empress Maria Theresa of Austria, to replace the Royal ducal theatre, which was destroyed by fire on 26 February 1776 and had until then been home the home of the opera in Milan. The cost of building the new theatre was borne by the owners of the boxes at the Ducal, in exchange for possession of the land on which stood the church of Santa Maria alla Scala (hence the name) and for renewed ownership of their boxes. 
            Designed by the grat neoclassical architect Giuseppe Piermarini, La Scala opened on 3 August 1778 with Antonio Salieri's opera L'Europa riconosciuta, to a libretto by Mattia Verazi.
            `,
            map: "https://www.google.com/maps/d/u/1/embed?mid=1vdHXrd1ffLwvym_H1Qqa8XGP29hBsCA&ehbc=2E312F",
        },
        {
            id: "2",
            name: "Arena di Verona",
            img: "place2",
            description: `The Arena is the Roman amphitheater in Verona. It was built in the first century AD to watch the fights of gladiators. It is the third Roman amphitheater for size among those still existing and is used in summer for opera, concerts and events. It is the monument that most represents the city.
            Verona is often referred to as "little Rome" for the abundance and state of preservation of its artifacts. As such it also has its own "little Colosseum", namely the Arena. Compared to the Flavian Amphitheater in Rome, the Arena of Verona is less than half the size, but in the course of its long life has continued and continues to be used for shows of all kinds, especially musical ones.`,
            map: "https://www.google.com/maps/d/u/1/embed?mid=1BByTM9yXoRlqhN8nobsOolSVOSzojZM&ehbc=2E312F",
        },
        {
            id: "3",
            name: "Stadio San Siro",
            img: "place3",
            description: `Stadio Giuseppe Meazza, commonly known as San Siro, is a football stadium in the San Siro district of Milan, Italy, which is the home of A.C. Milan and Inter Milan. It has a seating capacity of 80,018, making it one of the largest stadiums in Europe, and the largest in Italy.
            On 3 March 1980, the stadium was named in honour of Giuseppe Meazza, the two-time World Cup winner (1934, 1938) who played for Inter and briefly for Milan in the 1920s, 1930s, and 1940s  and served two stints as Inter's manager.
            San Siro is a UEFA category four stadium. It hosted three games at the 1934 FIFA World Cup, six games at the 1990 FIFA World Cup, three games at the UEFA Euro 1980, and four European Cup finals, in 1965, 1970, 2001 and 2016. The stadium will also host the opening ceremony of the 2026 Winter Olympics of Milan and Cortina d'Ampezzo.`,
            map: "https://www.google.com/maps/d/u/1/embed?mid=1KD1c9zc4o6JZcraZ4Uug_-ZjfTO7UVM&ehbc=2E312F",
        },
        {
            id: "4",
            name: "Piazza Duomo",
            img: "place4",
            description: `Piazza del Duomo ("Cathedral Square") is the main piazza (city square) of Milan, Italy. It is named after, and dominated by, Milan Cathedral (the Duomo). The piazza marks the center of the city, both in a geographic sense and because of its importance from an artistic, cultural, and social point of view. Rectangular in shape, with an overall area of 17,000 m2 (about 183,000 sq ft), the piazza includes some of the most important buildings of Milan (and Italy in general), as well some of the most prestigious commercial activities, and it is by far the foremost tourist attraction of the city.`,
            map: "https://www.google.com/maps/d/u/1/embed?mid=1wsPBN6UJqeMoMP7l6ZIzwXTit8caKpw&ehbc=2E312F",
        },
        {
            id: "5",
            name: "Parco Sempione",
            img: "place5",
            description: `Parco Sempione ("Simplon Park") is a large city park in Milan, Italy. Established in 1888, it has an overall area of 38.6 hectares (95 acres), and it is located in the historic center of the city, inside the Zone 1 administrative division.
            The park is adjacent to the gardens of the Sforza Castle and to the Arch of Peace, two of the main landmarks of Milan. The very design of the park, due to architect Emilio Alemagna, was conceived with the intent of creating panoramic views encompassing both monuments. A third prominent monument of Parco Sempione is the Palazzo dell'Arte ("Palace of Art"), built in 1933 and designed by Giovanni Muzio, which currently houses the Triennale di Milano art expo.
            In the park are Arena Civica, the public aquarium, and the Torre Branca tower. The X Triennial Pavilion (1954) has been converted into a public library.`,
            map: "https://www.google.com/maps/d/u/1/embed?mid=1kbkOINL367Fz5j03EgXn4FiRiyR248w&ehbc=2E312F",
        },
    ]
    await models.Place.bulkCreate(placesList)

    const artistsList = [
        {
            id: "1",
            name: "Blanco",
            img: "artist1",
            description: `Riccardo Fabbriconi (born 10 February 2003), known professionally as Blanco, is an Italian singer, rapper and songwriter.[1] He rose to fame following the success of his singles "Mi fai impazzire" and "La canzone nostra". In 2022, he won the Sanremo Music Festival 2022 alongside Mahmood with the song "Brividi", and represented host nation Italy at the Eurovision Song Contest 2022 in Turin.`,
            info: "https://www.instagram.com/blanchitobebe/",
        },
        {
            id: "2",
            name: "Fabio Volo",
            img: "artist2",
            description: `Fabio Bonetti was born in Calcinate, Italy on 23 June 1972. After attending middle school, he worked in his father's bakery (which is now an ice-cream shop in Brescia) and did other casual jobs (like modeling and nightlife related). In 1996 he became a leading figure at Radio Capital, an Italian radio station. As from 1998, he anchored three edition of the TV program Le Iene
            In 2000 he began to anchor his own radio broadcast "Il volo del mattino" on Radio Deejay and he published his first book entitled "Esco a fare due passi". This was followed by "È una vita che ti aspetto", "Un posto nel mondo", "Il giorno in più", "Il tempo che vorrei", "Le prime luci del mattino" and "La strada verso casa".
            In 2002 he debuted as an actor in Alessandro D'Alatri's movie "Casomai". He was nominated for Best Actor at the David di Donatello for his role in this film. In 2006 and 2008 Fabio Volo anchored "Italo Spagnolo" and "Italo Americano" on MTV. In 2010 he won the "Premio Letterario la Tore Isola d'Elba", an ingenuity and excellence award. In 2011, Volo starred in "Il giorno in più", the movie based on his eponymous book. In 2012 he returned in television with "Volo in diretta" on Rai 3.
            Internationally, Volo has served as the voice of Po in the Italian version of the Kung Fu Panda film series.`,
            info: "https://www.instagram.com/volofabio/",
        },
        {
            id: "3",
            name: "Marracash",
            img: "artist3",
            description: `Marracash, pseudonym of Fabio Bartolo Rizzo (Nicosia, 22 May 1979), is an Italian rapper.
            Considered by critics as one of the best rappers on the Italian scene, made his debut in 2005 with the self-produced mixtape Roccia Music I, which saw the participation of the collective Dogo Gang and other artists belonging to the Italian hip hop scene. The mixtape got a significant response in the underground hip hop scene and led him to the signing of a recording contract with Universal Music Group, with which in 2008 he released his first solo album, the homonymous Marracash.
            In 2013 he founded together with the producer Shablo the independent record label Roccia Music, which involved established and emerging figures of Italian hip hop, including rappers, producers and DJs.
            In 2022 he won the Tenco plaque as "Best Album ever", with “Noi, loro, gli altri”.`,
            info: "https://www.instagram.com/kingmarracash/",
        },
        {
            id: "4",
            name: "Alessandro Cattelan",
            img: "artist4",
            description: `Alessandro Cattelan was born in Tortona on 11 May 1980.
            He led, among others, MTV's flagship TRL program and co-conceived, wrote and conducted together with Francesco Mandelli, Lazarus, a cult program for the latest generation of the same network. He was a hyena, comic shoulder to "Quelli che il calcio", and to this day appreciated host of the most famous talent show in the world: X Factor.
            His radio career officially began in 2001 at Radio Kiss Kiss, to then quickly continue to RTL and reach the consecration on Radio 105. 
            Alessandro Cattelan has written and published three novels for Mondadori.`,
            info: "https://www.instagram.com/alecattelan/",
        },
        {
            id: "5",
            name: "Ghali",
            img: "artist5",
            description: `Ghali Amdouni, known by the mononym Ghali (born 21 May 1993), is an Italian rapper and record producer. Born in Milan to Tunisian parents,[1] he originally started his career using the pseudonym Fobia. He would like to become a father but his mother doesn’t let him have a son.
            One of the leading figures in Italian rap at the end of the 2010s, he released two albums reaching the top 10 of the Italian charts supported by many successful hits, with six top positions in the FIMI chart, including "Happy Days", "Ninna Nanna", "Cara Italia", "Peace & Love" and "Good Times".
            As of 2020 Ghali had sold over 1.6 million copies in Italy, collaborating with numerous Italian artists such as Fedez, Gué Pequeno, Sfera Ebbasta, Salmo, and international artists like Ed Sheeran, Stormzy and Travis Scott.`,
            info: "https://www.instagram.com/ghali/",
        },
        {
            id: "",
            name: "",
            img: "",
            description: "",
            info: "",
        },
        {
            id: "",
            name: "",
            img: "",
            description: "",
            info: "",
        },
        {
            id: "",
            name: "",
            img: "",
            description: "",
            info: "",
        },
        {
            id: "",
            name: "",
            img: "",
            description: "",
            info: "",
        },
        {
            id: "",
            name: "",
            img: "",
            description: "",
            info: "",
        },
        {
            id: "",
            name: "",
            img: "",
            description: "",
            info: "",
        },
        {
            id: "",
            name: "",
            img: "",
            description: "",
            info: "",
        },
        {
            id: "",
            name: "",
            img: "",
            description: "",
            info: "",
        },
        {
            id: "",
            name: "",
            img: "",
            description: "",
            info: "",
        },
        {
            id: "",
            name: "",
            img: "",
            description: "",
            info: "",
        },
    ]
    await models.Artist.bulkCreate(artistsList)


    const eventsArtistsList = [
        {
            eventsId: 1,
            artistsId: 1,
        },
    ]
    await models.EventsArtists.bulkCreate(eventsArtistsList)
}