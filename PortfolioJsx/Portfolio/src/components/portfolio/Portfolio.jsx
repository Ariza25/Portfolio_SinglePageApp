import Data from '../../Data';
import { useState } from 'react';
import Cards from '../Cards';
import Button from '../Buttons';
import {Title} from './PortfolioStyled'

const Projects = () => {
  const [items, setItems] = useState(Data);
  const menuItems = [...new Set(Data.map((value) => value.category))];

  const filterItems = (category) => {
    const newItems = Data.filter((newval) => newval.category === category);
    setItems(newItems);
  }

  return (
    <>
      <div className="container-fluid" id="portfolio">
        <div className="row">
          <Title className="text-center col-12 fw-bold mt-5 mb-4">PORTFOLIO</Title>
          <Button
            menuItems={menuItems}
            filterItems={filterItems}
            setItems={() => setItems(Data)}  // Restaura os itens originais quando o botão "Todos" é clicado
          />
            <Cards items={items} />
        </div>    
      </div>
    </>
  );
};

export default Projects;