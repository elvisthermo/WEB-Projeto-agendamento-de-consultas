import React, { ButtonHTMLAttributes } from 'react';

import { FooterPg } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Footer: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <FooterPg>
    <div>
      <p>Desenvolvido por Castelo Vigilânte LTDA</p>
    </div>
  </FooterPg>
);

export default Footer;
