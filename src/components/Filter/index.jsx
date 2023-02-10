import * as React from "react";
import Autocomplete from "@mui/joy/Autocomplete";

export default function ComboBox(props) {
  const { data, label } = props;
  return <Autocomplete placeholder={data} options={data} sx={{ width: 300 }} />;
}
