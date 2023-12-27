import {IconContainer} from '../whats/WhatsStyled'

const Whats = () => {
  return (
    <div>
      <a
        href="https://web.whatsapp.com/send?phone=5543998068708"
        rel="noreferrer"
        target="_blank"
      >
        <IconContainer className="bi bi-whatsapp"></IconContainer>
      </a>
    </div>
  );
};

export default Whats;
