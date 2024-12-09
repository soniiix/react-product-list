import { useState } from "react"
import './index.css'
import { SearchBar } from './components/SearchBar'
import { ProductTable } from './components/ProductTable'

const PRODUCTS = [
    { category: "Fruits", price: "$7", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$5", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

function App() {
    const [productSearch, setProductSearch] = useState('')
    const [isStockedOnlyChecked, setStockedOnlyChecked] = useState(false)
    const [maximumPrice, setMaximumPrice] = useState('7')

    const filteredProducts = PRODUCTS.filter((product) => {
        if (isStockedOnlyChecked) {
            return product.stocked
                && product.name.toLowerCase().includes(productSearch.toLowerCase())
                && product.price.replace('$', '') <= maximumPrice
        }
        else {
            return product.name.toLowerCase().includes(productSearch.toLowerCase())
                && product.price.replace('$', '') <= maximumPrice
        }
    })

    return <div className="container">
        <SearchBar
            searchValue={productSearch}
            setSearchValue={setProductSearch}
            isChecked={isStockedOnlyChecked}
            setIsChecked={setStockedOnlyChecked}
            rangeValue={maximumPrice}
            setRangeValue={setMaximumPrice}
        />
        <ProductTable
            products={filteredProducts}
        />
    </div>
}

export default App