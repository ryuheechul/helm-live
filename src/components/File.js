import React from 'react';
import { Code, Heading, Box } from "@chakra-ui/core";

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
      <Code px={2} py={2} mt={1} w="100%">
        {children}
      </Code>
    </Box>

  </Box>
);
