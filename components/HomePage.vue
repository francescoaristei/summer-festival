<template>
    <body>
        <!--<header id="header">-->
            <!-- Background image -->
             <div id="festival" class="bg-image shadow-2-strong">
                <div class="desc1" > 
                    <p class="font-weight-bold">
                        THE MILAN ARTS EXPERIENCE IS A SENSATIONAL FESTIVAL YOU MUST JOIN! PEOPLE ALL OVER THE WORLD COME TO SEE THE BEST ARTS THE WORLD HAS TO OFFER!
                    </p>
                </div>
            </div>
            <div id="events" class="bg-image shadow-2-strong">
                <div class="desc2" > 
                    <p class="font-weight-bold">
                        THE EVENTS OFFERED BELONG TO ALL THE DIFFERENT ARTS, FROM MUSIC CONCERT, TO OPERA SHOWS, BALLET CLASSES AND SO ON...
                    </p>
                    <br > <u id="link">Find out more about the events!</u> 
                </div>
            </div>
            <div id="places" class="bg-image shadow-2-strong">
                <div class="desc3" >
                    <p class="font-weight-bold">
                        THE EVENTS ARE HELD IN THE MOST SUGGESTIVE AND FASCINATING LOCATIONS MILAN AND VERONA HAVE TO OFFER!
                    </p>
                    <br> <u id="link">Find out more about the places!</u> 
                </div>
            </div>
            <div id="artists" class="bg-image shadow-2-strong">
                <div class="desc4" >
                    <p class="font-weight-bold">
                        THE LIST OF ARTISTS IS ALMOST INFINITE! THE ORGANIZERS WORKED VARY HARD TO REACH THE MOST CREATIVE PEOPLE IN THE WORLD!
                    </p>
                    <br> <u id="link">Find out more about the artists!</u> 
                </div>
            </div>
        <!--</header>-->
    </body>
</template>

<style scoped>

    #festival {
        position: relative;
        color: white;
        width: 100%;
        background-size: cover;
        background-position: center center;
        background-image: url("../assets/festival.jpg");
        height: 100vh;
      }

    #events {
        position: relative;
        color: white;
        width: 100%;
        background-size: cover;
        background-position: center center;
        background-image: url("../assets/all/allEvents.jpg");
        height: 80vh;
      }

    #places {
        position: relative;
        color: white;
        width: 100%;
        background-size: cover;
        background-position: center center;
        background-image: url("../assets/all/allPlaces.jpg");
        height: 80vh;
      }

    #artists {
        position: relative;
        color: white;
        width: 100%;
        background-size: cover;
        background-position: center center;
        background-image: url("../assets/all/allArtists.jpg");
        height: 80vh;
      }

    .desc1{
        width: 30%;
        height: 30%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        margin: 0 auto;
        border: 2px black;
        background: black;
        cursor: pointer;
        display: grid;
        place-content: center;
    }
    .desc2{
        width: 30%;
        height: 30%;
        position: absolute;
        top: 50%;
        left: 25%;
        transform: translateX(-50%) translateY(-50%);
        margin: 0 auto;
        border: 2px black;
        background: black;
        cursor: pointer;
        display: grid;
        place-content: center;
    }
    .desc3{
        width: 30%;
        height: 30%;
        position: absolute;
        top: 50%;
        left: 75%;
        transform: translateX(-50%) translateY(-50%);
        margin: 0 auto;
        border: 2px black;
        background: black;
        cursor: pointer;
        display: grid;
        place-content: center;
    }
    .desc4{
        width: 30%;
        height: 30%;
        position: absolute;
        top: 50%;
        left: 25%;
        transform: translateX(-50%) translateY(-50%);
        margin: 0 auto;
        border: 2px black;
        background: black;
        cursor: pointer;
        display: grid;
        place-content: center;
    }

    .font-weight-bold{
        text-align: center;
        margin: auto 0;
        text-justify: auto;
        font-size: 1.7vw;
    }

    #link{
        text-align: center;
        margin: auto 0;
        text-justify: auto;

    }

</style>