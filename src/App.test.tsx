import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import App from './App';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;


describe('App', () => {

    it('render title', () => {
        render(<App />);
        const titleText = screen.getByText(/Pixabay images/i);
        expect(titleText).toBeInTheDocument();
    });

    it('change search input value', () => {
        render(<App />);
        const searchInputField = screen.getByRole('textbox', {name: 'search'})
        expect(searchInputField).toBeInTheDocument();

        expect(searchInputField).toHaveValue('');
        fireEvent.change(searchInputField, {
            target: {value: 'dogs'}
        });
        expect(searchInputField).toHaveValue('dogs');
    });

    it('fetch images from pixabay API', async () => {

        const pixabayData = {
            total: 2,
            totalHits: 2,
            hits: [
                {
                    id: 1,
                    tags: 'tag1, tag2',
                    webformatURL: 'url1'
                },
                {
                    id: 2,
                    tags: 'tag3, tag4',
                    webformatURL: 'url2'
                }
            ]
        }

        mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: { ...pixabayData } }));

        render(<App />);

        userEvent.type(screen.getByRole('textbox', {name: 'search'}), 'T');
        const items = await screen.findAllByRole('img');
        expect(items).toHaveLength(2);
    });
});