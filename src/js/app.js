Vue.com
let app = new Vue({
  el:'#app',
  data:{
    resume:{
      name:'11',
      age:'',
      sex:'',
      location:'',
      phone:'',
      email:'',
      wechat:''
    },
    skills:[
      {},
      {},
    ],
    signup:{
      username:'',
      password:'',
    },
    login:{
      username:'',
      password:''
    },
    loginTaggle:false,
    signUpTaggle:false
  },
  methods:{
    loginShow:function(){
      this.loginTaggle = !(this.loginTaggle)
    },
    signUpShow:function(){
      this.signUpTaggle = !(this.signUpTaggle)
    },
    gologin:function(){
      AV.User.logIn(this.login.username, this.login.password).then(function (loginedUser) {
        console.log(loginedUser);
        app.loginTaggle = false
      }, function (error) {
        console.log(error)
      });
    },
    gosignUp:function(){
      // 新建 AVUser 对象实例
      var user = new AV.User();
      // 设置用户名
      user.setUsername(this.username);
      // 设置密码
      user.setPassword(this.password);
      // 设置邮箱
      user.setEmail(this.username);
      user.signUp().then(function (loginedUser) {
          console.log(loginedUser);
          app.signUpTaggle = false
      }, function (error) {
        console.log(error)
      });
    }
  }
})