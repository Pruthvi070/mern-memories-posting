import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Glass effect background
    backdropFilter: 'blur(10px)', // Blur effect
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow for depth
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Glass effect background
    backdropFilter: 'blur(10px)', // Blur effect
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow for depth
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  containerBackground: {
    background: 'linear-gradient(to right, #FF7E5F, #FEB47B, #FF9A8B, #A1C4FD, #C2E9FB)', // Extended multicolor gradient background
    minHeight: '100vh', // Full height
    padding: '2rem', // Padding
  },
  searchButton: {
    marginTop: '1rem',
  },
}));
