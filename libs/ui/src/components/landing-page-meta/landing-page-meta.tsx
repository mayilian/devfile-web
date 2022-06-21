import Head from 'next/head';
import getConfig from 'next/config';
import type { GetConfig } from '../../types';

export interface LandingPageMetaProps {
  title?: string;
  keywords?: string;
  description?: string;
}

const { publicRuntimeConfig } = getConfig() as GetConfig;

export function LandingPageMeta(props: LandingPageMetaProps): JSX.Element {
  const { title, keywords, description } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />

      <meta charSet="utf8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
      />
      <meta name="theme-color" content="#151515" />

      <link rel="icon" href={`${publicRuntimeConfig.basePath}/images/icons/favicon.ico`} />
    </Head>
  );
}

LandingPageMeta.defaultProps = {
  title: 'Devfile',
  keywords: 'Devfile, OpenShift, Kubernetes',
  description: 'Devfile Landing Page',
};

export default LandingPageMeta;