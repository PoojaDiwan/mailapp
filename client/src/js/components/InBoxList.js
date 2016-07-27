var React = require('react');
var MyInMail = require('./MyInMail');
var InBoxList = React.createClass({
  render: function() {
    var mailNodes = this.props.dataBox.map(function(mail) {
      console.log(mail);
       return (
         <MyInMail allMails={mail} key={mail.msg_id}>
         </MyInMail>
        );
      });

       return(
      <div className="inboxList">
        {mailNodes}
      </div>
    );

  }
});

module.exports = InBoxList;
