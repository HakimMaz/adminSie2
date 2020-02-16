import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import GroupIcon from '@material-ui/icons/Group';
import ListAltIcon from '@material-ui/icons/ListAlt';

import UserTable from './../utilisateurs/UserConnectes';
import CreateTableRef from '../gestionTableRef/CreateTabRef';
//import Courbe from './../statistiques/courbe';
import BarSerie from './../statistiques/BarSerie';

const drawerWidth = 320;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },

  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Sidebar = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const SideNavElements = [
    "utilisateurs Connectés",
    "Gestion de tables de réferences",
    "Statistiques",

  ];

  const matchIconWithElement = (indexIcon) => {
    switch (indexIcon) {
      case 0:
        return <GroupIcon />
      case 1:
        return <ListAltIcon />
      case 2:
        return <EqualizerIcon />
      default:
        console.log("none of thes icon");
        break;
    }
  };

  const handleClickListIem = (index) => {
    setSelectedIndex(index);
  }

  const matchComponentWithIndex = (selectedIndex) => {

    switch (selectedIndex) {
      case 1:
        return <UserTable />;

      case 2:
        return <CreateTableRef />;

      case 3:
        return <BarSerie/>;

      default:
        console.log("none of those cmponenet is selected is selected");
        break;
    }
  }



  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: props.open,
          [classes.drawerClose]: !props.open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: props.open,
            [classes.drawerClose]: !props.open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={props.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {SideNavElements.map((text, index) => (
            <ListItem
              button
              key={text}
              selected={selectedIndex === index + 1}
              onClick={(e) => handleClickListIem(index + 1)}
            // onClick={event => handleListItemClick(event, index + 1)}
            >
              <ListItemIcon>
                {matchIconWithElement(index)}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {matchComponentWithIndex(selectedIndex)}
      </main>
    </div>
  );
}
export default Sidebar;