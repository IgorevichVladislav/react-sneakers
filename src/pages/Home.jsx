import React from 'react';
import Card from "../components/Card/Card";
import SearchInput from "../components/UI/SearchInput/SearchInput";

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

                <SearchInput
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onChangeSearchInput={onChangeSearchInput}
                />


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