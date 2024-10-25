const Footer = () => {
  return (
      <footer className="footer bg-custom-gradient text-white flex justify-center items-center py-4 mt-4">
          <aside className="grid-flow-col items-center">
              <p>Copyright © {new Date().getFullYear()} - All right reserved by <i className="fa-solid fa-book-open"></i> My-Personal-Diary</p>
          </aside>
      </footer>
  );
};
export default Footer;
