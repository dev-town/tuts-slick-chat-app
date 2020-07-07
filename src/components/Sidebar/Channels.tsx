import React from 'react';

import { Channel, IChannel } from './Channel';

const data = [
    { id: '1', name: 'channel 1'},
    { id: '2', name: 'channel 2'},
    { id: '3', name: 'channel 3'},
];

export const Channels = () => {
    const [activeItem, setActiveItem] = React.useState<null | string>(null);

    const onSelect = (item: IChannel) => {
        setActiveItem(item.id);
    };

    return (
        <>
            {data.map((item) => <Channel key={item.id} item={item} onSelect={onSelect} active={item.id === activeItem} />)}
        </>
    );
};