import React from "react"
//后台管理
import './login.less'
import logo from "./images/logo.png"

export default class Login extends React.Component{
   
    render(){
        return(
          <div className="login">
              <header className="login-header">
                  <img src={logo} alt="logo"/>
                  <h1>后台管理系统</h1>

              </header>
              <section className="login-content">
              <h3>用户登录</h3>
              <div>dasdadsad</div>
              </section>
             
              
          </div>
        )

    }
}
