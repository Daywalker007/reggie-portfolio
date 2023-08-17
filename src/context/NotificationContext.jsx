import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context instance
const NotificationContext = createContext();

// Create a custom hook to access the context
export const useNotificationContext = () => {
  return useContext(NotificationContext);
};

// Create a provider component
export const NotificationContextProvider = ({ children }) => {
  const [toast, setToast] = useState([]);

  const data = {
    toast,
    setToast
  }

  return (
    <NotificationContext.Provider value={data}>
      {children}
    </NotificationContext.Provider>
  );
};
