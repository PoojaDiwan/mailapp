var React = require('react');
var MyInMail = React.createClass({
  getInitialState: function(){
     return{MailFrom:this.props.allMails}
    console.log(this.props.allMails);
  },
    render: function() {
    return (

      <div className="Mail" >
  <div className="row">

<div className="col-md-12 mailb" >
<form >

<h5 >ID:{this.props.allMails.msg_id}</h5>
<h4>Snippet:</h4><p>{this.props.allMails.Msg_snippet}
<a id="modal-808820" href="#modal-container-808820" onMouseDown={this.handleShowModal} role="button" class="btn" data-toggle="modal">Read more</a>
</p>
</form>
</div>
</div>
</div>

    );
  }
});
module.exports = MyInMail;
