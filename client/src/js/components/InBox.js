var React=require('react');
var InBoxList = require('./InBoxList');
var mail=require('./mail.json');
var InBox = React.createClass({
  getInitialState: function(){
     return{AllData:[]}
  },
  componentWillMount:function(){
    this.setState({AllData:mail.all});
  },
  render: function() {

    return (
      <div className="mailBox">
        <InBoxList dataBox = {this.state.AllData}/>
        
      </div>
    );
  }
});

module.exports=InBox;
