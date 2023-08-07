import { Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

function PageStepper() {
  const { activeStep, setActiveStep } = useSteps({
    index: 0, // Start with the first step as active
    count: steps.length,
  });

  // State to store the current scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to handle scroll and update active step based on scroll position
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const currentPosition = window.scrollY;
    const maxScrollPosition = documentHeight - windowHeight;

    // Calculate the percentage of scroll progress
    const scrollPercentage = (currentPosition / maxScrollPosition) * 100;

    // Determine the active step based on the scroll percentage
    if (scrollPercentage >= 0 && scrollPercentage < 10) {
      setActiveStep(0);
    } else if (scrollPercentage >= 10 && scrollPercentage < 50) {
      setActiveStep(1);
    } else {
      setActiveStep(2);
    }

    // Update the scroll position state
    setScrollPosition(currentPosition);
  };

  // Add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      {/* Render the stepper using the activeStep from useSteps */}
      <Stepper index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}></Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default PageStepper;
