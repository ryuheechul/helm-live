import React from 'react';
import { Box, Flex, Code } from "@chakra-ui/core";
import { File } from '../components/File.js'

export const MockApp = ({children, name}) => (
  <Flex>
    <Box>
      <Box>
        <Code>
          helm template blah blah
        </Code>
      </Box>
      <Box>
        <Code>
          ~/your/chart/path
        </Code>
      </Box>
      <File name="values.yaml">
        {`this:
  will:
    show:
    - yaml
    - values`}
      </File>
    </Box>
    <Box>
      <File name="deployment.yaml">
        {`apiVersion: apps/v1
kind: Deployment
metadata:
  name: just-an-example
  labels:
    app: example`}
      </File>
      <File name="service.yaml">
        {`apiVersion: v1
kind: Service
metadata:
  name: just-an-example
  selector:
    app: example`}
      </File>
    </Box>

  </Flex>
);
