

export default async (models) => {
    const eventsList = [
        {
            id: 1,
            name: "Carmen",
            img: "event1",
            description: 
                `The historic production of Carmen which, 
                in 1995, was the occasion of the Arena debut of Franco Zeffirelli, 
                is returning “Près des remparts de Séville” and to the heart of Verona.\n
                Georges Bizet's masterpiece will officially inaugurate the 99th Opera Festival on 17th June 2022 and will be 
                performed on a total of 9 evenings until the end of August.\n
                In the setting of a breathtaking Seville, be enchanted by the timeless fascination of Carmen, 
                the rebellious gypsy who warns her suitors with these words:\n
                “Si tu ne m'aimes pas, je t'aime/Si je t'aime, prends garde à toi!” (If you don't love me, I love you/If I love you, you'd better watch out!)`,
            type: "Opera",
            date: "27-08-2022",
            ticket: "FILL",
            placeId: 2
        },
        {
            id: 2,
            name: "Gala Fracci",
            img: "event2",
            description: 
                `After the extraordinary and thrilling success of the first edition, 
                La Scala and its artists renew the tribute to Carla Fracci, who was and remains a cardinal figure in the history of dance, 
                a key figure for Teatro alla Scala and for all of Italian culture.\n
                Hers is a story of talent, persistence, and hard work that has inspired and continues to inspire generations of young people, 
                and not only those in the world of ballet.\n To celebrate this legendary étoile, 
                the Ballet Director Manuel Legris has chosen to organize a gala in her name, as a regular date every season, 
                to draw in and celebrate the world of international dance and ballet.`,
            type: "Dance",
            date: "20-08-2022",
            ticket: "FILL",
            placeId: 1
        },
        {
            id: 3,
            name: "LoveMi",
            img: "event3",
            description: 
                `Tuesady 30th of June from 18:00 LOVE MI is live, a huge charity concert held in Piazza Duomo in Milan.\n
                The live event has been thinked and organized by Fedez, in order to collect the moneys needed to build the new TOG centre.\n
                This event is an extraordinary initiative for the city of Milan, for its people and especially for the children of the TOG centre.\n
                The evening event will be presented by Eleonoire Casalegno and Aurora Ramazzotti, with Gabriele Vagnato, a young and very popular content creator.`,
            type: "Music",
            date: "30-08-2022",
            ticket: "FILL",
            placeId: 4
        },
        {
            id: 4,
            name: "Roberto Bolle and Friends",
            img: "event4",
            description: 
                `Created in 2008 with the aim of taking ballet to unusual locations, 
                the Roberto Bolle & Friends Gala arrived at the Arena in 2012 and has now become a highly popular regular appointment.\n
                Performing alongside Roberto Bolle, the first dancer to be Étoile at Milan's 
                Teatro alla Scala and Principal Dancer of the American Ballet Theatre of New York at the same time, 
                will be top ballet stars from the most prestigious companies.`,
            type: "Dance",
            date: "05-09-2022",
            ticket: "FILL",
            placeId:2
        },
        {
            id: 5,
            name: "La Traviata",
            img: "event5",
            description: 
                `“Libiamo, libiamo ne' lieti calici” in honour of Giuseppe Verdi's La Traviata, 
                the world's most performed opera, which is returning to the Arena with the last sumptuous 19th century production created by Franco Zeffirelli 
                with the refined costumes of Maurizio Millenotti.\nIn spite of an unfavourable destiny, 
                Violetta and Alfredo will love each another on the 10th September 2022
                in the name of that sentiment that ”is the pulse/Of the whole universe/Mysterious and proud/Torture and delight to the heart!" `,
            type: "Opera",
            date: "10-09-2022",
            ticket: "FILL",
            placeId:2
        },
        {
            id: 6,
            name: "Milano Summer Festival",
            img: "event6",
            description: 
                `The summer in Milano rhymes with Milano Summer!, fantastic concerts, the majority of which have been cancelled due to the Covid crysis.\n
                Instead, now, the music comes back live to the Duomo square for a huge concert. \n
                From Alice Cooper, to The Killers, Luois Tomlison and the Chemical Brothers.\n Also italian artists will be main players in this event:
                from Achille Lauro to Blanco, numerous artists will join the Milano Summer Festival to let you enjoy to its full the city of Milan.\n
                Don't miss out this fantastic opportunities to have fun together with your friends!`,
            type: "Music",
            date: "07-09-2022 to 09-09-2022",
            ticket: "FILL",
            placeId: 3
        },
        {
            id: 7,
            name: "Radio Italia Live",
            img: "event7",
            description: `
                On the occasion of the 40th birthday of Radio Italia solomusicaitaliana, the largest free live music event in Italy returns to Piazza Duomo in 
                Milan on Saturday 21 August 2022, starting at 20:10, with the conduct of Luca Bizzarri and Paolo Kessisoglu.\n
                All the artists of the cast will sing three songs live with the accompaniment of the Mediterranean Orchestra conducted by Maestro Bruno Santori, 
                returning to tread the stage of a great event after two years of stop due to the health emergency and giving the public the opportunity to 
                return to experience the carefree and pure joy of great live music.\n
                Backstage, to collect the emotions of the artists, there will be Manola Moslehi, 
                while it will be up to Daniela Cappelletti to intercept the enthusiasm of the public in the square. \n
                The opening theme song of the event will be performed live, as in previous editions, by bassist Saturnino.`,
            type: "Music",
            date: "21-08-2022",
            ticket: "FILL",
            placeId:4
        },
        {
            id: 8,
            name: "Party like a DJ",
            img: "event8",
            description: 
                `On 25 and 26 August, three years after the legendary event at the Expo Area, "Party like a deejay", the mega party of Radio Deejay, is back, 
                celebrating forty years. "This year we have chosen a special location, Parco Sempione or, as we call it, the 'garden of Radio Deejay' 
                for a two-day party with music, sports and lots of activities to do together", they announced on the radio.\n
                On Saturday 25th the Speakers' Corner will be held, "special meet & greet with some of the radio hosts: \n
                Linus and Nicola, Alessandro Cattelan, the Trio Medusa, the Pinocchio team with La Pina, Diego and La Vale and finally Fabio Volo". \n
                On the same day, the great show at the Arena will offer an unforgettable evening with our speakers and many musical guests with the big concert.\n
                Two days of music, shows, meetings, food and of course races. I can't wait".`,
            type: "Music",
            date: "25-08-2022 and 26-08-2022",
            ticket: "FILL",
            placeId: 5
        },
        {
            id: 9,
            name: "Milano Rocks",
            img: "event9",
            description: 
            `Finally, one of the most anticipated and coolest event in Italy is back: MILANO ROCKS 2022. \n
                After announcing the only date for Liberato, the Milan event will host the international DJ and producer on Saturday 10 September 2022, 
                during its second day. \n Martin Garrix, the reference artist of the urban Ghali scene, while DJ Justin Mylo and the trio of producers 
                Room9 will be responsible for opening the big party at the Snai San Siro Hippodrome in Milan.\n
                If you like partying you must join us to enjoy the best rock and electronic music the European scene has to offer!
            `,
            type: "Music",
            date: "10-09-2022",
            ticket: "FILL",
            placeId: 3
        },
        {
            id: 10,
            name: "Filarmonica della Scala",
            img: "event10",
            description: 
            `On Sunday 12 September, the Concert for Milan returns, the most attended event of Milanese classical music, 
                which will see the Filarmonica della Scala directed by Riccardo Chailly, perform in a free concert in Piazza Duomo.\n
                On 12 September at 9.30 pm, one of the largest free live music events in the heart of the city returns to Piazza Duomo, 
                again without any access limitations: a great music party to celebrate the 10th anniversary of the first 
                Concert for Milan and the 40th since the birth of the Philharmonic.\n
                To celebrate this anniversary, 
                Riccardo Chailly and the musicians of the Filarmonica della Scala are designing a program of great vitality and energy with Manuel de 
                Falla's La vida breve and Maurice Ravel's Rapsodie espagnole, Un Americano a Parigi and Catfish row from Porgy and Bess by George Gershwin , 
                while opening a new commission to Nicola Campogrande.
            `,
            type: "Music",
            date: "12-09-2022",
            ticket: "FILL",
            placeId: 1
        },

        {
            id: 11,
            name: "Coachella",
            img: "event11",
            description:
                        `Coachella showcases popular and established musical artists as well as emerging artists and reunited groups. \n
                        It is one of the largest, most famous, and most profitable music festivals in the United States and the world. \nAlthough Coachella's roots are all about music, it's become way more expansive than that in recent years. \n
                        It features art installations and has also become a major fashion hotspot for bohemian-inspired styles. \nIt's also packed with celebrities, 
                        from the artists who are performing to stars who just want to hang out. \nA-listers like Kendall Jenner, Jared Leto, Leonardo DiCaprio, 
                        and more are spotted there almost every year.
            `,
            type: "Music",
            date: "13-09-2022",
            ticket: "FILL",
            placeId: 3,
        },

        {
            id: 12,
            name: "BST",
            img: "event12",
            description:
                    `BST is a music festival held over one entire day once a year, during AIA music festival in Parco Sempione, Milan.\n
                    Since 2013, BST Parco Sempione has seen headliners such as Celine Dion, The Rolling Stones, Bon Jovi, Barbra Streisand, 
                    Lionel Richie, Kylie Minogue, Black Sabbath, Neil Young, Pearl Jam, Tom Petty & The Heartbreakers, Arcade Fire, The Who, 
                    Blur, The Strokes,Taylor Swift and Adele.\n In 2022 the capacity was 65,000.
            `,
            type: "Music",
            date: "06-09-2022",
            ticket: "FILL",
            placeId: 5
        },
        {
            id: 13,
            name: "Vienna Opera in Concert",
            img: "event13",
            description:
            `The Vienna Mozart Orchestra plays in Teatro alla Scala concerts with internationally renowned singers and soloists all in magnificent historical costumes and wigs and creates a special atmosphere 
            in Milan's largest and most famous Concert hall, like Teatro alla Scala.\n
            Principally, the choice of works gives an impression of an authentic concert of the baroque era.\n
            In the style of “musical academies”, as in Milan concerts were known in Mozart's time, 
            the audience enjoy single movements from symphonies and solo concertos, as well as operatic overtures, 
            arias and duets from especially popular and well-known works.
            `,
            type: "Opera",
            date: "28-08-2022",
            ticket: "FILL",
            placeId: 1

        },
        {
            id: 14,
            name: "Duomo dance show",
            img: "event14",
            description:
            `Duomo Dance Shoq, an international dance event currently in its 10th edition!\n
            It's an annual event of reference for students, teachers, professional dancers and dance enthusiasts held during AIA Summer Festival.\n
            Conceived as an intercultural show to improve the technique and style of the different dance expressions: modern, 
            contemporary and hip hop, it is honored by the presence of world-renowned choreographers.\n
            The program includes dance classes in different educational levels: intermediate, advanced and professional. \n
            Choreographic workshops led by choreographers of the most important and famous international companies. \n
            The general program includes: meetings, exhibitions, competitions, video productions and shows.`,
            type: "Dance",
            date: "12-08-2022",
            ticket: "FILL",
            placeId: 4
        },
        {
            id: 15,
            name: "Rolling Loud",
            img: "event15",
            description:
            `Rolling Loud is the largest hip hop event in the world, 
            annually putting together a lineup of the biggest and most influential acts in the genre only at AIA Music Festival!\n
            The festival's flagship edition lives in Milan, but Rolling Loud has expanded across the country and beyond, 
            spreading their take on the contemporary rap scene global.
            `,
            type: "Music",
            date: "11-08-2022",
            ticket: "FILL",
            placeId: 5

        }

    ]
    await models.Event.bulkCreate(eventsList)


    const placesList = [
        {
            id: 1,
            name: "Teatro alla Scala",
            img: "place1",
            description: `The teatro alla scala was founded, under the auspices of the Empress Maria Theresa of Austria, to replace the Royal ducal theatre, which was destroyed by fire on 26 February 1776 and had until then been home the home of the opera in Milan.\n The cost of building the new theatre was borne by the owners of the boxes at the Ducal, in exchange for possession of the land on which stood the church of Santa Maria alla Scala (hence the name) and for renewed ownership of their boxes.\n 
            Designed by the grat neoclassical architect Giuseppe Piermarini, La Scala opened on 3 August 1778 with Antonio Salieri's opera L'Europa riconosciuta, to a libretto by Mattia Verazi.
            `,
            map: "https://www.google.com/maps/d/u/1/embed?mid=1vdHXrd1ffLwvym_H1Qqa8XGP29hBsCA&ehbc=2E312F",
        },
        {
            id: 2,
            name: "Arena di Verona",
            img: "place2",
            description: `The Arena is the Roman amphitheater in Verona. \nIt was built in the first century AD to watch the fights of gladiators.\n It is the third Roman amphitheater for size among those still existing and is used in summer for opera, concerts and events.\n It is the monument that most represents the city.\n
            Verona is often referred to as "little Rome" for the abundance and state of preservation of its artifacts.\n As such it also has its own "little Colosseum", namely the Arena. \nCompared to the Flavian Amphitheater in Rome, the Arena of Verona is less than half the size, but in the course of its long life has continued and continues to be used for shows of all kinds, especially musical ones.`,
            map: "https://www.google.com/maps/d/u/1/embed?mid=1BByTM9yXoRlqhN8nobsOolSVOSzojZM&ehbc=2E312F",
        },
        {
            id: 3,
            name: "Stadio San Siro",
            img: "place3",
            description: `Stadio Giuseppe Meazza, commonly known as San Siro, is a football stadium in the San Siro district of Milan, Italy, which is the home of A.C. Milan and Inter Milan.\n It has a seating capacity of 80,018, making it one of the largest stadiums in Europe, and the largest in Italy.\n
            On 3 March 1980, the stadium was named in honour of Giuseppe Meazza, the two-time World Cup winner (1934, 1938) who played for Inter and briefly for Milan in the 1920s, 1930s, and 1940s  and served two stints as Inter's manager.
            San Siro is a UEFA category four stadium. \nIt hosted three games at the 1934 FIFA World Cup, six games at the 1990 FIFA World Cup, three games at the UEFA Euro 1980, and four European Cup finals, in 1965, 1970, 2001 and 2016.\n The stadium will also host the opening ceremony of the 2026 Winter Olympics of Milan and Cortina d'Ampezzo.`,
            map: "https://www.google.com/maps/d/u/1/embed?mid=1KD1c9zc4o6JZcraZ4Uug_-ZjfTO7UVM&ehbc=2E312F",
        },
        {
            id: 4,
            name: "Piazza Duomo",
            img: "place4",
            description: `Piazza del Duomo ("Cathedral Square") is the main piazza (city square) of Milan, Italy. \nIt is named after, and dominated by, Milan Cathedral (the Duomo). \nThe piazza marks the center of the city, both in a geographic sense and because of its importance from an artistic, cultural, and social point of view.\n Rectangular in shape, with an overall area of 17,000 m2 (about 183,000 sq ft), the piazza includes some of the most important buildings of Milan (and Italy in general), as well some of the most prestigious commercial activities, and it is by far the foremost tourist attraction of the city.`,
            map: "https://www.google.com/maps/d/u/1/embed?mid=1wsPBN6UJqeMoMP7l6ZIzwXTit8caKpw&ehbc=2E312F",
        },
        {
            id: 5,
            name: "Parco Sempione",
            img: "place5",
            description: `Parco Sempione ("Simplon Park") is a large city park in Milan, Italy. \nEstablished in 1888, it has an overall area of 38.6 hectares (95 acres), and it is located in the historic center of the city, inside the Zone 1 administrative division.\n
            The park is adjacent to the gardens of the Sforza Castle and to the Arch of Peace, two of the main landmarks of Milan.\n The very design of the park, due to architect Emilio Alemagna, was conceived with the intent of creating panoramic views encompassing both monuments.\n A third prominent monument of Parco Sempione is the Palazzo dell'Arte ("Palace of Art"), built in 1933 and designed by Giovanni Muzio, which currently houses the Triennale di Milano art expo.\n
            In the park are Arena Civica, the public aquarium, and the Torre Branca tower.\n The X Triennial Pavilion (1954) has been converted into a public library.`,
            map: "https://www.google.com/maps/d/u/1/embed?mid=1kbkOINL367Fz5j03EgXn4FiRiyR248w&ehbc=2E312F",
        },
    ]
    await models.Place.bulkCreate(placesList)

    const artistsList = [
        {
            id: 1,
            name: "Blanco",
            img: "artist1",
            description: `Riccardo Fabbriconi (born 10 February 2003), known professionally as Blanco, is an Italian singer, rapper and songwriter.\nHe rose to fame following the success of his singles "Mi fai impazzire" and "La canzone nostra".\n In 2022, he won the Sanremo Music Festival 2022 alongside Mahmood with the song "Brividi", and represented host nation Italy at the Eurovision Song Contest 2022 in Turin.`,
            info: "https://www.instagram.com/blanchitobebe/",
        },
        {
            id: 2,
            name: "Fabio Volo",
            img: "artist2",
            description: `Fabio Bonetti was born in Calcinate, Italy on 23 June 1972. After attending middle school, he worked in his father's bakery (which is now an ice-cream shop in Brescia) and did other casual jobs (like modeling and nightlife related). \nIn 1996 he became a leading figure at Radio Capital, an Italian radio station.\n As from 1998, he anchored three edition of the TV program Le Iene.\n
            In 2000 he began to anchor his own radio broadcast "Il volo del mattino" on Radio Deejay and he published his first book entitled "Esco a fare due passi".\n This was followed by "È una vita che ti aspetto", "Un posto nel mondo", "Il giorno in più", "Il tempo che vorrei", "Le prime luci del mattino" and "La strada verso casa".\n
            In 2002 he debuted as an actor in Alessandro D'Alatri's movie "Casomai". \nHe was nominated for Best Actor at the David di Donatello for his role in this film.\n In 2006 and 2008 Fabio Volo anchored "Italo Spagnolo" and "Italo Americano" on MTV. \nIn 2010 he won the "Premio Letterario la Tore Isola d'Elba", an ingenuity and excellence award. \nIn 2011, Volo starred in "Il giorno in più", the movie based on his eponymous book. \nIn 2012 he returned in television with "Volo in diretta" on Rai 3.\n
            Internationally, Volo has served as the voice of Po in the Italian version of the Kung Fu Panda film series.`,
            info: "https://www.instagram.com/volofabio/",
        },
        {
            id: 3,
            name: "Marracash",
            img: "artist3",
            description: `Marracash, pseudonym of Fabio Bartolo Rizzo (Nicosia, 22 May 1979), is an Italian rapper.\n
            Considered by critics as one of the best rappers on the Italian scene, made his debut in 2005 with the self-produced mixtape Roccia Music I, which saw the participation of the collective Dogo Gang and other artists belonging to the Italian hip hop scene.\n The mixtape got a significant response in the underground hip hop scene and led him to the signing of a recording contract with Universal Music Group, with which in 2008 he released his first solo album, the homonymous Marracash.\n
            In 2013 he founded together with the producer Shablo the independent record label Roccia Music, which involved established and emerging figures of Italian hip hop, including rappers, producers and DJs.\n
            In 2022 he won the Tenco plaque as "Best Album ever", with “Noi, loro, gli altri”.`,
            info: "https://www.instagram.com/kingmarracash/",
        },
        {
            id: 4,
            name: "Alessandro Cattelan",
            img: "artist4",
            description: `Alessandro Cattelan was born in Tortona on 11 May 1980.\n
            He led, among others, MTV's flagship TRL program and co-conceived, wrote and conducted together with Francesco Mandelli, Lazarus, a cult program for the latest generation of the same network. \nHe was a hyena, comic shoulder to "Quelli che il calcio", and to this day appreciated host of the most famous talent show in the world: X Factor.\n
            His radio career officially began in 2001 at Radio Kiss Kiss, to then quickly continue to RTL and reach the consecration on Radio 105. \n
            Alessandro Cattelan has written and published three novels for Mondadori.`,
            info: "https://www.instagram.com/alecattelan/",
        },
        {
            id: 5,
            name: "Ghali",
            img: "artist5",
            description: `Ghali Amdouni, known by the mononym Ghali (born 21 May 1993), is an Italian rapper and record producer. Born in Milan to Tunisian parents, he originally started his career using the pseudonym Fobia. He would like to become a father but his mother doesn't let him have a son.\n
            One of the leading figures in Italian rap at the end of the 2010s, he released two albums reaching the top 10 of the Italian charts supported by many successful hits, with six top positions in the FIMI chart, including "Happy Days", "Ninna Nanna", "Cara Italia", "Peace & Love" and "Good Times".\n
            As of 2020 Ghali had sold over 1.6 million copies in Italy, collaborating with numerous Italian artists such as Fedez, Gué Pequeno, Sfera Ebbasta, Salmo, and international artists like Ed Sheeran, Stormzy and Travis Scott.`,
            info: "https://www.instagram.com/ghali/",
        },
        {
            id: 6,
            name: "Checco Zalone",
            img: "artist6",
            description: 
            `Luca Pasquale Medici (born 3 June 1977), known as Checco Zalone (modeled on the Italianized Barese insult che cozzalone!, lit.'what a boor!'), 
                is an Italian actor, musician, singer-songwriter, imitator, comedian and screenwriter. \n
                He co-wrote and starred in the five highest-grossing Italian films in Italy headed by Quo Vado?
            `,
            info: "https://www.instagram.com/checcozalone/?hl=en",
        },
        {
            id: 7,
            name: "Riccardo Chailly",
            img: "artist7",
            description: 
            `Riccardo Chailly, born 20 February 1953, is an Italian conductor. \n
                He is currently music director of the Lucerne Festival Orchestra, since 2016, and music director of La Scala, since 2017. \n
                Prior to this, he held chief conducting positions at the Gewandhausorchester (2005-2016); the Royal Concertgebouw Orchestra (1988-2004); 
                the Berlin Radio Symphony Orchestra (1982-1988); and the Teatro Comunale of Bologna (1986-1993). \n
                He was also the first musical director of the Orchestra Sinfonica di Milano Giuseppe Verdi (1999-2005) and principal 
                guest conductor of the London Philharmonic Orchestra (1983-1986). \n
                Among the world's leading conductors, in a 2015 Bachtrack poll, he was ranked by music critics as the world's best living conductor
            `,
            info: "https://www.instagram.com/riccardochailly/?hl=en",
        },
        {
            id: 8,
            name: "Andrea Bocelli",
            img: "artist8",
            description: 
            `Andrea Bocelli  (Italian: born 22 September 1958) is an Italian operatic tenor and multi-instrumentalist. \n
                He was born visually impaired, with congenital glaucoma, and at the age of 12, 
                Bocelli became completely blind, following a brain hemorrhage resulting from a football accident. \n
                After performing evenings in piano bars and competing in local singing contests, 
                Bocelli signed his first recording contract with the Sugar Music label. \n
                He rose to fame in 1994, winning the 44th Sanremo Music Festival performing "Il mare calmo della sera".\n
                Since 1994, Bocelli has recorded 15 solo studio albums of both pop and classical music, 
                three greatest hits albums, and nine complete operas, selling over 75 million records worldwide. 
            `,
            info: "https://www.instagram.com/andreabocelliofficial/",
        },
        {
            id: 9,
            name: "Roberto Bolle",
            img: "artist9",
            description: 
            `Roberto Bolle trained at the School of La Scala Theatre in Milan, where he has been Étoile since 2004. \n
                He has danced in all the major theaters around the world and with the most prestigious companies, including the American Ballet Theatre, 
                the Opera National de Paris, the Bolshoi Ballet, the Mariinsky - Kirov Ballet and the Royal Ballet.\n
                In June 2002 he performed at the Golden Jubilee of Queen Elizabeth at Buckingham Palace. The event was broadcast worldwide by the BBC.\n
                In April 2004 he danced in front of Pope John Paul II in the churchyard of St. Peter's Square in Rome for World Youth Day.\n
                In February 2006 he performed in the opening ceremony of the Winter Olympics in Turin, broadcast around the world.

            `,
            info: "https://www.instagram.com/robertobolle/",
        },
        {
            id: 10,
            name: "Fedez",
            img: "artist10",
            description: 
            `Federico Leonardo Lucia (born 15 October 1989), better known by his stage name Fedez (Italian:, is an Italian rapper, influencer, singer and songwriter.\n 
                In 2011, he released the albums Penisola che non c'è and Il mio primo disco da venduto, 
                released as free digital downloads. His first studio album, Sig. Brainwash - L'arte di accontentare, was released in 2013, 
                and it debuted at number one on the Italian Albums Chart. \n
                The album, which spawned three singles, including the top 10 hit "Cigno nero" featuring Francesca Michielin, 
                was later certified 3x Platinum by the Federation of the Italian Music Industry. As of December 2021, 
                Fedez has 5 #1 studio albums, 25 top ten singles (11 of which peaked at #1) and 50 Platinum certifications.

            `,
            info: "https://www.instagram.com/fedez/?hl=en",
        },
        {
            id: 11,
            name: "Nicola Piovani",
            img: "artist11",
            description: 
                `Nicola Piovani was born on May 26, 1946, in Rome, where he has lived and worked ever since. \n
                He is a musician, pianist, conductor, composer of film and theatre scores, songs, chamber music and symphonies. \n
                Among those who encouraged him in composition, was Greek composer Manos Hadjidakis.\n
                Much of Nicola Piovani's work has been dedicated to film and theatre, between which his passion is divided. \n
                Initially, film took up most of his time, but, over the years, he conceded himself the luxury (as he defines it) 
                of dedicating his time to performing music in theatres, which now occupies most of his time.\n
                His first soundtrack dates back to 1968. \n
                It was written to accompany documentary footage of the student movements connected to the faculty of Philosophy, where he was a student. \n
                The footage was made by a students' collective under the direction of Silvano Agosti.\n
                Nicola won an Academy Award for the soundtrack for Roberto Benigni's “La vita è bella” in 1999. 

                `,
            info: "https://www.instagram.com/nicolapiovaniufficiale/?hl=en",
        },
        {
            id: 12,
            name: "J-AX",
            img: "artist12",
            description:
            `Alessandro Aleotti (Italian pronunciation: (born 5 August 1972), known as J-Ax, 
                is an Italian singer, formerly in the rap group Articolo 31 with his DJ Vito Luca Perrini (DJ Jad). \n
                He is the brother of Weedo (also known as Grido from boyband Gemelli DiVersi). On 6 May 2010, he created the band Due di Picche ('Two of Spades') with Neffa.\n
                From 1990 to 2005, J-Ax (abbreviation of Joker Alex) rose to prominence as part of the popular Italian rap group Articolo 31 which he founded with Vito Luca Perrini, 
                AKA "DJ Jad". In 2014 he became a judge on the show The Voice of Italy.\n
                In 2006 J-Ax released his first solo album, Di sana pianta. This album, which was very pop oriented, spawned no fewer than six singles: "S.N.O.B.", 
                "Tua mamma", "Ti amo o ti ammazzo", "Acqua nella scuola", "Piccoli per sempre" and "Escono i pazzi". \n
                The single "Ti amo o ti ammazzo" was also translated and released in Spanish as "Te amo o te mato". 

            `,
            info: "https://www.instagram.com/j.axofficial/?hl=en",
        },
        {
            id: 13,
            name: "Franco Zeffirelli",
            img: "artist13",
            description: 
            `Gian Franco Corsi Zeffirelli KBE Grande Ufficiale OMRI (12 February 1923 - 15 June 2019), commonly known as Franco Zeffirelli , 
                was an Italian director and producer of operas, films and television. \n
                He was also a senator from 1994 until 2001 for the Italian centre-right Forza Italia party.\n
                Movies he directed included the romantic drama Romeo and Juliet (1968), for which he received a nomination for the Academy Award for Best Director, 
                and his 1967 version of The Taming of the Shrew with Elizabeth Taylor and Richard Burton. \n
                His miniseries Jesus of Nazareth (1977) won both national and international acclaim and is still frequently shown at Christmas and Easter in many countries.\n
                A Grande Ufficiale OMRI of the Italian Republic since 1977, Zeffirelli also received an honorary British knighthood in 2004 when he was created a KBE.  
            `,
            info: "https://en.wikipedia.org/wiki/Franco_Zeffirelli",
        },
        {
            id: 14,
            name: "Marco Armillato",
            img: "artist14",
            description: 
            `Marco Armiliato (born 1967) is an Italian opera conductor.\n
                Born in Genoa, Italy, he graduated in piano from the Niccolò Paganini Conservatory in Genoa. \n
                After working for a few years as a piano master in several opera houses, he debuted as a conductor in 1989 in Lima, 
                with Gaetano Donizetti's opera L'elisir d'amore. He has since conducted in numerous opera houses around the world, 
                including the Bayerische Staatsoper, Deutsche Oper Berlin, the Royal Opera House Covent Garden, Opéra National de Paris, Opernhaus Zürich, 
                Teatro Real de Madrid, Gran Teatre del Liceu in Barcelona, Teatro Regio in Turin, Teatro dell'Opera in Rome, 
                and Arena in Verona. He has over 80 operas in his repertoire.\n
                At the Metropolitan Opera in New York he has conducted over 450 performances, second only to former music director James Levine 
                in the 21st century. He has conducted works by Giuseppe Verdi (Il Trovatore, Aida, Rigoletto, Macbeth, and Stiffelio), 
            `,
            info: "https://en.wikipedia.org/wiki/Marco_Armiliato",
        },
        {
            id: 15,
            name: "Clementine Margaine",
            img: "artist15",
            description: 
            `Considered one of the leading mezzos of her generation, French mezzo-soprano Clémentine Margaine has gained international acclaim in 
                recent seasons at theaters such as The Metropolitan Opera, Opéra national de Paris, Deutsche Oper Berlin, Bayerische Staatsoper, 
                Teatro Colón, Teatro dell' Opera di Roma, Grand Théâtre de Genève, Teatro di San Carlo, Opera Australia, and the Canadian Opera Company. \n
                Clémentine Margaine begins the 2019/20 season with two sold-out concerts at the Elbphilharmonie Hamburg, a programme of operatic repertoire 
                at the Tchaikovsky Concert Hall in Moscow, the premiere of a new staged interpretation of Verdi's Requiem at 
                The Shed in New York City and the Philharmonie Berlin, and Berlioz' L'Enfance du Christ in Lyon.
            `,
            info: "https://www.instagram.com/clementinemargaine/",
        },
        {
            id: 16,
            name: "Giovanni Allevi",
            img: "artist16",
            description:
            `Giovanni Allevi (Italian pronunciation: (born April 9, 1969) is an Italian pianist and composer.\n
            His song "O Generosa" is the current theme tune of the top flight of Italian football, Serie
            Allevi attained a first-class diploma both in piano at the "F. Morlacchi" conservatoire in Perugia and in composition at the Milan Conservatory.\n
            He graduated cum laude in philosophy with a thesis entitled "Il vuoto nella Fisica contemporanea" (The Void in Contemporary Physics) and 
            he attended the Accademia Internazionale di Alto Perfezionamento in Arezzo, under maestro Carlo Alberto Neri.\n
            In 1991, he did military service in the Italian Army Music Band. The master of the band noticed his piano talent and decided to put 
            the piano soloist in his "inventory." He played the Rhapsody in Blue by George Gershwin and the Warsaw Concerto by Richard Addinsell in 
            his capacity as the piano soloist of the Banda during a tour in numerous Italian theatres.
             `,
            info: "https://www.instagram.com/giovanniallevi/"
        },
        {
            id: 17,
            name: "Ludovico Einaudi",
            img: "artist17",
            description:
            `Ludovico Maria Enrico Einaudi (born 23 November 1955) is an Italian pianist and composer. \n
            Trained at the Conservatorio Verdi in Milan, 
            Einaudi began his career as a classical composer, later incorporating other styles and genres such as pop, rock, folk, and world music.\n
            Einaudi has composed the scores for a number of films and television productions, including This Is England, The Intouchables, 
            I'm Still Here, the TV miniseries Doctor Zhivago, and Acquario (1996), for which he won the Grolla d'oro. \n
            His music was used as the score for the Golden Globe and Academy Award-winning films Nomadland and The Father.\n
            He has also released a number of solo albums for piano and other instruments, notably I Giorni in 2001, Nightbook in 2009, and 
            In a Time Lapse in 2013. On 1 March 2019, Einaudi announced a seven-part project named Seven Days Walking, which was released over 
            the course of seven months in 2019. 
            `,
            info: "https://www.instagram.com/ludovico_einaudi/"

        },
        {
            id: 18,
            name: "Kanye West",
            img: "artist18",
            description:
            `Ye (born Kanye Omari West; June 8, 1977), commonly known as Kanye West, is an American rapper, record producer, 
            and fashion designer.\n He is widely regarded as one of the greatest and most influential hip hop musicians of all time, as well as 
            one of the greatest musicians of his generation.\n Born in Atlanta and raised in Chicago, West gained recognition as a producer for 
            Roc-A-Fella Records in the early 2000s, producing singles for several artists and developing the "chipmunk soul" sampling style. \n
            Intent on pursuing a solo career as a rapper, he released his debut studio album, The College Dropout (2004), to critical and commercial success.
             West subsequently founded his record label GOOD Music later that same year. 
            `,
            info: "https://www.instagram.com/kanyewest/"

        },
        {
            id: 19,
            name: "Jabbawockeez",
            img: "artist19",
            description:
            `The Jabbawockeez is an American hip-hop dance crew that rose to prominence as the winner of the first season of America's Best Dance Crew in 2008.\n
            Established in 2003 in San Diego, California when dancers Kevin "KB" Brewer and Joe Larot put together an innovative dance crew. \n
            They participated in dance competitions with the idea of disrupting the existing dance scene. \n
            At the time they felt that dance crews were clones of one another; were dancing to the "top" of the music instead of digging deep into the music, 
            and they set out to do something different. With Jabbawockeez, they showcased freestyle dance, were able to strike a balance between dancing to the music, 
            and dancing as an artistic expression.\n
            By 2004, the Jabbawockeez's members included Phil "Swagger Boy" Tayag, Ben "B-Tek" Chung, Chris "Cristyle" Gatdula, Rynan "Kid Rainen" Paguio, 
            and Jeff "Phi" Nguyen.\n Tony "Transformer" Tran joined the crew in 2013. The Jabbawockeez does not have a group leader; choreography for their performances, 
            as well as music, design choices, is made as a collective unit.
            `,
            info: "https://www.instagram.com/jabbawockeez/"

        },
        {
            id: 20,
            name: "Ezio Bosso",
            img: "artist20",
            description:
            `Ezio Bosso 13 September 1971 is an Italian composer, pianist, double bass player, and conductor. \n
            He composed film scores such as Un amore and Gabriele Salvatores' Io non ho paura, and ballets which were performed by 
            The Royal Ballet and the San Francisco Ballet, among others. As a pianist, he released a solo album which entered the Italian charts.
            `,
            info: "https://www.instagram.com/eziobosso/"
            
        },
        {
            id: 21,
            name: "Eminem",
            img: "artist21",
            description:
            `Marshall Bruce Mathers III (born October 17, 1972), known professionally as Eminem (stylized as EMINƎM), 
            is an American rapper, songwriter and record producer. \n
            He is credited with popularizing hip hop in middle America and is critically acclaimed as one of the greatest rappers of all time.\n
            Eminem's global success and acclaimed works are widely regarded as having broken racial barriers for the acceptance of white rappers in popular music.\n
            While much of his transgressive work during the late 1990s and early 2000s made him widely controversial, 
            he came to be a representation of popular angst of the American underclass and has been cited as an influence for many artists of various genres. 
            `,
            info: "https://www.instagram.com/eminem/"
        },
        {
            id: 22,
            name: "Imagine Dragons",
            img: "artist22",
            description:
            `Imagine Dragons is an American pop rock band from Las Vegas, Nevada, consisting of lead singer Dan Reynolds, guitarist Wayne Sermon, 
            bassist Ben McKee and drummer Daniel Platzman.\nThe band first gained exposure with the release of their single "It's Time", 
            followed by their award-winning debut studio album Night Visions (2012), which resulted in the chart-topping singles "Radioactive" and "Demons".\n 
            Rolling Stone named "Radioactive", which held the record for most weeks charted on the Billboard Hot 100, the "biggest rock hit of the year".\n
            MTV called them "the year's biggest breakout band", and Billboard named them their "Breakthrough Band of 2013" and "Biggest Band of 2017",
            and placed them at the top of their "Year in Rock" rankings for 2013, 2017,and 2018.    N
            Imagine Dragons topped the Billboard Year-End "Top Artists Duo/Group" category in 2018.
            `,
            info: "https://www.instagram.com/imaginedragons/"

        }
    ]
    await models.Artist.bulkCreate(artistsList)


    const eventsArtistsList = [
        {
            eventId: 7,
            artistId: 1,
        },
        {
            eventId: 6,
            artistId: 1,
        },
        {
            eventId: 8,
            artistId: 2,
        },
        {
            eventId: 7,
            artistId: 3,
        },
        {
            eventId: 8,
            artistId: 3,
        },
        {
            eventId: 8,
            artistId: 4,
        },
        {
            eventId: 9,
            artistId: 5,
        },
        {
            eventId: 9,
            artistId: 2
        },
        {
            eventId: 7,
            artistId: 5,
        },
        {
            eventId: 6,
            artistId: 6,
        },
        {
            eventId: 11,
            artistId: 6
        },
        {
            eventId: 10,
            artistId: 7,
        },
        {
            eventId: 11,
            artistId: 7
        },
        {
            eventId: 10,
            artistId: 4
        },
        {
            eventId: 12,
            artistId: 5
        },
        {
            eventId: 3,
            artistId: 8,
        },
        {
            eventId: 12,
            artistId: 8
        },
        {
            eventId: 4,
            artistId: 9,
        },
        {
            eventId: 5,
            artistId: 9,
        },
        {
            eventId: 6,
            artistId: 10,
        },
        {
            eventId: 3,
            artistId: 10,
        },
        {
            eventId: 2,
            artistId: 11,
        },
        {
            eventId: 4,
            artistId: 11,
        },
        {
            eventId: 3,
            artistId: 12,
        },
        {
            eventId: 6,
            artistId: 12,
        },
        {
            eventId: 1,
            artistId: 13,
        },
        {
            eventId: 2,
            artistId: 13,
        },
        {
            eventId: 5,
            artistId: 17,
        },
        {
            eventId: 1,
            artistId: 14,
        },
        {
            eventId: 4,
            artistId: 14,
        },
        {
            eventId: 9,
            artistId: 16,
        },
        {
            eventId: 1,
            artistId: 15,
        },
        {
            eventId: 5,
            artistId: 15,
        },
        {
            eventId: 13,
            artistId: 16,

        },
        {
            eventId: 13,
            artistId: 19,
        },
        {
            eventId: 14,
            artistsId: 17,
        },
        {
            eventId: 14,
            artistId: 18,
        },
        {
            eventId: 15,
            artistId: 18,
        },
        {
            eventId: 15,
            artistId: 19,
        },
        {
            eventId: 11,
            artistId: 20,
        },
        {
            eventId: 10,
            artistId: 20
        },
        {
            eventId: 12,
            artistId: 21
        },
        {
            eventId: 2,
            artistId: 21
        },
        {
            eventId: 13,
            artistId: 22,
        },
        {
            eventId: 14,
            artistId: 22
        }

    ]
    await models.Events_Artists.bulkCreate(eventsArtistsList)
}
