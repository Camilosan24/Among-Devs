import React from "react";
import taskImage from '../../img/edit-regular.svg'

class ChooseTask extends React.Component {

   constructor(props){
      super(props)
      this.task = this.props.value;
   }

	render() {
		return (
			<div className="chooseTask" >
            <img src={taskImage} width="50" height="40" alt="task"/>
				<span className="text-light" onClick={()=>this.props.showFunc(this.task)}>
					{this.props.name}
				</span>
			</div>
		);
	}
}
export default ChooseTask;
