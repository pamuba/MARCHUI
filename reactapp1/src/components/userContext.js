import React from 'react'

const UserContext = React.createContext();
//Provider
//Consumer

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer}

