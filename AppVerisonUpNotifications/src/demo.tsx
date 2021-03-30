import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import FiberNewOutlinedIcon from "@material-ui/icons/FiberNewOutlined";
import VerDialog from "./VerDialog";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    latest: {
      color: "red"
    }
  })
);

const releases = [
  {
    id: 4,
    version: "2.0.1",
    releaseInfo:
      "Multiple performance optimizations for a smoother experience.",
    releaseDate: "2021/03/31",
    latest: true
  },
  {
    id: 3,
    version: "1.3.0",
    releaseInfo: "Bug fixes and improvements.",
    releaseDate: "2021/02/13"
  },
  {
    id: 2,
    version: "1.1.1",
    releaseInfo: "Bug fixes.",
    releaseDate: "2021/01/08"
  },
  {
    id: 1,
    version: "1.0.0",
    releaseInfo: "Initial release.",
    releaseDate: "2020/12/30"
  }
];

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [notice, setNotice] = React.useState<null | HTMLElement>(null);
  const openNoticeMenu = Boolean(notice);

  const handleNoticeMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNotice(event.currentTarget);
  };

  const handleCloseNoticeMenu = () => {
    setNotice(null);
  };

  const [text, setText] = React.useState("");
  const [date, setDate] = React.useState("");
  const [version, setVersion] = React.useState("");
  const [openDialog, setOpenDialog] = React.useState(false);
  const handleOpenDialog = (id: number) => {
    handleCloseNoticeMenu();
    let release = releases.find((release) => release.id === id);
    setText(release.releaseInfo);
    setDate(release.releaseDate);
    setVersion(release.version);
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setText("");
    setDate("");
    setVersion("");
  };

  return (
    <div className={classes.root}>
      <VerDialog
        open={openDialog}
        text={text}
        date={date}
        version={version}
        onCancel={handleCloseDialog}
      />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            APPs
          </Typography>
          <div>
            <IconButton
              aria-label="notice menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleNoticeMenu}
              color="inherit"
            >
              <Badge
                badgeContent={
                  releases.filter((r) => r?.latest === true)?.length
                }
                color="secondary"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={notice}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={openNoticeMenu}
              onClose={handleCloseNoticeMenu}
            >
              {releases.map((item) => (
                <MenuItem onClick={() => handleOpenDialog(item.id)}>
                  {"Ver " + item.version}
                  {item.latest ? (
                    <ListItemIcon>
                      <FiberNewOutlinedIcon className={classes.latest} />
                    </ListItemIcon>
                  ) : (
                    <></>
                  )}
                </MenuItem>
              ))}
            </Menu>

            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
