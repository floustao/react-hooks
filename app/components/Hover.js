import React from 'react'

export default function Hover ({
  ...props
}) {
  const [hovering, setHovering] = React.useState(false);

  return (
    <div onMouseOver={() => setHovering(true)} onMouseOut={() => setHovering(false)}>
      {props.children(hovering)}
    </div>
  );
}