import * as React from 'react';

import Link from '../../components/link/Link';
import Facebook from '../../components/svg/Facebook';
import Github from '../../components/svg/Github';
import LinkedIn from '../../components/svg/LinkedIn';
import Resume from '../../components/svg/Resume';
import Twitter from '../../components/svg/Twitter';

import {
  container,
  name,
  description,
  linkedInLink,
  resumeLink,
  svgLinks,
  twitterLink,
  facebookLink,
  githubLink,
} from './Info-emotion';

const Info = () => {
  const time = new Date().getTime();

  return (
    <div className={container}>
      <span className={name}>christopher wei</span>
      <span className={description}>
        I like javascript, video games, and cats
      </span>
      <span className={svgLinks}>
        <Link
          className={githubLink}
          href={`https://github.com/cweeii?time=${time}`}
          target="_blank"
        >
          <Github />
        </Link>
        <Link
          className={facebookLink}
          href={`https://www.facebook.com/cweeii?time=${time}`}
          target="_blank"
        >
          <Facebook />
        </Link>
        <Link
          className={twitterLink}
          href={`https://twitter.com/cweeii?time=${time}`}
          target="_blank"
        >
          <Twitter />
        </Link>
        <Link
          className={linkedInLink}
          href={`https://www.linkedin.com/in/christopher-wei-58660b69?time=${time}`}
          target="_blank"
        >
          <LinkedIn />
        </Link>
        <Link
          className={resumeLink}
          href={`https://storage.googleapis.com/chris-wei-207401.appspot.com/Chris%20Wei%20R%C3%A9sum%C3%A9.pdf?time=${time}`}
          target="_blank"
        >
          <Resume />
        </Link>
      </span>
    </div>
  );
};

export default Info;
