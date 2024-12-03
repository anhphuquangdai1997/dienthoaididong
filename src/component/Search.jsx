import { Button, Drawer, TextInput } from 'flowbite-react'
import React, { useContext } from 'react'
import { SearchContext } from '../contex/SearchContext'

const Search = ({ openSearch, onClose }) => {
  const { searchTermt, setSearchTerm } = useContext(SearchContext)
  const handleSearchSubmit=(e)=>{
    e.preventDefault()
    onClose()
  }
  const handleSearchChange=(e)=>{
    setSearchTerm(e.target.value)
  }
  return (
    <Drawer open={openSearch} onClose={onClose} position="top" className="h-[8%] ">
      <Drawer.Items className='flex'>
        <form onSubmit={handleSearchSubmit} className='flex w-full'>
          <TextInput value={searchTermt} onChange={handleSearchChange} type="text" className='basis-[80%]' placeholder="tìm sản phẩm" required />
          <Button className="basis-[20%] bg-transparent text-black-500 border-gray-500 rounded-b-md" type="submit">search</Button>
        </form>
      </Drawer.Items>
    </Drawer>
  )
}

export default Search
