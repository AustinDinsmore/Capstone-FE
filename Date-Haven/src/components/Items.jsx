import { useGetItemsQuery } from "../../redux/api";
import { useState } from "react";
import ItemsCard from "./ItemsCard";
import ItemDetail from "./ItemDetail";


function ItemList() {
    const { data = {}, error, isLoading } = useGetItemsQuery();
    const [itemSelected, setItemSelected] = useState(false);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <h3>{error.data.message}</h3>;
    }

    if (itemSelected) {
        return (
            <ItemDetail
                items_id={itemSelected.items_id}
                setItemSelected={setItemSelected}
            />
        )
    }

    return (
        <section>
            <h2>Date Ideas</h2>
            {isLoading ? <p>Loading...</p> : <span />}
            {error ? <p>Ooops! Something went wrong!</p> : <span />}
            <div className="itemList">
                {data.allItems && data.allItems.map((items) => (
                    <div className="itemList_div" key={items.id}>
                        <ItemsCard key={items.id} items={items} setItemSelected={setItemSelected} />
                    </div>
                ))}
            </div>

        </section>
    );
}

export default ItemList;