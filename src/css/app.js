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

const form = {
  fontSize: "20px",
  fontFamily: "BebasBold",
  margin: "auto",
  marginTop:"0px",
  justifyContent: "center",
  display: "flex",
  textAlign: "center",
  color: "white",
  letterSpacing: "2px",
  backgroundColor: "black",
  width: "300px",
  height: "80px",
  paddingTop: "6px",
  borderRadius: "10px"
}

const regForm = {
  ...form,
  height: "575px",
  margin: "auto",
  marginTop: "10px",
  width: "475px",
  boxShadow: "0px 0px 5px inset white",
  border: "1px solid black",
  paddingBottom: "0px"
}

const input = {
  fontFamily: "BebasBook",
  letterSpacing: "2px",
  textAlign: "center",
  border: "2px solid black",
  borderRadius: "5px",
  width: "200px",
  height: "20px",
  color: "black"
}

const inputError = {
  ...input,
  border: "2px solid red",
  boxShadow: "0px 0px 10px red"
}

const line = {
  width: '400px',
  height: '2px',
  backgroundColor:'#1d1d1e',
  borderColor: '#1d1d1e',
  border: '0px',
  marginBottom: '6px'
}

const userIcon = {
  position: 'relative',
  left: '20px',
  top: '20px',
  textAlign: 'center',
  margin: '0px',
  backgroundColor: '#FC6000',
  padding: '2px',
  cursor: 'pointer',
  borderRadius: '10px',
  border: '1px solid black',
  boxShadow: '0px 0px 10px white'
}

const userIconClicked = {
  ...userIcon,
  boxShadow: '0px 0px 10px inset black'
}

export const AppStyle = {
  container,
  footer,
  message,
  subtitle,
  form,
  regForm,
  input,
  inputError,
  line,
  userIcon,
  userIconClicked
}
