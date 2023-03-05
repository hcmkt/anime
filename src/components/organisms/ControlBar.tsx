import type { FC } from 'react';
import {
  ChevronLeftIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import Season from '@/lib/Season';

const seasons = Season.getSeasons();
const linkPrefix = '/works/seasons/';
const seasonNames = seasons.map((season) => season.name);

type Props = {
  seasonName?: string;
};

const ControlBar: FC<Props> = ({ seasonName = '2022-winter' }) => {
  const seasonIdx = seasonNames.findIndex((name) => name === seasonName);
  const prevIdx = seasonIdx + 1;
  const nextIdx = seasonIdx - 1;

  return (
    <>
      <LinkNavigator
        link={linkPrefix + seasons[prevIdx]?.name}
        isVisible={prevIdx !== seasons.length}
        isLeft={true}
        text={seasons[prevIdx]?.nameText ?? seasons[0].nameText}
      />
      <Menu autoSelect={false}>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          mx={{ base: '10%', sm: '40px' }}
        >
          {seasons[seasonIdx].nameText}
        </MenuButton>
        <MenuList
          h="200px"
          minW="125px"
          sx={{ overflowY: 'scroll' }}
          zIndex="sticky"
        >
          {seasons.map((season) => (
            <Link key={season.name} href={linkPrefix + season.name}>
              <MenuItem>{season.nameText}</MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
      <LinkNavigator
        link={linkPrefix + seasons[nextIdx]?.name}
        isVisible={nextIdx !== -1}
        isLeft={false}
        text={seasons[nextIdx]?.nameText ?? seasons[0].nameText}
      />
    </>
  );
};

export default ControlBar;

type NavigatorProps = {
  isVisible: boolean;
  isLeft: boolean;
  text: string;
};

type LinkNavigatorProps = NavigatorProps & {
  link: string;
};

const Navigator: FC<NavigatorProps> = ({ isVisible, isLeft, text }) => (
  <Button
    visibility={isVisible ? 'visible' : 'hidden'}
    {...useBreakpointValue({
      base: {},
      sm: isLeft
        ? { leftIcon: <ChevronLeftIcon /> }
        : { rightIcon: <ChevronRightIcon /> },
    })}
  >
    {useBreakpointValue({
      base: isLeft ? <ChevronLeftIcon /> : <ChevronRightIcon />,
      sm: text,
    })}
  </Button>
);

const LinkNavigator: FC<LinkNavigatorProps> = ({ link, ...navigator }) => {
  return navigator.isVisible ? (
    <Link href={link}>
      <Navigator {...navigator} />
    </Link>
  ) : (
    <Navigator {...navigator} />
  );
};
