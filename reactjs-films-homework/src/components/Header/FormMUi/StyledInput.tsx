import Input from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';

const borderReset = 0;
const backgroundColor = '#fff';
const height = '2rem';
const width = '20rem';

const StyledInput = withStyles({
  root: {
    alignItems: 'center',
    border: borderReset,
    justifyContent: 'center',
    paddingLeft: '1rem',
    borderBottom: '0px',
    borderRadius: '3px',
    backgroundColor: backgroundColor,
    height: height,
    paddingRight: '0.5rem',
    width: width,

    '& .MuiInput-underline': {
      backgroundColor: '#fff',
      border: borderReset,
      '&:after': {
        border: borderReset,
      },
      '&:before': {
        border: borderReset,
      },
      '&:focus': {
        '&:before': {
          border: borderReset,
        },
      },
      '&:hover': {
        border: borderReset,
        '&:before': {
          border: borderReset,
        },
      },
    },
  },
})(Input);

export default StyledInput;
