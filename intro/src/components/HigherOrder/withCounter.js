import React from 'react';

const withCounter= (WrappedComponent,incrementNumber)=>{
    class WithComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
          increamentCount=()=>{
              this.setState((prevState)=>{
                  return {count:prevState.count+ incrementNumber}
              })
          }
          //The count state and the increment functionality is the common in the Hover and Click component
        render(){
            return <WrappedComponent count={this.state.count} 
            increamentCount={this.increamentCount}
            {...this.props} //this is how we pass props on the HOC, we are supposed to pass the props in the shared component
            />
        }
    }
    return WithComponent
}
export default withCounter