var GistAddForm = React.createClass({

  getInitialState = function(){
    return{
      username: ''
    };
  },

  onChange: function(e){
    this.setState({username: e.target.value});
  },

  addGist: function(){
    e.preventDefault();
    this.props.onAdd(this.state.username);
    this.setState({username:''});
  },

  render: function(){
      return(
        <div>
        <form onSubmit={this.addGist}>
          <input value = {this.state.username} onChange={this.onChange} placeholder ="Type a GitHub Username..." />
          <button>Fetch latest gist</button>
        </form>
        </div>
      );
  }

});

export default GistAddForm;
