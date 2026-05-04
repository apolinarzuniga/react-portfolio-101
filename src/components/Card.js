import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ProjectCard = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack className={"projectCard"} align="start">
      <Image src={imageSrc} alt={title} className="projectImage"/>
      <div className="textWrapper">
        <Heading as="h1" size="md">
          {title}
        </Heading>
        <Text>
          {description}
        </Text>
        <HStack spacing={4} align="center" className="seeMoreContainer">
          <Text className="seeMore">
            See More
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
      </div>
    </VStack>
  );
};

export default ProjectCard;
