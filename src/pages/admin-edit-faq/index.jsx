import PropTypes from "prop-types";
import useSWR, { useSWRConfig } from "swr";
import ComponentSkeleton from "pages/components-overview/ComponentSkeleton";
import { Grid, Typography, Button, FormHelperText, Stack } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/mui";

const pageBanner = {
  title: "Page Banner",
  type: "object",
  properties: {
    data: {
      type: "object",
      title: " Page Banner Components",
      properties: {
        heading: {
          type: "string",
          title: "Banner Heading",
        },
        description: {
          type: "string",
          title: "Banner Description",
        },
        searchURL: {
          type: "string",
          title: "Search Action URL",
        },
        bannerCarousel: {
          type: "array",
          title: "Banner Background Carousel",
          items: {
            type: "string",
          },
        },
      },
    },
  },
};

const faqSection = {
  title: "Section 1",
  type: "object",
  properties: {
    data: {
      type: "object",
      title: "Section Components",
      properties: {
        heading: {
          type: "string",
          title: "Section Heading",
        },
      },
    },
    children: {
      title: "Children Components",
      type: "array",
      items: {
        type: "object",
        properties: {
          component: {
            type: "string",
          },

          data: {
            type: "object",
            properties: {
              data: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    title: {
                      type: "string",
                    },
                    description: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

const orderingSection = {
  title: "Section 3",
  type: "object",
  properties: {
    data: {
      type: "object",
      title: "Section Components",
      properties: {
        heading: {
          type: "string",
          title: "Section Heading",
        },
        description: {
          type: "string",
          title: "Section Description",
        },
      },
    },
    children: {
      type: "array",
      items: {
        type: "object",
        properties: {
          data: {
            type: "object",
            properties: {
              thumbnail: {
                type: "string",
              },
              description: {
                type: "string",
              },
            },
          },
        },
      },
    },
  },
};

const schema = [pageBanner, faqSection, orderingSection];

const log = (type) => console.log.bind(console, type);
const fetcher = (url) => fetch(url).then((res) => res.json());

const AdminEditSite = (props) => {
  const BASE_URL = process.env.SERVER_BASE_URL || "http://localhost:3001";
  const { data, mutate, error, isLoading } = useSWR(
    `${BASE_URL}/page/faq`,
    fetcher
  );
  const sendUpdateData = async (newData) => {
    const noti = toast.loading("Please wait for data to be updated ...");
    await fetch(`${BASE_URL}/page/faq`, {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      toast.update(noti, {
        render: "Data has been updated successfully",
        type: "success",
        isLoading: false,
      });
      console.log(res);
    });
  };
  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  return (
    <ComponentSkeleton>
      <ToastContainer />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          {schema.map((e, i) => (
            <>
              <Form
                key={i}
                formData={data[i]}
                schema={e}
                validator={validator}
                onChange={log("changed")}
                onSubmit={({ formData }) => {
                  console.log(formData);
                  let newData = data;
                  data[i] = formData;
                  sendUpdateData(newData);
                }}
                onError={log("errors")}
              />
              <br />
            </>
          ))}
        </Grid>
      </Grid>
    </ComponentSkeleton>
  );
};

AdminEditSite.propTypes = {};

export default AdminEditSite;
