import Input from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';

const StyledInput = withStyles({
  root: {
    alignItems: 'center',
    border: 0,
    justifyContent: 'center',
    paddingLeft: '1rem',
    borderBottom: '0px',
    borderRadius: '3px',
    backgroundColor: '#fff',
    height: '2rem',
    paddingRight: '0.5rem',
    width: '20rem',

    '& .MuiInput-underline': {
      backgroundColor: '#fff',
      border: 0,
      '&:after': {
        content: '""',
        border: 0,
      },
      '&:before': {
        content: '""',

        border: 0,
      },
      '&:focus': {
        '&:before': {
          content: '""',
          border: 0,
        },
      },
      '&:hover': {
        content: '""',

        border: 0,
        '&:before': {
          content: '""',

          border: 0,
        },
      },
    },
  },
})(Input);

export default StyledInput;
