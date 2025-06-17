const CloseIcon = ({
  width = "24px",
  height = "24px",
  color = "black"
}: {
  width?: string;
  height?: string;
  color?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="7"
        x2="25"
        y1="7"
        y2="25"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2px"
        }}
      />
      <line
        x1="7"
        x2="25"
        y1="25"
        y2="7"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2px"
        }}
      />
    </svg>
  );
};

export default CloseIcon; 