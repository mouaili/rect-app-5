import React, { useState } from 'react';
import ClassDispalyKey from './ClassDispalyKey';

function Container() {
  const [show, setShow] = useState(true);

  const dispalyBTN = show ? 'Cacher' : 'Afficher';
  console.log(dispalyBTN);

  return (
    <div className="col">
      <h1>Mon conteneur</h1>
      {show && <ClassDispalyKey />}

      <button className="btn btn-info" onClick={() => setShow(!show)}>
        {dispalyBTN}
      </button>
    </div>
  );
}

export default Container;
