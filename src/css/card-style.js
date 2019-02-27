const card = {
  border: "2px solid black",
  height: "400px",
  width: "300px",
  borderRadius: "25px",
  margin: "50px",
}

const header = {
  backgroundColor: "hotpink",
  height: "100px",
  width: "300px",
  borderRadius: "22px 22px 0px 0px", /* top left, top right, bot right, bot left */
}

const body = {
  backgroundColor: "black",
  height: "300px",
  width: "300px",
  borderRadius: "0px 0px 22px 22px",
  color: "white",
  fontSize: "36px",
  fontStyle: "bold"
}


export const cardStyle = {
  card,
  header,
  body
}