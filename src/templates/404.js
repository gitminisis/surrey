const Home = [{
    component: "Layout",
    children: [{
            component: "SimpleSearchBanner",
            data: {
                bannerURL: "https://www.surrey.ca/sites/default/files/styles/21x9_1920w/public/2022-10/fall-trees-in-surrey.jpg?h=56d0ca2e&itok=YzKjACHG",
                heading: "Surrey Archives and Museums Online Access",
                description: "Browse all of the City's Heritage Collections with a union search, or search the Archives or Artifact Collections separately. Don't miss the featured items from both the Archives and Artifact collection below."
            }
        },

        {
            component: "Section",
            data: {
                heading: "Page Not Found",
            },
            children: []
        },

    ]
}]
export default Home;