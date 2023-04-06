const FAQ = [{
    component: "Layout",
    data: {
        active: "FAQ",
    },  
    children: [{
            component: "SimpleSearchBanner",
            data: {
                bannerCarousel: [
                    "https://www.surrey.ca/sites/default/files/styles/21x9_1920w/public/2021-05/SeniorOnTablet.jpeg?h=93ff39ef&itok=rNlCoNyd",
                ],
                searchURL: "/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&ERRMSG=[MESSAGES]374.htm&APPLICATION=UNION_VIEW&language=144&REPORT=WEB_UNION_SUM",

                heading: "About Us",
                description: "Heritage Services is situated on the unceded and ancestral lands of the Salish peoples, including the q̓ic̓əy̓ (Katzie), q̓ʷɑ:n̓ƛ̓ən̓ (Kwantlen), and se’mya’me (Semiahmoo) Nations. A division of the City of Surrey’s Parks, Recreation and Culture Department, Heritage Services operates the facilities and services located at the Museum of Surrey, Historic Stewart Farm, and the City of Surrey Archives. In addition, Heritage Services facilitates the city-wide distribution and delivery of heritage interpretive activities. We hope to see you at our facilities soon!",
            },
        },
        // {
        //   component: "Section",
        //   data: {
        //     heading: "ABOUT US",
        //     description:
        //       "Heritage Services is situated on the unceded and ancestral lands of the Salish peoples, including the q̓ic̓əy̓ (Katzie), q̓ʷɑ:n̓ƛ̓ən̓ (Kwantlen), and se’mya’me (Semiahmoo) Nations. A division of the City of Surrey’s Parks, Recreation and Culture Department, Heritage Services operates the facilities and services located at the Museum of Surrey, Historic Stewart Farm, and the City of Surrey Archives. In addition, Heritage Services facilitates the city-wide distribution and delivery of heritage interpretive activities. We hope to see you at our facilities soon!",
        //   },
        // },

        {
            component: "Section",
            data: {
                heading: "FAQ's",
            },
            children: [{
                component: "Accordion",
                data: {
                    data: [{
                            title: "How do I use this website?",
                            description: "Interested in a location, person, business, or topic from Surrey's past? Type your keyword into a search bar. Explore the entire Heritage Collections by using the search bar on the Home page or search the Archives or Artifact Collections separately on their respective pages. On the right-hand side of the search results page, results can be organized by title or date using the SORT pull-down menu, or they can be filtered by date and/or material type by using the FILTER options. To copy the URL of a specific record, be sure to click on the “Permanent Link” hyperlink at the bottom of each record.<a href='/archives.html'>Archives</a>",
                        },
                        {
                            title: "Should I use the “Search Both Archives and Artifacts Collections,” or the specific Archives Search Page / Artifacts Search Page?",
                            description: "We recommend using the “Search Both Archives and Artifacts Collections” if you’re interested in a variety of formats. Click on the Archives Search Page if you only want to view documents, photographs, audio recordings, or maps. Just interested in objects like clothing, furniture, and tools? Use the Artifacts Search Page.",
                        },
                        {
                            title: "I can’t find what I’m looking for - what do I do?",
                            description: "Please contact archives@surrey.ca or 604.502.6459 and we’ll be happy to help you find the information you’re looking for. We are always adding to the database but only a fragment of our collections, spanning millions of items, are available online.",
                        },

                        {
                            title: "Can I see these things in person?",
                            description: "Yes, you can! Items in the archival collection can be seen at the Surrey Archives, and objects in the Artifacts Collection may be viewed at the Museum of Surrey or the Historic Stewart Farm. We encourage you to get in touch with staff to ensure the items are available for viewing during your visit.",
                        },

                        {
                            title: "I’ve spotted an error. Can I tell someone?",
                            description: "Please do! We appreciate feedback and always welcome corrections and comments as they help expand our shared knowledge of Surrey’s past and maintain accuracy. Contact us at archives@surrey.ca or 604.502.6459 and your message will be directed to the appropriate staff member.",
                        },

                        {
                            title: "Where do the Heritage Collections come from?",
                            description: "The Surrey Archives holds records created by people who live, work, and gather in Surrey, along with records made by our civic government. Community records have been graciously donated to the Archives by Surrey’s residents, businesses, organizations and associations. Civic records are transferred to the archives from Surrey City Hall. Acquisitions to the collection are led by the City of Surrey’s Records Retention Schedule and the Archives’ Collections Policy. For the most part, artifacts in the Heritage Collection are donated by Surrey residents or businesses. The Museums’ Collections Policy guides the acquisition of new items and outlines criteria for acquisition. The Heritage Collection has been named the official repository for some Provincially-designated archaeological excavations and hold those items in public trust.",
                        },

                        {
                            title: "I have something I think you might want. How can I donate?",
                            description: "Thank you so much for considering Surrey Heritage Collections. We look forward to hearing from you and learning about your item(s). Please email HeritageCollections@surrey.ca to start the donation process.",
                        },

                        {
                            title: "I want to learn about how to best care for my family/community items – how can I do this?",
                            description: "There are some useful online resources to help get you started: -	The Canadian Conversation Institute offers a wide range of publications on the care of archival records and heritage materials. -	The Canadian Heritage Information Network provides resources on digital preservation and collections management. -	The North East Document Conservation Centre has various online leaflets for the care of archival and library resources. Please contact us at HeritageCollections@surrey.ca for further information.",
                        },
                    ],
                },
            }, ],
        },

        {
            component: "Section",
            data: {
                heading: "Ordering Archival Records",
                description: "You can purchase copies of photographs, maps, and recordings from the archival collection by following these steps:",
            },
            children: [{
                    component: "DescriptionCard",
                    data: {
                        position: 0,
                        thumbnail: "http://surrey.minisisinc.com/surrey/images/ordering-1.jpg",
                        description: "Search for items with the Archives search page.",
                        textAlign: "left",
                    },
                },
                {
                    component: "DescriptionCard",
                    data: {
                        position: 0,
                        thumbnail: "http://surrey.minisisinc.com/surrey/images/ordering-2.jpg",
                        description: "Click on the item that you are interested in on the summary search results page.",
                        textAlign: "left",
                    },
                },
                {
                    component: "DescriptionCard",
                    data: {
                        position: 0,
                        thumbnail: "http://surrey.minisisinc.com/surrey/images/ordering-3.jpg",
                        description: "When the detailed record view comes up, click on the order button at the end of the record and ﬁll out the form. We will contact you to complete your order.",
                        textAlign: "left",
                    },
                },
            ],
        },
    ],
}, ];

export default FAQ;