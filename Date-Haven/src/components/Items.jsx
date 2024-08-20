import { useGetItemsQuery } from "../../redux/api";
import ItemsCard from "./ItemsCard";


function ItemList() {
    const { data = {}, error, isLoading } = useGetItemsQuery;

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <h3>{error.data.message}</h3>;
    }

    console.log("data", data.items);
    return (
        <section>
            <h2>Date Ideas</h2>
            <div>
                {data.items && data.items.map((items) => (
                    <ItemsCard key={items.id} items={items} />
                ))}
            </div>
        </section>
    );
}

export default ItemList;