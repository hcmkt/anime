import type { FC } from 'react';
import { Box } from '@chakra-ui/react';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  icon: IconDefinition;
  link: string;
  displayLink: string;
};

const IconLink: FC<Props> = ({ icon, link, displayLink }) => (
  <Box>
    <FontAwesomeIcon icon={icon} width="20px" />
    <Box
      as="a"
      href={link}
      color="teal.400"
      _hover={{ color: 'teal.500' }}
      fontWeight="bold"
      ml="8px"
      target="_blank"
      wordBreak="break-word"
    >
      {displayLink}
    </Box>
  </Box>
);

export default IconLink;
