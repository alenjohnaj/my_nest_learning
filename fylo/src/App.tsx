import { useRoutes } from 'react-router-dom';
import router from 'src/router';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { CssBaseline } from '@mui/material';
import { FC } from 'react';
import ThemeProvider from './presentation/theme/ThemeProvider';
import "./assets/major.style.css"

const App: FC = () => {
  const content = useRoutes(router);

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        {content}
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
