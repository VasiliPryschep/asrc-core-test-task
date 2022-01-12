import React, { useState, useEffect } from 'react';
import { styled } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import { getPixabayData } from './api/pixabayApi';
import AppBar from './components/AppBar';
import { PixabayDataType } from './types/types';
import ImageList from './components/ImageBlocks';
import { textKeys } from './utils/textResources';

const ImageListWrapper = styled('div')({
    marginTop: 80
});

const App: React.FC = () => {

    const [searchText, setSearchText] = useState('');
    const [pixabayData, setPixabayData] = useState<PixabayDataType | null>(null);

    useEffect(() => {
        const fetchPixabayData = async () => {
            try {
                let data;
                if (searchText) {
                    data = await getPixabayData(searchText);
                } else {
                    data = null;
                }
                setPixabayData(data);
            } catch (error) {
                alert(error);
            }
        };
        fetchPixabayData();
    }, [searchText]);

    return <>
        <AppBar searchText={searchText} setSearchText={setSearchText}/>
        <ImageListWrapper>
            {
                pixabayData
                    ? <ImageList items={pixabayData.hits}/>
                    : <Typography variant="h5" align="center">
                        {textKeys.noContent}
                    </Typography>
            }
        </ImageListWrapper>
    </>
}

export default App;
