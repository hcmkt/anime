import { Flex, Heading } from '@chakra-ui/react';
import CommonMeta from '@/components/organisms/CommonMeta';

export default function Index() {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <CommonMeta title="" />
      <Heading as="a" href="works/seasons/2023-winter">
        Anime
      </Heading>
    </Flex>
  );
}
