import React, {Component} from 'react';


class Signin extends Component{

    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value });
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value });
    }
    onSubmitSignIn = () => {
        fetch('https://awesome-face-recognition-app.herokuapp.com/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                loginPassword: this.state.signInPassword
                })
            })
            .then(res => res.json())
            .then(user => {
                if(user[0].id) {
                    this.props.loadUser(user[0]);
                    this.props.onRouteChange('home');
                    
                } else {
                    console.log(user)
                }
              
            })

        
        
    }
    
    render() {
        const { onRouteChange } = this.props;
        return (
   
            <article className='center br3 ba dark-gray b-black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 '>
                <main className="pa4 black-80" >
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" 
                        name="email-address"  
                        id="email-address"
                        onChange={this.onEmailChange}
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="password" 
                        name="password"  
                        id="password" 
                        onChange={this.onPasswordChange}
                        />
                    </div>
                    <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                    </fieldset>
                    <div className="">
                    <input onClick={this.onSubmitSignIn}
                     className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                     type="submit" 
                     value="Sign in" />
                    </div>
                    <div className="lh-copy mt3">
                    <p  className="f3 link dim black db pointer" onClick={() => onRouteChange('Register')} >Register</p>
                    </div>
                </div>
                </main>
            </article>
        )
        }
}

export default Signin;