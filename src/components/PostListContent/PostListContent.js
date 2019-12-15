import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  postHeader: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 2),
  },
  inputArea: {
    paddingBottom: theme.spacing(4),
  },
  textInput: {
    marginLeft: theme.spacing(4),
    width: '90%',
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  postCard: {
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
});

// Need to be connected with backend
const postList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const PostListContent = (props) => {
  const { classes } = props;
  const { countryName } = props;
  return (
    <React.Fragment>
      <main>
        <div className={classes.postHeader}>
          <Container maxWidth={false}>
            <Typography component="h1" variant="h5" align="left" color="textPrimary">
              {countryName} 여행 게시판
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {postList.map(post => (
              <Grid item key={post} xs={12} sm={6} md={4}>
                <Card className={classes.postCard}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.pinimg.com/originals/f3/e1/b8/f3e1b8019f160f88531d8af792716b4f.png"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography component="h5" variant="overline">
                        제목나온당
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <div className={classes.inputArea}>
          <TextField className={classes.textInput} variant="outlined" />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </div>
      </main>
    </React.Fragment>
  )
}

export default withStyles(styles)(PostListContent);
