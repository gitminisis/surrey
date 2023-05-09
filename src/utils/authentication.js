import axios from "axios";
import Cookie from "js-cookie";
export const login = (username, password) => {
  let url =
    "/scripts/mwimain.dll?logon&application=UNION_VIEW&FILE=[SURREY_OPAC]admin.html&LANGUAGE=144&cookie=USERNAME&AUTO_RESTART=Y,";
  return axios({
    method: "POST",
    url: url,
    data: `USERNAME=${username}&USERPASSWORD=${password}`,
  });
};

export const logout = () => {
  let url =
    "/scripts/mwimain.dll?LOGOFF&application=UNION_VIEW&LANGUAGE=144&cookie=USERNAME&AUTO_RESTART=Y,";
  return axios({
    method: "GET",
    url: url,
  });
};

export const isLoggedIn = () => {
  return (
    Cookie.get("USERNAME") !== undefined && Cookie.get("USERNAME") !== "PAMA"
  );
};

export const authenticateLogin = (res) => {
  const { data } = res;
  let error = getElementFromDoc(data, "#MWI-error");
  let success = getElementFromDoc(data, "#root");
  let result = {
    passed: false,
    message: "",
  };
  if (error) {
    result.message = getElementFromDoc(data, "h3").innerText;
    return result;
  }
  if (success) {
    result.passed = true;
    return result;
  }

  return result;
};

export const registerUser = ({
  username,
  firstname,
  lastname,
  company,
  email,
  password,
}) => {
  let result = {
    passed: false,
    message: "",
  };
  let fullName = `${firstname} ${lastname}`;
  return login("", "").then((res) => {
    const { data } = res;
    let sessid = getElementFromDoc(data, "#sessid").innerText;
    let accountCheckURL = `/scripts/mwimain.dll/144/USER_PROFILE/WEB_CHECK_USER/USER_NAME "${username}"?SESSIONSEARCH&NOMSG=[SURREY_OPAC]new_account.xml`;
    return axios.get(accountCheckURL).then((res) => {
      let count = getElementFromDoc(res.data, "#user-count").innerText;
      if (count !== "0") {
        console.log("account existed");
        result.message = "Username already in use";
        return result;
      }
      let openDBURL = `${sessid}/USER_PROFILE?OPEN&DBOPTION=ADD&RECORD_DEFAULT=Y`;
      return axios.get(openDBURL).then((res) => {
        const { data } = res;
        let saveRecordURL = getElementFromDoc(data, "#saverecord").innerText;
        return axios({
          method: "POST",
          url: saveRecordURL,
          data: `USER_NAME=${username}&USER_PASSWORD=${password}&USER_EMAIL_ADDR=${email}&USER_FULL_NAME=${fullName}&USER_ORG=${company}`,
        }).then((res) => {
          console.log("successful account creation");
          result.passed = true;
          return result;
        });
      });
    });
  });
};

export const getElementFromDoc = (data, query) => {
  let doc = new DOMParser().parseFromString(data, "text/html");
  return doc.querySelector(query);
};

export const Trang = () => {
  const object = {
    cute: "max",
    love: "max",
    adorable: "max",
    gorgeous: "max",
    pretty: "max",
    strong: "max",
    smart: "max",
    hardWorking: "max",
    cool: "max",
  };
  return object;
};

export const Minh = () => {
  return { careForTrang: true };
};
