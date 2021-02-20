import * as React from 'react';

import {useDencrypt} from 'use-dencrypt-effect';

const values = ['Hello Tun!', 'Todo List'];

const Example = () => {
  const {result, dencrypt} = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2000);

    return () => clearInterval(action);
  }, [dencrypt]);

  return <code>{result}</code>;
};

export default Example;
