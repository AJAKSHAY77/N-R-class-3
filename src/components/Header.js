// title
 const Title = () => (
  <>
    <a href="/">
      <img
        className="img"
        alt="Food_villa"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgV4ITetYVZB2Pzbp_3k-feriyr6obtnk0g&usqp=CAU"
      />
    </a>
  </>
);

//header
const HeaderComponent = () => (
  <div className="heading">
    <Title />
    <div className="nav-list">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default HeaderComponent