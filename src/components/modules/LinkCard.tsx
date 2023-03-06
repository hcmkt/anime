import type { FC } from 'react';
import {
  Link,
  AspectRatio,
  LinkBox,
  Card,
  LinkOverlay,
  Image,
  CardBody,
  Heading,
  Flex,
} from '@chakra-ui/react';
import ImageUrl from '@/lib/ImageUrl';
import TwitterIconLink from './TwitterIconLink';
import UrlIconLink from './UrlIconLink';

type Props = {
  overlayUrl?: string;
  imageUrl?: string | null | undefined | Array<string | null | undefined>;
  title?: string;
  siteUrl?: string;
  twitterId?: string;
};

const LinkCard: FC<Props> = ({
  overlayUrl = 'https://example.com/overlay',
  imageUrl = 'https://placehold.jp/1200x630.png',
  title = 'Example',
  siteUrl = 'https://example.com/site',
  twitterId = 'twitter',
}) => {
  const imageUrlGenerator = ImageUrl.getImageUrlGenerator(imageUrl);

  return (
    <LinkBox rounded="md" h="100%">
      <Card direction="column" overflow="hidden" h="100%">
        <LinkOverlay href={overlayUrl} />
        <Link href={overlayUrl}>
          <AspectRatio ratio={1200 / 630}>
            <Image
              src={imageUrlGenerator.next().value}
              alt={title}
              objectFit="cover"
              rounded="md"
              onError={(e) => {
                e.currentTarget.src = imageUrlGenerator.next().value;
              }}
            />
          </AspectRatio>
        </Link>
        <CardBody flex={1}>
          <Heading size="md">{title}</Heading>
          <Flex direction="column" gap="6px" mt="12px">
            <UrlIconLink url={siteUrl} />
            <TwitterIconLink id={twitterId} />
          </Flex>
        </CardBody>
      </Card>
    </LinkBox>
  );
};

export default LinkCard;
