export interface QRStyling {
  fgColor: string;
  bgColor: string;
  size: number;
  level: 'L' | 'M' | 'Q' | 'H';
  includeMargin: boolean;
  dotsType: 'square' | 'dots' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded';
  image?: string;
  imageOptions?: {
    hideBackgroundDots: boolean;
    imageSize: number;
    margin: number;
  };
  cornersSquareOptions?: {
    color: string;
    type: 'dot' | 'square' | 'extra-rounded' | 'rounded' | 'dots' | 'classy' | 'classy-rounded';
    gradient?: {
      type: 'linear' | 'radial';
      rotation?: number;
      colorStops: { offset: number; color: string }[];
    };
  };
  cornersDotOptions?: {
    color: string;
    type: 'dot' | 'square' | 'rounded' | 'dots' | 'classy' | 'classy-rounded' | 'extra-rounded';
    gradient?: {
      type: 'linear' | 'radial';
      rotation?: number;
      colorStops: { offset: number; color: string }[];
    };
  };
  shape?: 'square' | 'circle';
  dotsGradient?: {
    type: 'linear' | 'radial';
    rotation?: number;
    colorStops: { offset: number; color: string }[];
  };
  backgroundGradient?: {
    type: 'linear' | 'radial';
    rotation?: number;
    colorStops: { offset: number; color: string }[];
  };
}

export const defaultStyling: QRStyling = {
  fgColor: '#000000',
  bgColor: '#ffffff',
  size: 200,
  level: 'M',
  includeMargin: true,
  dotsType: 'square',
};
