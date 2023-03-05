import type { ParsedUrlQuery } from 'querystring';
import { Link, Heading, Box, Image, Center, Flex } from '@chakra-ui/react';
import axios from 'axios';
import type { GetServerSideProps, NextPage } from 'next';
import type { AnnictSearchWorksByIdsQuery } from '@/gql/gql';
import ResponseHeader from '@/components/modules/ResponseHeader';
import TwitterIconLink from '@/components/modules/TwitterIconLink';
import UrlIconLink from '@/components/modules/UrlIconLink';
import CommonMeta from '@/components/organisms/CommonMeta';
import GqlClient from '@/lib/GqlClient';
import ImageUrl from '@/lib/ImageUrl';

type Props = {
  query: AnnictSearchWorksByIdsQuery;
  header: Record<string, string>;
};

interface Params extends ParsedUrlQuery {
  work: string;
}

const Work: NextPage<Props> = ({ query, header }) => {
  const works = query.searchWorks?.nodes ?? [];
  const imageUrlGenerator = ImageUrl.getImageUrlGenerator([
    works[0]?.image?.facebookOgImageUrl,
    works[0]?.image?.recommendedImageUrl,
  ]);

  return works ? (
    <Box maxW="768px" m="auto">
      <CommonMeta title={works[0]?.title ?? ''} />
      <Center>
        <Link href={works[0]?.image?.facebookOgImageUrl ?? ''} target="_blank">
          <Image
            src={imageUrlGenerator.next().value}
            alt={works[0]?.title}
            objectFit="cover"
            my={{ base: 0, sm: '20px' }}
            onError={(e) => {
              console.log(1);
              e.currentTarget.src = imageUrlGenerator.next().value;
            }}
          />
        </Link>
      </Center>
      <Box mx="16px" my="32px">
        <Heading size={{ base: 'md', sm: 'lg' }} mb="12px">
          {works[0]?.title}
        </Heading>
        <Flex direction="column" gap="6px" mt="20px">
          <UrlIconLink url={works[0]?.officialSiteUrl ?? ''} />
          <TwitterIconLink id={works[0]?.twitterUsername ?? ''} />
        </Flex>
        {works[0]?.officialSiteUrl && <ResponseHeader header={header} />}
      </Box>
    </Box>
  ) : (
    <></>
  );
};

export default Work;

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({
  params,
}) => {
  const sdk = GqlClient.getSdk();
  const id = params ? params.work : '';
  const query = await sdk.searchWorksByIds({ ids: Number(id) });
  const nodes = query.searchWorks?.nodes ?? [];
  const response = await axios.get(
    nodes[0]?.officialSiteUrl || 'https://example.com',
    { responseType: 'text' }
  );
  const header = JSON.parse(JSON.stringify(response.headers)) as Record<
    string,
    string
  >;

  return {
    props: {
      query,
      header,
    },
  };
};
