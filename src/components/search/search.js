import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';

import './search.css';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

const Search = ({ hideButtons = false }) => {
    const [{}, dispatch] = useStateValue();

    const [userInput, setUserInput] = useState("");
    const history = useHistory();

    const search = event => {
        event.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: userInput,
        });

        history.push('/search');
    };

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value = {userInput} onChange = {event => setUserInput(event.target.value)} />
                <MicIcon />
            </div>

            {
                !hideButtons ? (
                    <div className="search__buttons">
                        <Button variant = "outlined" type="submit" onClick ={event => search(event)}>Google Search</Button>
                        <Button variant = "outlined">I'm Feeling Lucky</Button>
                    </div>
                ) : (
                    <div className="search__buttons">
                        <Button className="search__buttonsHidden" variant = "outlined" type="submit" onClick ={event => search(event)}>Google Search</Button>
                        <Button className="search__buttonsHidden" variant = "outlined">I'm Feeling Lucky</Button>
                    </div>
                )
            }

            
        </form>
    );
};

export default Search;
