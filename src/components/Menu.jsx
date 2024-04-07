import { menuData } from "../Helpers/MenuData";
import "../styles/Menu.css";
function Menu() {
  console.log(menuData[0].image);
  return (
    <>
      <div className="menu-wrapper">
        {menuData.map((item, index) => {
          return (
            <div className="inner-menu_wrapper" key={index}>
              <img src={item.image} alt="" />

              <div className="menu-header">
                <h2>{item.name} </h2>
              </div>
              <div className="menu-content">
                {item.description}
                <p>
                  Price : <strong>{item.price}</strong>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Menu;
