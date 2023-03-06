import type { FC } from 'react';
import Head from 'next/head';

type Props = {
  title?: string;
};

const CommonMeta: FC<Props> = ({ title = '' }) => (
  <Head>
    <title>{(title ? title + ' | ' : '') + 'Anime'}</title>
  </Head>
);

export default CommonMeta;
