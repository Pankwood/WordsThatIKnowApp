import React from 'react';
import Content from '../../../../data/Content/content.json';
import { LocaleContext } from '../../../../LocaleContext';
import { VideoContainer, ResponsiveIframe } from './styles';

function YouTubeIframeResponsive({ youtubeID }) {
  const [locale] = React.useContext(LocaleContext);
  return (
    <VideoContainer>
      <ResponsiveIframe
        src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/${youtubeID}?autoplay=1&mute=1><img loading=lazy src=https://img.youtube.com/vi/${youtubeID}/hqdefault.jpg alt="${Content.language[locale].Home_title}"><span>&#x25BA;</span></a>`}
        title={Content.language[locale].Home_title}
      />
    </VideoContainer>
  );
}

export default YouTubeIframeResponsive;
