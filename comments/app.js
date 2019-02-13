let ProfilePic = (props) => {
    return <img style={{float: "left", marginRight: "20px", clear: "both", borderRadius: "50%"}} src={props.src} alt={props.alt} height="100px" width="100px" />
}

let CommentBody = (props) => {
    return <div style={{display: "block", overflow: "hidden"}}>
      <div style={{padding: "10px 0"}}><b>{props.username}</b></div>
      <p>{props.comment}</p>
    </div>
}

let Comment = (props) => {
    return <div style={{minHeight: "100px", background: "#fff2e5", borderRadius: "4px", padding: "10px", margin: "20px 0"}}>
      <ProfilePic src={props.src} alt={props.alt} />
      <CommentBody username={props.username} comment={props.comment} />
    </div>
}

let Comments = () => {
    return <span>
      <div>Make this component render a list of comments</div>
      <ul style={{listStyle: "none", paddingLeft: "0"}}>
        <li><Comment src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg" alt="Anonymous User" username="QuesadillaLuver467" comment="Oh I love this song. It's my jam!" /></li>
        <li><Comment src="http://www.sardiniauniqueproperties.com/wp-content/uploads/2015/10/square-profile-pic-2.jpg" alt="Jeffrey Wright" username="TheOtherJeffreyWright" comment="Some people choose to see the ugliness in this world. The disarray. I choose to see the beauty." /></li>
        <li><Comment src="http://www.sardiniauniqueproperties.com/wp-content/uploads/2015/10/Square-Profile-Pic-1-1.jpg" alt="Susan Sontag" username="SusieQ" comment="Interpretation is the revenge of the intellectual upon art." /></li>
        <li><Comment src="https://rawtools.org/wp-content/uploads/2016/02/Kurt-Profile-Image-Square-Brick-1024x1024.jpg" alt="Robert Altman" username="The@ltm@n" comment="Social behavior. Schjelderup-Ebbe first used the word dominance in describing his observations on the social hierarchies of birds. He concluded that within a flock, composed of single species, there exists a definite order of social distinctions. And between any two birds, one invariably has precedence over the other." /></li>
        <li><Comment src="http://gokubi.com/wp-content/uploads/2013/10/Steve-Andersen-Headshot-square1.jpeg" alt="Peter Pettigrew" username="deatheatas4eva" comment="I solemnly swear that I am up to no good" /></li>
      </ul>
    </span>
}

ReactDOM.render(<Comments />, document.getElementById('root'))
