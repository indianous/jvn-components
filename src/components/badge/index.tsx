interface BadgeProps extends React.ComponentProps<"span"> {
  value?: number;
}

export default function Badge({ value = 0, ...rest }: BadgeProps) {
  const padding = value < 10 && value != 0 ? "4px 8px" : 4;
  const topRight = value == 0 ? -2 : -7.5;
  return (
    <>
      <span
        style={{
          position: "absolute",
          backgroundColor: "tomato",
          borderRadius: 18,
          padding,
          fontSize: 10,
          color: "white",
          top: topRight,
          right: topRight,
        }}
        {...rest}
      >
        {value == 0 ? " " : value < 100 ? value.toString() : "99+"}
      </span>
    </>
  );
}
