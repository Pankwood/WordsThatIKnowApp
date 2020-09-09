import React, { lazy, Suspense } from 'react';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';
import BackgroundMain from '../../assets/img/BackgroundMainSmall.jpg';
import Content from '../../data/Content/content.json';
import { LocaleContext } from '../../LocaleContext';

const VideoIframeResponsive = lazy(() => import('./components/VideoIframeResponsive'));
const renderLoader = () => <p>Loading...</p>;

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function BannerMain({
  videoTitle,
  videoDescription,
  url,
}) {
  const youTubeID = getYouTubeId(url);
  const [locale] = React.useContext(LocaleContext);

  return (
    <BannerMainContainer backgroundImage={BackgroundMain}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {videoTitle}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {videoDescription}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <Suspense fallback={renderLoader()}>
            <VideoIframeResponsive
              youtubeID={youTubeID}
            />

          </Suspense>
          <WatchButton>
            {Content.language[locale].Banner_button}
          </WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
