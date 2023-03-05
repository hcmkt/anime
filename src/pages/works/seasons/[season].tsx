import type { ParsedUrlQuery } from 'querystring';
import { Box, Grid, GridItem, Center } from '@chakra-ui/react';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import type { AnnictSearchWorksBySeasonsQuery } from '@/gql/gql';
import LinkCard from '@/components/modules/LinkCard';
import CommonMeta from '@/components/organisms/CommonMeta';
import ControlBar from '@/components/organisms/ControlBar';
import GqlClient from '@/lib/GqlClient';
import Season from '@/lib/Season';

const seasons = Season.getSeasons();

type Props = {
  season: string;
  query: AnnictSearchWorksBySeasonsQuery;
};

interface Params extends ParsedUrlQuery {
  season: string;
}

const SeasonPage: NextPage<Props> = ({ season, query }) => {
  const works = query.searchWorks?.nodes ?? [];

  return (
    <Box m="16px">
      <CommonMeta title={season} />
      <Center my={10}>
        <ControlBar seasonName={season} />
      </Center>
      <Grid
        templateColumns={{ sm: 'repeat(auto-fill, minmax(400px, 1fr))' }}
        gap="24px"
        my="0"
        mx="auto"
        maxW="1980px"
        justifyContent="center"
      >
        {works.map((work) => (
          <GridItem key={work?.annictId}>
            <LinkCard
              overlayUrl={`/works/${work?.annictId}`}
              imageUrl={[
                work?.image?.facebookOgImageUrl,
                work?.image?.recommendedImageUrl,
              ]}
              title={work?.title}
              siteUrl={work?.officialSiteUrl ?? ''}
              twitterId={work?.twitterUsername ?? ''}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = seasons.map((season) => ({ params: { season: season.name } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const sdk = GqlClient.getSdk();
  const season = params ? params.season : '';
  const query = await sdk.searchWorksBySeasons({ seasons: season });

  return {
    props: {
      season,
      query,
    },
  };
};

export default SeasonPage;
