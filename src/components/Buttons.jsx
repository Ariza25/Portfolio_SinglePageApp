import PropTypes from 'prop-types';
import {Button} from './portfolio/PortfolioStyled'

const Buttons = ({ menuItems, filterItems, setItems }) => {
  return (
    <div className="d-flex justify-content-center mb-5 ms-2">
      {menuItems.map((value) => (
        <Button
          key={value}
          className="btn btn-primary text-white mx-2 fw-bold"
          onClick={() => filterItems(value)}
        >
          {value}
        </Button>
      ))}
      <Button
        className="btn btn-primary text-white mx-2 fw-bold"
        onClick={() => setItems()}
      >
        Todos
      </Button>
    </div>
  );
}

Buttons.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.string),
  filterItems: PropTypes.func,
  setItems: PropTypes.func, 
};

export default Buttons;
