import { Drawer, TextInput } from 'flowbite-react'
import React from 'react'

const Search = ({openSearch,onClose}) => {
  return (
    <Drawer open={openSearch} onClose={onClose} position="top" className="h-[8%] w-full ">
            <Drawer.Items>
                <TextInput type="text" placeholder="tìm sản phẩm" required />
            </Drawer.Items>
        </Drawer>
  )
}

export default Search
