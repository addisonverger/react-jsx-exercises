let ListGroupItem = (props) => {
    return <li className="list-group-item">{props.text}</li>
}

let ListGroup = () => {
    return <div style={{maxWidth: "500px"}}>
      <div>Make this Component render a handful of ListGroupItems</div>
      <ul className="list-group">
        <ListGroupItem text="Cras justo odio" />
        <ListGroupItem text="Dapibus ac facilisis in" />
        <ListGroupItem text="Morbi leo risus" />
        <ListGroupItem text="Porta ac consectetur ac" />
        <ListGroupItem text="Vestibulum at eros" />
      </ul>
    </div>
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))
