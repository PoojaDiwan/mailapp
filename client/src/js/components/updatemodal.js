var React = require('react');


var UpdateModal = React.createClass ({
  getInitialState: function(){

return(
      {
  msg_id:this.props.AllData.msg_id,
  Msg_snippet:this.props.AllData.Msg_snippet,
Msg_data:this.props.AllData.Msg_data,
});
  },
  componentDidMount: function(){
    mdata=JSON.stringify(this.state.AllData);
    // console.log("will "+mdata);

    var html = atob(this.props.AllData.Msg_data.replace(/-/g, '+').replace(/_/g, '/'));
        // console.log("materhtml "+html);
 this.appendPre(html);
  },
  appendPre: function(message)
{
 document.getElementById('matter').innerHTML= message;

},
  handleInsert:function(e){

      e.preventDefault();
console.log("mdata "+this.state.mid);
      $.ajax({
        url:"http://localhost:8080/mails/",
        type:"POST",
        data:this.state,
        datatype:"json",
        success:function(data)
        {

        console.log(data);
        }.bind(this),
        error:function(err){
          console.error(err.toString());
        }.bind(this)

      });
      console.log("Inserted");
      alert("Mail got inserted to DataBase!!!")
    },


  render: function()
  {
  return(
    <div className="modal fade" id="modal-container-808820" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div className="modal-dialog" id="modalw">
        <div className="modal-content">
          <div className="modal-header">

            <button type="button" className="close" onClick={this.props.handleHideModal} data-dismiss="modal" aria-hidden="true">
              <span className="glyphicon glyphicon-remove-sign"></span>
            </button>
            Your message

          </div>
          <div className="modal-body">
Matter :

<div id="matter">


</div>



          </div>
          <div className="modal-footer">

            <button type="button" onClick={this.props.handleHideModal} className="btn btn-default"  data-dismiss="modal">
              Close
            </button>
            <button type="button" onClick={this.handleInsert}  className="btn btn-primary">
            Insert
            </button>
          </div>
        </div>

      </div>

    </div>

  );}

});

module.exports = updatemodal;
