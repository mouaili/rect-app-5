import React, { useState } from 'react';
import ClassDispalyKey from './ClassDispalyKey';

function Container2() {
  const [show, setShow] = useState(true);

  const dispalyBTN = show ? 'Cacher' : 'Afficher';
  console.log(dispalyBTN);

  return (
    <div className="col">
      {show && <ClassDispalyKey />}

      <button className="btn btn-success m-5" onClick={() => setShow(!show)}>
        {dispalyBTN}
      </button>
    </div>
  );
}

export default Container2;
