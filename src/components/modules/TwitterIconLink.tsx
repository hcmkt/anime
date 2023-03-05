import type { FC } from 'react';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Url from '@/lib/Url';
import IconLink from './IconLink';

type Props = {
  id?: string;
};

const TwitterIconLink: FC<Props> = ({ id = 'Twitter' }) =>
  id ? (
    <IconLink icon={faTwitter} link={Url.getTwitterUrl(id)} displayLink={id} />
  ) : (
    <></>
  );

export default TwitterIconLink;
