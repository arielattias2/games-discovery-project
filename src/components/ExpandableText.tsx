import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [fullText, setFullText] = useState(false);
  const LIMIT = 300;

  if (!children) return null;

  if (children.length < LIMIT) return <Text>{children}</Text>;

  const gameDescription = fullText ? children : children.slice(0, 300) + "... ";

  return (
    <>
      <Text>
        {gameDescription}
        <Button
          size="xs"
          marginLeft={1}
          fontWeight="bold"
          colorScheme="yellow"
          onClick={() => setFullText(!fullText)}
        >
          {fullText ? "Show less" : "Show more"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
