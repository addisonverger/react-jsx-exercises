let Header = () => {
    return <span>
      <div>Design a header for your blog</div>
      <h1>Weclome to My Blog!</h1>
    </span>
}
let Article = () => {
    return <span>
        <div>Write and design your blog article</div>
        <h3>A Day in the Life</h3>
        <p>Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it. Farther be chapter at visited married in it pressed. By distrusts procuring be oh frankness existence believing instantly if. Doubtful on an juvenile as of servants insisted. Judge why maids led sir whose guest drift her point. Him comparison especially friendship was who sufficient attachment favourable how. Luckily but minutes ask picture man perhaps are inhabit. How her good all sang more why.</p>
      </span>
}
let Footer = () => {
    return <span style={{position: "absolute", bottom: "10px"}}>
      <div>Design a footer for your blog</div>
      <p>Follow me on Social Media</p>
      <ul>
        <li><a href="facebook.com">Facebook</a></li>
        <li><a href="twitter.com">Twitter</a></li>
      </ul>
    </span>
}

let Blog = () => {
    return <span>
      <div>Make this Component render the header, article, and footer</div>
      <Header/>
      <Article/>
      <Footer/>
    </span>
}


ReactDOM.render(<Blog />, document.getElementById('root'))
