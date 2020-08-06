import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    grid: {
        flexGrow: 1,
    },
});

// const projects = [
//     {
//         title: "test1",
//         description: "test of the description",
//         deployedLink: "http://www.google.com",
//         repoLink: "https://github.com/damianjuan",
//         imgSrc: "https://via.placeholder.com/150",
//         altDescription: "place holder img"
//     }
// {
//   title: ,
//   description: ,
//   deployedLink: ,
//   repoLink: ,
//   imgSrc:,
//   altDescription:
// },
// {
//   title: ,
//   description: ,
//   deployedLink: ,
//   repoLink: ,
//   imgSrc:,
//   altDescription:
// },
// {
//   title: ,
//   description: ,
//   deployedLink: ,
//   repoLink: ,
//   imgSrc:,
//   altDescription:
// },
// {
//   title: ,
//   description: ,
//   deployedLink: ,
//   repoLink: ,
//   imgSrc:,
//   altDescription:
// },
// {
//   title: ,
//   description: ,
//   deployedLink: ,
//   repoLink: ,
//   imgSrc:,
//   altDescription:
// }
// ];

export default function ProjectCard() {
    const classes = useStyles();
    const displayedProjects = [{
        title: "test1",
        description: "test of the description",
        deployedLink: "http://www.google.com",
        repoLink: "https://github.com/damianjuan",
        imgSrc: "https://via.placeholder.com/150",
        altDescription: "place holder img"
    },
    {
        title: "test2",
        description: "test2 of the description",
        deployedLink: "http://www.google.com",
        repoLink: "https://github.com/damianjuan",
        imgSrc: "https://via.placeholder.com/150",
        altDescription: "place holder img"
    }]

    return (
        <Grid container className={classes.grid} spacing={2}>
            {
                displayedProjects.map(({ title, description, deployedLink, repoLink, imgSrc, altDescription }) => (
                    <Grid item xs={12} mx="auto">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={altDescription}
                                    height="140"
                                    image={imgSrc}
                                    title={title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" href={deployedLink} target="_blank" rel="noopener">
                                    Live Site
        </Button>
                                <Button size="small" color="primary" href={repoLink} target="_blank" rel="noopener">
                                    GitHub Repo
        </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>

    );
}