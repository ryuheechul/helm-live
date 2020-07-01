import React from 'react';
import { Code } from '../components/Code.js';

export default {
  title: 'Code',
  component: Code,
};

export const SingleLine = () => <Code name="file.txt">
  (num) => num + 1;
</Code>;
