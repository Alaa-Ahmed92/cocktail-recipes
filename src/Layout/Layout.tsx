import React, { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';

import Tabs from '../components/Tabs';
import Charts from '../components/Charts';
import SearchBar from '../components/SearchBar';
import Breadcrumbs from '../components/Breadcrumbs'
import { AppDispatch, RootState } from '../redux/store';
import { fetchCocktails } from '../redux/slices/cocktailsSlice';

const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const Layout = () => {

    const dispatch = useDispatch<AppDispatch>();
    const [currentOne, setCurrentOne] = useState<number>(0);
    const { cocktails, loading, error } = useSelector((state: RootState) => state.cocktails);


    useEffect(() => {
        dispatch(fetchCocktails(alphabets[currentOne]));
    }, [dispatch, currentOne]);

    return (
        <div className='layout'>
            <Container className='wide'>
                <Breadcrumbs />
                <div className='wrapper-box'>
                    <SearchBar />
                    <Tabs
                        error={error}
                        cocktails={cocktails}
                        loading={loading}
                        setCurrentOne={setCurrentOne}
                        alphabets={alphabets}
                    />
                </div>
                <Charts cocktails={cocktails} />
            </Container>
        </div>
    )
}

export default Layout