import { FC, useState, createContext, ReactNode } from 'react';

type SidebarContextValue = {
  sidebarToggle: any;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextValue>({
  sidebarToggle: null,
  toggleSidebar: () => {},
  closeSidebar: () => {}
});

interface SidebarProviderWrapperProps {
  children: ReactNode;
}

export const SidebarProvider: FC<SidebarProviderWrapperProps> = ({
  children
}) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };
  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  return (
    <SidebarContext.Provider
      value={{ sidebarToggle, toggleSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
