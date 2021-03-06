class App extends React.Component {
    state = {
      text: ''
    }
    
    handleChange = (e) => {
      this.setState({
        text: e.target.value
      })
    }
    
    render() {
      const { text } = this.state;
      
      const markdown = marked(text);
      
      return(
      <div>
          <h2 className="text-center m-4">Convert Your Markdown</h2>
          <div className="row">
            <div className="col-6">
              <h5 className="text-center">Enter your markdown here:</h5>
              <textarea className="form-control" id="editor" value={text} onChange={this.handleChange}/>
            </div>
            
            <div className="col-6" id="preview">
              <h6 className="text-center">See the result:</h6>
              <div className="preview rounded" />
              </div>
          </div>
      </div>
      );
    }
  }
  
  ReactDOM.render(<App/>, document.getElementById('app'));