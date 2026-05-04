import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Apolinar!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#BC6C25"
  >
    <VStack spacing={4}>
      <Avatar name="Pete Parker" src="https://i.pravatar.cc/150?img=7" size="4xl"/>
      <Heading as="h1" size="md">{greeting}</Heading>
      <Heading as="h2" size="xl">{bio1}</Heading>
      <Heading as="h2" size="xl">{bio2}</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
