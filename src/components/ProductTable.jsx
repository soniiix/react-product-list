function ProductCategoryRow({ category }) {
    return <tr>
        <th scope="row" className="text-center">{category}</th>
    </tr>
}

function ProductRow({ name, price, stocked, index }) {
    return <>
        <tr className={index == 0 ? 'table-active table-group-divider': undefined}>
            <td>{stocked ? name : <span className="text-danger">{name}</span>}</td>
            <td>{price}</td>
        </tr>
    </>
}

export function ProductTable({ products }) {
    let categories = [...new Set(
        products.map((product) => product.category)
    )];

    return <div className="table-responsive">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Prix</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {categories.map(
                    (cat) => <>
                        <ProductCategoryRow category={cat} />
                        {(products.filter((product) => product.category == cat))
                            .map((product, index) =>
                                <ProductRow
                                    index={index}
                                    name={product.name}
                                    price={product.price}
                                    stocked={product.stocked}
                                />
                            )}
                    </>
                )}
            </tbody>
        </table>
    </div>
}