import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const styles = (theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  postHeader: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
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
});

// backend 연결 필요
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const PostListContent = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <main>
        <div className={classes.postHeader}>
          <Container maxWidth={false}>
            <Typography component="h1" variant="h5" align="left" color="textPrimary">
              서울 여행 게시판
            </Typography>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.pinimg.com/originals/f3/e1/b8/f3e1b8019f160f88531d8af792716b4f.png"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography component="h5" variant="overline">
                        글 제목12121
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  )
}

export default withStyles(styles)(PostListContent);
