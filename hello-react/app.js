const MyFirstComponent = (props) => {
  return (
    <div>
      <h2 className="my-class">
        This is a {props.name} that I made.
      </h2>
      <div className="blog-body">
        {props.children}
      </div>
    </div>
  )
}

const myElement = (<div>
  Hello World! {3 + 4}
  <h1>My name is Amanda</h1>
  <MyFirstComponent name="bananas"/>
  <MyFirstComponent name="apples"/>
  //or
  <MyFirstComponent name="persimmon">
    <span>Monkeys</span>
  </MyFirstComponent>
</div>)

ReactDOM.render(myElement, document.getElementById('root'))
