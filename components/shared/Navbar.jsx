const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between p-4 border">
        <div>Logo</div>
        <div className="flex gap-4 items-center">
          <div>Lang</div>
          <div>Profile</div>
          <div>Cart</div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
