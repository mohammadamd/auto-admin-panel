import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Link from '@material-ui/core/Link';


const useStyles = makeStyles({
  root: {
    background: '#ccc',
    height: '100vh',
  },
});

function Sidebar() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <List>
          <ListItem>
            <ListItemIcon><Avatar alt="Mohammad"
                                  src={"Mohammad"}/></ListItemIcon>
            <ListItemText primary={'Welcome Mohammad'}/>
          </ListItem>
          {['Products', 'Settings', 'Logout'].map((text, index) => (
            <Link href={text} color="inherit">
              <ListItem button key={text}>
                <ListItemIcon><KeyboardArrowRight/></ListItemIcon>
                <ListItemText primary={text}/>
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </>
  )
}

export default Sidebar
