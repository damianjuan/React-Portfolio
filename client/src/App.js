import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    marginBottom: theme.spacing(4),
    margin: 'auto'

  },
}));

const cards = [{
  title: "Employee Directory",
  description: `This is an employee directory built with React. The directory allows the user to sort employees by first name as well as search the directory by any field for exact and partial matches.`,
  deployedLink: "https://damianjuan.github.io/User-Directory/",
  repoLink: "https://github.com/damianjuan/User-Directory",
  imgSrc: require("./assets/employee_dir.jpg"),
  altDescription: "screen shot of project Boolean site"
},
{
  title: "Project Boolean",
  description: `Project Boolean allows users to create quick efficient surveys that anyone can take. Making our survey form as short and simple as possible makes them more likely to be taken by a greater  number of people. Surveys consist of five user created true or false questions. The survey results are stored in a MySQl database and users are able to view survey results. Follow the Live site link to create a user and start using Project Boolean.`,
  deployedLink: "https://salty-refuge-24830.herokuapp.com/",
  repoLink: "https://github.com/damianjuan/project2",
  imgSrc: require("./assets/project_boolean_screen_shot.jpg"),
  altDescription: "screen shot of project Boolean site"
},
{
  title: "Weather Dashboard",
  description: `Weather Dashboard with form inputs to search by city. search results show the current and future conditions for that city. The user is presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index. Searches are saved in the search history.`,
  deployedLink: "https://damianjuan.github.io/Weather_Dashboard/",
  repoLink: "https://github.com/damianjuan/Weather_Dashboard",
  imgSrc: require("./assets/weather_dashboard_screen_shot.jpg"),
  altDescription: "screen shot of Weather Dashboard site"
},
{
  title: "README Generator",
  description: `Basic README generator using javascript and node.`,
  deployedLink: "https://damianjuan.github.io/Weather_Dashboard/",
  repoLink: "https://github.com/damianjuan/readme_generator",
  imgSrc: require("./assets/readme_screen_shot.jpg"),
  altDescription: "screen shot of README Generator running in terminal"
}];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" style={{ background: "#628395" }}>
        <Toolbar>

          <Typography variant="h6" color="inherit" noWrap>
            Juan Damian
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            {/* <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Album layout
            </Typography> */}

            <Avatar alt="Juan Damian" src={require("./assets/me.jpg")} className={classes.large} />

            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hi I'm Juan, a web developer and maker currently focusing on React development. Take a look at my projects below and connect with me on LinkedIn or GitHub.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" style={{ background: "#628395" }} href="https://www.linkedin.com/in/juan-damian-93a8801a0/" target="_blank" rel="noopener">
                    LinkedIn
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" style={{ background: "#628395" }} href="https://github.com/damianjuan" target="_blank" rel="noopener">
                    GitHub
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" style={{ background: "#628395" }} href="https://docs.google.com/document/d/1vwUHoMilSP6bQgTg-92ogEf-PfxN_Ne8t3gvw5d5-GM/edit?usp=sharing" target="_blank" rel="noopener">
                    Resume
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.imgSrc}
                    title={card.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={card.deployedLink} target="_blank" rel="noopener">
                      Live Site
                    </Button>
                    <Button size="small" color="primary" href={card.repoLink} target="_blank" rel="noopener">
                      GitHub Repo
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography> */}
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Have a job opportunity or want to collaborate? Reach out to me on  <Link color="inherit" href="https://www.linkedin.com/in/juan-damian-93a8801a0/">LinkedIn</Link>
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}