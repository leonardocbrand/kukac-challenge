import React, { createContext, useState } from 'react';

type ModalContextType = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
};

export const ModalContext = createContext({} as ModalContextType);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={ {
        isOpen,
        setIsOpen,
      } }
    >
      {children}
    </ModalContext.Provider>
  );
}
