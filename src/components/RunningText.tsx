import { CSSProperties, useState } from "react";
import { animated, useSpring } from "react-spring";

type Props = {
  text: string;
  content: string;
  style?: CSSProperties;
  duration?: number;
  onClick?: (data: any) => void;
};

const RunningText = (props: Props) => {
  const [key, setKey] = useState(1);
  const {
    text = "",
    content = "",
    style = {},
    duration = 0,
    onClick = () => {},
  } = props;

  const scrolling = useSpring({
    from: { transform: "translate(100%,0)" },
    to: { transform: "translate(-100%,0)" },
    config: { duration: duration },
    reset: true,
    onRest: () => {
      setKey(key + 1);
    },
  });

  return (
    <animated.p
      onClick={() => onClick({ text, content })}
      style={{
        ...style,
        ...scrolling,
      }}
    >
      {text}
    </animated.p>
  );
};

export default RunningText;
