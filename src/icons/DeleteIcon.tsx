const DeleteIcon = ({
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
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px"
        }}
      />
      <line
        x1="80"
        x2="432"
        y1="112"
        y2="112"
        style={{
          stroke: color,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          strokeWidth: "32px"
        }}
      />
      <path
        d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px"
        }}
      />
      <line
        x1="256"
        x2="256"
        y1="176"
        y2="400"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px"
        }}
      />
      <line
        x1="184"
        x2="192"
        y1="176"
        y2="400"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px"
        }}
      />
      <line
        x1="328"
        x2="320"
        y1="176"
        y2="400"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32px"
        }}
      />
    </svg>
  );
};

export default DeleteIcon; 