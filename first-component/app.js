let FirstComponent = () => {
    return (
      <span>
        <div>Make this component render like the Windows Logo:</div>
        <img src="https://www.channelweb.co.uk/w-images/daa6fb74-bb2f-48c9-a399-464612d8252a/0/windowslogo-580x358.jpg" alt="Windows Logo" height="50%" width="50%" />
      </span>
    )
}

ReactDOM.render(<FirstComponent />, document.getElementById('root'))
