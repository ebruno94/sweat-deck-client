const main = {
  backgroundColor: "#FC6000",
  height: "50px",
  width: "150px",
  display: "inline",
  margin: "auto",
  marginTop:"20px",
  border: "2px solid black",
  borderRadius: "10px",
  color: "white",
  textDecoration: "none",
  fontFamily: "BebasBold",
  letterSpacing: "4px",
  fontSize: "26px"
}

const mainHover = { ...main,
  boxShadow: "0px 0px 10px white",
  cursor: "pointer"
}

const timer = {
  ...main,
  width: '75px',
  height: '50px',
  letterSpacing: '2px',
  fontSize: '20px'
}

const timerHover = {
  ...timer,
  boxShadow: "0px 0px 10px white",
  cursor: "pointer"
}

const done = {
  backgroundColor: "gray",
  height: "50px",
  width: "150px",
  display: "inline",
  margin: "auto",
  marginTop:"20px",
  border: "2px solid black",
  borderRadius: "10px",
  color: "white",
  textDecoration: "none",
  fontFamily: "BebasBold",
  letterSpacing: "4px",
  fontSize: "26px"
}

const doneHover = {
  ...done,
  boxShadow: "0px 0px 10px white",
  cursor: "pointer"
}

const yes = {
  backgroundColor: "green",
  height: "50px",
  width: "150px",
  display: "inline",
  margin: "auto",
  marginTop:"20px",
  border: "2px solid black",
  borderRadius: "10px",
  color: "white",
  textDecoration: "none",
  fontFamily: "BebasBold",
  letterSpacing: "4px",
  fontSize: "26px"
}

const yesHover = {
  ...yes,
  boxShadow: "0px 0px 10px white",
  cursor: "pointer"
}

const no = {
  backgroundColor: "red",
  height: "50px",
  width: "150px",
  display: "inline",
  margin: "auto",
  marginTop:"20px",
  border: "2px solid black",
  borderRadius: "10px",
  color: "white",
  textDecoration: "none",
  fontFamily: "BebasBold",
  letterSpacing: "4px",
  fontSize: "26px"
}

const noHover = {
  ...no,
  boxShadow: "0px 0px 10px white",
  cursor: "pointer"
}

export const ButtonStyle = {
  main,
  mainHover,
  timer,
  timerHover,
  done,
  doneHover,
  yes,
  yesHover,
  no,
  noHover
}
