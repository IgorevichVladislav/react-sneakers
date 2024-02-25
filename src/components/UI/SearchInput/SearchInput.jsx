import React from 'react';
import cl from './SearchInput.module.scss'

const SearchInput = ({searchValue, setSearchValue, onChangeSearchInput}) => {
    return (
        <div className='search-block d-flex align-center '>
            <img className='search-img' src="/img/icons/search.svg" alt="Search"/>
            {searchValue && <img className='removeSearch cu-p clear'
                                 src='/img/icons/btn-remove.svg'
                                 alt="Remove Search"
                                 onClick={() => setSearchValue('')}
            />}
            <input
                value={searchValue}
                onChange={onChangeSearchInput}
                type="text" placeholder='Поиск...'/>
        </div>
    );
};

export default SearchInput;