import React, {useContext} from 'react';
import Card from "../components/Card/Card";
import SearchInput from "../components/UI/SearchInput/SearchInput";
import AppContext from "../AppContext";

import Loader from "../components/UI/Loader/Loader";

const Home = ({
                  items,
                  cartItems,
                  searchValue,
                  setSearchValue,
                  onChangeSearchInput,
                  onAddToFavorite,
                  onAddToCard,
                  isLoading
              }) => {

    const {isItemAdded} = useContext(AppContext);

    const renderItems = () => {
        const filterItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
        return (

                filterItems
                    .map((title, index) => (
                    <Card
                        key={index + 1}
                        title={title.title}
                        price={title.price}
                        src={title.src}
                        id={title.id}
                        favourite={title.favourite}
                        onFavorite={onAddToFavorite}
                        onClickAddCard={obj => onAddToCard(obj)}
                        added={isItemAdded(title && title.id)}
                        loading={isLoading}

                    />
                ))
        );
    };
        {console.log(isLoading)}


    return (
        <div className="content">
            <div className='d-flex justify-between align-center mb-40'>
                <h1>{searchValue ? `Поиск по запросу: '${searchValue}'` : 'Все кроссовки'}</h1>
                <SearchInput
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    loadig={isLoading}
                />
            </div>
            <div className='cardItem'>
                {renderItems()}
            </div>
        </div>
    );
};

export default Home;










