import React from 'react';
import Card from "../components/Card/Card";

const Home = ({
                  items,
                  searchValue,
                  setSearchValue,
                  onChangeSearchInput,
                  onAddToFavorite,
                  onAddToCard
              }
) => {
    return (
        <div className="content">
            <div className='d-flex justify-between align-center mb-40'>

                <h1>{searchValue ? `Поиск по запросу: '${searchValue}'` : 'Все кроссовки'}</h1>

                {/*<SearchInput*/}
                {/*    setSearchValue={searchValue}*/}
                {/*    value={searchValue}*/}
                {/*    onChange={onChangeSearchInput}*/}
                {/*/>*/}

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


            </div>
            <div className='cardItem'>

                {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((title, index) =>
                    <Card
                        key={index + 1}
                        title={title.title}
                        price={title.price}
                        src={title.src}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        onClickAddCard={(obj) => onAddToCard(obj)}
                    />)}
            </div>
        </div>
    );
};

export default Home;