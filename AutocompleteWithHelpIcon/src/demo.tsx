/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/core/Autocomplete";
import HelpIcon from "@material-ui/icons/Help";
import InputAdornment from "@material-ui/core/InputAdornment";
import Tooltip from "@material-ui/core/Tooltip";

export default function Playground() {
  const defaultProps = {
    options: employees,
    getOptionLabel: (option: FilmOptionType) => option.name
  };

  return (
    <div style={{ width: 250 }}>
      <Autocomplete
        disableClearable
        {...defaultProps}
        renderInput={(params) => (
          <TextField
            {...params}
            label="employee"
            margin="normal"
            variant="outlined"
            // placeholder="This is a help text icon."
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="This is a help text icon.">
                    <HelpIcon />
                  </Tooltip>
                </InputAdornment>
              )
              // startAdornment: (
              //   <InputAdornment position="start">
              //     <Tooltip title="This is a help text icon.">
              //       <HelpIcon />
              //     </Tooltip>
              //   </InputAdornment>
              // )
            }}
          />
        )}
      />
    </div>
  );
}

interface FilmOptionType {
  name: string;
  age: number;
}

const employees = [
  { name: "Zhang San", age: 32 },
  { name: "Li Si", age: 28 },
  { name: "Wang Wu", age: 24 },
  { name: "Zhao Liu", age: 22 }
];
