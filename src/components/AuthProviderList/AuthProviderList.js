import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import GitHubCircleIcon from 'mdi-material-ui/GithubCircle';
import GoogleIcon from 'mdi-material-ui/Google';

const styles = (theme) => ({
  grid: {
    marginBottom: theme.spacing(2)
  }
});

class AuthProviderList extends Component {
  render() {
    // Styling
    const { classes } = this.props;

    // Properties
    const { gutterBottom, performingAction } = this.props;

    // Events
    const { onAuthProviderClick } = this.props;

    const authProviders = [
      {
        providerId: 'github.com',
        theme: createMuiTheme({
          palette: {
            primary: {
              main: '#24292e',
              contrastText: '#ffffff'
            }
          }
        }),
        icon: <GitHubCircleIcon />,
        name: 'GitHub'
      },
      {
        providerId: 'google.com',
        theme: createMuiTheme({
          palette: {
            primary: {
              main: '#4285f4',
              contrastText: '#ffffff'
            }
          }
        }),
        icon: <GoogleIcon />,
        name: 'Google'
      }
    ];

    if (gutterBottom) {
      return (
        <Grid className={classes.grid} container direction="column" spacing={1}>
          {authProviders.map((authProvider) => {
            return (
              <Grid key={authProvider.providerId} item>
                <MuiThemeProvider theme={authProvider.theme}>
                  <Button
                    color="primary"
                    disabled={performingAction}
                    fullWidth
                    startIcon={authProvider.icon}
                    variant="contained"
                    onClick={() => onAuthProviderClick(authProvider.providerId)}>
                    {authProvider.name}
                  </Button>
                </MuiThemeProvider>
              </Grid>
            );
          })}
        </Grid>
      );
    }

    return (
      <Grid container direction="column" spacing={1}>
        {authProviders.map((authProvider) => {
          return (
            <Grid key={authProvider.providerId} item>
              <MuiThemeProvider theme={authProvider.theme}>
                <Button
                  color="primary"
                  disabled={performingAction}
                  fullWidth
                  startIcon={authProvider.icon}
                  variant="contained"
                  onClick={() => onAuthProviderClick(authProvider.providerId)}>
                  {authProvider.name}
                </Button>
              </MuiThemeProvider>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

AuthProviderList.defaultProps = {
  gutterBottom: false,
  performingAction: false
};

AuthProviderList.propTypes = {
  // Styling
  classes: PropTypes.object.isRequired,

  // Properties
  gutterBottom: PropTypes.bool,
  performingAction: PropTypes.bool,

  // Events
  onAuthProviderClick: PropTypes.func.isRequired
};

export default withStyles(styles)(AuthProviderList);
