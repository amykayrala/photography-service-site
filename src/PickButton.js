import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function PickButton() {
  const [picked, setPicked] = useState(false);

  const handleClick = () => {
    setPicked(!picked);
  };

  return (
    <Button
      className={picked ? 'picked-btn' : 'view-portfolio-btn'}
      onClick={handleClick}
      variant={picked ? 'view-portfolio-btn' : 'outline-light'}
    >
      {picked ? 'Picked!' : 'Pick Me!'}
    </Button>
  );
}

export default PickButton;