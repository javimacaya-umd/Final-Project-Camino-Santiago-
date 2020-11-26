// Mapbox Interactive Storytelling, adapted from source: https://labs.mapbox.com/education/impact-tools/interactive-storytelling/ 

var config = {
    style: 'mapbox://styles/javimacaya/ckhy9pr8h1lqh19loy3tftcdz', // "Way Saint James - Northern Way" mapbox style
    accessToken: 'pk.eyJ1IjoiamF2aW1hY2F5YSIsImEiOiJja2ZpZndjMDgwOGFyMnBrdXIxbTlhNzhwIn0.dY2Ij8lB1KyP28WBXthpCg',
    showMarkers: false,
    theme: 'dark',
    alignment: 'right',
    title: 'The Way of Saint James - Northern Way',
    subtitle: '',
    byline: 'by Javier Macaya Garcia', // author
    footer: 'Source: source citations, etc.', // for citations
    chapters: [
        {
            id: 'chapter_1',
            title: 'Overview of The Way of Saint James - Northern Way',
            image: './path/to/image/source.png',
            description: 'Description of The Way of Saint James - Northern Way',
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
    ]
};
