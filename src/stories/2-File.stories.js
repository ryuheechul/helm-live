import React from 'react';
import { File } from '../components/File.js';

export default {
  title: 'File',
  component: File,
};

export const Text = () => <File name="file.txt">{`
Hello there.
This is a file content.
This contains multiple lines.
`}</File>;
