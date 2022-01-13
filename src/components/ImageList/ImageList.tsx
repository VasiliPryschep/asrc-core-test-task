import React from 'react';
import { ImageList as ImageListMUI, ImageListItem as ImageListItemMUI } from '@mui/material';
import { HitType } from '../../types/types';

type PropsType = {  
    items: Array<HitType>
};

const ImageList: React.FC<PropsType> = ({ items }) => {
    return (
        <ImageListMUI cols={5}>
            {items.map((item) => (
                <ImageListItemMUI key={item.id}>
                    <img
                        src={`${item.webformatURL}`}
                        alt={item.tags}
                        loading="lazy"
                    />
                </ImageListItemMUI>
            ))}
        </ImageListMUI>
    );
}

export default ImageList;