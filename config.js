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
            description: 'The Way of Saint James is a unique journey, and it is both a cultural and a physical adventure. There are many different routes, all of them taking pilgrims to Santiago de Compostela and all with their own unique history, heritage and charm. Embarking on this walk you will get your pilgrim passport before you begin and collect stamps along the way to receive your Compostela at the end, which is the accreditation of the pilgrimage to the Tomb of Saint James. Among all the routes, The Northern Way is the one explained here. The Northern Way goes along the wonderful Northern coast of ‘Green Spain’ from the Basque Country, across Cantabria, Asturias and on to Santiago de Compostela, in Galicia. Along this coastal route, you will discover fascinating cities and fishing villages, swim in beautiful sandy beaches and taste delicious seafood. The Northern Way is the third most popular route to Santiago de Compostela, according to information gathered by the Pilgrim’s Office in Santiago. It is a great alternative for first-time pilgrims who strive to get away from the crowd while still benefiting from the well-developed service infrastructure along the way. It is the longest route with 827 km in total and 33 stages. All the 33 stages are described here.',
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
            title: 'Stage 1: Irún - San Sebastián',
            image: './path/to/image/source.png',
            description: 'Description of Stage 1: Irún - San Sebastián',
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
            title: 'Stage 2: San Sebastian - Zarautz',
            image: './path/to/image/source.png',
            description: 'Description of Stage 2: San Sebastian - Zarautz',
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
            title: 'Stage 3: Zarautz - Deba',
            image: './path/to/image/source.png',
            description: 'Description of Stage 3: Zarautz - Deba',
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
            title: 'Stage 4: Deba - Markina',
            image: './path/to/image/source.png',
            description: 'Description of Stage 4: Deba - Markina',
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
            title: 'Stage 5: Markina - Gernika',
            image: './path/to/image/source.png',
            description: 'Description of Stage 5: Markina - Gernika',
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
            title: 'Stage 6: Gernika - Lezama',
            image: './path/to/image/source.png',
            description: 'Description of Stage 6: Gernika - Lezama',
            scrollDown: 'sscroll-arrow.png',
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
            title: 'Stage 7: Lezama - Bilbao',
            image: './path/to/image/source.png',
            description: 'Description of Stage 7: Lezama - Bilbao',
            scrollDown: 'sscroll-arrow.png',
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
            title: 'Stage 8: Bilbao - Portugalete',
            image: './path/to/image/source.png',
            description: 'Description of Stage 8: Bilbao - Portugalete',
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
            title: 'Stage 9: Portugalete - Castro Urdiales',
            image: './path/to/image/source.png',
            description: 'Description of Stage 9: Portugalete - Castro Urdiales',
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
            title: 'Stage 10: Castro Urdiales - Laredo',
            image: './path/to/image/source.png',
            description: 'Description of Stage 10: Castro Urdiales - Laredo',
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
            title: 'Stage 11: Laredo - Güemes',
            image: './path/to/image/source.png',
            description: 'Description of Stage 11: Laredo - Güemes',
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
            title: 'Stage 12: Güemes - Santander',
            image: './path/to/image/source.png',
            description: 'Description of Stage 12: Güemes - Santander',
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
            title: 'Stage 13: Santander - Santillana del Mar',
            image: './path/to/image/source.png',
            description: 'Description of Stage 13: Santander - Santillana del Mar',
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
            title: 'Stage 14: Santillana del Mar - San Vicente de la Barquera',
            image: './path/to/image/source.png',
            description: 'Description of Stage 14: Santillana del Mar - San Vicente de la Barquera',
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
            title: 'Stage 15: San Vicente de la Barquera - Llanes',
            image: './path/to/image/source.png',
            description: 'Description of Stage 15: San Vicente de la Barquera - Llanes',
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
            title: 'Stage 16: Llanes - Ribadesella',
            image: './path/to/image/source.png',
            description: 'Description of Stage 16: Llanes - Ribadesella',
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
            id: 'chapter_18',
            title: 'Stage 17: Ribadesella - Sebrayo, Villaviciosa',
            image: './path/to/image/source.png',
            description: 'Description of Stage 17: Ribadesella - Sebrayo, Villaviciosa',
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
            id: 'chapter_19',
            title: 'Stage 18: Sebrayo, Villaviciosa - La Vega',
            image: './path/to/image/source.png',
            description: 'Description of Stage 18: Sebrayo, Villaviciosa - La Vega',
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
            id: 'chapter_20',
            title: 'Stage 19: La Vega - Oviedo',
            image: './path/to/image/source.png',
            description: 'Description of Stage 19: La Vega - Oviedo',
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
            id: 'chapter_21',
            title: 'Stage 20: Oviedo - Avilés',
            image: './path/to/image/source.png',
            description: 'Description of Stage 20: Oviedo - Avilés',
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
            id: 'chapter_22',
            title: 'Stage 21: Avilés - Soto de Luiña',
            image: './path/to/image/source.png',
            description: 'Description of Stage 21: Avilés - Soto de Luiña',
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
            id: 'chapter_23',
            title: 'Stage 22: Soto de Luiña - Cadavedo',
            image: './path/to/image/source.png',
            description: 'Description of Stage 22: Soto de Luiña - Cadavedo',
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
            id: 'chapter_24',
            title: 'Stage 23: Cadavedo - Luarca',
            image: './path/to/image/source.png',
            description: 'Description of Stage 23: Cadavedo - Luarca',
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
            id: 'chapter_25',
            title: 'Stage 24: Luarca - La Caridad',
            image: './path/to/image/source.png',
            description: 'Description of Stage 24: Luarca - La Caridad',
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
            id: 'chapter_26',
            title: 'Stage 25: La Caridad - Ribadeo',
            image: './path/to/image/source.png',
            description: 'Description of Stage 25: La Caridad - Ribadeo',
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
            id: 'chapter_27',
            title: 'Stage 26: Ribadeo - Lourenzá',
            image: './path/to/image/source.png',
            description: 'Description of Stage 26: Ribadeo - Lourenzá',
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
            id: 'chapter_28',
            title: 'Stage 27: Lourenzá - Gontán',
            image: './path/to/image/source.png',
            description: 'Description of Stage 27: Lourenzá - Gontán',
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
            id: 'chapter_29',
            title: 'Stage 28: Gontán - Vilalba',
            image: './path/to/image/source.png',
            description: 'Description of Stage 28: Gontán - Vilalba',
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
            id: 'chapter_30',
            title: 'Stage 29: Vilalba - Baamonde',
            image: './path/to/image/source.png',
            description: 'Description of Stage 29: Vilalba - Baamonde',
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
            id: 'chapter_31',
            title: 'Stage 30: Baamonde - Sobrado dos Monxes',
            image: './path/to/image/source.png',
            description: 'Description of Stage 30: Baamonde - Sobrado dos Monxes',
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
            id: 'chapter_32',
            title: 'Stage 31: Sobrado dos Monxes - Arzúa',
            image: './path/to/image/source.png',
            description: 'Description of Stage 31: Sobrado dos Monxes - Arzúa',
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
            id: 'chapter_33',
            title: 'Stage 32: Arzúa - O Pedrouzo',
            image: './path/to/image/source.png',
            description: 'Description of Stage 32: Arzúa - O Pedrouzo',
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
            id: 'chapter_34',
            title: 'Stage 33: O Pedrouzo - Santiago de Compostela',
            image: './path/to/image/source.png',
            description: 'Description of Stage 33: O Pedrouzo - Santiago de Compostela',
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
            id: 'chapter_35',
            title: 'The End: The Cathedral of Santiago de Compostela',
            image: './path/to/image/source.png',
            description: 'Description of The End: The Cathedral of Santiago de Compostela',
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
