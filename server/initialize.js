

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
            id: "",
            name: "",
            img: "",
            description: "",
            map: "",
        },
        {
            id: "",
            name: "",
            img: "",
            description: "",
            map: "",
        },
                {
            id: "",
            name: "",
            img: "",
            description: "",
            map: "",
        },
                {
            id: "",
            name: "",
            img: "",
            description: "",
            map: "",
        },
                {
            id: "",
            name: "",
            img: "",
            description: "",
            map: "",
        },
    ]
    await models.Place.bulkCreate(placesList)

    const artistsList = [
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