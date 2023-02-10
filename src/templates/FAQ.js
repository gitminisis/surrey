 const FAQ = [{
     component: 'Layout',
     children: [{
             component: "SimpleSearchBanner",
             data: {
                 bannerURL: "https://www.surrey.ca/sites/default/files/styles/21x9_1920w/public/2021-05/SeniorOnTablet.jpeg?h=93ff39ef&itok=rNlCoNyd",
                 heading: "Frequently Asked Questions",
                 description: "We are here to answer your questions",

             }
         }, {
             component: "Section",
             data: {
                 heading: "ABOUT US",
                 description: "Heritage Services is situated on the unceded and ancestral lands of the Salish peoples, including the q̓ic̓əy̓ (Katzie), q̓ʷɑ:n̓ƛ̓ən̓ (Kwantlen), and se’mya’me (Semiahmoo) Nations. A division of the City of Surrey’s Parks, Recreation and Culture Department, Heritage Services operates the facilities and services located at the Museum of Surrey, Historic Stewart Farm, and the City of Surrey Archives. In addition, Heritage Services facilitates the city-wide distribution and delivery of heritage interpretive activities. We hope to see you at our facilities soon!",

             },
            //  children: [{
            //          component: 'DescriptionCard',
            //          data: {
            //              position: 0,
            //              "thumbnail": "https://i.imgur.com/YX6yWsW.jpg",
            //              "heading": "Surrey Archives",
            //              "description": "The Surrey Archives is home to the documentary history of the City of Surrey. Its holdings include, but are not limited to, photographs, manuscripts, maps, architectural plans, audio-visual materials and an extensive reference collection. Located in one of the City's premier heritage buildings, the 1912 Municipal Hall in Cloverdale, the Archives preserves and provides access to records of Surrey's residents, community groups, businesses, and government",
            //              "title": "Archives Collection",
            //              url: "/",
            //              urlTitle: "Visit The Archive"
            //          },
            //      },
            //      {
            //          component: 'DescriptionCard',
            //          data: {
            //              position: 1,
            //              "thumbnail": "https://i.imgur.com/YX6yWsW.jpg",
            //              "heading": "Historic Stewart Farm",
            //              "description": "The Historic Stewart Farm is a designated heritage site, including eight historic buildings, located in Elgin Heritage Park in South Surrey. The original 1894 Farmhouse and various farm buildings interpret life in Surrey between 1890 and 1920 and provide exhibitions and programs to depict the life and technology of that period.",
            //              "title": "Artifact Collection",
            //              url: "/",
            //              urlTitle: "Visit The Artifact"
            //          },
            //      }
            //  ]
         },

        //  {
        //      component: "Section",
        //      data: {
        //          heading: "Choose the topics"
        //      },
        //      children: [{
        //              component: "DescriptionBox",
        //              data: {
        //                  heading: "How to search",
        //                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        //                  url: "/",
        //                  urlTitle: "Learn more",
        //                  icon: "https://cdn-icons-png.flaticon.com/512/3524/3524335.png",
        //                  iconLabel: "Article"
        //              }
        //          },

        //          {
        //              component: "DescriptionBox",
        //              data: {
        //                  heading: "How to search",
        //                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        //                  url: "/",
        //                  urlTitle: "Learn more",
        //                  icon: "https://cdn-icons-png.flaticon.com/512/3524/3524335.png",
        //                  iconLabel: "Article"
        //              }
        //          }, {
        //              component: "DescriptionBox",
        //              data: {
        //                  heading: "How to search",
        //                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        //                  url: "/",
        //                  urlTitle: "Learn more",
        //                  icon: "https://cdn-icons-png.flaticon.com/512/3524/3524335.png",
        //                  iconLabel: "Article"
        //              }
        //          }, {
        //              component: "DescriptionBox",
        //              data: {
        //                  heading: "How to search",
        //                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        //                  url: "/",
        //                  urlTitle: "Learn more",
        //                  icon: "https://cdn-icons-png.flaticon.com/512/3524/3524335.png",
        //                  iconLabel: "Article"
        //              }
        //          }, {
        //              component: "DescriptionBox",
        //              data: {
        //                  heading: "How to search",
        //                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        //                  url: "/",
        //                  urlTitle: "Learn more",
        //                  icon: "https://cdn-icons-png.flaticon.com/512/3524/3524335.png",
        //                  iconLabel: "Article"
        //              }
        //          }, {
        //              component: "DescriptionBox",
        //              data: {
        //                  heading: "How to search",
        //                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        //                  url: "/",
        //                  urlTitle: "Learn more",
        //                  icon: "https://cdn-icons-png.flaticon.com/512/3524/3524335.png",
        //                  iconLabel: "Article"
        //              }
        //          }, {
        //              component: "DescriptionBox",
        //              data: {
        //                  heading: "How to search",
        //                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        //                  url: "/",
        //                  urlTitle: "Learn more",
        //                  icon: "https://cdn-icons-png.flaticon.com/512/3524/3524335.png",
        //                  iconLabel: "Article"
        //              }
        //          }, {
        //              component: "DescriptionBox",
        //              data: {
        //                  heading: "How to search",
        //                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        //                  url: "/",
        //                  urlTitle: "Learn more",
        //                  icon: "https://cdn-icons-png.flaticon.com/512/3524/3524335.png",
        //                  iconLabel: "Article"
        //              }
        //          },
        //      ]
        //  },
         {
             component: "Section",
             data: {
                 heading: "FAQ's"
             },
             children: [{
                 component: "Accordion",
                 data: {
                     data: [
                         { title: "How do I use this website?", description: "Interested in a location, person, business, or topic from Surrey's past? Type your keyword into a search bar. Explore the entire Heritage Collections by using the search bar on the Home page or search the Archives or Artifact Collections separately on their respective pages. On the right-hand side of the search results page, results can be organized by title or date using the SORT pull-down menu, or they can be filtered by date and/or material type by using the FILTER options. To copy the URL of a specific record, be sure to click on the “Permanent Link” hyperlink at the bottom of each record." },
                         { title: "Should I use the “Search Both Archives and Artifacts Collections,” or the specific Archives Search Page / Artifacts Search Page?", description: "We recommend using the “Search Both Archives and Artifacts Collections” if you’re interested in a variety of formats. Click on the Archives Search Page if you only want to view documents, photographs, audio recordings, or maps. Just interested in objects like clothing, furniture, and tools? Use the Artifacts Search Page." },
                         { title: "I can’t find what I’m looking for - what do I do?", description: "Please contact archives@surrey.ca or 604.502.6459 and we’ll be happy to help you find the information you’re looking for. We are always adding to the database but only a fragment of our collections, spanning millions of items, are available online." },

                         { title: "Can I see these things in person?", description: "Yes, you can! Items in the archival collection can be seen at the Surrey Archives, and objects in the Artifacts Collection may be viewed at the Museum of Surrey or the Historic Stewart Farm. We encourage you to get in touch with staff to ensure the items are available for viewing during your visit." },

                         { title: "I’ve spotted an error. Can I tell someone?", description: "Please do! We appreciate feedback and always welcome corrections and comments as they help expand our shared knowledge of Surrey’s past and maintain accuracy. Contact us at archives@surrey.ca or 604.502.6459 and your message will be directed to the appropriate staff member." },

                         { title: "Where do the Heritage Collections come from?", description: "The Surrey Archives holds records created by people who live, work, and gather in Surrey, along with records made by our civic government. Community records have been graciously donated to the Archives by Surrey’s residents, businesses, organizations and associations. Civic records are transferred to the archives from Surrey City Hall. Acquisitions to the collection are led by the City of Surrey’s Records Retention Schedule and the Archives’ Collections Policy. For the most part, artifacts in the Heritage Collection are donated by Surrey residents or businesses. The Museums’ Collections Policy guides the acquisition of new items and outlines criteria for acquisition. The Heritage Collection has been named the official repository for some Provincially-designated archaeological excavations and hold those items in public trust." },

                         { title: "I have something I think you might want. How can I donate?", description: "Thank you so much for considering Surrey Heritage Collections. We look forward to hearing from you and learning about your item(s). Please email HeritageCollections@surrey.ca to start the donation process." },

                         { title: "I want to learn about how to best care for my family/community items – how can I do this?", description: "There are some useful online resources to help get you started: -	The Canadian Conversation Institute offers a wide range of publications on the care of archival records and heritage materials. -	The Canadian Heritage Information Network provides resources on digital preservation and collections management. -	The North East Document Conservation Centre has various online leaflets for the care of archival and library resources. Please contact us at HeritageCollections@surrey.ca for further information." },

                         


                     ]
                 }
             }]
         },

         {
            component: "Section",
            data:{
                heading:"Ordering Archival Records",
                description:"You can purchase copies of photographs, maps, and recordings from the archival collection by following these steps:"
            },
            children:[
              {
                component: 'DescriptionCard',
                data: {
                    position: 0,
                    "thumbnail": "http://surrey.minisisinc.com/surrey/images/ordering-1.jpg",
                    "description": "Search for items with the Archives search page.",
                    textAlign:'left'
                },
              },
              {
                component: 'DescriptionCard',
                data: {
                    position: 0,
                    "thumbnail": "http://surrey.minisisinc.com/surrey/images/ordering-2.jpg",
                    "description": "Click on the item that you are interested in on the summary search results page.",
                    textAlign:'left'
                },
              },
              {
                component: 'DescriptionCard',
                data: {
                    position: 0,
                    "thumbnail": "http://surrey.minisisinc.com/surrey/images/ordering-3.jpg",
                    "description": "When the detailed record view comes up, click on the order button at the end of the record and ﬁll out the form. We will contact you to complete your order.",
                    textAlign:'left'
                },
              }
            ]
         }

     ]
 }]

 export default FAQ;