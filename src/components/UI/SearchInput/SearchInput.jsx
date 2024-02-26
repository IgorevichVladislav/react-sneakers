import React from 'react';
import cl from './SearchInput.module.scss'

const SearchInput = ({searchValue, setSearchValue, onChangeSearchInput}) => {
    return (
        <div className={cl.searchBlock}>
            <img className={cl.searchImg} src="/img/icons/search.svg" alt="Search"/>
            {searchValue && <img className={`${cl.removeSearch} ${cl.clear}`}
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
