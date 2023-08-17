import { keyframes } from "@chakra-ui/react";

const logoAnimation = keyframes`
  from { transform: translateX(-220px); }
  to { transform: translateX(0px); }
`
export const logo = `${logoAnimation} 0.7s ease-in-out`

const headerParagraphAnimation = keyframes`
  from { transform: translateX(220px); }
  to { transform: translateX(0px); }
  animation: 0.7s ease-in-out
`

export const paragraphAnimation = `${headerParagraphAnimation} 0.7s ease-in-out`