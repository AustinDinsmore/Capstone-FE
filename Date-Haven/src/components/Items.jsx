import { useGetItemsQuery } from "../../redux/api";

function ItemList() {
    const { data = {}, error, isLoading } = useGetItemsQuery;

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <h3>{error.data.message}</h3>;
    }

    return (
        <section>
            <h2>Date Ideas</h2>
            <div>
                {data && data.items.map((item) => {
                    <ItemCard key={item.id} item={item} />
                })}
            </div>
        </section>
    );
}

export default ItemList;