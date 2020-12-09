// Mapbox Interactive Storytelling, adapted from source: https://labs.mapbox.com/education/impact-tools/interactive-storytelling/ 

var config = {
    style: 'mapbox://styles/javimacaya/ckhy9pr8h1lqh19loy3tftcdz', // "The Way of Saint James - The Northern Way" mapbox style
    accessToken: 'pk.eyJ1IjoiamF2aW1hY2F5YSIsImEiOiJja2ZpZndjMDgwOGFyMnBrdXIxbTlhNzhwIn0.dY2Ij8lB1KyP28WBXthpCg',
    showMarkers: false,
    theme: 'dark',
    alignment: 'right',
    logoHeader: 'logo camino santiago.png',
    title: 'The Way of Saint James - The Northern Way',
    subtitle: '',
    byline: 'by Javier Macaya Garcia', // author
    footer: '', // for citations
    chapters: [
        {
            id: 'chapter_1_A',
            title: 'The Way of Saint James',
            image: '/images/chapter-1-overview.jpg',
            description: 'The Way of Saint James (El Camino de Santiago), is a pilgrimage of Medieval Origin to the Cathedral of Santiago de Compostela in Galicia, in the Northwest of Spain. Legend has it that the remains of the Apostle Saint James the Great were buried here and discovered by a shepherd in the 9th century. The city is, in fact, named after the apostle: Santiago de Compostela means Saint James of the Field of Stars. The Way of Saint James has been listed as UNESCO World Heritage for its important role encouraging cultural exchanges between people from all over Europe and the world for many centuries. Today, more than a pilgrimage, the Way of Saint James, is a unique experience and trip of a lifetime and the routes attract thousands of people from all over the world.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [2.305, 40.602],
                zoom: 5.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                 // {
                 //    layer: 'layer-name',
                 //    opacity: 1
                 // }
            ],
            onChapterExit: [
                 // {
                 //     layer: 'layer-name',
                 //     opacity: 0
                 // }
            ]
        },
        {
            id: 'chapter_1_B',
            title: 'The Northern Way',
            image: '/images/chapter-1-B-routes.png',
            description: 'The Way of Saint James is a unique journey, and it is both a cultural and a physical adventure. There are many different routes, all of them taking pilgrims to Santiago de Compostela and all with their own unique history, heritage and charm. Embarking on this walk you will get your pilgrim passport before you begin and collect stamps along the way to receive your Compostela at the end, which is the accreditation of the pilgrimage to the Tomb of Saint James. Among all the routes, The Northern Way is the one explained here. The Northern Way goes along the wonderful Northern coast of ‘Green Spain’ from the Basque Country, across Cantabria, Asturias and on to Santiago de Compostela, in Galicia. Along this coastal route, you will discover fascinating cities and fishing villages, swim in beautiful sandy beaches and taste delicious seafood. The Northern Way is the third most popular route to Santiago de Compostela, according to information gathered by the Pilgrim’s Office in Santiago. It is a great alternative for first-time pilgrims who strive to get away from the crowd while still benefiting from the well-developed service infrastructure along the way. It is the longest route with 829 km in total and 34 stages. All the 34 stages are described here.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [2.305, 40.602],
                zoom: 5.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                 // {
                 //    layer: 'layer-name',
                 //    opacity: 1
                 // }
            ],
            onChapterExit: [
                 // {
                 //     layer: 'layer-name',
                 //     opacity: 0
                 // }
            ]
        },
        {
            id: 'chapter_2',
            title: 'Stage 1: Irún - San Sebastián (24.8 Km)',
            image: '/images/chapter-2-irun-ss.jpg',
            description: 'The first thing that you will do in your way is cross the Puente de Santiago Bridge, it is a bridge that links France and Spain over the Bidasoa River. Once you have crossed the bridge you will have to turn left through the seafront called Real Unión and then you will cross the Calle Ramón Iribarren street to continue then through another one called Santiago. This street will lead you to the Plaza de Juncal square where the Iglesia de Nuestra Señora de Juncal church is located. It was named after the find of a Virgin’s sculpture in a reed bed near the temple in the 15 century.<br><br>Then you will walk through the Calle de las Escuelas street, the Avenida de Navarra avenue and also through an avenue devoted to Christopher Columbus and then you will walk towards the train rails, once you get there you will have to cross them through a flyover towards the Calle de Fuenterrabía street. If you continue straight forward you will get to a roundabout and then you will have to walk under a bridge to turn left a little bit after to get to the national road. You will have to cross to get to an asphalted road among the Marismas de Txingudi marshes that is one of the most important wetlands in Spain. Once you get to an interpretation center you will have to turn left and after crossing some bridges you will have to turn left in the next two crossings to get to a famous neighborhood called Arkolla. There you will find the Ermita de Santiagotxo hermitage that has inside a sculpture of St. James known as Santiago Beltz because the image is black. This sculpture disappeared in the sixties and now in the hermitage you can just see a picture of it. In the next crossing, you will have to go to the left and then get to another path to get to the Santuario de Guadalupe sanctuary, the views from this place are amazing. This sanctuary is from the 16 century and inside it has a Virgin’s sculpture accompanied by some scale boats and also many sea items given by the local fishers.<br><br>Then you will have to walk next to the mountain, you will cross a staircase and then you will have two options, you will continue through the official once, the one that is indicated with the scallop shells and the yellow arrows, to the left. In this route you will border all the mountain and also cross Pasajes de San Juan. Then you will get to the GI-3440 and you will have to continue straight forward. But then you will have to leave it through the left side to get to the Ría de Pasajes estuary. Once you get to the estuary you will find a staircase that you have to cross to get to the left to cross a hostel called Santa Ana, located in Larrabide. To continue you will have to cross the estuary by boat (there is a regular service to cross it) to get to the other side and be able to continue. The first thing that you will visit is the Faro de la Plata lighthouse. After visiting the lighthouse you will have to turn left towards San Sebastián. You will get to the Monte Ilía mount and also to its seafront. Then you will get to a viewpoint where you will see all San Sebastián and also its famous beach: Playa de la Concha. After visiting the viewpoint you will have to go through the Calle Zemoria street. Then you will walk through an avenue called Navarra and then through a seafront in the Plaza de Zurriola beach. You will have to cross a river and you will get to the town hall square and then if you want to visit some other monuments such as the Palacio de Miramar palace.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-1.81769, 43.34310],
                zoom: 11.48,
                pitch: 40.00,
                bearing: -16.46
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_3',
            title: 'Stage 2: San Sebastian - Zarautz (22.2 Km)',
            image: '/images/chapter-3-ss-zarautz.jpg',
            description: 'Today you will leave San Sebastián going through the Monte Igueldo, to get here you just have to go through the Avenida Zumalacarregui avenue and then through the Calle Pamplona street. Once you get to Igualedo’s seafront you will have to walk through it until getting to a turn away that is the entrance to a parking, here you will have to go through a street called Amezti. Then you should continue through Camino de Marabieta. Once you get to a restaurant called Asador Nikolas you will have to turn left through a street called Buztintxurri. After walking through a path you will get walk through an asphalted road until getting to a farmhouse.<br><br>Here you will have to return to the path and get to a fountain, then you will cross a tunnel under the dual carriageway. Once you get out you will have to go to the left to get to the Ermita de San Martín de Tours hermitage, and then you will cross one of the most famous hostels in the Northern Way. Then you will have to cross the Calle Mayor de Osorio Street to get to a church devoted to San Nicolás de Bari. This church is located in the city center so you will find all the needed services. The temple in honor to San Nicolás was built over an old church in the XVII century, whose ruins still can be seen in the interior of the church. Inside the church are many different sculptures.<br><br>After this stop you will walk towards the estuary; you will cross it through a bridge called Zarautz. Now you will walk parallel to the estuary and then you will see the industrial area, where you have to go through a path under the dual carriage A-8. Then you should get to Talaimendi. If you are doing the way in summer stay the night in Zarautz camping is a great idea, from here you will enjoy the wonderful views of the city. Then you will get to the San Pelayo river, you will need to cross it to get to the city center. Zarautz was founded in the 13 century by Ferdinand III of Castile.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-1.99139, 43.30755],
                zoom: 11.48,
                pitch: 40.00,
                bearing: -16.46
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_4',
            title: 'Stage 3: Zarautz - Deba (21.8 Km)',
            image: '/images/chapter-4-zarautz-deba.jpg',
            description: 'You will leave Zarautz towards Getria and here, in the very beginning you will have two options. Your choice will depend on your physical condition. The first option goes on a path near to the sea, parallel to the national road. However, if you find yourself with strengths, you can ascend to Santa Bárbara shrine and enjoy the views. In this case, you must take the road that leads to Meagas, right next to Saint Mary church. Once you get to the road you will have to go through a path that will lead you to the Ermita de Santa María hermitage going through Getaria. This temple is from the 18 century, there were many problems to build it because there was no money, but local fishers made money to conclude the constriction. Then, after getting to this hermitage you will return to Getaria.<br><br>However, if can’t continue because we’re too tired, we can continue the way along the coast. From Zigordia and Orape street, we will go out to the national road looking for the path next to the coast. We’ll walk next to the sea until reaching the lookouts of Ailla and Iteiko, from where we can see the Getaria village.<br><br>You will get to the city where Juan Sebastián Elcano was born. You will get to this city through a passageway known as Katrapona under the Iglesia de San Salvador church and getting this way to the Calle Mayor street through a staircase. This gothic temple is from the 14 century and is a must for all pilgrims. Inside this temple took place some of the most important episodes in the Spanish history such as Juntas Generales de Gipuzkoa at the end of the 14 century. The presbytery is its most remarkable element, due to the unleveled surface on which it is set. At the end of the port, you can see the Monte de San Antón mount, this mount used to be an island until the 15 century; nowadays it is a natural park. The urban area of this village is placed next to the old island. This mount is also known as “mouse” due to its shape, that reminds you to this animal.<br><br>Despite of this village beauty, we should not entertain ourselves for too long as the stage still goes on. From Herrerieta street we must walk through a short but intense slope to San Prudencio’s neighborhood, in Akarregi. From there, we will go on the GI-3392 road for just a few meters and then turn to the left until Aziategi hamlet. We will walk along this path until Saint Martin de Tours de Askizu temple. This temple from the 16th Century has a Gothic style and only one vault. After the temple, we will find a fountain where we can recover ourselves. Leaving Getaria we will find two hostels: Kanpaia, in the old San Prudencio neighborhood, and Agote Aundi walking pass San Martin church. If we choose to go on, we will descend again searching for the national road and Santiago’s shrine, next to the Ignacio Zuloaga museum. He is one of the main Spanish painters of the end of 19th Century. We will go on towards Zumaia. We will arrive to the historical town after crossing Urola river and turning to the right across some gardens that will lead us to another bridge over Narrondo river.<br><br>Among Ángeles Sorazu, Nagusi and Arritokieta streets, we will reach San José de las Carmelitas Descalzas convent, reconverted during summertime in a hostel. We will also find Arritokieta’s shrine. After passing a rest area, we will find Elorriaga, the first neighborhood of Deba. From here, we can go on through the original Way or choose the coast side, parallel to the GR-121 road. If we go one through the road, we will need to ascend and then descend this difficult section towards the N-634 in Mardari’s neighborhood. Through this road we will find some slopes that will test pilgrims strength. When arriving to Itziar we will probably need to stop, so we can visit its church dedicated to Saint Mary, which was built over an old Romanesque temple. Again, we will have no problem finding services in this village. We are now very close to Deba, which we will reach after descending to San Roque shrine. We go on through Mogel street to find the local hostel: we can only spend the night here after going to the Tourist Office. This village is beautiful due to its beach and boardwalk.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-2.18673, 43.27313],
                zoom: 11.48,
                pitch: 40.00,
                bearing: 15.26
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_5',
            title: 'Stage 4: Deba - Markina (24 Km)',
            image: '/images/chapter-5-deba-markina.jpg',
            description: 'You will leave Deba crossing the estuary to get to a road that will lead you to Mutriku. Cyclists will go through all the stage, the other pilgrims should turn left a little bit to get to a path you will have to walk up for approximately one kilometer, but you will be surrounded by the forest and you will enjoy the wonderful landscape. You will cross the Ermita del Calvario hermitage. You will find a fountain where you can rest for a while before continuing.<br><br>Once you return to the asphalted road you will cross a grillroom in the GI-3330 and then returning to a rural path. You will cross again the road to get to the asphalted road that will lead you to Olatz, in Murtriku. You will cross a small hermitage devoted to San Isidro, after this, you will walk through an asphalted road. Once you get to a crossing you will have to continue straight forward and then go to the left in the next one to get to a path. You will see a stream called Anu and you will start to walk up, crossing a farmhouse and also getting the Collado de Arnoate hill that is located in Bizkaia. Once you get to a fountain where you can have some water and rest for a while, you will have to turn right to walk up again.<br><br>You will walk now near some farmhouses (Sakoneta, Arzorinzabal and Amulategui) and once you get to the last one you will have to turn left to walk up through the hardest path in today’s stage. you will start descending seeing the Calle de Artibai valley, Then you will get to the field, but before you will walk through a neighborhood called Arretxinaga very known due to its Ermita de San Miguel hermitage. It is a temple from the 18 century but built over another temple with more than four centuries. It is located in the valley’s heart. Its construction is remarkable, being composed by stones and three big rocks laying one in each other, creating some sort of chapel. In the middle of the hermitage, you will see a sculpture of Archangel San Miguel protected by three monoliths of at least forty million years old. Near this hermitage you will find a house that has a tower called Torre de Barrotea, from the 16 century, this house belongs to a famous local family We have to highlight that here took place many important things such as the birth of Fabiola of Belgium.<br><br>Then you will walk towards the Urko river and you will have to cross it two times to get to the Avenida de Arretxinaga avenue. Then you will have to turn left through the Calle de Artibai street and then to the left through the Calle de Osteko street. You will get to a hostel called Padre Carmelitas that is the end of this wonderful stage. Markina/Xemein is also called “the pelota’s university” as many of the best pelota vasca players of the world came from here.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-2.36252, 43.28815],
                zoom: 11.70,
                pitch: 40.00,
                bearing: -14.36
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_6',
            title: 'Stage 5: Markina - Gernika (24.6 Km)',
            image: '/images/chapter-6-markina-gernika.jpg',
            description: 'You will leave Markina to get to the BI-633, through the Avenida Erdotza avenue, after having crossed the Artibai river. You will get to the Ermita de Nuestra Señora de Erdotza hermitage and then you will leave the road to go to the left. The way will lead you to the riverside, and you will walk next to it to get to Kareaga bridge, after crossing this bridge you will have to turn left and walk through a path towards Irtuzubieta. Once you get to this village you can have breakfast in any of its cafeterias, the yellow arrows will lead you to the road, to the BI-2224 and then you will leave it at a restaurant. You will walk now among fields, farmhouses small neighborhoods such as Altzaga and Arta, this last one belongs to Ziorta Bolivar. You will have to leave the path among pine trees to get to the asphalted road that is famous because Símon Bolívar’s grandfather was born here, his name was Bolívar “el Viejo”. The way goes through the town hall and also see a museum devoted to him. Moreover, you can visit the Iglesia de Santo Tomás church, from the 10 century. Two kilometers from the old city you will find a medieval road that will lead you to the Colegiata de Cenarruza collegiate church that belongs to Orden de la Estrecha Observancia. Places strategically in the Saint James Way, it was very important centuries ago, specially with the increasing of pilgrimages to Santiago during the 14th Century. This architectural complex was declared of Cultural Interest. It is formed by a temple with one of the oldest organs of the province. Besides, it is known by its Renaissance cloister and its gates, oriented towards East and West. It is worth it to stop and visit this place to admire all its beauty and read the inscription that tells about the story of that place.<br><br>You will continue through the forest to get to Alto de Gontzagarinaga. Once you get here you will leave the road to go to the left towards a neighborhood called Uriona where you will find the Leona river. After this part you will return to the road that will lead you to Gerrikaitz, where you will see the Iglesia de Santa María church; then you will have to cross the Lea river to get to Munitibar, a small village where you can rest for a while and also buy some food or water. The you will have to get to Aldaka and to see the Ermita de Santiago hermitage, a key point in the way’s history because lots of pilgrims used to rest here. Then you will continue through an asphalted road and you will have to turn right and then to the left. Once you get to a farmhouse you will have to go to the right to go through a path to the right near the Golako river, then you will cross it in Berriondo. Then you will return to the road and you will get to Zarra, that belongs to Olabe. A little bit after you will see an arrow that will indicate you where the hostel is located. If you want to continue you will have to turn right and leave the asphalt and going through the Ermitas de San Pedro and San Cristóbal hermitages. If you continue through the original way you won’t see the Torre de Montalbán tower, but you will find a path that will lead you there if you want to visit it. This building, specifically made for defense, is placed in a privileged position at the top of the mount so the rest of land could be controlled from there. Currently, it is quite abandoned however. Then you will have to cross a bridge over the Gola river Then you will get to a neighborhood called Elexalde and also to a church devoted to Santo Tomás. You will also go through Marmiz, you will get to the Monte Burgonaga mount. Before getting to Gernika you will have to go through Ajangiz where you can visit its church. It is remarkable due to Asunción church, with a neoclassical style and a basilica style. We are near our goal: we will reach the end through the road. Then you will have to walk through some streets to get to the hostel, the end of today’s stage. We cannot leave Guernika without visiting Saint Mary’s church, one of the best examples ofthe Basque gothic style,and its famous oak, placed in Juntas House and symbolizing the Biscay freedom.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-2.51861, 43.26025],
                zoom: 11.45,
                pitch: 40.00,
                bearing: 27.20
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_7',
            title: 'Stage 6: Gernika - Lezama (20.8 Km)',
            image: '/images/chapter-7-gernika-lezama.jpg',
            description: 'If you start this stage in Gernika’s city centre, next to the Iglesia de Santa María church you will have to go towards the Calle Allende Salazar street and then turn tight through Santa Clara to get to Casa de Juntas. You will have to cross the square to cross a school and then turn left through Zerreata and Mestikabaso Once you have crossed the last street you will have to turn right through a neighborhood called Zallo: this neighborhood has a hermitage devoted to Santa Lucía. Then you will get to a stream called Mikene, but first you will have to get to the Monte Bilikario mount. You will see all the needed indications in the crossings. After a hard part you will get to Pozueta. Then you will see some farmhouses such as in the other stages, and then you will get to Muxika. After going through an underpass you will see an indication that will show you where the hostel is located. You will continue through a road that will lead you to Eskerika, but before you will see the Ermita de San Esteban de Gerekiz hermitage. It is one of the oldest churches in Biscay. You will have to continue on the same road, once you get to a farmhouse you will have to go to the right and continue through a path, cyclists should continue through the road. After a little walk up you will have to turn right to get again to the road, you will see the indications to get to the hostel located in Eskerika.<br><br>Now you will have to walk through the hard shoulder of the BI-2713 towards Goikpelexalde and Larrabetzu. You won’t leave the asphalted road until you get to Astokera, where you will get into a path. Here you will see a stream called Zugasti and then you will get to Goikoelexalde and also to its church devoted to San Emeterio and San Celedonio. It is a gothic temple from the 16 century. Next to the church you will see a stone cross also from the 16 century that indicates that there are two different ways: Aretxabalgane that goes through an ascending path and Goikoelexalde. You will return to the road to continue to Larrabetzu that is just before Lezama, the end of today’s stage.<br><br>In this last village you can visit its Iglesia de Santa María church and then turn right through the road to Lezama. This temple is also from the 16 century but in this case is gothic and Baroque.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-2.70036, 43.30478],
                zoom: 11.81,
                pitch: 40.00,
                bearing: -19.20
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_8',
            title: 'Stage 7: Lezama - Bilbao (10.8 Km)',
            image: '/images/chapter-8-lezama-bilbao.jpg',
            description: 'You will leave Lezama through the BI-637 and you will get to a neighborhood called La Cruz and then to Zamudio. Then you will get to the Iglesia de San Martín church located in Arteaga. After crossing it you will have to turn left to see the Torre de los Marqueses de Malpica tower also known as Torre de Zamudio because is the place where is located; this tower is from the 15 century and was ordered by Malpica marquess. You will continue and you will cross Pinoa industrial area and also the national road 637 through a bridge; then you will have to turn right to leave the industrial area for a while and get to a forest full of trees. Then you will get to an asphalted road that gets into San Antolín and after crossing this neighborhood you will return to the national road.<br><br>Your way to get to the Monte Avril mount continues now through a path that is the same path that the old Sendero Real that started in Bermeo. Your way to get to the Monte Avril mount continues now through a path that is the same path that the old Sendero Real that started in Bermeo. You will see all Bilbao, a city that you will reach after descending the mount. After crossing again the road through a flyover you will get to Begoña where you will find a church devoted to Virgen de Begoña. In the 16 century this temple was partially destroyed and many things where stolen, it was rebuilt many times. If you continue straight forward you will get to a street called Andra Mari and after crossing another one called Mallona you will cross the Plaza Miguel de Unamuno square. This is a very crowded area due to the important points of interest of the surroundings, such as the archaeological and historical museum, Miguel de Unamuno’s monument and its proximity to Bilbao’s Nueva Square. There always a lot of people here because there are located the most part of the interesting places to see and visit. As its name says, Apostle Santiago is the saint patron of this big city.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-2.85042, 43.28141],
                zoom: 12.42,
                pitch: 40.00,
                bearing: -19.20
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_9',
            title: 'Stage 8: Bilbao - Portugalete (19.4 Km)',
            image: '/images/chapter-9-bilbao-portugalete.jpg',
            description: 'This stage starts next to the Catedral de Santiago cathedral, then you will have to go through the Calle de la Tendería street that is considered one of the first streets in the city. You will get to Calle de la Ribera Street where you will walk next to the river. Then you will have to turn left to see the Iglesia de San Antón church, where you will cross the Nervión River through one of the oldest bridges in town. After crossing it you will have to turn right through the Calle Bilbao la Vieja Street and also San Francisco Street to get to the Plaza de Zabalbúr square. After crossing a street called Autonomía you will get to a neighborhood called Basurto. Once you get here you will have many different alternatives to continue your way:<br><br>- A little bit after you will get again to the national road 634 and you will have to ascend a little bit. You will walk through a path called Kobetas to get to a mountain with the same name where you will say goodbye to Bilbao once you start to descend. You will have to be careful and pay attention to see all the indications because while you are descending you will see many of them. The first one that you will see will indicate you to go to the left and will lead you to a curve and also to the national road a little bit after. You will have to cross a tunnel under the dual carriageway to get to a road that links Basurto and Castrexana. You will have to turn left again to get to a crossing where you can go through Las Delicias or through the Puente del Diablo bridge. You will leave the asphalted road to cross the train rails and then you will get to the Ermita de Santa Águeda hermitage. This hermitage is from the 16 century. You will continue your way through a forest called Larrazabal to get to a neighborhood called Cruces where you can stop to rest for a while and also buy some things. Once you get to a roundabout you will have through the Calle La Paz Street. Once you get to a tunnel you will have to cross it and then turn left to go through a street called Amerzaga and then cross the national road through an underpass. Now you are in Barakaldo, in a place called Sagrado Corazón. Then you will get to a street called Euskadi and in the next roundabout, you will have to turn left to get to the Avenida de la Ribera avenue. Then you will have to go through a staircase in getting to the Galindo river; you will have to cross it. Then you will walk through Gran Vía and get to a neighborhood called Kueto, you will have to cross Sesao’s city hall. Then you will have to turn right through Aizpuru street and get again to the Nervión river, you will cross it through a bridge from the 19th century built by a disciple of Gustave Eiffel. After crossing this wonderful bridge you will walk through the Calle de Sotera de la Mier street to get to the Iglesia de Santa María de Portugalete church that was built in the 14 century. Inside it has some chapels and a museum.<br><br>- Once you get to Basurto you can go through the left side of the estuary. You will cross some neighborhoods before getting to Portugalete. This alternative has good indications.<br><br>- You can also walk through the right side of the estuary from the Puente de Euskalduna bridge that will lead you to the hostel.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-2.93256, 43.27154],
                zoom: 12.10,
                pitch: 40.00,
                bearing: 22.74
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_10',
            title: 'Stage 9: Portugalete - Castro Urdiales (27.6 Km)',
            image: '/images/chapter-10-portugalete-castro-urdiales.jpg',
            description: 'You will start this stage in the Iglesia de Santa María church. And then you will continue through some streets such as Sotier de la Mier, Gregorio Uzquiano and the Avenida Carlos VII where you will get to a bike lane that you will have to follow until you get to Pobeña. After crossing the dual carriageway you will return to the bike lane, where a little bit after you will see how much kilometers are left to get to the Playa de la Arena beach, 10 kilometers. You will continue through the asphalted road accompanied by the Montes Serantes mountain, on top of it you will see a fortress built by Fernando V during the War of the Spanish Succession; then you will get to a neighborhood called Gallarta. You will get to a museum devoted to the mining industry that shows that all this area used to be a place was an extraction area, especially iron. A little bit after you will have to cross again the dual carriageway through an underpass, leaving the bike lane for a while.<br><br>Finally, you will get to the Playa de la Arena beach and then to Pobeña where you should continue through the left side of the road, cross a picnic area and get to the Ermita de Nuestra Señora del Socorro hermitage. This temple is from the 18 century, Capitan Padro de Llano promised to build it if he survives to a storm while he was traveling from Havana to A Coruña. There are lots of pilgrims that decide to stay the night here in the hostel (just open in summer) or in another kind of accommodation. If you decide to continue to Castro Urdiales you have to know that there are approximately 23 kilometers left. To continue you will have to go through the staircase to get to the train rails that used to be used to carry the iron to other cities in Europe. Then you have to be careful and pay attention: cyclists should go to the left and walking pilgrims should do through the right. You will see a picnic area and also a parking and you will have to continue on a path towards El Hoyo. You are now in Cantabria, you will get here through a tunnel called Piquillo that is a dual carriageway’s underpass. After crossing this tunnel you will have to turn right to go towards the Sabiote river, where you will have to go to the left to get to Ontón. On your way you will go through Baltezana and Otañes, that is the official route (a little bit longer than the alternative one): now you just have to continue through the national road and after going through a staircase you will get to Castro Urdiales, just after 10 kilometers. If you continue through the original way you should add 7 kilometers more. The Original way goes on a road to get to the Sabiote river that will lead you to Baltezana.<br><br>After leaving this village you will also leave the road to go through a path that will take you to the river and then again to the CA-523. A little bit after you will leave the asphalted road to get to a path cyclists should continue through the road, you will get together in Alto de la Helguera, then you will have to descend through the slope. You will go through Otañes, a village famous due to its mounts. After some kilometres you will have to walk through a path called Castro-Traslaviña that used to be a train rail that linked Castro Urdiales and Traslaviña. You will go through Otañes, a village famous due to its mounts. The next neighbourhood that you will cross is Los Corrales, just before getting to Santullán and turn left to get again to the road. Then you will go through the Iglesia de San Julián church. Parallel to the temple you will find a street that get again to the road, where you will have to turn left to get again to the Suma river. Finally you will get to Sámano a village that belongs to Castro Urdiales famous because here is located a cave called Juan Gómez. During the 70s, some figures from the Paleolithic Age were found in this archaeological site There is also a fort or “castro” declared of Cultural Interest. After crossing the Iglesia de San Nicolás church you will have to turn right to Llantada, where you will cross again the river and also a neighbourhood. Always following the CA-520 to get to Castro Urdiales. You will have to cross an underpass and some roundabouts. Once you get to a petrol station you will have to turn left and then cross the river again to continue through the fluvial path called Ocharan Mazas. You will get to the port and to the Iglesia de Santa María de la Asunción church a gothic temple from the 13 century near the sea. Unfortunately, it suffers from the so called “stone disease”, and the stone of its construction is already turning into sand. Inside there are some wonderful paintings and sculptures. The local hostel is approximately located one kilometer and a half from the city centre.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-3.04904, 43.33401],
                zoom: 11.31,
                pitch: 40.00,
                bearing: 19.54
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_11',
            title: 'Stage 10: Castro Urdiales - Laredo (26.6 Km)',
            image: '/images/chapter-11-castro-urdiales-laredo.jpg',
            description: 'You will say goodbye to Castro Urdiales going through the Iglesia de Santa María de la Asunción church next to the Cantabrian Sea. Then you will walk through some streets such as Arturo Dúo Vidal and Silvestre Ochoa to get to the national road, where you have to turn right to get to Campijo. Once you get there you have to turn left towards a camping and then cross the dual carriageway through an underpass and then turn right. In the next crossing, you will have to turn left again to get to Allendelagua. In this village that belongs to Castro Urdiales has the remains of a Medieval Tower from the 14 century. If you continue you will go through the Templo de San Marcos church and you will get near the dual carriageway, walking through a parallel path to get to Cerdigo. To get to the city center you will have to cross the A-8 and then the N-634. Then you will walk through an asphalted road and also through a path that will take you to the cost line in Islares. The way goes through the Calle Casal street but if you want to buy something you will have to get to the national road. Then you will cross a camping and then walk through the road’s hard shoulder. You will have to get to the Agüera river. After crossing an underpass you will have two options: the first one continues through the hard shoulder going through Mollaneda and after crossing Iesca Vieja return to the original route.<br><br>The traditional route goes through an upwards path that starts just after the viaduct. This way will lead you to Nocina, where you will find a hostel. If you continue through the CA-151 you will go through Rioseco where the Iglesia de San Vicente de la Maza church is located; this church is from the 16 century. Once you get to Rioseco you will have to turn left and go through Pomar and cross its stream. After crossing it you will have to continue through a path in the right side that will lead you to a neighborhood; you will cross the Ermita de San Lorenzo hermitage and also the Hermita de San Blas hermitage, in Revilla.<br><br>You will walk again through the road to get to a roundabout near El Puente, where you will find all kind of services. The way continues through La Magdalena, you will cross a river with the same name to get to a church. You will walk next to lots of pine trees through a path called Camino de Liendo. Then you will get again to the dual carriageway you will have to cross it through an underpass and then you will get to Rocillo, Sopeña, and Hazas that could be the end of the stage if you want. If you want to continue you will have to get to the N-634 and then you will get to Terrauseza. We want you to know that after that, you will need to go back to the national road to continue until Laredo. If we go on by the road, we will need to diverse forward to the right via La Arenosa, until we reach La Torre viewpoint, a perfect spot to take some pictures and rest for a little.<br><br>You are close to Laredo, once you get to a stone cross you will have to go through the left side and continue through a staircase. Then you will get to the Capilla del Espíritu Santo chapel. The hostel is near. Through this street we will reach our hostel, putting an end on today’s stage.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-3.26019, 43.37502],
                zoom: 11.37,
                pitch: 40.00,
                bearing: 19.54
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_12',
            title: 'Stage 11: Laredo - Güemes (29 Km)',
            image: '/images/chapter-12-laredo-guemes.jpg',
            description: 'This stage start in the Plaza de la Constitución square, near the Convento de San Francisco convent where the city council is housed. You will have to go through the Calle López Saña street to get to the seafront where you can rest for a while. This beach has approximately four kilometers and has a port in one of its sides. In summer the best option will be cross the estuary by boat, this service is available from March to December so if you are traveling in winter you will have to travel by bus or go walking through an alternative route that goes through Colindres. After crossing the estuary you will have to cross the city; first through the Plaza de la Concordia square and then you will go through the Calle de Santander street, always straightforward.<br><br>Once you get to the Plaza de San Antón square you will have to go through the Calle del Manzanedo street, and then straight to get to La Alameda, near the Playa de Berria beach. In ancient times, Santoña was practically an island, but little by little it became an isthmus. This is considered a natural space of great importance due to the existence of a broad sea fauna and migrating birds from North and Middle Europe. Continuing through the beach you will get to El Brusco that divides Berria and Trengandín, it belongs to Noja. You will get to it through the Plaza de la Villa square, where the Iglesia de San Pedro is located. This temple has a big gothic tower and also a chapel. Then you will walk through the Calle de Los Cuadrillos street. Then you will have to turn left and then right through El Valle. Then, again to the left and once you have crossed a soccer field you will get too Cabanzo After some crossings, you will get to the CA-147. You will continue and cross some streets. Finally get to the Ermita de San Pantaleón hermitage and then you will go through La Pedrosa and El Castillo that has a church devoted to San Pedro with a tower.<br><br>Here you will meet again the other pilgrims, the ones that decided to go through the alternative route. Just after the church, you will have to go to the right through Monar, near Meruelo. Then you will cross the Iglesia de San Miguel church and then continue again through the road. Once you get to Solorga You will have to cross the river and then get to Bareyo. You will see the Ermita de San Roque hermitage; then, the Iglesia de Santa María de Bareyo church that is from the 12 or 13 century. The Way goes on to the left side, but if we follow the opposite direction, we will find the Saint Mary of Bareyo Romanesque church, of Cultural Interest. Despite of lacking a concrete date of origin, it is estimated that this could be set by the end of the 12th Century and beginning of the 13th. Its apse, presbytery, cross and structure over the dome are original, allowing the light to enter the temple. After this short diversion, we will go back towards the upward road to the camping, where we will finally start descending. We will go across Villanueva, in Güemes, to continue by Moraza’s way and cross the road to the right. After some small villages you will get to the end of the stage, Güemes.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-3.45560, 43.41710],
                zoom: 11.30,
                pitch: 40.00,
                bearing: 17.94
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_13',
            title: 'Stage 12: Güemes - Santander (11.8 Km)',
            image: '/images/chapter-13-guemes-santander.jpg',
            description: 'Firstly you will walk through the CA-444 towards Gargollo where you will have to get to the CA-443 up to Linderrio. A little bit after, you will return to the road to get to Galizano, a place where you will find all kind of services and where you can visit the Iglesia de Nuestra Señora de la Asunción church from the 16 century. If you want to get to Santander as soon as possible this is the best option; going through the coastline towards Loredo. Here, in this village, is where you have to choose the way that you are going to follow:<br><br>- If you want to get to Santander as soon as possible this is the best option; going through the coastline towards Loredo. You will have to go to the right towards the beach and once you get there you will walk parallel to the sea until getting to San Miguel. Then you will have to cross a stream and continue. You will get to a viewpoint from where you will see two beaches: Arnillas and Langre, both of them are amazing. A little bit after you will have to continue through a neighborhood; once you get to the end of the street you will have to turn right and continue through the left, from here you will see two beaches: Tranquilos and Boo. You are now close to Somo. Then you will have to get into a boat to get to La Pereda where you will continue through the seafront and then through the Calle Calvo Sotelo street. The hostel is located in Rúa Mayor, close to the city hall.<br><br>- The second option is the shortest. It goes from Güemes through Galizano, Somo and finally gets to Santander. There are approximately 20 kilometers. From the Iglesia de la Asunción church you will return to the road CA-141, going through it until getting tot Loredo for one kilometer and a half. Once you get there you will see the Santuario de Santa María de las Lastas sanctuary that was built over a monastery from the 8 century. Inside it has many wonderful sculptures and altarpieces. Then you will have to get to Somo’s jetty, you will have to cross some neighborhoods to get there and then, you will have to cross a bridge to get to Pedreña. Once you get here you can take a boat to get to Santander.<br><br>- The last options is get to Loredo and then walk to the South, to Castanedo. Once you get here you will get to Horna before getting to Villaverde de Pontones and then to Fuente del Francés, near the Aguanaz river. After three kilometers you will get to Solares, where you will find the Miera river, here you will have to cross the industrial area called Bosque. This optional way gets to Heras, near a street called Cubón. You will also cross a natural park called Macizo de Peña Cabarga, where you will find lots of different trees. Moreover, it is also believed that it used to be mined here in the 18 century and also in the 19 century. Cavada’s blast furnaces were active for more than two centuries, generating weapons and ammunition for the Spanish Empire, even attracting many specialists and workers from Europe, specially Flanders. Once you get to Socabarga you just have to walk 2 kilometers more and cross the Solía river to get to Astillero, where lots of pilgrims decide to stay the night, dividing this stage into two. After spending the night, the best option is to go on towards Santander, but you can also avoid this city by connecting with the main route in Arce bridge. Then you will get to Santander a city that has lots of things to see and to visit.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-3.66846, 43.44671],
                zoom: 11.70,
                pitch: 40.00,
                bearing: 8.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_14',
            title: 'Stage 13: Santander - Santillana del Mar (37 Km)',
            image: '/images/chapter-14-santander-santillana-mar.jpg',
            description: 'You will have to get to Pereda first that is one of the oldest streets in all the city, near the Cantabrian Sea. Then you will have to cross a square called Cuatro Caminos, the Avenida de Valdecilla avenue and the Calle Cajo street to get to Campogiro and Castro. You will have to cross through a bridge over the train rails to continue through the left, through a path parallel to rails for a while. Before getting to Santa Cruz de Bezana you will have to go through Lluja and cross a tunnel to get to the Avenida José María de Pereda avenue. The next village that you will visit is Mompía that belongs to Santa Cruz de Bezana where you can see a Casa Indiana on the main avenue. You will have to continue on the road, cross a bridge and continue through the CA-304 towards Bojar. Once you get to this village you will leave the asphalt to get into a path to get again to the train rails. Thanks to an underpass you will get to Boo de Piélagos. It used to be a boat to cross the river to Miengo, and nowadays you have the option of crossing the train rails but we don’t recommend it to you, the best option is to go through Puente Arce. Another option is to take the train to Boo and get tot Mogro. The other option is getting to Puente Arce, going through an underpass, cross a neighborhood called Mina. Once you get to Arce you will have to continue through the national road that will lead you to Monseñor and also to a bridge to cross the Pas river.<br><br>Once you get to Oruña you will have to continue through the road towards Mogro, where you will visit its Santuario de la Virgen del Monte sanctuary. This hermitage is located on a hill and it was built devoted to the Virgin. You will get tot Mogro, a wonderful place where you will enjoy its landscape. You will also see the Iglesia de San Martín church that was built in the 16 century in the highest part of the village. Once you get to the road you will have to turn left and go through Bárcena de Cudón. Then you have to go to the right and go through a path that will lead you to Carriazo, once you get there you just have to cross the road and continue through the left to Cudón. Then you will have to cross again the train rails to get tot Requejada in Polanco. You will have to go through the national road to Santillana del Mar, but before you will have to cross Barreda where you will have to cross the river again. Before getting to your final destination you will have to go through the CA-132 towards Suances and a little bit after going to the left through Camplengo, you will continue to get to the hostel There are lots of pilgrims that decide to conclude here their stage. After leaving Camplengo you have to get tot Fontanilla and go through the Colegiata de Santa Juliana collegiate church. It is a monument from the 12 century and before it used to be a monastery. Currently, there are not any remains of the old monastery, but there is an altarpiece from the 15 century. You will get to the city centre to the Plaza de Ramón Pelayo square where the city hall is located.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-3.84785, 43.43508],
                zoom: 10.90,
                pitch: 40.00,
                bearing: -13.60
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_15',
            title: 'Stage 14: Santillana del Mar - Comillas (22 Km)',
            image: '/images/chapter-15-santillana-mar-comillas.jpg',
            description: 'If you have stayed the night in Queveda you will continue this fourteenth stage to Santillana del Mar or Comillas. If you start in Queveda you will have to walk towards Camplengo going through Fontanilla and also crossing the Colegiata de Santa Juliana collegiate church. Once you get here you will have to cross the Plaza de Ramón Pelayo square. This is where pilgrims that start in Santillana del Mar and pilgrims that stayed the night in Queveda meet. You will have to leave Santillana del Mar through the Calle de Los Hornos street and then continue through Tejera to get to the camping. From here you will have amazing views. Then you will get tot Oreña through Cuesta del Bosco. Once you get tot Alfoz de Lloredo you will see a church devoted to San Pedro that was rebuilt many times since the 18 century. Then you will get tot Caborredondo a wonderful place where there are some holiday cottages and restaurants where you can taste the typical gastronomy. After 4 kilometers more you will get to Caborredondo walking near the CA-131. Once you have crossed the first-holiday cottage you will have to turn right and leave the road to get to a rural path that will lead you to Cigüenza. Here you can visit it Baroque church devoted to San Martín de Tours built in the 18 century. It is a wonderful temple. Then you will continue to Novales also known as El Pueblo de Los Limones (the lemons village).<br><br>Its name is due to its emplacement, on a valley surrounded by mountains. This creates a climate good for this type of Mediterranean fruits. Here you will find a cave called La Cueva de Las Aguas that has cave paintings. To get to this village you will have to take a turn away from the left and go through a path to find the CA-356. After visiting Novales you have to return to the road and walk to Cóbreles and see its church devoted to San Pedro. It is a gothic temple from the 19 century paid by Pedro José de Villegas Ruiz. You will also see the Abadía de Santa María de Viaceli abbey located in Alfoz de Lloredo Originally, it was an abbey but today it is a Trappist monastery dedicated to Saint Mary Viaceli. Next to it you will find a church paid by two brothers called Quirós Pomar. After visiting this monument you will get to a path full of oak trees that will lead you to the CA-131 just after Venta del Tramalón. You will continue combining the asphalted road with some paths to get to a village called La Iglesia. After crossing this village you will return to the road and then you will cross a stream before getting to Pando where you can visit the Iglesia de San Roque church both belong to Ruiloba. In this village you can also visit its hermitage and the Monasterio de San José monastery from the 18 century. Currently, it is inhabited by a group of nuns who work with porcelain. You are now close to Comillas where lots of pilgrims decide to conclude their stage, especially those that come from Queveda.<br><br>If you want you can continue to San Vicente de la Barquera. To continue the way you will have to walk through a street called Solatorre towards San Vicente. You will be walking through a path parallel to the CA-131and you will see the Palacio de Sobrellano palace while going through a bike lane. This wonderful building if from the 19 century; inside it has some furniture designed by Antonio Gaudí. It belongs to the Cantabrian government and is nowadays a museum. You will go through the Puente de la Rabia bridge that goes over the estuary. You are now in the Parque Natural de Oyambre natural park. This wonderful landscape belongs to San Vicente de la Barquera. It has lots of wild animals, plants and trees. It is located among two estuaries and Picos de Europa mountain pass. Here you will find lots of beaches. Through an asphalted road you will get to Santa María del Tejo. This small village was created around a monastery from the 12 century. Once you return to the CA-363 you will get to de village centre that is surrounded by a golf course. Once you return to the CA-363 you will get to de village centre that is surrounded by a golf course. Then you will get to a stream and then to a chapel. Before concluding this stage you will have to go through La Revilla a village that belongs to San Vicente de la Barquera. If you follow the yellow arrows you will get to the N-634 in San Andrés. A little bit after you will have to go through a path across the Puente de la Maza bridge to get to your final destination.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-4.14497, 43.39724],
                zoom: 11.00,
                pitch: 40.00,
                bearing: -13.60 
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_16',
            title: 'Stage 15: Comillas - Colombres (28.8 Km)',
            image: '/images/chapter-16-comillas-colombres.jpg',
            description: 'The Itinerary from Comillas to San Vicente de la Barquera is explained in stage number 14 so we will start in San Vicente de la Barquera. The next village that you will visit is La Acebosa. Before getting here you will have to go over the dual carriageway to cross the train rails. You will see the Capilla de Lazareto chapel that used to be a leprous’ hospital in the 14 century. The chapel next to the hospital just has the walls and the door; it is considered one of the first gothic monuments in Cantabria. During the last years a few paintings in the main building were discovered, with a great historical value. Then you will have to get to the CA-843 to get to Hortigal and A Estrada, both belong to Val de San Vicente. In this small village we will find a tower declared of Cultural Interest. This tower is the only medieval tower in the community. You will have to continue through the way that the yellow arrows will indicate you. This time they will lead you to Serdio, a village that has a hostel. Then you will have to go to the right and cross the train rails to get to the Nansa’s river estuary. A little bit after you will have to get to the N-634 and the go through a path in the forest, leaving the asphalted road for a while. You are now in Unquera a village near to Asturias but that belongs to Cantabria, near the Deba river. This village is famous due to a pastry called corbatas de Unquera, they are made with puff pastry. You can stay the night here especially if you have stayed the night in Comillas. If you have started in San Vicente de la Barquera and you are not tired you can continue to Llanes, to get to this village you will have to walk 25 kilometers more.<br><br>From Unquera you will have to cross Tina Mayor estuary, where the Deba river concludes. It is the natural frontier between Asturias and Cantabria. Asturias is famous worldwide due to its cider. Now you are in Colombres. After saying goodbye to Cantabria and cross a small chapel you will get to this village. Here you will find some lovely houses such as La Solana, villa de las Palmeras, Villa Ignacia and La Quinta de Guadalupe.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-4.44816, 43.36450],
                zoom: 10.83,
                pitch: 40.00,
                bearing: 2.34  
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_17',
            title: 'Stage 16: Colombres - Llanes (23.2 Km)',
            image: '/images/chapter-17-colombres-llanes.jpg ',
            description: 'You will leave Colombres through Pío Noriega and Francisco Sánchez streets to get to the national road. Then you will have to continue on the road being very careful with the traffic and always wearing reflective clothes if you are travelling at night or if it rains. You will go through Peral and La Franca, this village has a small beach that when the tide falls connects with the other beaches: El Oso, El Viveru, and Rogorgueru. Moreover you will find there a camping called Playa de la Franca that offers many services to pilgrims. You will continue towards Tresgrandas leaving the N-634 and getting to a path near the train rails. You will have to continue straight forward and then cross a bridge and return to the road a little bit after. Here you won’t find any kind of service. So if you need to buy something you will have to change a little bit your route. Once you get here you can decide to go through Buelna or Peldunes or go through Andrín. If you want to follow this way you will have to follow the red and white marks that indicate a parallel path a little bit longer than the original one. So from now you have two options: continue through the established route or continue through the GR-E-9.<br><br>- If you continue through the original way, you will have to return to the N-634 and walk through it for two kilometres more to get to Vidiago. Once you get there you will have to cross Puerta de Vidiago and San Roque del Acebal before getting to Llanes. All these villages have the needed services. From Vidiago to Llanere there are approximately 10 kilometers.<br><br>- The other option is to go through the GR-E-9 a coastal path that links Ribadedeva and Llanes. To get to this path you will have to cross the camping called Vidiago and going through the famous Bufones de Arenillas. A bufón is a typical natural formation of coastal areas. They are usually placed near cliffs, forming some kind of chimney between them, where water spreads out under pressure, reaching around twenty meters high. In order to see them, the tide needs to be high and the sea brave, so waves can crash on the surface cracks and the water rise, making a particular whistle noise. Then the path will lead you to the Purón river and then you will have to descend through a bridge that will lead you to Andarín. A pedestrian promenade will lead you to another viewpoint, one located over the Playa de la Bella beach. You will leave the asphalted road to get to a path that will lead you to the Ermita de del Cristo del Camino and where you will enjoy the lovely views of Cue and Llenes both located in the Cantabrian sea. his hermitage from the 16 century is located among some hills, in the only way to get to Llanes in the past. The last things that you have to do is get to Llanes a city full of heritage.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-4.44816, 43.36450],
                zoom: 10.83,
                pitch: 40.00,
                bearing: 2.34  
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_18',
            title: 'Stage 17: Llanes - Ribadesella (31.4 Km)',
            image: '/images/chapter-18-llanes-ribadesella.jpg',
            description: 'If you start your way in Llanes you will walk near the national road towards Ribadesella firstly going through Poo and its church. Once you get to the train rails you will have to cross them and get again to the road. A little bit after you will have to go through a path to Celorio. In this village you will find the remains of an old monastery called Monasterio de San Salvador, from the 11 century; nowadays it is the local church. Then you will get again to the coast and you will walk through Barro and Niembro, both of them belong to Llanes. In the first village, you will find the Iglesia de Nuestra Señora de Los Dolores church. This temple is from the 18 century and was where many directors decide to film their movies, especially in the 80’s. Then you will have to go through a path in the left from the temple to Niembro. You will leave the path soon to get again to the road and other small paths. You will see again the sea and walk near the Playa de San antolín beach that is located near the mountains.<br><br>The next village will be Naves, and then Villahormes and finally Nueva de Llanes where you can eat something and buy all the necessary things. After some kilometers you will find the Playa de Cuevas del Mar beach, near the Nueva river’s estuary. Then you get to the AS-263 that will lead you to a tunnel to get to Piñeres and a little bit after to Villanueva de Pría. Going through a path you will get to a temple devoted to San Pedro. It has a big bell tower. Then you will have to descend through a path to the right and get to the train rail (you don’t have to cross them). You will get to Ribadesella crossing a bridge called Aguamaría. Now you should cross the train rails and continue through the indicated way by the arrows. You will get to Ribadesella through El Portiellu. Now you will be in the center, which is full of lovely small streets. You can stop here or you can continue to San Esteban de Leces to get there you will have to cross the Sella river through a bridge called Arriondas and then continue to the left. You will walk parallel to a beach towards San Pedro and Abeu. Once you have crossed Abeu you will find the hostel.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-4.80180, 43.41640],
                zoom: 10.96,
                pitch: 40.00,
                bearing: 9.54   
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_19',
            title: 'Stage 18: Ribadesella - Sebrayo (31.6 Km)',
            image: '/images/chapter-19-ribadesella-sebrayo.jpg',
            description: 'If you have stayed the night in Ribadesella you just have to cross through the Puente de Arriondas bridge and continue to the left. You will walk parallel to the beach and cross a neighborhood to go through Abeu. Then you will have to turn left and then get to San Esteban de Leces.<br><br>Then you will walk towards Vega but first you will have to go through Piñares. In this village, you will find the Capilla de Santa María Magdalena chapel, located near the beach. You will have to cross a stream called Acebo and go through a path to the left that will lead you to the Monte Cueto mount bordering the slopes. Before getting to Berbes you will have to continue through the asphalted road, the national road. Here we have to highlight Monumento Natural de Vega y Entrepeñas a wonderful and lovely landscape that you will enjoy. You will have to cross again the N-632 to continue. Then you will get to Caravia where you walk through a forest full of eucalyptus. You will see the Playa de la Beciella beach that is surrounded by cliffs where you can rest for a while. Then you will get to another beach called La Espasa where it flows into the river with the same name. Between Caravia and Colunga you will have to return to the N-632. You will cross La Isla to get to Colunga a perfect place to eat something. To leave this village you will have to go to the left and get to Infiesto. You will have to continue on this road and you will see an arrow that indicates you to turn to Pernús, crossing under the dual carriageway. And going through Beldreu. You will go through Pernús and Priesca, where the Iglesia de San Salvador is located. You will continue the way through a path parallel to the river that will lead you to Sebrayo that belongs to Villaviciosa; here you will find the Iglesia de Santa María church from the 12 century.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-5.12089, 43.45842],
                zoom: 10.71,
                pitch: 40.00,
                bearing: 15.20    
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_20',
            title: 'Stage 19: Sebrayo - Gijón (35.8 Km)',
            image: '/images/chapter-20-sebrayo-gijon.jpg',
            description: 'You will have to leave Sebrayo aerly and you will start in the local road that crosses the village. Then you will cross the dual carriageway through an underpass and then you will have to turn right. Then you should cross again the dual carriageway but this time through a flyover. You will get to the national road that will lead you to Villaviciosa that is known worldwide due to its apple trees and it cider. You can stop here to have breakfast. Once you have crossed the city centre you will get again to the road towards Ifiesto and then you will leave it again to walk through the Parque de la Alameda park, next to the Linares river. You will have to cross the Puente San Juan bridge and then go through La Parra and Casquita, a key village in today’s stage where you have to decide which route you are going to follow.<br><br>There are two possible options: continue through the original Northern Way towards Gijón or go through the Primitive Way that goes through Pola de Siero and Oviedo, this ways gets inland.<br><br>1. If you choose the traditional route, the Northern route, you will have to continue from Casquita to Grases de Abajo and Niéveres, both of them are close to Casquita. Once you get here you will have to continue through the VV-9 to get to Alto de la Cruz. Then you will have to descend through the road to Peón or continue through the mountain slope through the mountain villages called La Garita, Peña Blanca, El Llantáu… It seems that the descent has finished but now you will have to start walking up again, this time to Alto de Curbiello. The way goes close to the Palacio de los Cienfuegos de Jovellanos palace, where Gaspar Melchor de Jovellanos stayed many times. You will continue through the AS-331 the old Camín Real de Peón, a path that used to link Villaviciosa and Gijón and that goes through some villages such as Bárcena or Requexo. Then you have to turn right crossing a restaurant and a chapel. Once you get to La Olla you will have to turn left, over the highway and then continue through rural paths to get again to the AS-331. Here you can decide if you want to continue straight forward and cross Deva’s camping or you can turn right and get to Alto del Infantón and then continue to the left through the N-632.<br><br>After approximately three kilometres you will get to Deva’s camping, near Gijón, where you will find the public hostel. You have walked approximately 25 kilometres, but if you want you can go to Gijón and visit all the wonderful things that this city offers you, from the camping to the city centre there are six kilometres.<br><br>2. The second option is go from Casquita through the Primitive Way. This ways goes through Comeca and then through Ambás where you can follow the official route to Alto Campa or visit the Monasterio de Santa María de Valdediós, in Puelles. Then you will continue to Vega de Sariego a place where lots of pilgrims decide to stay the night and divide the stage. From Vega you can continue through the national road to Pola de Siero. Other option is to leave the asphalted road and go through paths going through El Castro, Aveno and Puente Recuna.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-5.40340, 43.45589],
                zoom: 11.33,
                pitch: 40.00,
                bearing: -14.21     
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_21',
            title: 'Stage 20: Gijón - Avilés (25 Km)',
            image: '/images/chapter-21-gijon-aviles.jpg',
            description: 'We will now be leaving Gijón. We have to go to the promenade of the town and continue until Rodriguez San Pedro’s Avenue to reach Padre Máximo square. Following the indications and walking through Mariano Pola, Galicia and República Argentina avenues, we will arrive at the AS-19 road, which will lead the Way for some time. We will walk along this road and cross the railway. Before arriving to a roundabout, we will take a way to our right that will lead us to a smaller road. We follow this road until arriving to Veriña (after crossing the AS-19 viaduct) and we go on on this road towards Poago. After more railways, we will climb Areo Mount towards Poago village.<br><br>We will pass Pavierna on our way. We will find a diversion towards San Pablo’s dolmen, which we will take to descend to Carreño’s valley until the CE-6 road. We will cross this road for about 500 meters and then we will take a diversion to AS-326 road. We go on until reaching a big roundabout, where we will leave this path. Leaving the roundabout to our right we go on until finding again the AS-19. We move on passing by Tabaza village and finding a football pitch. We now have to cross some railways and continue beside Avilés river. Here we will find a park and then will go on towards AS-238 road. We go on on Marqués de Suances Avenue until Cervantes Avenue. We will find now Avilés city, after walking for about 20 kilometers. This city has the largest dune area in all Asturias, surrounded by amazing cliffs and idyllic beaches. If we still have strengths, we can go on to Muros de Nalón to advance some kilometers in tomorrow’s stage. If you want to do this, check the information we have for Stage 20.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-5.59355, 43.38929],
                zoom: 11.10,
                pitch: 40.00,
                bearing: -14.21     
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_22',
            title: 'Stage 21: Avilés - Muros de Nalón (22.6 Km)',
            image: '/images/chapter-22-aviles-muros-nalon.jpg',
            description: 'You will leave Avilés through one of its biggest beaches: Las Salinas. You will have to go through the Avenida de Alemania and then get to San Cristobal. Once you get there you will walk through a path to the left. After crossing a village you will get to the N-632 and walk through it for a while, cross it and continue through the Avenida Raíces avenue and also through the Calle Doctor Fleming street, Nicanor Piñole and Ramón y Cajal. Once you get there you will have to go through the Calle Príncipe de Asturias street and then turn right through Torner and also through the Avenida San Martín Avenue. You will have to get to Castrillón and then get to La Cruz and Santiago del Monte. After leaving this village you will have to walk through the airport’s road and once you get to La Banda you will have to walk towards Bellay. Then you will leave the road to get to a path to the left that will lead you to the Monte Granda mount. Then you will have to descend and get to the Ría de San Esteban estuary, close to the Castillo de San Martín castle. The remaining tower was built ordered by Alfonso III of Asturias. Then you will walk through the N-632 through San Esteban de Pravia, located on the left side of the Ría de Pravia estuary where the Nalón river concludes. This village has been historically achieving popularity due to its harbor, currently declared of Industrial and Historical Interest. Then you can continue through the original way or go through an alternative way that goes near the coastline and that gets to El Pito. This path begins in a viewpoint called Espíritu Santo, after a staircase, near the local hostel. If you choose this option you will be walking more kilometers but you will also walk through a lovely beach.<br><br>The original way do not go through San Estevan de Pravia but there is a turn away just after crossing the river that will lead you to the national road. Once you get to the roundabout you will have to go through a path to the left. Then you will have to continue to get out Muros de Nalón. This village is famous due to the Palacio de Valdecarnaza y Vallehermoso, form the 16 century. It used to belong to some different families such as: Cienfuegos, Rúa, Ponte and Quirós. Moreover, walking around the open museum at Carbonero harbor, we will see how workers do their tasks.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-5.80150, 43.41709],
                zoom: 11.20,
                pitch: 40.00,
                bearing: 48.99     
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_23',
            title: 'Stage 22: Muros de Nalón - Soto de Luiña (16 Km)',
            image: '/images/chapter-23-muros-nalon-soto-luiña.jpg',
            description: 'You will start in Muros and walk towards El Pito through a local road after crossing the train rails. Visit La Quinta de Selgas is a must, it is a palace surrounded by a lovely garden. This path will lead you to a stream called San Roque. You will have to return again to the national road N-632 in El Manto. You will have to return to a path that will lead you again to a stream, this time to one called Santa Ana in Rellayo. You will have to return again to the national road N-632 in El Manto. You are close to Soto de Luiña you just have to walk through some roads and rural paths to get to La Fontona, where you will return to the N-632. You are close to Soto de Luiña you just have to walk through some roads and rural paths to get to La Fontona, where you will return to the N-632.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-5.95829, 43.53031],
                zoom: 10.94,
                pitch: 40.00,
                bearing: 0.00     
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_24',
            title: 'Stage 23: Soto de Luiña - Cadavedo (23 Km)',
            image: '/images/chapter-24-soto-luiña-cadavedo.jpg',
            description: 'You will start this twenty-first stage getting to the national road. Once you get to the first crossing you will have to make a decision: continue through the original way crossing the Sierra de las Palancas mountain pass or continue through the asphalted road, an alternative way. The original way is the most complicate one due to its difficulty and also to the bad conditions of it. If you decide to go through the original route you will continue through the mountain to walk through the forest, through narrow paths. In winter it will be impossible walk through the original way.<br><br>If you decide to go through the original route you will continue through the mountain to walk through the forest, through narrow paths. You will have to cross some small rivers, and you will have to be very careful. You will be walking among eucalyptus and chestnut trees in the forests called Picu y Mediu, Ablanéu and El Cierru’l Cura. You will ascend more and more leaving behind the small coastal villages. You will walk through Cuesta de la Ventana where the wind will be by your side. You will walk through Cuesta de la Ventana where the wind will be by your side. There are some markers that are a little bit hidden but if you pay attention you will see them. You will be near many villages on your way, but you won’t go through any of them. You will start walking up again through paths. Once you get to the top you will see Novellana, a place where you will see the pilgrims that are doing a route called Bellotas. A little bit after you will have to go down towards the road in Silvaoscura and Las Ventas. After a curve you will see some indications that will indicate you to go through the route called El Camino de las Bellotas; going through the Ermita de San Roque hermitage or continue walking up through a mountain path. You will see El Picu Paradiel and also a viaduct called Pintor Dionisio Fierros. A little bit after the indications will be a little bit confusing. Once you get to a crossing you will have to keep walking up, following the yellow Enagás posts. While you are walking up you will see a marker that will indicate you that you have to go to the right and finally you will get to Picu Paradiel. Then you will see a yellow arrow that will indicate you that you have to go to the right before walking up again. You will see a lonely house once you get to Valdés, and also the Cantabrian Sea again. You will have to go down to get again to the coast. You will go among pine trees and the indications will be better. You will keep going down through Picu Cabornín’s slopes to get to La Rodiella and then you will get to a road that will lead you to San Pelayo de Tehona. Once you get to the next crossing you will have to cross the road and walk up towards a route that starts on the right side. The best option is to continue to the right, through the road to get to Cadavéu.<br><br>This second option is a little bit easier, it goes through the national road. You will have to continue through the N-632. After 4 kilometers you will get to Albuerne, that belongs to Cudillero and famous due to its beach called Gancéu. Este arenal está protegido por unos altos acantilados y catalogada como Paisaje Protegido. You will have to get then to Novellana and Castañeras that also belong to Cudillero. In Castañeras you will find one of the best beaches in Asturias: Playa del Silencio. This wonderful beach is a little bit hidden and unknown to tourists. This wonderful beach is a little bit hidden and unknown to tourists. Then you will continue to Santa Marina and then to Ballota where you will leave the asphalted road to get to some rural paths. You will have to cross the Cabo river through a bridge known as Le Pont qui Tremble. It was the name that pilgrims gave to this bridge that firstly was built with wood. Before getting to Cadavedo you will have to cross a forest called Tabalizo that is full of chestnut trees, holly trees, oak trees… this route could be a little bit difficult in some seasons.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-6.25861, 43.53082],
                zoom: 11.75,
                pitch: 40.00,
                bearing: 16.80      
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_25',
            title: 'Stage 24: Cadavedo - Luarca (15.8 Km)',
            image: '/images/chapter-25-cadavedo-luarca.jpg',
            description: 'You will leave Cadaveo through the national road until get to the train rails, you will have to cross them and follow the yellow arrows that will indicate you the way to Villademoros. Then you will have to get to a local road and cross a stream called Palminero. You will get soon to San Cristábl and also to Querúas, you will get to this villages through the national road and also through secondary roads. You will leave the asphalted road to get to the Capilla de San Miguel de Canero chapel, from the 19 century that used to be a monastery founded by Xemeno Xemeniz and Aragonti. Moreover here there was a pilgrim’s hospital. hen you will get again to the national road, you will have to walk towards Luarca. The Esva river will appear in your way and you will have to cross it. This way will lead you to the Playa de Cueva beach, a big beach. This way will lead you to the Playa de Cueva beach, a big beach.<br><br>You will have to return to the N-634 to get to Caroyas and once you get here you will be combining rural paths and the hard shoulder of the national road to get to Almuña. It is a village where you will find a hostel where you can stay the night. Once you get to Luarca you can enjoy the village.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-6.40745, 43.53444],
                zoom: 11.94,
                pitch: 40.00,
                bearing: -0.14       
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_26',
            title: 'Stage 25: Luarca - La Caridad (29.6 Km)',
            image: '/images/chapter-26-luarca-caridad.jpg',
            description: 'You will leave Luarca through the Calle La Peña street. You will be combining the national road N-634 and also parallel paths. The way do not go through Otur, but you can visit this village. Here you will find a church and a house called Villa Rosita. You will have to continue following the yellow arrows. You will go through Vilapedre and Piñera, in Navia. You will have to cross the road and also the train rails through an underpass. You will also go through Villaoril, La Colorada and Navia. Then you will have to cross the Navia river and you will cross it to continue towards Jarrio. You will see a cross that will indicate you that you are going the right way.<br><br>Once you leave this village you will have to continue straight forward through the national road. You will combine this road with some parallel paths. Finally you will get to La Caridad in El Franco.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-6.60364, 43.49848],
                zoom: 11.02,
                pitch: 40.00,
                bearing: 17.46        
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_27',
            title: 'Stage 26: La Caridad - Ribadeo (29.6 Km)',
            image: '/images/chapter-27-caridad-ribadeo.jpg',
            description: 'You will leave La Caridad through the town hall’s square, to the right. A little bit after you will have to cross a stream called Carballeiros, then you will have to walk up to Alto de Los Morcegos. Once you get here you will have to cross the national road several times and also get to some local paths that will lead you to another stream near San Pelayo. You will return to the N-634 and then get to Veldepares, in El Franco. If you can’t cross the stream called Carballeiros you will have to change a little bit the route and go through the national road national road and cross the Porcia river, next to Tapia de Cadariego. You will walk through a path to get to Porcía and to Cruz de la Caleya, where you will have to make a decision depending on which route you want to follow:<br><br>- If you have decided to go through the coast you have to know that this route is a little bit longer than the other one. You will have to cross again the national road and continue parallel to it through some villages such as Corozas, Hospital, Campos de Salave, Cantón, Cortaficio and Mántaras. Just after 10 kilometers after leaving La Caridad you will get to Tapia de Casariego, a mining village; here you will see the Virgen del Carmen virgin located in the port. Then you will be walking between the N-634 and the Cantabrian sea and you will go through La Xunquera, Calambre, Penela and then through Santa Gadea, in Tapia. Here you will find a wonderful beach called Playa de Pantorga or A Ribeira. You will also find here the remains of an old fortress called Campo de San Lorenzo. You will also find the Playa de la Penarronda beach located between the Acantilados de la Robaleira cliffs and La Punta del Crono. Then you will get to Arroyo de Penarronda where you will find the Ermita de San Lorenzo hermitage, where you will return to the road towards Penedo, Outeiro and finally Figueras. In this village you will meet again the pilgrims that went the other route that goes inland. Then you will visit other monuments such as the Palacio de Los Pardo Donlebún palace; its tower is from the 16 century. You will have to return to the road to cross the estuary through the Puente de los Santos bridge, now you are in Galicia. Just after leaving the bridge you will find the hostel.<br><br>- The other alternative goes inland; it goes through Porcía towards Brul. You will walk through the AS-24 and then through some paths towards Castropol. After six kilometers you will leave Brul and you will have to go through the AS-31 towards Tol. You will find a marker a little bit after that indicated the road to Vegadeo. This village used to be the entrance in Galicia of the Northern Way because there was no possible way of crossing the estuary. Nowadays you can cross it through the Puente de los Santos bridge. You will have to continue on the road to Barres where you should cross the national road to get to the AS-31 towards Figueras. Once you get there you will have to cross the bridge through a path parallel to the road and get in Galicia. Just after leaving the bridge you will have to go to the left and a little bit after you will find the local hostel.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-6.86077, 43.52534],
                zoom: 11.51,
                pitch: 40.00,
                bearing: -0.41         
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_28',
            title: 'Stage 27: Ribadeo - Lourenzá (28.4 Km)',
            image: '/images/chapter-28-ribadeo-lourenza.jpg',
            description: 'Today’s stage starts in the Ponte dos Santos bridge that is a bridge over Ribadeo’s estuary that links Galicia and Asturias. Its name comes from the two chapels located on each side of the bridge, the one in Asturias devoted to San Román de Castropol and the one located in Ribadeo devoted to San Miguel de Ribadeo. You are in Galicia, now you have to be careful when you see a scallop shell or a marker because in Galicia the biggest part is the one that indicates the way that you should follow, in Asturias is the smallest part the one that indicates the way. The first thing that you will visit in Galicia is the Capilla de San Miguel chapel and then you will walk through Estrada do Faro and Avenida Leopoldo Calvo Sotelo. Then you will have to turn left through the Calle Rodríguez Murias street and then through the Calle Villafranca del Bierzo street. Once you get here you will get to Cantón and also to the famous Torre dos Morenos tower. It is a kind of house built by people that went to America and returned.<br><br>Just before getting to an area full of trees you will have to turn right and go through the Calle de San Francisco street, and through the Avenida de Asturias avenue to get to the Calle Diputación street. You will leave Ribadeo through the Calle San Lázaro street next to the football field and get to some rural paths towards the local church in Ove. This church’s placement helped the Malta’s Order to give assistance to pilgrims for many years.<br><br>Now it comes the first hard part in today’s stage, get to Ponte de Arante through a forest path. In winter walk through this path could be a little bit difficult so if you want you can get there through the LU-133 towards San Vicente. If you continue through the rural path you have to go straight forward all the time to get to an asphalted road where a little bit after you will have to go to the left in Lugar da Fonte Valín, very famous due to its water. After walking through a path you will get to Cubelas where you will start walking up and a little bit after you will have to turn left. You will have to cross the road to continue through Aldea de Vilela and a little bit after once you get to a crossing you will the indications to get to a hostel, to a holiday cottage and also to a restaurant. You won’t find more services until you get to Lourenzá.<br><br>Then you will get to Celeiros, full of fields and cattle. Once you get to Lugar de Vilar you will have to go through a path to the right to get to the Iglesia de San Vicente de Cubelas church. You will have to continue to get to A Ponte Arante where the Iglesia de Nosa Señora das Virtudes is located, each year they have a celebration called Romería das Cruces. Now it comes the second walking up, this time through a complicated path and then through an asphalted road. Once you get to Barreiros you will have to walk to Villamartín pequeño where you can refill your water bottle. Then you will get to Villamartín Grande and then to Gondán where you will find a local hostel. You will have to continue through some paths that will take you through small villages such as San Xusto, Vilanova de Lourenzá. We will leave the village following a dirt road diversion to the left, next to a well, to overcome the last slope of the stage towards Vilanova de Lourenzá, walking on forest roads. Then you will get to a mount called Monte Calvario where you will see the Iglesia de Santa María de Lorenzá church. We will go on descending until a football pitch, and from here we will take a diversion to the right to walk through a narrow path that will lead us to the main road to the village. We will reach this village crossing the Ponte da Pedra bridge over river Baos. The hostel will be in Campo da Gracia street. You can’t leave Lorenzá without visiting its monastery devoted to San Salvador where the Capilla de Valdeflores chapel is located. The Count’s tomb in Valdeflores chapel is the most remarkable element from the inside, and one of the most beautiful shrines of all Galicia. You also need to pay a visit to Saint Mary church, whose façade was a draft for the Obradoiro’s one in Santiago.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-7.08322, 43.45960],
                zoom: 11.20,
                pitch: 40.00,
                bearing: 0.00          
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_29',
            title: 'Stage 28: Lourenzá - Abadín (25.2 Km)',
            image: '/images/chapter-29-lourenza-abadin.jpg',
            description: 'The starting point will be the hostel where you have stayed the night, so at the end of the street you will have to turn left towards Arroxo. There are lots of cyclists that decide to go through the N-634 up to Mondoñedo. Before getting to Mondoñedo you will have to go through O Grove and also cross the A-8 through an underpass. You will also cross San Pedro da Torre and its millenary sanctuary. Then you will have to continue to the left and you will see a fountain. Just after this fountain, you will have to go through a path to get to a small village called Reguengo, where you will find another fountain. Now you have to go to the left, among some trees and you will see Monsoñedo in the Valle del Masma valley. After crossing the road and also a neighborhood called San Lorenzo you will arrive at Mondoñedo. If you have time you should visit all the village, especially its cathedral from the 13 century. Visit the Iglesia de Santiago church and also the Santuario de Los Remedios sanctuary is a must.<br><br>Just after the cathedral you will continue your way towards Fonte Vella and going through the Calle Rigueira street. You will see an arrow that will indicate you through which path you will have to continue your route, it is the one on the left. You will have to walk now to Lousada. During this eight kilometers you will walk through San Caetano, Barbeitas and Mariz where you will find a fountain and also a place where you can have a shower, eat something and also stay the night just making a donation.<br><br>Before getting to Abadín you have to cross some villages such as Padín, Casabella, Pacio and Lousada where you will have to leave the asphalted road to the left and get to the Valiñadares river. Through this path you will get to Alto de A Xesta. You are now in Abadín, very close to the end of the stage. You will get to San Martiño de Galgao a place where a fest called Romaría de San Cosme da Montaña is celebrated each year. You will see also a church with wonderful things inside with wonderful things inside.<br><br>A little bit after you will get again to the N-634 where you will meet again with people that come from Mondoñedo through the road. You will have to cross the road in Quende to walk the last 4 kilometers to gontán, where you will find some services and also a hostel. You can stay the night here or continue to Abadín. This village has some monuments such as the Iglesia de Santa María de Abadín church from the 12 century.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-7.31333, 43.39438],
                zoom: 11.51,
                pitch: 40.00,
                bearing: -10.40           
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_30',
            title: 'Stage 29: Abadín - Vilalba (20.7 Km)',
            image: '/images/chapter-30-abadin-vilalba.jpg',
            description: 'You will start today’s stage next to the post office, just after one kilometre you will see for the last time the Iglesia de Santa María church. Then you will get to a path to the right that is surrounded by lots of trees. This path will lead you to the Abadín river, you will have to cross it. You will have to walk through some asphalted roads and some paths to get to Martiñán, where you will get again to the national road to get to one of the most famous bridges in Terra Chá. Before getting to this bridge you will have to cross the dual carriageway through a bridge towards Castromaior and then you will have to get again to the river to return to the dual carriageway, you will have to cross it again but this time through an underpass. Once you get here you won’t find any kind of service in seven kilometers until you get to Viladóniga.<br><br>After some small villages you will get to the first one that belongs to Vilalba: Corbelle. You are now close to the Puente de Martiñán bridge, you just have to cross the national road to get to this bridge from the 17 century.<br><br>After a little walk up you will get to Terra Chá: you will have to walk approximately 10 kilometres through flat land and combining asphalted roads with paths. The following small village that you will cross is Goiriz where you will find a church. You will have to walk through the national road for some meters to get to a path. Vilalba is very close, the hostel is located in an industrial area. In Vilalba you will find lots of monuments and things that you should visit. We can also see Saint Mary’s church and Penas-Corbeiras Pazo, placed close to the city center.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-7.50528, 43.31445],
                zoom: 11.40,
                pitch: 40.00,
                bearing: 0.00            
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_31',
            title: 'Stage 30: Vilalba - Baamonde (18.6 Km)',
            image: '/images/chapter-31-vilalba-baamonde.jpg',
            description: 'You will leave Vilalba through the city centre. If you have stayed the night in the local hostel you will have to walk through a path to get to the city center and start. Once you get to the Rúa Previa street you will have to cross the Torre de los Andrade tower and the Iglesia de Santa María church. Then you will have to go through the Calle Conde Pallares. Tehn you will have to turn right to get to the Magdalena river through a narrow path.<br><br>The Ponte dos Pasos bridge will allow you cross the river. You will see an abandoned mill and you will have to continue parallel to the river for some meters. A little bit after you will have to go through an asphalted road and walk up to the left, walking near the dual carriageway; you will cross it a little bit after through an underpass. Then you will find another medieval bridge, this time one called Ponte Rodríguez, over the Trimaz river. After crossing the river you will have to turn right and walk up the hardest part of the stage towards Boizán located in San Xoan de Alba. The dual carriageway will welcome you to Alba a little bit after where you can visit the Iglesia de San Xoán de Alba church. Up form this village you will have to continue through the national road and a little bit after you will have to turn right to go through A Torre and finally you will get again to the national road. You will be walking parallel to the dual carriageway and you will have to cross it many times through some underpasses. You will find again a medieval bridge that will allow you to cross over the Saa river, then you will return to the national road’s hard shoulder towards Guitiriz, to San Pedro de Pígara. You will see a marker that indicates that there are just 100 kilometers left to get to Santiago de Compostela. Now you will have to return again to the national road once you get to a petrol station. After some kilometers, you will leave the national road to the left through a path. You will leave Guitiriz and you will get tot Begonte, crossing some villages such as A Rega and Baamond; here you will find a hostel where you can stay the night if you don’t want to get to Miraz. To get to Baamonde you will have to turn left; you can‘t leave this village without visiting the Iglesia de Santiago church from the 9 century that is located in the right side of the national road. After leaving Baamonde you will find all kind of services. After two kilometres through the hard shoulder you will cross San Alberte where you will see a lovely chapel, if you want to get there you will have to lave the road to the left and cross the train rails and then a bridge over the Parga river.<br><br>After resting for a while you will walk to Sambreixo through a path. After crossing some villages such as Caínzos, Digañe and A Raposeira you will get to Carballedo. Before leaving Terra Chá you will go through Aldar where you can buy some souvenirs. Before getting to Miraz you will have to go through Friol, where you will find some services and where you can visit the Iglesia de San Paio church. After going through some village such as Subcampo and Laguna you will have to turn left and cross the Sarga river through a bridge called Leixoso. The first thing that you will see once you get to Miraz is the wall of an old tower in the Pazo de Saavedra country house that nowadays is a private house.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-7.66557, 43.25757],
                zoom: 11.76,
                pitch: 40.00,
                bearing: -52.80            
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_32',
            title: 'Stage 31: Baamonde - Sobrado dos Monxes (41.2 Km)',
            image: '/images/chapter-32-baamonde-sobrado-monxes.jpg',
            description: 'If you have stayed the night in Baamonde you will have to see the previous’ stage itinerary to know how to get to Miraz because this will be the starting point in today’s stage. The first thing that you will see is the Iglesia de Santiago church and then you will have to go through a path to the left, the yellow arrows will indicate you the way. You will walk through the Monte Vilaldar mount. After some kilometers, you will get to A Braña where you will have to get to a path towards San Mamede de Nodar that belongs to Friol. You will leave this path to get to the LU-P-2119 that will lead you to Roixaca and A Cabana where you will have to turn right to get to another path. After some small villages, you will cross the LU-934. We have already done half of this stage, among small villages and local roads. You will cross Marco das Pías a village located between Sobrado dos Monxes and Friol and also between A Coruña and Lugo. We now star descending towards Sobrado, about 9 kilometers away and leaving the road to one side at the small place of Meson. We will pass by Esgueva and Muradelo, along descending paths. You will have to go through the AC-934 towards Guitiriz, where you will see an artificial reservoir called La Laguna de Sobrado built by the monks of the Monasterio de Santa María monastery. After crossing this reservoir you will get to the village, where you will find all the needed services. This village is perfectly integrated in the landscape, surrounded by fields and forests. All this area is a clear example of the Galician Atlantic forest, with remarkable wetlands full of varied fauna and flora. After passing by this place, pilgrims will reach the historical center of the village, where they can find both the hostel and the rest of services they need. Here you can visit the Monasterio de Santa María de Sobrado monastery, also known as Monasterio de sobrado dos Monxes that was declared a World Heritage Site by UNESCO due to its beauty. If we have time and do not mind walking a little, we can also visit the Roman campgrounds of the citadel, about 5 kilometers away.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-7.78044, 43.05438],
                zoom: 10.80,
                pitch: 40.00,
                bearing: 0.00             
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_33',
            title: 'Stage 32: Sobrado dos Monxes - Arzúa (21.4 Km)',
            image: '/images/chapter-33-sobrado-monxes-arzua.jpg',
            description: 'You will have to return again to the AC-234 and after one kilometre you will have to go to the left towards A Pousada, Nogueira and Toques. You will go through some villages such as Pontevedra, Vilarcho, O Peruxil and O Castro. Then you will have to continue through the asphalted road until you get to Corredoiras, in Boimorto, where you will find all the needed services. You will continue again through the AS-234 and you will get to the Iglesia de San Miguel de Bomil church. In this village, you will find a hostel. Then you will go through Sendelle, where you will find a church devoted to Santa María, this church was built in the 12 century.<br><br>You will continue on the national road towards O Vilar. After crossing O Viso you will get to Arzúa.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-8.03916, 43.00084],
                zoom: 11.46,
                pitch: 40.00,
                bearing: -22.40              
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_34',
            title: 'Stage 33: Arzúa - O Pedrouzo (19.3 Km)',
            image: '/images/chapter-34-arzua-pedrouzo.jpg',
            description: 'You will leave Arzúa going through Rúa do Carmen street. You have to go through the left and you will leave the village to get to the Fuente de los Franceses spring. After crossing it you will cross the Vello river and you will get to As Barrosas named after the kind of land that you will find there when it rains, here you will find the Capilla de San Lázaro chapel.<br><br>Then you will continue through a rural area that is very calm and beautiful and you will find the Brandeso river that is an affluent of the Iso river. Once you start to walk up you will find a fork in which there is marker that indicated you the left path to get to Preguntoño where you will find the Ermita de San Paio hermitage from the 17 century.<br><br>After leaving this village you will have to cross a tunnel to get to A Peroxa where you will start to descend to a stream known as the Ladrón river. Is time to start walk up again to get to Taberna Vella and after leaving behind this place you will go through Burres and then through O Pino the city council before Santiago de Compostela. The first village that will welcome you is Calle where you walk through a path. After crossing the LAnguella stream you will get to Boavista and then to Salceda, you will walk through a road and you will have to cross it many times.<br><br>Before getting to the next village you will get into a path to see a plaque devoted to Guillermo Watt that died here in this place while he was walking to Santiago. Then you will get to O Xen a small village where you will find a national road that you should cross to reach Ras surroundings, which also belongs to San Miguel de Cerceda, the same as O Xen. Pilgrims coming from the Northern Way go through O Pino and then the way get unified with the French Way.<br><br>We keep on walking parallel to the national road to reach O Empalme, where we can find a particular picnic that still keeps a massive copy of the Pelegrín, the pet designed for 1993 Jacobean Holy Year. We will cross the road towards the village and then start descending among eucalyptus. After a short walking crossing again under the national road through a tunnel, we will find Saint Irene’s chapel, only 3 kms away from O Pedrouzo. Santa Irene, divided by the road, has two hostels: a public and a private one, at each side. It is a perfect place for those limp pilgrims that will continue until O Pedrouzo, as the eucalyptus will help us recovering ourselves.<br><br>Across the dense forest, we will descend until A Rúa place, where its houses made of stone will welcome us, just a kilometer and a half away of our goal. Leaving behind this wonderful place, where we can even find a tourist office, we will go on with our walking through a paved road that will lead us next to the N-547, the last obstacle before reaching O Pedrouzo and resting, knowing that tomorrow will be the best day.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-8.19040, 42.89746],
                zoom: 11.55,
                pitch: 40.00,
                bearing: 0.00              
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_35',
            title: 'Stage 34: O Pedrouzo - Santiago de Compostela (19.4 Km)',
            image: '/images/chapter-35-pedrouzo-santiago.jpg',
            description: 'Today is an important day! Just 20 kilometers left to get to Santiago de Compostela. If you started this adventure in the very beginning you have walked 740 kilometers. You should get up early because you should get to Santiago before 12:00 pm that is when the pilgrim’s mass is celebrated.<br><br>You will leave O Pedrouzo going back and after 500 metres turning left. You will walk through a path among eucalyptus and other trees. Through this path, you will get to San Antón a village that belongs to Arca and that is located next to the Brandelos river. Then you will walk to Amenal crossing a river and also a national road through an underpass to get to Cimadevila.<br><br>The end of the stage and the end of the way is near. You will see lots of crosses that other pilgrims put in a fence for years. Then you will a huge monolith that has the shape of a staff, scallop shell and pilgrim’s pumpkin that is the official announcement that you are now in Santiago.<br><br>After walking near the airport and crossing a secondary road you will enter in San Paio and then you will go through A Esquipa and Lavacolla. After crossing the Iglesia de San Pelayo de Sabugueria church you will cross the N-643 to go to Vilamaior and then you will walk next to the main buildings of the Galician TV channel. Then you will go through San Marcos to get to Monte do Gozo where is located the biggest hostel in Santiago de Compostela that was open in 1993. Here you can see the first time the cathedral, once you get here is normal to feel happiness and also being excited because you see the end.<br><br>You will leave Monte do Gozo and you will walk through a neighbourhood called San Lázaro, after crossing a huge roundabout you will see a building that is used like an auditorium and also a sculpture made by a local artist that welcome everyone to this amazing city.<br><br>Then you will walk through a neighbourhood called Os Concheiros, named after the old tradition of selling scallop shell to pilgrims. A little bit after you will enter in the old town of Santiago through the Calle de Casas Reais street, the Plaza de Cervantes square A little bit after you will enter in the old town of Santiago through the Calle de Casas Reais street, the Plaza de Cervantes square Now there is only left the passage where street musicians will welcome us playing their instruments, before the majestic Plaza del Obradoiro.<br><br>You can finally look up and enjoy the moment after reaching our objective: Santiago’s Cathedral is right in front of us. We can now leave our bag as we walk to the center of the square searching for the best picture to remember the experience.<br><br>The cathedral is here, you will be very excited, and this is the end of the journey.<br><br>Welcome to Santiago de Compostela!',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-8.42456, 42.86368],
                zoom: 11.74,
                pitch: 40.00,
                bearing: 24.00               
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter_36',
            title: 'The End: The Cathedral of Santiago de Compostela',
            image: '/images/chapter-36-cathedral-santiago.jpg',
            description: 'Five interesting things to know about The Cathedral of Santiago de Compostela:<br><br><b>1. Tomb of the Apostle Saint James:<b> It is in the cathedral, in a crypt beneath the Main Altar, where pilgrims can visit the Tomb of the Apostle Saint James. It is here that the remains of Saint James are kept in a silver urn, alongside those of his disciples Saint Athanasius and Saint Theodore. The relics of Saint James would transform the town of Santiago into one of the most important pilgrimage destinations in the world.<br><br><b>2. Design and Redesign (A Romanesque Masterpiece):<b> The cathedral of Santiago de Compostela is a magnificent work of art and religious architecture. While the building preserves its original medieval structure and Romanesque essence, its character and unique beauty have been reinvented over time, with Gothic and Baroque touches shaping today’s masterpiece. After the discovery of the remains of Saint James by a shepherd in the 9th century, a small chapel was built (versions of the specific year vary but some time between 813 and 830). However, this chapel was soon too small to host a large number of worshippers. A second and larger church was built but later destroyed. Bishop San Pedro de Mezonzo rebuilt the temple in 1003 in pre-Romanesque style and the current cathedral was erected by 1075, at a time when pilgrimages enjoyed their heyday. The 12th century saw the Pórtico da Gloria being built by Mestre Mateo: a masterpiece of Romanesque sculpture featuring 200 figures from the Bible inside the western facade of the cathedral. The Pórtico da Gloria was reopened to the public in 2018, after a 10-year long detailed restoration project. At 76 meters, the Cathedral of Santiago de Compostela was Europe’s tallest building at the time. Gothic and Renaissance elements were gradually added, including new chapels, the 14th century Clock Tower, the Holy Door, and a reinvented cloister. However, the biggest and most dramatic transformation of the cathedral of Santiago de Compostela would take place in the 17th and 18th centuries, during the Baroque period. The culmination of these works would result in the iconic facade we see today from Praza do Obradoiro, once again in all its glory after several years of cleaning and restoration work.<br><br><b>3. Porta Santa (The Holy Door):<b> The Porta Santa or Holy Door was built in the 16th century and it is also known as the Forgiveness Door (Puerta del Perdon). It is located in the Praza Quintana and takes pilgrims straight to St James crypt and the Main Altar of the Cathedral, as well as the image of St James that is traditionally hugged by pilgrims. The Holy Door is only open on Holy Years or Ano Xacobeo. For Holy Year 2021, the door will be open on December 31st, 2020, and will remain open for the entire year.<br><br><b>4. Botafumeiro:<b> The Cathedral of Santiago de Compostela is also home to the famous Botafumeiro, a giant incense thurible dating back to the mid 19th century. The Botafumeiro swings impressively across the Main Altar on special dates and special occasions. The Botafumeiro is typically used in pilgrim masses but while the restoration works on the Cathedral continue, pilgrim masses are celebrated in alternative churches without the Botafumeiro. It is hoped that the restoration will be completed for the Holy year 2021.<br><br><b>5. Confession and Mass:<b> Confession is available throughout the day at the Cathedral of Santiago de Compostela. If there are no priests in the confessionals, or you are seeking confession in your own language, please ask in the sacristy. As the church is still being restored, Pilgrim mass now takes place in churches around the city.',
            scrollDown: 'scroll-arrow.png',
            location: {
                center: [-8.54258, 42.88234],
                zoom: 16.00,
                pitch: 40.00,
                bearing: -64.00                
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
    ]
};
