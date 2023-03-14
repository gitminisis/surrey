import Video from "yet-another-react-lightbox/plugins/video";

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
    maxLength: 200,
  },
];

export const DESCRIPTION_GENERAL_DETAIL_FIELD = [
  {
    name: "TITLE",
    label: "Title",
    main: true,
  },
  {
    name: "DATE_SEARCH",
    label: "Date(s)",
    gridDisplay: false,
  },

  {
    name: "REFD",
    label: "ID",
  },
  {
    name: "LEVEL_DESC",
    label: "Level of Description",
  },
];

export const DESCRIPTION_OVERVIEW_DETAIL_FIELD = [
  {
    name: "form_occurrence",
    label: "Type of Materials",
  },

  {
    name: "physical_desc_occurrence",
    label: "Physical Description",
  },

  {
    name: "scope_occurrence",
    label: "Scope",
  },

  {
    name: "subject_occurrence",
    label: "Subject(s)",
  },
  {
    name: "name_subject_occurrence",
    label: "Name Subject(s)",
  },
  {
    name: "SITE_NAME",
    label: "Area/Neighbourhood",
  },
  {
    name: "D_RESTRICTION",
    label: "Restrictions",
  },
];

export const COLLECTIONS_GENERAL_DETAIL_FIELD = [
  {
    name: "LEGAL_TITLE",
    label: "Title",
    main: true,
  },
  {
    name: "ACCESSION_NUMBER",
    label: "Accession Number",
  },
  {
    name: "COLLECTION",
    label: "Collection",
  },
  {
    name: "EARLY",
    label: "Dates",
  },
  {
    name: "OBJECT_NAME",
    label: "Object Name(s)",
  },
];

export const COLLECTIONS_OVERVIEW_DETAIL_FIELD = [
  {
    name: "OBJ_DESCRIPTION",
    label: "Description",
  },
  {
    name: "ASSOC_FULLNAME",
    label: "Associated Person",
  },

  {
    name: "ORG_ASSOC",
    label: "Associated Organization",
  },
  {
    name: "ASSOC_EVENT",
    label: "Associated Event",
  },
  {
    name: "PLACE_ASSOC_NAME",
    label: "Associated Place",
  },
  {
    name: "SITE_NAME",
    label: "Associated Place",
  },
];

export const COLLECTIONS_CHENHALL_DETAIL_FIELD = [
  {
    name: "SUB_CLASS",
    label: "Sub-Classification",
  },
  {
    name: "PRIMARY",
    label: "Primary",
  },
];

export const MEDIA_THUMBNAIL_FIELD = [
  {
    database: "COLLECTIONS",
    image: "m_im_access_link",
    audio: "m_ad_access_link",
    video: "m_vd_access_link",
    text: "m_tx_access_link",
  },
  {
    database: "DESCRIPTION",
    image: "a_im_access_link",
    audio: "a_ad_access_link",
    video: "a_vd_access_link",
    text: "a_tx_access_link",
  },
];

export const GENERAL_SEARCHBOX_DBLIST = [
  {
    database: "Union Search",
    searchURL:
      "/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&APPLICATION=UNION_VIEW&language=144&REPORT=WEB_UNION_SUM",
  },
  {
    database: "Archives",
    searchURL:
      "/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC",
  },
  {
    database: "Artifact",
    searchURL:
      "/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&APPLICATION=UNION_VIEW&DATABASE=COLLECTIONS&language=144&REPORT=WEB_UNION_SUM_COL",
  },
];
