import React from "react";
import {
  Breadcrumbs as TTBreadcrumbs,
  Link,
  Typography
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({

  link: {
    fontFamily: 'Tahoma',
    backgroundColor: '#141627',
    color: 'white',
    display: 'flex',
    textTransform: 'capitalize'
  },
  icon: {
    paddingTop: 5,
    marginRight: theme.spacing(0.25),
    width: 20,
    height: 20,
  },
}));


const Breadcrumbs = props => {
  const {
    history,
    location: { pathname }
  } = props;
  const pathnames = pathname.split("/").filter(x => x);
  const classes = useStyles();
  return (
  
    <TTBreadcrumbs className={classes.link} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      {pathnames.length > 0 ? (
        <Link className={classes.link} onClick={() => history.push("/")}> <HomeIcon className={classes.icon}  /> Home</Link>
      ) : (
        <Typography className={classes.link}> </Typography>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography className={classes.link} key={name}>{name}</Typography>
        ) : (
          <Link className={classes.link} key={name} onClick={() => history.push(routeTo)}>
            {name}
          </Link>
        );
      })}
    </TTBreadcrumbs>
  );
};

export default withRouter(Breadcrumbs);