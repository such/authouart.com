export const canUseWebp = () => {
  const elem = typeof document === 'object' && document.createElement('canvas');

  if (elem && elem.getContext && elem.getContext('2d')) {
    // was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  // very old browser like IE 8, canvas not supported
  return false;
};

export const webpBackgroundImage = (png, webp) => ({
  backgroundImage: `url(${png})`,
  '.webp &': {
    backgroundImage: `url(${webp})`
  }
});
