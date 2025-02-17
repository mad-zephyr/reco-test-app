import { FC, HTMLAttributes } from 'react';

type THtag = HTMLAttributes<HTMLHeadingElement> & {
  tag: 'h1' | 'h2' | 'h3';
};

export const Htag: FC<THtag> = ({ tag, title, className, ...rest }) => {
  switch (tag) {
    case 'h1': {
      return (
        <h1 className={className} {...rest}>
          {title}
        </h1>
      );
    }
    case 'h2': {
      return (
        <h2 className={className} {...rest}>
          {title}
        </h2>
      );
    }
    case 'h3': {
      return (
        <h3 className={className} {...rest}>
          {title}
        </h3>
      );
    }
    default: {
      return (
        <h1 className={className} {...rest}>
          {title}
        </h1>
      );
    }
  }
};
