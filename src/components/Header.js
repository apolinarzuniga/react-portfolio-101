import React, { useState, useEffect, useRef } from 'react';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { Box, HStack } from '@chakra-ui/react';
import SocialLink from './SocialLink';

const socials = [
  {
    name: 'Mail',
    icon: faEnvelope,
    url: 'mailto: hello@example.com',
  },
  {
    name: 'GitHub',
    icon: faGithub,
    url: 'https://github.com',
  },
  {
    name: 'LinkedIn',
    icon: faLinkedin,
    url: 'https://www.linkedin.com',
  },
  {
    name: 'Medium',
    icon: faMedium,
    url: 'https://medium.com',
  },
  {
    name: 'StackOverflow',
    icon: faStackOverflow,
    url: 'https://stackoverflow.com',
  },
];

const Header = () => {
  const navBarEl = useRef(null);
  const [hidden, setHidden] = useState(false);
  const [scrollYPosition, setScrollYPosition] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = (event) => {
      const currentScroll = window.scrollY;
      setScrollYPosition((state) => {
        setHidden(state < currentScroll);
        return currentScroll;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={hidden ? 'translateY(-200px)' : 'translateY(0px)'}
      transition="transform 0.3s ease-in-out"
      backgroundColor="#283618"
      ref={navBarEl}
    >
      <Box color="#FEFAE0" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials?.map((social) => (
                <SocialLink key={social.name} {...social} />
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects" onClick={handleClick('projects')}>
                <strong>Projects</strong>
              </a>
              <a href="#contact-me" onClick={handleClick('contactme')}>
                <strong>Contact Me</strong>
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
