const ArchivesSearch = [{
    component: "Layout",
    children: [{
            component: "AdvancedSearchBanner",
            data: {
                bannerURL: "https://i.imgur.com/VZzGs4y.jpg",
                heading: "Search the Archives",
                description: "The Surrey Archives is home to Surrey's history. Original photos, maps, manuscripts, city and community records and an extensive reference collection are waiting for you. Search for and view over 50,000 photos on SAMOA.",
                toggleSearchFilter: {
                    data: {
                        description: "Include the following types of records in the search:",
                        data: [
                            { label: "Maps/Plans", field: "Map" },
                            { label: "Photographs", field: "IMAGE" },
                            { label: "Textual Records", field: "TEXT" },
                            { label: "Oral Histories", field: "HISTORY" },

                        ]
                    }
                },
                collapseSearchFilter: {
                    data: {
                        description: "More search options",
                        data: [{
                                title: "Field 1",
                                field: "",
                                data: [
                                    { label: "Test 1", value: "123" },
                                    { label: "Test 2", value: "123" },
                                    { label: "Test 3", value: "123" },
                                    { label: "Test 4", value: "123" },
                                    { label: "Test 5", value: "123" },
                                    { label: "Test 6", value: "123" },
                                    { label: "Test 7", value: "123" },
                                ],
                            },


                            {
                                title: "Field 2",
                                field: "",
                                data: [
                                    { label: "Test 1", value: "123" },
                                    { label: "Test 2", value: "123" },
                                    { label: "Test 3", value: "123" },
                                    { label: "Test 4", value: "123" },
                                    { label: "Test 5", value: "123" },
                                    { label: "Test 6", value: "123" },
                                    { label: "Test 7", value: "123" },
                                ]
                            },
                            {
                                title: "Field 3",
                                field: "",
                                data: [
                                    { label: "Test 1", value: "123" },
                                    { label: "Test 2", value: "123" },
                                    { label: "Test 3", value: "123" },
                                    { label: "Test 4", value: "123" },
                                    { label: "Test 5", value: "123" },
                                    { label: "Test 6", value: "123" },
                                    { label: "Test 7", value: "123" },
                                ]
                            },
                            {
                                title: "Field 4",
                                field: "",
                                data: [
                                    { label: "Test 1", value: "123" },
                                    { label: "Test 2", value: "123" },
                                    { label: "Test 3", value: "123" },
                                    { label: "Test 4", value: "123" },
                                    { label: "Test 5", value: "123" },
                                    { label: "Test 6", value: "123" },
                                    { label: "Test 7", value: "123" },
                                ]
                            }
                        ]
                    }

                }
            },
        },
        {
            component: "Section",
            data: {
                heading: "Featured Records",
            },
            children: [{
                component: "ImageCarousel",
                data: {
                    data: [{
                            "thumbnail": "https://picsum.photos/400",
                            "title": "Library"
                        },
                        {
                            "thumbnail": "https://picsum.photos/450",
                            "title": "Books"
                        },
                        {
                            "thumbnail": "https://picsum.photos/500",
                            "title": "Library"
                        }, {
                            "thumbnail": "https://picsum.photos/550",
                            "title": "Library"
                        },

                    ]
                }
            }]
        },
        {
            component: "Section",
            data: {
                heading: "Related Link",
            },
            children: [{
                    component: "MediaCard",
                    data: {
                        "thumbnail": "https://www.surrey.ca/sites/default/files/styles/21x9_1920w/public/2020-12/The%20bridge%20under%20construction.jpg?h=07298254&itok=1Bq9MemN",
                        "title": "",
                        description: "Collection Overview"
                    },
                },
                {
                    component: "MediaCard",
                    data: {
                        "thumbnail": "https://www.surrey.ca/sites/default/files/styles/21x9_1920w/public/2021-04/Flamingo%20Hotel%20and%20surround%20businesses.jpg?h=8e51b07f&itok=wVSDxN8d",
                        "title": "",
                        description: "Public Programs & Outreach"
                    }
                },
                {
                    component: "MediaCard",
                    data: {
                        "thumbnail": "https://www.surrey.ca/sites/default/files/styles/3x2_1200w/public/2020-12/The%20Surrey%20Archives.jpg?h=10d202d3&itok=lVcLULzv",
                        "title": "",
                        description: "Surrey Archives"
                    }
                }, {
                    component: "MediaCard",
                    data: {
                        "thumbnail": "https://www.surrey.ca/sites/default/files/styles/large/public/2022-10/Surrey%20Archives%201941.JPG?itok=KxaEA-BJ",
                        "title": "",
                        description: "Japanese Canadian History"
                    }
                }
            ]
        }


    ]
}]

export default ArchivesSearch;