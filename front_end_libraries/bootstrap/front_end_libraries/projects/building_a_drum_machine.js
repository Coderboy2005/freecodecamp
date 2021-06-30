class DrumPad extends React.Component {
    render() {
      return(
      <div className="drum-pad"></div>
      )
    }
  }
  
  class App extends React.Component {
    constructor(props){
      super(props)
    }
  render(){
    return(
    <div id="drum-machine">
        <h1 id="display"></h1>
        {data.map(d => (
        <DrumPad/>
        ))}
    </div>
      );
    }
  }
  
  ReactDom.render(<App/>, document.get
  ElementById("root"));