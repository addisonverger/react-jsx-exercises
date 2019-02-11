let TextInput = (props) => {
    return <div style={{padding: "5px 0"}}>
      <div>{props.label}</div>
      <input type={props.type} name={props.name} style={{width: "25%"}}/>
    </div>
}

let YesNoRadio = (props) => {
    return <div style={{padding: "5px 0"}}>
      <div>{props.label}</div>
      <span style={{padding: "0 5px"}}>
        <input type="radio" name={props.name} value="yes" /> Yes
      </span>
      <span style={{padding: "0 5px"}}>
        <input type="radio" name={props.name} value="no" /> No
      </span>
    </div>
}

let SubmitButton = () => {
    return <div style={{padding: "5px 0"}}>
      <input type="submit" value="Submit" style={{background: "#e7e7e7", borderRadius: "4px", padding: "10px 24px"}} />
    </div>
}

let Form = () => {
    return <form>
      <div>Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button</div>
      <h1>My Form</h1>
      <TextInput label="First Name:" type="text" name="fname"/>
      <TextInput label="Last Name:" type="text" name="lname"/>
      <TextInput label="Email:" type="email" name="email"/>
      <YesNoRadio label="Would you like to sign-up for our Newsletter?" name="newsletter"/>
      <YesNoRadio label="Another question?" name="question"/>
      <SubmitButton />
    </form>
}


ReactDOM.render(<Form />, document.getElementById('root'))
