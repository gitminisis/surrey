import React from "react";
import Home from "../pages/Home";

export default {
  title: "Example/Home",
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const HomePageExample1 = Template.bind({});

HomePageExample1.args = {
  template: [
    {
      component: "Layout",
      children: [
        {
          component: "SimpleSearchBanner",
          data: {
            bannerURL:
              "https://www.surrey.ca/sites/default/files/styles/21x9_1920w/public/2022-10/fall-trees-in-surrey.jpg?h=56d0ca2e&itok=YzKjACHG",
            heading: "Surrey Archives and Museums Online Access",
            description:
              "Browse all of the City's Heritage Collections with a union search, or search the Archives or Artifact Collections separately. Don't miss the featured items from both the Archives and Artifact collection below.",
          },
        },
        {
          component: "Section",
          data: {
            heading: "ABOUT US",
            description:
              "The Heritage Services Division of the Parks, Recreation & Culture Department operates the facilities and services located at the Surrey Museum, Historic Stewart Farm and the City of Surrey Archives. In addition, Heritage Services facilitates the city-wide distribution and delivery of heritage interpretive activities. We hope to see you at our facilities soon!",
            url: "/",
            urlTitle: "View More",
          },
          children: [
            {
              component: "DescriptionCard",
              data: {
                position: 0,
                thumbnail: "https://i.imgur.com/YX6yWsW.jpg",
                title: "Surrey Archives",
                heading: "Archives Collection",
                description:
                  "The Surrey Archives is home to the documentary history of the City of Surrey. Its holdings include, but are not limited to, photographs, manuscripts, maps, architectural plans, audio-visual materials and an extensive reference collection. Located in one of the City's premier heritage buildings, the 1912 Municipal Hall in Cloverdale, the Archives preserves and provides access to records of Surrey's residents, community groups, businesses, and government",
                url: "/",
                urlTitle: "View More",
              },
            },
          ],
        },
        {
          component: "Section",
          data: {
            heading: "SURREY ARCHIVES",
            description:
              "The Archives contains photos, maps, textual records, oral histories, community records, and city records.",
            url: "/",
            urlTitle: "View More",
          },
          children: [
            {
              component: "ImageCarousel",
              data: {
                data: [
                  {
                    thumbnail: "https://picsum.photos/400",
                    title: "Library",
                  },
                  {
                    thumbnail: "https://picsum.photos/450",
                    title: "Books",
                  },
                  {
                    thumbnail: "https://picsum.photos/500",
                    title: "Library",
                  },
                ],
              },
            },
          ],
        },
        {
          component: "Section",
          data: {
            heading: "SURREY ARTIFACT COLLECTIONS",
            description:
              "The Artifact Collection feature archaeology, ethnology, and human history materials that reflect the history of Surrey.",
            url: "/",
            urlTitle: "View More",
          },
          children: [
            {
              component: "TagCard",
              data: {
                tag: "Item",
                title: "Nunc consequat interdum varius",
                description: "John Doe",
                thumbnail: "https://picsum.photos/510",
              },
            },

            {
              component: "TagCard",
              data: {
                tag: "Document",
                title: "Aliquam malesuada bibendum arcu",
                description: "Jane Doe",
                thumbnail: "https://picsum.photos/520",
              },
            },
          ],
        },
        {
          component: "Section",
          data: {
            heading: "FEATURED COLLECTION",
            description:
              "Featured Items from the Archives and Artifact Collections",
            url: "/",
            urlTitle: "View More",
          },
          children: [
            {
              component: "ImageMasonry",
              data: {
                data: [
                  {
                    thumbnail: "https://picsum.photos/400/300",
                    title: "Library",
                    url: "/",
                    urlTitle: "View More",
                  },
                  {
                    thumbnail: "https://picsum.photos/410/400",
                    title: "Library",
                    url: "/",
                    urlTitle: "View More",
                  },
                  {
                    thumbnail: "https://picsum.photos/430/500",
                    title: "Library",
                    url: "/",
                    urlTitle: "View More",
                  },
                  {
                    thumbnail: "https://picsum.photos/440/600",
                    title: "Library",
                    url: "/",
                    urlTitle: "View More",
                  },
                  {
                    thumbnail: "https://picsum.photos/450/700",
                    title: "Library",
                    url: "/",
                    urlTitle: "View More",
                  },
                  {
                    thumbnail: "https://picsum.photos/460/800",
                    title: "Library",
                    url: "/",
                    urlTitle: "View More",
                  },
                  {
                    thumbnail: "https://picsum.photos/470/900",
                    title: "Library",
                    url: "/",
                    urlTitle: "View More",
                  },
                  {
                    thumbnail: "https://picsum.photos/480/350",
                    title: "Library",
                    url: "/",
                    urlTitle: "View More",
                  },
                  {
                    thumbnail: "https://picsum.photos/490/450",
                    title: "Library",
                    url: "/",
                    urlTitle: "View More",
                  },
                ],
              },
            },
          ],
        },
        {
          component: "Section",
          data: {
            heading: "COLLECTION MAP",
            description:
              "Featured Items from the Archives and Artifact Collections",
            url: "/",
            urlTitle: "View More",
          },
          children: [],
        },
      ],
    },
  ],
};

export const HomePageExample2 = Template.bind({});

HomePageExample2.args = {
  template: [
    {
      component: "Layout",
      children: [
        {
          component: "SimpleSearchBanner",
          data: {
            bannerURL:
              "https://www.surrey.ca/sites/default/files/styles/21x9_1920w/public/2022-10/fall-trees-in-surrey.jpg?h=56d0ca2e&itok=YzKjACHG",
            heading: "Surrey Archives and Museums Online Access",
            description:
              "Browse all of the City's Heritage Collections with a union search, or search the Archives or Artifact Collections separately. Don't miss the featured items from both the Archives and Artifact collection below.",
          },
        },

        {
          component: "Section",
          data: {
            heading: "SURREY ARCHIVES",
            description:
              "The Archives contains photos, maps, textual records, oral histories, community records, and city records.",
            btnURL: "/archive",
            btnTitle: "Explore",
          },
          children: [
            {
              component: "ImageCarousel",
              data: {
                data: [
                  {
                    thumbnail: "https://picsum.photos/400",
                    title: "Library",
                  },
                  {
                    thumbnail: "https://picsum.photos/450",
                    title: "Books",
                  },
                  {
                    thumbnail: "https://picsum.photos/500",
                    title: "Library",
                  },
                ],
              },
            },
          ],
        },
        {
          component: "Section",
          data: {
            heading: "SURREY ARTIFACT COLLECTIONS",
            description:
              "The Artifact Collection feature archaeology, ethnology, and human history materials that reflect the history of Surrey.",
            btnURL: "/artifact",
            btnTitle: "Explore",
          },
          children: [
            {
              component: "ImageCarousel",
              data: {
                data: [
                  {
                    thumbnail: "https://picsum.photos/400",
                    title: "Library",
                  },
                  {
                    thumbnail: "https://picsum.photos/450",
                    title: "Books",
                  },
                  {
                    thumbnail: "https://picsum.photos/500",
                    title: "Library",
                  },
                ],
              },
            },
          ],
        },
        {
          component: "Section",
          data: {
            heading: "FEATURED COLLECTION",
            description:
              "Featured Items from the Archives and Artifact Collections",
          },
          children: [
            {
              component: "ImageMasonry",
              data: {
                data: [
                  {
                    thumbnail: "https://picsum.photos/400/300",
                    title: "Library",
                    url: "/",
                    urlTitle: "View More",
                  },
                  {
                    thumbnail: "https://picsum.photos/410/400",
                    title: "Library",
                    url: "/",
                    urlTitle: "View More",
                  },
                  {
                    thumbnail: "https://picsum.photos/430/500",
                    title: "Library",
                    url: "/",
                    urlTitle: "View More",
                  },
                  {
                    thumbnail: "https://picsum.photos/440/600",
                    title: "Library",
                    url: "/",
                    urlTitle: "View More",
                  },
                  {
                    thumbnail: "https://picsum.photos/450/700",
                    title: "Library",
                    url: "/",
                    urlTitle: "View More",
                  },
                  {
                    thumbnail: "https://picsum.photos/460/800",
                    title: "Library",
                    url: "/",
                    urlTitle: "View More",
                  },
                  {
                    thumbnail: "https://picsum.photos/470/900",
                    title: "Library",
                    url: "/",
                    urlTitle: "View More",
                  },
                  {
                    thumbnail: "https://picsum.photos/480/350",
                    title: "Library",
                    url: "/",
                    urlTitle: "View More",
                  },
                  {
                    thumbnail: "https://picsum.photos/490/450",
                    title: "Library",
                    url: "/",
                    urlTitle: "View More",
                  },
                ],
              },
            },
          ],
        },
       
      ],
    },
  ],
};
