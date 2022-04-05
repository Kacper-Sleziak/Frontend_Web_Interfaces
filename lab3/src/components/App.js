import { BrowserRouter as Router,
        Routes, Route } from 'react-router-dom';
import PersonSearch from './subpages/PersonSearch';
import AddNotice from './subpages/AddNotice';
import AddGroup from './subpages/AddGroup';
import GroupSearch from './subpages/GroupSearch';
import './index.css';
import { ThemeProvider, createTheme  } from '@material-ui/core';
import  red  from '@material-ui/core/colors/red';
import React from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: "#D9D9D9",
            dark: '#002884',
            contrastText: '#fff',
        }
    },

    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    }

});

function App() {
    return (
        <ThemeProvider 
        theme={theme}
        >
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={<PersonSearch />} 
                        />
                    <Route
                        path="/add_notice"
                        element={<AddNotice />} 
                        />
                    {/* <Route
                        path="/person_search"
                        element={<PersonSearch />} 
                        />  */}
                    {/* <Route
                        path="/add_group"
                        element={<AddGroup />} />
                    <Route
                        path="/group_search"
                        element={<GroupSearch />} /> */}
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
