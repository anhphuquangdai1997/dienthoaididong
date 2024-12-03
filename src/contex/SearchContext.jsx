import { createContext,useState } from "react";

export const SearchContext =createContext();

export const SearchProvider=({children })=>{
    const [searchTermt, setSearchTerm] = useState('')

    return (
        <SearchContext.Provider value={{searchTermt, setSearchTerm}}>
            {children}
        </SearchContext.Provider>
    )

}

