import React from 'react';
import styled from 'styled-components';

const Arrow = ({ height, width, rotate }) => {
  const imgStyle = {
    height: `${height}`,
    width: `${width}`,
    transform: `rotate( ${rotate}deg )`,
    marginLeft: '10px',
  };
  return (
    <img
      style={imgStyle}
      alt="icon arrow"
      src="data:image/svg+xml;base64,
PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQ1MS44NDYgNDUxLjg0NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUxLjg0NiA0NTEuODQ3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8cGF0aCBkPSJNMzQ1LjQ0MSwyNDguMjkyTDE1MS4xNTQsNDQyLjU3M2MtMTIuMzU5LDEyLjM2NS0zMi4zOTcsMTIuMzY1LTQ0Ljc1LDBjLTEyLjM1NC0xMi4zNTQtMTIuMzU0LTMyLjM5MSwwLTQ0Ljc0NCAgIEwyNzguMzE4LDIyNS45MkwxMDYuNDA5LDU0LjAxN2MtMTIuMzU0LTEyLjM1OS0xMi4zNTQtMzIuMzk0LDAtNDQuNzQ4YzEyLjM1NC0xMi4zNTksMzIuMzkxLTEyLjM1OSw0NC43NSwwbDE5NC4yODcsMTk0LjI4NCAgIGM2LjE3Nyw2LjE4LDkuMjYyLDE0LjI3MSw5LjI2MiwyMi4zNjZDMzU0LjcwOCwyMzQuMDE4LDM1MS42MTcsMjQyLjExNSwzNDUuNDQxLDI0OC4yOTJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CjwvZz48L2c+IDwvc3ZnPg=="
    />
  );
};
export default Arrow;
