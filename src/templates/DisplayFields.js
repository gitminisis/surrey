export const DESCRIPTION_SUMMARY_FIELD = [
  {
    name: "TITLE",
    label: "Title",
    main: true,
  },

  {
    name: "DATE_SEARCH",
    label: "Dates",
    gridDisplay: false,
  },

  {
    name: "form_occurrence",
    label: "Type",
    gridDisplay: false,
  },

  {
    name: "REFD",
    label: "ID",
  },
];

export const COLLECTIONS_SUMMARY_FIELD = [
  {
    name: "LEGAL_TITLE",
    label: "Title",
    main: true,
  },

  {
    name: "EARLY",
    label: "Dates",
    gridDisplay: false,
  },
  {
    name: "ACCESSION_NUMBER",
    label: "ID",
  },
  {
    name: "OBJ_DESCRIPTION",
    label: "Description",
    gridDisplay: false,
  },
];

export const MEDIA_THUMBNAIL_FIELD = [
  {
    database: "COLLECTIONS",
    fields: "m_im_access_link",
  },
  {
    database: "DESCRIPTION",
    fields: "a_im_access_link",
  },
];
