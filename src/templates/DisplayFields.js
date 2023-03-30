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
    defaultValue: "Artifact",
    label: "Type",
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
    name: "LEVEL_DESC",
    label: "Level of Description",
  },

  {
    name: "physical_desc_occurrence",
    label: "Physical Description",
  },
  {
    name: "form_occurrence",
    label: "Type of Materials",
  },

  {
    name: "scope_occurrence",
    label: "Scope",
  },
  {
    name: "REFD",
    label: "ID",
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
    name: "OBJ_DESCRIPTION",
    label: "Description",
  },
  {
    name: "EARLY",
    label: "Dates",
  },
  {
    name: "SUB_CLASS",
    label: "Sub-Classification",
  },
  {
    name: "PRIMARY",
    label: "Primary",
  },

  {
    name: "ASSOC_FULLNAME",
    label: "Associated Person",
    component: "SearchFieldLink",
    data: { name: "ASSOC_FULLNAME", label: "Associated Person" },
  },
  {
    name: "ORG_ASSOC",
    label: "Associated Organization",
    component: "SearchFieldLink",
    data: { name: "ORG_ASSOC", label: "Associated Organization" },
  },
  {
    name: "ASSOC_EVENT",
    label: "Associated Event",
    component: "SearchFieldLink",
    data: { name: "ASSOC_EVENT", label: "Associated Event" },
  },
  {
    name: "PLACE_ASSOC_NAME",
    label: "Associated Place",
    component: "SearchFieldLink",
    data: { name: "PLACE_ASSOC_NAME", label: "Associated Place" },
  },
  {
    name: "SITE_NAME",
    label: "Associated Place",
    component: "SearchFieldLink",
    data: { name: "PLACE_ASSOC_NAME", label: "Associated Place" },
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
      "?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&APPLICATION=UNION_VIEW&language=144&REPORT=WEB_UNION_SUM",
  },
  {
    database: "Archives",
    searchURL:
      "?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&APPLICATION=UNION_VIEW&DATABASE=DESCRIPTION&language=144&REPORT=WEB_UNION_SUM_DESC",
  },
  {
    database: "Artifact",
    searchURL:
      "?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&APPLICATION=UNION_VIEW&DATABASE=COLLECTIONS&language=144&REPORT=WEB_UNION_SUM_COL",
  },
];

export const SORT_REPORTS_BY_DATABASE = {
  default: {
    UNION_VIEW: "WEB_UNION_SUM",
    COLLECTIONS: "WEB_UNION_SUM_COL",
    DESCRIPTION: "WEB_UNION_SUM_DESC",
  },
  date_asc: {
    UNION_VIEW: "WEB_UNION_SUM_ADATE",
    COLLECTIONS: "WEB_UNION_SUM_COL_ADATE",
    DESCRIPTION: "WEB_UNION_SUM_DESC_ADATE",
  },
  date_dsc: {
    UNION_VIEW: "WEB_UNION_SUM_DDATE",
    COLLECTIONS: "WEB_UNION_SUM_COL_DDATE",
    DESCRIPTION: "WEB_UNION_SUM_DESC_DDATE",
  },
  title_asc: {
    UNION_VIEW: "WEB_UNION_SUM_ATITLE",
    COLLECTIONS: "WEB_UNION_SUM_COL_ATITLE",
    DESCRIPTION: "WEB_UNION_SUM_DESC_ATITLE",
  },
  title_dsc: {
    UNION_VIEW: "WEB_UNION_SUM_DTITLE",
    COLLECTIONS: "WEB_UNION_SUM_COL_DTITLE",
    DESCRIPTION: "WEB_UNION_SUM_DESC_DTITLE",
  },
};
