const main = {
  backgroundColor: "#FC6000",
  height: "50px",
  width: "150px",
  display: "block",
  margin: "auto",
  border: "2px solid black",
  borderRadius: "10px",
  color: "white",
  textDecoration: "none"
}

const mainHover = { ...main,
  boxShadow: "0px 0px 10px white",
  cursor: "pointer"
}

export const ButtonStyle = {
  main,
  mainHover,
}