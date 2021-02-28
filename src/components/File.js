import React from 'react';
import { Box } from "@chakra-ui/react";
import { Code } from './Code.js'
import { extFromFilename as  filenameToLang } from '../reason/Utils.bs.js';

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
