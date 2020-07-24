import * as React from 'react';
import logo from './logo.svg';

interface IProps {
  name?: string;
}

const Header: React.FC<IProps> = (props: IProps) => (
    <>
        <h1>{props.name} Form</h1>
    </>
);

Header.defaultProps = {
  name: 'world',
};

export default Header;