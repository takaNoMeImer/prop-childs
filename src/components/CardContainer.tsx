import { useState } from "react";
import { language } from "../Languages";
import CardItem from "./Item";

interface ContainerProps {
    item: {
        id: number,
        name: String,
        year: Number,
        creator: String,
        description: String,
        latest_version: String,
        poster: string
    };
}

const Container: React.FC = () => {

    const [item, setItem] = useState<ContainerProps['item']>();
    const [listItem, setListItem] = useState<Array<ContainerProps['item']>>([]);

    const recibirItem = (item: ContainerProps['item']) => {
        setItem(item);
        setListItem([...listItem, item]);
        console.log(item.id);
    }

    const deleteElement = ( item : ContainerProps['item']) => {
        setListItem(listItem.filter( e => e.name != item.name));
    }

    return (
        <div className="container mt-5">
            {language.map(item => (
                <CardItem test={ recibirItem } update={ deleteElement } key={item.id} item={item} />
            ))}

            <div>
                <h1 className={'text-center'}>Favoritos</h1>
                {listItem.map((item) => (
                    <div className="p-4 item-card" key={item.id} style={{ width: '22rem' }}>
                        <div className="content-item">
                            <img src={item?.poster} alt="" />
                            <div className="card-body" style={{ display: 'flex', justifyContent: 'center' }}>
                                <h3 className="card-title" style={{ textAlign: 'center' }}>{item?.name}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Container;