import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label,Input } from 'reactstrap';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        //   modal: true,
          username : ''
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        // this.setState(prevState => ({
        //   modal: !prevState.modal
        // }));
      }

      onChangeHandler = (e)=>{
        const value= e.target.value
        this.setState({username:value})
      }

      onSubmitHandler = (e)=>{
          if (this.state.username !== '') {
            localStorage.setItem('username', this.state.username)
            window.location.reload()
          } else {
                alert('kindly insert a username')
          }
      }
    
      render() {
          const closeBtn = <button className="close" onClick={this.props.loginHandler}></button>;
          return (
          <div>
            <Modal isOpen={this.props.login} toggle={this.props.loginHandler} className={this.props.className}>
              <ModalHeader toggle={this.props.loginHandler} close={closeBtn}>Login</ModalHeader>
              <ModalBody>
              <Form>
                <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" 
                    id="exampleEmail"
                    placeholder="with a placeholder" 
                    onChange={this.onChangeHandler}/>
                </FormGroup>
                <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" 
                    id="examplePassword" 
                    placeholder="password placeholder" />
                </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" 
                onClick={this.onSubmitHandler}>Login</Button>
                <Button color="secondary" 
                onClick={this.props.loginHandler}>Cancel</Button>
            </ModalFooter>
            </Modal>
          </div>
        );
      }
}

export default Login