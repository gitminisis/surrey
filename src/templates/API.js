export { default as SORT_REPORTS_BY_DATABASE }
from "./json/sortReportsByDatabase.json";
export { default as GENERAL_SEARCHBOX_DBLIST }
from "./json/generalSearchboxDBList.json";
export { default as DESCRIPTION_SUMMARY_FIELD }
from "./json/descriptionSummaryField.json";
export { default as COLLECTIONS_SUMMARY_FIELD }
from "./json/collectionsSummaryField.json";

export const AUTHORITY_DATABASE_FIELD = {
    PEOPLE_VAL: [
        { name: "FULLNAME2", label: "Full Name" },
        { name: "PERSON_DOB", label: "Date of birth" },
        { name: "PERSON_DOD", label: "Date of death" },
        { name: "PERSON_CITY", label: "City" },
        { name: "PERSON_COUNTRY", label: "Country" },
    ],
};

export const DESCRIPTION_GENERAL_DETAIL_FIELD = [{
        name: "TITLE",
        label: "Title",
        main: true,
    },
    {
        name: "DATE_CR_INC",
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
    {
        name: "a_tx_access",
        label: "Textual Document",
        component: "RecordToURLField",
        data: {
            name: "a_tx_access",
            label: "Textual Document",
        }
    },
];

export const DESCRIPTION_OVERVIEW_DETAIL_FIELD = [{
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

export const COLLECTIONS_GENERAL_DETAIL_FIELD = [{
        name: "LEGAL_TITLE",
        label: "Title",
        main: true,
    },
    {
        name: "OBJ_DESCRIPTION",
        label: "Description",
        showMore: true,
    },
    {
        name: "EARLY",
        label: "Dates",
    },
    {
        name: "SUB_CLASSIFY",
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
        data: {
            name: "ASSOC_FULLNAME",
            label: "Associated Person",
            moreInfo: true,
        },
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

export const COLLECTIONS_OVERVIEW_DETAIL_FIELD = [{
        name: "OBJ_DESCRIPTION",
        label: "Description",
    },
    {
        // name: ",ASSOC_FULLNAME",
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

export const COLLECTIONS_CHENHALL_DETAIL_FIELD = [{
        name: "SUB_CLASS",
        label: "Sub-Classification",
    },
    {
        name: "PRIMARY",
        label: "Primary",
    },
];

export const MEDIA_THUMBNAIL_FIELD = [{
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