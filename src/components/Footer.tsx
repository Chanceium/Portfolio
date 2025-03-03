const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-primary/5">
      <div className="container py-8">
        <div className="text-center text-sm text-gray-500">
          <p>© {currentYear} Chance Page. All rights reserved.</p>
          <p>Contact: <a href="mailto:chance@chancepage.me" className="text-primary">chance@chancepage.me</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
