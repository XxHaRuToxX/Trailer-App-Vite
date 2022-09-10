import { createContext, useContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({children}) =>{

    const [valueSearch, setValueSearch] = useState("");

    return (
        <SearchContext.Provider
            value={{
                valueSearch,
                setValueSearch,
            }}
        >
            {children}
        </SearchContext.Provider>
    )

}

export const useSearch = () =>{
    return useContext(SearchContext);
}