import React from 'https://dev.jspm.io/react';

interface LayoutProps {
  children?: any;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>
        <h2>Header</h2>
      </header>
      <section>{children}</section>
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
};

export default Layout;
