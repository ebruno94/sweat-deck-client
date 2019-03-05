const container = {
  width: "500px",
  height: "600px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "40px",
  marginBottom: "40px",
  padding: "0px",
  border: "4px solid black",
  borderRadius: "20px 20px 20px 20px",
  boxShadow: "0px 0px 25px black",
  backgroundColor: "#1d1d1e"
}

const footer = {
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
  backgroundColor: "black",
  color: "white",
  textAlign: "center",
  letterSpacing: "3px",
  fontSize: "25px"
}

const message = {
  fontSize: "40px",
  display: "flex",
  justifyContent: "center",
  marginTop: "25px",
  color: "white",
  fontFamily: "BebasBold"
}

const subtitle = {
  ...message,
  fontSize: "20px",
  marginTop: "0px",
  marginBottom: "0px",
  fontFamily: "BebasBook"
}

export const AppStyle = {
  container,
  footer,
  message,
  subtitle
}
