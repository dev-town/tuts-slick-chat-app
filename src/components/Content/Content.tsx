import React from 'react';

import { useAppContext } from '../../store/AppContext';

import { Info } from './Info';

export const Content = () => {
    const { activeChannel } = useAppContext();

    if (!activeChannel) {
        return (
            <div>No Channel selected..</div>
        );
    }

    return (
        <div>
            <Info activeChannel={activeChannel} />
        </div>
    );
};