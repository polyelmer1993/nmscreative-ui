import { InputLabel } from "@mui/material";
import { Box, FormControl, MenuItem, Select } from "nms-creative-ui";
import React, { useState } from "react";

const Standard = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
    <FormControl sx={{ width: 150 }}>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
        variant="standard"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
    </Box>
  );
};

export default Standard;
