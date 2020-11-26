// Mapbox Interactive Storytelling, adapted from source: https://labs.mapbox.com/education/impact-tools/interactive-storytelling/ 

var config = {
    style: 'mapbox://styles/javimacaya/ckhy9pr8h1lqh19loy3tftcdz', // "Way Saint James - Northern Way" mapbox style
    accessToken: 'pk.eyJ1IjoiamF2aW1hY2F5YSIsImEiOiJja2ZpZndjMDgwOGFyMnBrdXIxbTlhNzhwIn0.dY2Ij8lB1KyP28WBXthpCg',
    showMarkers: false,
    theme: 'dark',
    alignment: 'right',
    title: 'The Way of Saint James - Northern Way',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By Javier Macaya Garcia', // author
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
                center: [-1.84667, 43.33137],
                zoom: 12.47,
                pitch: 60.00,
                bearing: -44.92
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
                center: [-2.06368, 43.29164],
                zoom: 12.47,
                pitch: 60.00,
                bearing: -9.72
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
                center: [-2.25841, 43.28764],
                zoom: 12.47,
                pitch: 60.00,
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
            id: 'chapter_5',
            title: 'Stage 4: Deba - Markina',
            image: './path/to/image/source.png',
            description: 'Description of Stage 4: Deba - Markina',
            location: {
                center: [-2.42684, 43.26777],
                zoom: 12.81,
                pitch: 60.00,
                bearing: -9.01
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
                center: [-2.60224, 43.28041],
                zoom: 12.45,
                pitch: 60.00,
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
            id: 'chapter_7',
            title: 'Stage 6: Gernika - Lezama',
            image: './path/to/image/source.png',
            description: 'Description of Stage 6: Gernika - Lezama',
            location: {
                center: [-2.74708, 43.29285],
                zoom: 12.64,
                pitch: 60.00,
                bearing: -29.60
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
                center: [-2.91142, 43.25645],
                zoom: 12.94,
                pitch: 60.00,
                bearing: 25.81
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
                center: [-3.00020, 43.28259],
                zoom: 13.01,
                pitch: 60.00,
                bearing: 57.01
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
                center: [-3.08303, 43.33805],
                zoom: 12.53,
                pitch: 60.00,
                bearing: -15.79
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
                center: [-3.32746, 43.39265],
                zoom: 12.16,
                pitch: 60.00,
                bearing: 14.61
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
                center: [-3.51135, 43.44710],
                zoom: 11.88,
                pitch: 60.00,
                bearing: 19.20
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
