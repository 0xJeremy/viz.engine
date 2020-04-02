import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
	root: {
	  backgroundColor: "#242730",
	  height: '100%',
	},
	title: {
	  fontSize: '1em',
	  color: "#4fbbd6"
	},
	loading: {
	  backgroundColor: '#09101d',
	  width: '68%',
  	marginLeft: '16%'
	},
	bar: {
	  backgroundColor: '#4fbbd6'
	},
	type: {
		color: 'white',
		textAlign: 'center'
	},
	camera: {
	  width: '98%',
	  height: '84.5%',
    backgroundColor: '#09101d'
  },
}));

function Loading() {
	const classes = useStyles();
	return (
	  <div>
	    <Typography className={classes.type} variant="h3" gutterBottom>
		  	<br /><br /><br />// searching for camera //
			</Typography>
			<LinearProgress className={classes.loading} classes={{barColorPrimary: classes.bar}}/>
	  </div>
	)
}

export default function Camera(props) {
	const classes = useStyles();
	const socket = props.socket;
	const [value, setValue] = React.useState(null);

  	return (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Camera Stream
          </Typography>
        </CardContent>

				<Container className={classes.camera}>
					{value !== null &&
						<img id='img' alt='' src={"data:image/png;base64,"+this.state.img} />
					}
		      {value === null &&
		      	<Loading />
		      }
	    	</Container>

      </Card>
  	)
}
