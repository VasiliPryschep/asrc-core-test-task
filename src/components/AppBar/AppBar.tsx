import React from 'react';
import { AppBar as AppBarMUI, Toolbar, Typography } from '@mui/material';
import SearchInput from './../SearchInput';
import { textKeys } from './../../utils/textResources';

type PropsType = {  
    searchText: string,
    setSearchText: (value: string) => void
};

const AppBar: React.FC<PropsType> = ({ searchText, setSearchText }) => {
    return <AppBarMUI position="fixed">
        <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                {textKeys.title}
            </Typography>
            <SearchInput searchText={searchText} setSearchText={setSearchText}/>
        </Toolbar>
    </AppBarMUI>
}

export default AppBar;