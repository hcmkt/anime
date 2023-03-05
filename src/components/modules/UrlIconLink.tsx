import type { FC } from 'react';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Url from '@/lib/Url';
import IconLink from './IconLink';

type Props = {
  url?: string;
};

const UrlIconLink: FC<Props> = ({ url = 'https://example.com' }) =>
  url ? (
    <IconLink icon={faLocationDot} link={url} displayLink={Url.trimUrl(url)} />
  ) : (
    <></>
  );

export default UrlIconLink;
