import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      ...theme.typography.button,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
      textTransform: "none"
    }
  })
);

function httpString(s: string) {
  var reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:.;]+[-A-Za-z0-9+&@#/%=~_|]/g;

  s = s.replace(reg, function (url) {
    return "<a target='_blank' href=" + url + ">" + url + "</a>";
  });

  return s;
}

export default function DisplayTextAndUrl() {
  const classes = useStyles();

  const StringData: string =
    "list1:https://www.baidu.com/,list2:https://www.google.com,list3:https://github.com/\nlist1:https://www.baidu.com/,list2:https://www.google.com,list3:https://github.com/\nlist1:https://www.baidu.com/,list2:https://www.google.com,list3:https://github.com/";

  return (
    <div
      className={classes.root}
      dangerouslySetInnerHTML={{ __html: httpString(StringData) }}
    />
  );
}
