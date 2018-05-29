import * as React from 'react';

type Props = {
  children?: React.Node
};

const Wrapper = (props: Props) => <div style={{ background: '#bada55' }}>{props.children}</div>;

export default Wrapper;
