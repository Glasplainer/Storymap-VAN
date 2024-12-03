var config = {
    style: 'mapbox://styles/mapbox/streets-v12',
        // leave commented to use Mapbox Standard Style
        accessToken: 'pk.eyJ1IjoiMmQ0dWQzYyIsImEiOiJjbDJud3dnYmUxMTB5M29zM3RvYmdkcjFtIn0.DZTmSXzQPG71GFFVI9JGbA',
        showMarkers: true,
        markerColor: '#3FB1CE',
        projection: 'globe',
        //Read more about available projections here
        //https://docs.mapbox.com/mapbox-gl-js/example/projections/
        inset: true,
        insetOptions: {
            markerColor: 'orange'
        },
        insetPosition: 'bottom-right',
        theme: 'dark',
        use3dTerrain: false, //set true for enabling 3D maps.
        auto: false,
        title: 'Vancouver:2006-2016',
        subtitle: 'A storymap showing how patterns of residence for recent immigrants changed in Vancouver, BC, between the censuses of 2006 and 2016, in relationship to facilities including wayfinder signs and Skytrain stations. ',
        byline: 'By GEOFFREY ZHEHAO LI',
        footer: 'Source: Statistics Canada&the City of Vancouver. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
        chapters: [
            {
                id: 'slug-style-id',
                alignment: 'left',
                hidden: false,
                title: 'Introduction',
                image: '',
                description: 'Between 2006 and 2016, Vancouver, as one of the major metropoleis of Western North America, had witnessed changes in demographic composition and further influx of immigrants, and distribution of public facilities, while also changing over time, might or might not have a straightforward relationship with the changes in demographic patterns. Here would be a storymap about this topic, using data from censuses of 2006 and 2016. Since long-form census for 2011 census was replaced by a voluntary survey, data for 2011 are not included',
                location: {
                    center: [-123.1164, 49.2596],
                    zoom: 8.5,
                    pitch: 60,
                    bearing: 0
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [ {layer: 'Wayfinding-map-guide',
                       opacity: 0,
                    duration: 5000
                   },
                                 
                    
                ],
                onChapterExit: [
                     
                     {
                        layer: 'Local-Area',
                         opacity: 1,
                        duration: 5000
                        } 
                     
                ]
            },
            {
                id: 'second-identifier',
                alignment: 'right',
                hidden: false,
                title: 'Number of recent immigrants in each part of Vancouver per 2016 census as proportion of the number in 2006',
                image: 'dcdscxdcxds.jpg',
                description: 'As shown in this bar chart, the changes in the number of immigrants in Vancouver, BC, between 2016 and 2006 are not even, ranging from decline for most local areas and increases for selective ones, with the most dramatic being West Point Grey. ',
                location: {
                    center: [-123.20343, 49.26769],
                    zoom: 8.5,
                    pitch: 60,
                    bearing: -43.2,
                    // flyTo additional controls-
                    // These options control the flight curve, making it move
                    // slowly and zoom out almost completely before starting
                    // to pan.
                    speed: 2, 
                    curve: 1,
                },
                mapAnimation: 'flyTo',
                rotateAnimation: true,
                callback: '',
                 onChapterEnter: [ {layer: 'Wayfinding-map-guide',
                       opacity: 0,
                    duration: 5000
                   },
                                 
                    
                ],
                onChapterExit: [
                     
                     {
                        layer: 'Local-Area',
                         opacity: 1,
                        duration: 5000
                        } ]
            },
            {
                id: 'third-identifier',
                alignment: 'left',
                hidden: false,
                title: 'Thereof---PRC(not including the SARs) and HK',
                image: 'Thereof--HK or Mainland.jpg',
                description: 'Being the largest immigrant groups in Canada, the succeeding waves of Chinese immigrants have shaped Vancouver and its vicinities deeply, and the recent wave would be no exception. Data indicated that compared to 2006, the number of HK-born recent immigrants in each part declined, while the number of PRC(not including SARs)-born individuals rose dramatically in West Point Grey',
                location: {
                    center: [-123.20343, 49.26769],
                    zoom: 12.52,
                    pitch: 8.01,
                    bearing: 0.00
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                 onChapterEnter: [ {layer: 'Wayfinding-map-guide',
                       opacity: 0,
                    duration: 5000
                   },
                                 
                    
                ],
                onChapterExit: [
                     
                     {
                        layer: 'Local-Area',
                         opacity: 0,
                        duration: 5000
                        } ]
            },
            {
        id: 'chapter-3a',
        alignment: 'left',
        hidden: false,
        title: 'Average household size pattern',
        image: 'ededededre.jpg',
        description: 'With the changes in recent immigrant number one might also expect changes in household size pattern.',
        location: {
            center: [-123.1164, 49.2596],
            zoom: 8.5,
            pitch: 60,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [],
        onChapterExit: [{layer: 'Local-Area',
                 opacity: 0, duration: 5000}]
    },
            {
                id: 'fourth-chapter',
                alignment: 'fully',
                hidden: false,
                title: 'Wayfinder map guides',
                image: '',
                description: 'The increase in number of recent immigrants would necessitate more wayfinding map stands for those not familiar with the city. This would mean that ideally there should be more such stands where more recent immigrants live, although the Downtown would likely require more such signs as well due to the sheer size of population movement into and out of downtown for various non-residential purposes. ',
                location: {
                    center: [-123.1129, 49.2619],
                    zoom: 8.888888,
                    pitch: 0,
                    bearing: 0
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [ 
                   {layer: 'Wayfinding-map-guide',
                       opacity: 1,
                    duration: 5000
                   }],
                onChapterExit: [ {layer: 'Wayfinding-map-guide',
                       opacity: 0,
                    duration: 5000
                   },
                    {
                     layer: 'Rapid-Transit-Stations',
                       opacity: 1,
                    duration: 5000
                    }]
            },
            {
                id: 'fifth-chapter',
                alignment: 'fully',
                hidden: false,
                title: 'Rapid Transit/Skytrain stations',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Vancouver_SkyTrain_Map.svg/1280px-Vancouver_SkyTrain_Map.svg.png',
                description: 'In spite of changes in immigrant distribution, skytrain lines and distribution of stations appeared to be relatively non-co-ordinated with the changes.',
                location: {
                    center: [-123.11143, 49.28555],
                    zoom: 8.88888,
                    pitch: 0,
                    bearing: 0
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [{
                     layer: 'Rapid-Transit-Stations',
                       opacity: 1,
                    duration: 5000
                    }],
                onChapterExit: [{
                     layer: 'Rapid-Transit-Stations',
                       opacity: 0,
                    duration: 5000
                    },
                                 {
                        layer: 'Local-Area',
                         opacity: 0,
                        duration: 5000
                        } ]
            }
        ]
    };
