import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const Code = ({children, lang}) => (
  <SyntaxHighlighter
    language={lang}
    style={a11yDark}>
    {children}
  </SyntaxHighlighter>
);
