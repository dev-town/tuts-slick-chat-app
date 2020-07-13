import React from 'react';

interface IContext {
    activeChannel: null | string;
    setActiveChannel: (value: null | string) => void;
}

const INITIAL_STATE: IContext = {
    activeChannel: null,
    setActiveChannel: (value) => null,
}

export const AppContext = React.createContext(INITIAL_STATE);
export const useAppContext = () => React.useContext(AppContext);

export const AppProvider:React.FC = (props) => {
    const [activeChannel, setActiveChannel] = React.useState<null | string>(INITIAL_STATE.activeChannel);

    return (
        <AppContext.Provider
            value={{
                activeChannel,
                setActiveChannel,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};