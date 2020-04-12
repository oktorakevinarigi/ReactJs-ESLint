import React, { useEffect, useState } from 'react';

function CompDate() {
  const [state, setState] = useState({
    nama: 'erik',
    sano: '',
  });
  useEffect(() => {

  }, [state]);
  const setData = () => {
    setState((prev) => ({ ...prev, nama: 'erik' }));
  };
  return (
    <div>
      <div
        role="button"
        onClick={setData}
        onKeyDown={setData}
        tabIndex={0}
      >
        {state}
        saja sdjjsdhs skdjksd shdjshdj jshdjshd kjsdsjdjs jhsjdhjsd hsjdhjsd jshdj sjhdj jshdjhs sdhjs
      </div>
    </div>
  );
}

export default CompDate;
