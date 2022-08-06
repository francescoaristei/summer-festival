

export default async (models) => {
    const eventsList = [
        {
            id: 1,
            name: "Carmen",
            img: "event1",
            description: 
                `The historic production of Carmen which, 
                in 1995, was the occasion of the Arena debut of Franco Zeffirelli, 
                is returning “Près des remparts de Séville” and to the heart of Verona. 
                Georges Bizet's masterpiece will officially inaugurate the 99th Opera Festival on 17th June 2022 and will be 
                performed on a total of 9 evenings until the end of August. 
                In the setting of a breathtaking Seville, be enchanted by the timeless fascination of Carmen, 
                the rebellious gypsy who warns her suitors with these words: 
                “Si tu ne m'aimes pas, je t'aime/Si je t'aime, prends garde à toi!” (If you don't love me, I love you/If I love you, you'd better watch out!)`,
            type: "Opera",
            date: "27-08-2022",
            ticket: "",
            placeId: 2
        },
        {
            id: 2,
            name: "Gala Fracci",
            img: "event2",
            description: 
                `After the extraordinary and thrilling success of the first edition, 
                La Scala and its artists renew the tribute to Carla Fracci, who was and remains a cardinal figure in the history of dance, 
                a key figure for Teatro alla Scala and for all of Italian culture. 
                Hers is a story of talent, persistence, and hard work that has inspired and continues to inspire generations of young people, 
                and not only those in the world of ballet. To celebrate this legendary étoile, 
                the Ballet Director Manuel Legris has chosen to organize a gala in her name, as a regular date every season, 
                to draw in and celebrate the world of international dance and ballet.`,
            type: "Dance",
            date: "20-08-2022",
            ticket: "",
            placeId: 1
        },
        {
            id: 3,
            name: "LoveMi",
            img: "event3",
            description: 
                `Tuesady 30th of June from 18:00 LOVE MI is live, a huge charity concert held in Piazza Duomo in Milan. 
                The live event has been thinked and organized by Fedez, in order to collect the moneys needed to build the new TOG centre. 
                This event is an extraordinary initiative for the city of Milan, for its people and especially for the children of the TOG centre.`,
            type: "",
            date: "30-08-2022",
            ticket: "",
            placeId: 4
        },
        {
            id: 4,
            name: "Roberto Bolle and Friends",
            img: "event4",
            description: 
                `Created in 2008 with the aim of taking ballet to unusual locations, 
                the Roberto Bolle & Friends Gala arrived at the Arena in 2012 and has now become a highly popular regular appointment. 
                Performing alongside Roberto Bolle, the first dancer to be Étoile at Milan's 
                Teatro alla Scala and Principal Dancer of the American Ballet Theatre of New York at the same time, 
                will be top ballet stars from the most prestigious companies.`,
            type: "Dance",
            date: "05-09-2022",
            ticket: "",
            placeId:2
        },
        {
            id: 5,
            name: "La Traviata",
            img: "event5",
            description: 
                `“Libiamo, libiamo ne' lieti calici” in honour of Giuseppe Verdi's La Traviata, 
                the world's most performed opera, which is returning to the Arena with the last sumptuous 19th century production created by Franco Zeffirelli 
                with the refined costumes of Maurizio Millenotti. In spite of an unfavourable destiny, 
                Violetta and Alfredo will love each another on the 10th September 2022
                in the name of that sentiment that ”is the pulse/Of the whole universe/Mysterious and proud/Torture and delight to the heart!" `,
            type: "",
            date: "10-09-2022",
            ticket: "Opera",
            placeId:2
        },
        {
            id: 6,
            name: "Milano Summer Festival",
            img: "event6",
            description: 
                ` The summer in Milano rhymes with Milano Summer!, fantastic concerts, the majority of which have been cancelled due to the Covid crysis.
                Instead, now, the music comes back live to the Duomo square for a huge concert. 
                From Alice Cooper, to The Killers, Luois Tomlison and the Chemical Brothers. Also italian artists will be main players in this event:
                from Achille Lauro to Blanco, numerous artists will join the Milano Summer Festival to let you enjoy to its full the city of Milan`,
            type: "Music",
            date: "07-09-2022 to 09-09-2022",
            ticket: "",
            placeId: 3
        },
        {
            id: 7,
            name: "Radio Italia Live",
            img: "event7",
            description: `
                On the occasion of the 40th birthday of Radio Italia solomusicaitaliana, the largest free live music event in Italy returns to Piazza Duomo in 
                Milan on Saturday 21 August 2022, starting at 20:10, with the conduct of Luca Bizzarri and Paolo Kessisoglu.
                All the artists of the cast will sing three songs live with the accompaniment of the Mediterranean Orchestra conducted by Maestro Bruno Santori, 
                returning to tread the stage of a great event after two years of stop due to the health emergency and giving the public the opportunity to 
                return to experience the carefree and pure joy of great live music.
                Backstage, to collect the emotions of the artists, there will be Manola Moslehi, 
                while it will be up to Daniela Cappelletti to intercept the enthusiasm of the public in the square. 
                The opening theme song of the event will be performed live, as in previous editions, by bassist Saturnino.`,
            type: "",
            date: "21-08-2022",
            ticket: "Music",
            placeId:4
        },
        {
            id: 8,
            name: "Party like a DJ",
            img: "event8",
            description: 
                `On 25 and 26 August, three years after the legendary event at the Expo Area, "Party like a deejay", the mega party of Radio Deejay, is back, 
                celebrating forty years. "This year we have chosen a special location, Parco Sempione or, as we call it, the 'garden of Radio Deejay' 
                for a two-day party with music, sports and lots of activities to do together", they announced on the radio.
                On Saturday 25th the Speakers' Corner will be held, "special meet & greet with some of the radio hosts: 
                Linus and Nicola, Alessandro Cattelan, the Trio Medusa, the Pinocchio team with La Pina, Diego and La Vale and finally Fabio Volo". 
                On the same day, the great show at the Arena will offer an unforgettable evening with our speakers and many musical guests with the big concert.
                Two days of music, shows, meetings, food and of course races. I can't wait".`,
            type: "Music",
            date: "25-08-2022 and 26-08-2022",
            ticket: "",
            placeId: 5
        },
        {
            id: 9,
            name: "Milano Rocks",
            img: "event9",
            description: 
            `
                Finally, one of the most anticipated and coolest event in Italy is back: MILANO ROCKS 2022. 
                After announcing the only date for Liberato, the Milan event will host the international DJ and producer on Saturday 10 September 2022, 
                during its second day.  Martin Garrix, the reference artist of the urban Ghali scene, while DJ Justin Mylo and the trio of producers 
                Room9 will be responsible for opening the big party at the Snai San Siro Hippodrome in Milan.
            `,
            type: "Music",
            date: "10-09-2022",
            ticket: "",
            placeId: 3
        },
        {
            id: 10,
            name: "Concerto per Milano, Filarmonica della Scala",
            img: "event10",
            description: 
            `
                On Sunday 12 September, the Concert for Milan returns, the most attended event of Milanese classical music, 
                which will see the Filarmonica della Scala directed by Riccardo Chailly, perform in a free concert in Piazza Duomo.
                On 12 September at 9.30 pm, one of the largest free live music events in the heart of the city returns to Piazza Duomo, 
                again without any access limitations: a great music party to celebrate the 10th anniversary of the first 
                Concert for Milan and the 40th since the birth of the Philharmonic.
                To celebrate this anniversary, 
                Riccardo Chailly and the musicians of the Filarmonica della Scala are designing a program of great vitality and energy with Manuel de 
                Falla's La vida breve and Maurice Ravel's Rapsodie espagnole, Un Americano a Parigi and Catfish row from Porgy and Bess by George Gershwin , 
                while opening a new commission to Nicola Campogrande.
            `,
            type: "Music",
            date: "12-09-2022",
            ticket: "",
            placeId: 1
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
            id: 6,
            name: "Checco Zalone",
            img: "artist6",
            description: 
            `
                Luca Pasquale Medici (born 3 June 1977), known as Checco Zalone (modeled on the Italianized Barese insult che cozzalone!, lit.'what a boor!'), 
                is an Italian actor, musician, singer-songwriter, imitator, comedian and screenwriter. 
                He co-wrote and starred in the five highest-grossing Italian films in Italy headed by Quo Vado?
            `,
            info: "https://www.instagram.com/checcozalone/?hl=en",
        },
        {
            id: 7,
            name: "Riccardo Chailly",
            img: "artist7",
            description: 
            `
                Riccardo Chailly, born 20 February 1953, is an Italian conductor. 
                He is currently music director of the Lucerne Festival Orchestra, since 2016, and music director of La Scala, since 2017. 
                Prior to this, he held chief conducting positions at the Gewandhausorchester (2005-2016); the Royal Concertgebouw Orchestra (1988-2004); 
                the Berlin Radio Symphony Orchestra (1982-1988); and the Teatro Comunale of Bologna (1986-1993). 
                He was also the first musical director of the Orchestra Sinfonica di Milano Giuseppe Verdi (1999-2005) and principal 
                guest conductor of the London Philharmonic Orchestra (1983-1986). 
                Among the world's leading conductors, in a 2015 Bachtrack poll, he was ranked by music critics as the world's best living conductor
            `,
            info: "https://www.instagram.com/riccardochailly/?hl=en",
        },
        {
            id: 8,
            name: "Andrea Bocelli",
            img: "artist8",
            description: 
            `
                Andrea Bocelli  (Italian: born 22 September 1958) is an Italian operatic tenor and multi-instrumentalist. 
                He was born visually impaired, with congenital glaucoma, and at the age of 12, 
                Bocelli became completely blind, following a brain hemorrhage resulting from a football accident. 
                After performing evenings in piano bars and competing in local singing contests, 
                Bocelli signed his first recording contract with the Sugar Music label. 
                He rose to fame in 1994, winning the 44th Sanremo Music Festival performing "Il mare calmo della sera".
                Since 1994, Bocelli has recorded 15 solo studio albums of both pop and classical music, 
                three greatest hits albums, and nine complete operas, selling over 75 million records worldwide. 
                He has had success as a crossover performer, bringing classical music to the top of international pop charts. 
                His album, Romanza, is one of the best-selling albums of all time, while Sacred Arias is the biggest selling classical 
                album by any solo artist in history. My Christmas was the best-selling holiday album of 2009] 
                and one of the best-selling holiday albums in the United States. 
                Bocelli was made a Grand Officer of the Order of Merit of the Italian Republic in 2006 and was 
                honored with a star on the Hollywood Walk of Fame on 2 March 2010 for his contribution to Live Theater and he was awarded a 
                Gold Medal for Merit in Serbia in 2022. Singer Celine Dion has said that "if God would have a singing voice, he must sound a 
                lot like Andrea Bocelli”,and record producer David Foster has often described Bocelli's voice as the most beautiful in the world.
            `,
            info: "https://www.instagram.com/andreabocelliofficial/",
        },
        {
            id: 9,
            name: "Roberto Bolle",
            img: "artist9",
            description: 
            `
                Roberto Bolle trained at the School of La Scala Theatre in Milan, where he has been Étoile since 2004. 
                He has danced in all the major theaters around the world and with the most prestigious companies, including the American Ballet Theatre, 
                the Opera National de Paris, the Bolshoi Ballet, the Mariinsky - Kirov Ballet and the Royal Ballet.
                In June 2002 he performed at the Golden Jubilee of Queen Elizabeth at Buckingham Palace. The event was broadcast worldwide by the BBC.
                In April 2004 he danced in front of Pope John Paul II in the churchyard of St. Peter's Square in Rome for World Youth Day.
                In February 2006 he performed in the opening ceremony of the Winter Olympics in Turin, broadcast around the world.
                Starting in 2008 he has had enormous success with the Gala “Roberto Bolle and Friends” in places never before reached by any dancer: 
                the churchyard of Milan Cathedral and Piazza Plebiscito in Naples, where he has been followed by thousands of people. 
                He has performed exceptional shows in the magical setting of the Colosseum and the Baths of Caracalla in Rome, 
                in the Temples Valley in Agrigento, at the Certosa of Capri, in the Boboli Gardens in Florence, at Torre del Lago Puccini 
                and in Piazza San Marco in Venice.
            `,
            info: "",
        },
        {
            id: 10,
            name: "Fedez",
            img: "artist10",
            description: 
            `
                Federico Leonardo Lucia (born 15 October 1989), better known by his stage name Fedez (Italian:, is an Italian rapper, influencer, singer and songwriter. 
                In 2011, he released the albums Penisola che non c'è and Il mio primo disco da venduto, 
                released as free digital downloads. His first studio album, Sig. Brainwash - L'arte di accontentare, was released in 2013, 
                and it debuted at number one on the Italian Albums Chart. 
                The album, which spawned three singles, including the top 10 hit "Cigno nero" featuring Francesca Michielin, 
                was later certified 3x Platinum by the Federation of the Italian Music Industry. As of December 2021, 
                Fedez has 5 #1 studio albums, 25 top ten singles (11 of which peaked at #1) and 50 Platinum certifications.
                Fedez proposed to Chiara Ferragni, an Italian fashion blogger and entrepreneur, on 6 May 2017 during his concert in Verona. 
                The concert and proposal were broadcast live on the Italian radio and TV channel RTL 102.5.  
                They have a son, Leone (born 19 March 2018), and a daughter, Vittoria (born 23 March 2021). 
                Fedez and Ferragni married in Noto, Sicily on 1 September 2018. On 17 March 2022, Fedez publicly shared via Instagram that he was 
                seriously ill with a newly diagnosed disease, though he did not reveal what the disease was at the time. However, on 24 March 2022, 
                he later revealed, again via Instagram, that he had received surgery at San Raffaele Hospital in Milan on 22 March 2022 
                for removal of a rare pancreatic neuroendocrine tumour. The surgery, which lasted 6 hours and involved a partial pancreatectomy, 
                was reported to have gone well.

            `,
            info: "https://www.instagram.com/fedez/?hl=en",
        },
        {
            id: 11,
            name: "Nicola Piovani",
            img: "artist11",
            description: 
                `
                Nicola Piovani was born on May 26, 1946, in Rome, where he has lived and worked ever since. 
                He is a musician, pianist, conductor, composer of film and theatre scores, songs, chamber music and symphonies. 
                Among those who encouraged him in composition, was Greek composer Manos Hadjidakis.
                Much of Nicola Piovani's work has been dedicated to film and theatre, between which his passion is divided. 
                Initially, film took up most of his time, but, over the years, he conceded himself the luxury (as he defines it) 
                of dedicating his time to performing music in theatres, which now occupies most of his time.
                His first soundtrack dates back to 1968. 
                It was written to accompany documentary footage of the student movements connected to the faculty of Philosophy, where he was a student. 
                The footage was made by a students' collective under the direction of Silvano Agosti.
                Nicola won an Academy Award for the soundtrack for Roberto Benigni's “La vita è bella” in 1999. 
                He has also received various Italian Awards: three David di Donatello, four Colonna Sonora, three Nastri d'Argento and two Ciak d'oro. 
                In France, he was nominated twice for the Cesar Awards at the 'Musique et Cinema Festival of Auxerre' and received an Award 
                from the Public and a Special Mention by the Judges.
                During the seventies, he was active as a song writer. 
                He composed two albums with Fabrizio De Andre': “Non al denaro, non all'amore nè al cielo” and “Storia di un impiegato”. 
                In 1995, he wrote three songs for Roberto Benigni's theatrical Tour, including “Quanto ti ho amato”.
                Initially, Piovani worked for the film industry as well as for theatre, writing the stage music for Carlo Cecchi's productions and for those of 
                Luca De Filippo, 
                Maurizio Scaparro and Vittorio Gassman.
                In 1989, he wrote “I sette re di Roma”, a musical, staged at the Sistina Theatre in Rome by Luigi Magni and Pietro Garinei with Luigi Proietti.
                At the end of the '80s, Nicola started to collaborate with Vincenzo Cerami, and together with Lello Arena they founded the 
                'Compagnia della Luna', with the intention of creating a product that had no place on the Italian stage at that time: 
                a type of theatre where both music and words have ample space, and can interact on an expressive level.
                `,
            info: "https://www.instagram.com/nicolapiovaniufficiale/?hl=en",
        },
        {
            id: 12,
            name: "J-AX",
            img: "artist12",
            description:
            `
                Alessandro Aleotti (Italian pronunciation: [alesˈsandro aleˈɔtti]; born 5 August 1972), known as J-Ax (Italian: [ˌdʒɛiˈaks]), 
                is an Italian singer, formerly in the rap group Articolo 31 with his DJ Vito Luca Perrini (DJ Jad).[1] 
                He is the brother of Weedo (also known as Grido from boyband Gemelli DiVersi). On 6 May 2010, he created the band Due di Picche ('Two of Spades') with Neffa.
                From 1990 to 2005, J-Ax (abbreviation of Joker Alex) rose to prominence as part of the popular Italian rap group Articolo 31 which he founded with Vito Luca Perrini, 
                AKA "DJ Jad". In 2014 he became a judge on the show The Voice of Italy
                In 2006 J-Ax released his first solo album, Di sana pianta. This album, which was very pop oriented, spawned no fewer than six singles: "S.N.O.B.", 
                "Tua mamma", "Ti amo o ti ammazzo", "Acqua nella scuola", "Piccoli per sempre" and "Escono i pazzi". 
                The single "Ti amo o ti ammazzo" was also translated and released in Spanish as "Te amo o te mato". 
                This album continued themes used by Articolo 31, such as knowing love ("Ti amo o ti ammazzo"), criticising society, ("S.N.O.B.", "Tua mamma") 
                and the protection of immigrants ("Escono i pazzi", "Fumo ancora").
                In 2007 he teamed up with The Styles to release the single "Più Stile", which won at the MTV Europe Music Awards for "Best Italian Act".
                In the same year, he released material with some of "Spaghetti Funk", a crew which he created at the same time as Articolo 31 in the 90s with Gemelli DiVersi, 
                Space One, Raptuz TDK (a writer) and a lot of other singers that now aren't in the crew.
                Later, on the album Di sana pianta he released the song "S.N.O.B. reloaded" with Space One, Gué Pequeno, 
                Jake La Furia, Marracash, Don Joe and Fabio B. In 2007, he also participated in MTV Day with DJ Jad and reformed their old group for a day.
                J-Ax did not release an album in 2007, although he had many projects on, which continued into 2008. 
                He sang on "Amici un cazzo" by Space One with Gemelli Diversi, "Come noi" by Pino Scotto and Fattore wow with Marracash and Gue Pequeno. 
                He also wrote three songs in that year: "Uno di noi", a thank you to his fans; "Limonare al multisala", for the soundtrack of the film Ti stramo; and 
                "I vecchietti fanno oh", the first single of his next album.
                In 2011, J-Ax appeared on the remix of Kasabian's single "Man of Simple Pleasures".

            `,
            info: "https://www.instagram.com/j.axofficial/?hl=en",
        },
        {
            id: 13,
            name: "Franco Zeffirelli",
            img: "artist13",
            description: 
            `
                Gian Franco Corsi Zeffirelli KBE Grande Ufficiale OMRI (12 February 1923 - 15 June 2019), commonly known as Franco Zeffirelli , 
                was an Italian director and producer of operas, films and television. 
                He was also a senator from 1994 until 2001 for the Italian centre-right Forza Italia party.
                Movies he directed included the romantic drama Romeo and Juliet (1968), for which he received a nomination for the Academy Award for Best Director, 
                and his 1967 version of The Taming of the Shrew with Elizabeth Taylor and Richard Burton. 
                His miniseries Jesus of Nazareth (1977) won both national and international acclaim and is still frequently shown at Christmas and Easter in many countries.
                A Grande Ufficiale OMRI of the Italian Republic since 1977, Zeffirelli also received an honorary British knighthood in 2004 when he was created a KBE.  
                He was awarded the Premio Colosseo in 2009 by the city of Rome.
                In 1996, Zeffirelli came out as gay, but thereafter preferred to be discreet about his personal life.  
                Zeffirelli said that he considered himself "homosexual" rather than gay, as he felt the term "gay" was less elegant.  
                Zeffirelli adopted two adult sons, men with whom he had lived and who worked for him for years, managing his affairs.
            `,
            info: "https://en.wikipedia.org/wiki/Franco_Zeffirelli",
        },
        {
            id: 14,
            name: "Marco Armillato",
            img: "artist14",
            description: 
            `
                Marco Armiliato (born 1967) is an Italian opera conductor.
                Born in Genoa, Italy, he graduated in piano from the Niccolò Paganini Conservatory in Genoa. 
                After working for a few years as a piano master in several opera houses, he debuted as a conductor in 1989 in Lima, 
                with Gaetano Donizetti's opera L'elisir d'amore. He has since conducted in numerous opera houses around the world, 
                including the Bayerische Staatsoper, Deutsche Oper Berlin, the Royal Opera House Covent Garden, Opéra National de Paris, Opernhaus Zürich, 
                Teatro Real de Madrid, Gran Teatre del Liceu in Barcelona, Teatro Regio in Turin, Teatro dell'Opera in Rome, 
                and Arena in Verona. He has over 80 operas in his repertoire.
                At the Metropolitan Opera in New York he has conducted over 450 performances, second only to former music director James Levine 
                in the 21st century. He has conducted works by Giuseppe Verdi (Il Trovatore, Aida, Rigoletto, Macbeth, and Stiffelio), 
                Giacomo Puccini (La Bohème, Madama Butterfly, and Turandot), Donizetti, and others since his debut in 1998.
                At the San Francisco Opera he directed La Bohème, Madama Butterfly, Turandot, La Traviata, Tosca, Aida, La Favorita, Il Trovatore and Cavalleria Rusticana.
                At Wiener Staatsoper he directed the operas Tosca, Fedora, Il barbiere di Siviglia, La Favorita, Jérusalem, Turandot, 
                Andrea Chénier, Cavalleria Rusticana, I Pagliacci, Stiffelio, La Traviata, Manon Lescaut, and Carmen.
                He conducted the Orchestra Sinfonica Di Milano Giuseppe Verdi accompanying Renée Fleming on her album, Verismo Arias, 
                which won the Grammy Award for Best Classical Vocal Performance at the 52nd Annual Grammy Awards for 2009.
                He is the younger brother of the tenor Fabio Armiliato.
            `,
            info: "https://en.wikipedia.org/wiki/Marco_Armiliato",
        },
        {
            id: 15,
            name: "Clementine Margaine",
            img: "artist16",
            description: 
            `
                Considered one of the leading mezzos of her generation, French mezzo-soprano Clémentine Margaine has gained international acclaim in 
                recent seasons at theaters such as The Metropolitan Opera, Opéra national de Paris, Deutsche Oper Berlin, Bayerische Staatsoper, 
                Teatro Colón, Teatro dell' Opera di Roma, Grand Théâtre de Genève, Teatro di San Carlo, Opera Australia, and the Canadian Opera Company. 
                Clémentine Margaine begins the 2019/20 season with two sold-out concerts at the Elbphilharmonie Hamburg, a programme of operatic repertoire 
                at the Tchaikovsky Concert Hall in Moscow, the premiere of a new staged interpretation of Verdi's Requiem at 
                The Shed in New York City and the Philharmonie Berlin, and Berlioz' L'Enfance du Christ in Lyon.
                In January, she sings Amneris in Aida at Barcelona's Gran Teatre del Liceu, followed by performances as Fidès in Meyerbeer's 
                Le Prophète at the Deutsche Oper Berlin, after which she returns to the role of Amneris, 
                this time with the Canadian Opera Company. She then sings Chausson's Poème de l'amour et de la mer at the Radio France Auditorium in 
                Paris and joins Jonas Kaufmann for a European concert tour that takes them to Brussels, Paris, and Bordeaux. 
                Her last performances of the season include performances of Carmen at the Liceu and for her return to the Teatro di San Carlo in Naples. 
                She made her respective debuts at The Metropolitan Opera and the Opéra national de Paris during the 2016/17 season in this signature role.
                Also active as a concert soloist, Clémentine Margaine has sung Elijah in Berlin, the Mozart Requiem in Lisbon, and the Verdi Requiem in Budapest.
            `,
            info: "https://www.instagram.com/clementinemargaine/",
        },
    ]
    await models.Artist.bulkCreate(artistsList)


    const eventsArtistsList = [
        {
            eventsId: 7,
            artistsId: 1,
        },
        {
            eventsId: 6,
            artistsId: 1,
        },
        {
            eventsId: 8,
            artistsId: 2,
        },
        {
            eventsId: 7,
            artistsId: 3,
        },
                {
            eventsId: 8,
            artistsId: 3,
        },
        {
            eventsId: 8,
            artistsId: 4,
        },
        {
            eventsId: 9,
            artistsId: 5,
        },
        {
            eventsId: 7,
            artistsId: 5,
        },
        {
            eventsId: 6,
            artistsId: 6,
        },
        {
            eventsId: 10,
            artistsId: 7,
        },
        {
            eventsId: 3,
            artistsId: 8,
        },
        {
            eventsId: 4,
            artistsId: 9,
        },
        {
            eventsId: 5,
            artistsId: 9,
        },
        {
            eventsId: 6,
            artistsId: 10,
        },
        {
            eventsId: 3,
            artistsId: 10,
        },
        {
            eventsId: 2,
            artistsId: 11,
        },
        {
            eventsId: 4,
            artistsId: 11,
        },
        {
            eventsId: 3,
            artistsId: 12,
        },
        {
            eventsId: 6,
            artistsId: 12,
        },
        {
            eventsId: 1,
            artistsId: 13,
        },
        {
            eventsId: 2,
            artistsId: 13,
        },
        {
            eventsId: 5,
            artistsId: 13,
        },
        {
            eventsId: 1,
            artistsId: 14,
        },
        {
            eventsId: 4,
            artistsId: 14,
        },
        {
            eventsId: 5,
            artistsId: 14,
        },
        {
            eventsId: 1,
            artistsId: 15,
        },
        {
            eventsId: 5,
            artistsId: 15,
        },
    ]
    await models.EventsArtists.bulkCreate(eventsArtistsList)
}
