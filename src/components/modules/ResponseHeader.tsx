import type { FC } from 'react';
import { Code, Text, Box } from '@chakra-ui/react';

type Props = {
  header: Record<string, string>;
};

const ResponseHeader: FC<Props> = ({ header }) => (
  <Code mt="32px" p="16px" w="100%" lineHeight="1.7" wordBreak="break-all">
    {Object.keys(header).map((key) => (
      <Text key={key}>
        <Box as="span" fontWeight="700">
          {key}
        </Box>
        {`: ${header[key]}`}
      </Text>
    ))}
  </Code>
);

export default ResponseHeader;
