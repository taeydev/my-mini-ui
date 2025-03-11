const ImageErrorIcon = ({
  width = "24px",
  height = "24px",
}: {
  width?: string;
  height?: string;
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      style={{ maxWidth: "50px", maxHeight: "50px" }}
    >
      <g data-name="Layer 2" id="Layer_2">
        <g id="Workspace">
          <rect width="24" height="24" fill="none" />
          <polyline
            points="13 5 13 9 17 9 17 11 14 13 13 11 9 15 13 14 14 16 17 14 17 19 7 19 7 5 13 5 17 9"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

export default ImageErrorIcon;
