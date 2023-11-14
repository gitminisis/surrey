import axios from 'axios';
import X2JS from "../libs/xml2json.min.js";

export const getStatusReport = () => {

    return axios.post('/scripts/mwimain.dll?SYSTEMCTRL', "USERNAME=mike&USERPASSWORD=P@$$w0rd&SITEPROFILE=&SITELANG=0&DBPROFILE=&DBLANG=0&DISMOUNTDB=&MOUNTDB=&SHOWREP=X&UNLOCKISN=&UNLOCKDB=").then(res => {
        let { data } = res;
        let dom = new DOMParser().parseFromString(data, "text/html");
        const x2js = new X2JS();
        const xmlString = new XMLSerializer().serializeToString(dom);
        const json = x2js.xml_str2json(xmlString);
        console.log(json);
        return data;
        // return json
    })

}