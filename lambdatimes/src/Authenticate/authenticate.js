import React from 'react'

export const Authenticate = (Content)=> (Login)=>{
    return class extends React.Component {
        constructor(props) {
            super (props)
            this.state = {
                login: false
            }    
        }
        
        componentDidMount () {
             const userToken = localStorage.getItem('username')
             if (userToken === null) {
                 this.setState({login: false})
             } else {
                 this.setState({login: true})
             }
        }

        render() {
            return (
                <div>
                    {this.state.login ? <Content {...this.props}/>
                        : <Login {...this.props}/>}
                </div>
            )
        }
    }
}