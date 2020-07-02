import React from 'react';
import { Box } from "@chakra-ui/core";
import { Code } from './Code.js'

// https://stackoverflow.com/a/680982/1570165
const re = /(?:\.([^.]+))?$/;
const filenameToLang = filename => {
  const ext = re.exec(filename)[1];

  return ext === undefined ? "text" : ext;
};

export const File = ({children, name}) => (
  <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">

    <Box
      mt="1"
      fontWeight="semibold"
      as="h4"
      lineHeight="tight"
      isTruncated
    >
      <Box px={2}>
        {name}
      </Box>
    </Box>

    <Box>
      <Code
        lang={filenameToLang(name)}
        px={2} py={2} mt={1} w="100%"
      >
        {children}
      </Code>
    </Box>

  </Box>
);
