import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      {/* Header */}
      <Header />
      {/* children */}
      {children}
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layout;
