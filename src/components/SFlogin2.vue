
<template>
    <div class="login_view">
 <div class="main">
		<div class="container">
		<div class="row">
		<div class="col-slogin_viewm-12 heading"><img src="../assets/images/login/heading.png" style="margin-bottom: 5px;"></div>
        <div class="col-sm-4"><div class="signup-content">
                        <img src="../assets/images/login/logo.png" />
                        <h2 class="form-title">Sign-in</h2>
						<p style="border-bottom: 1px solid #273266;"></p>
                    <form method="POST" name="form1" id="form1" class="signup-form" @submit="Login">
						
                        <!-- <?php if (isset($_GET['error'])) { ?> -->
                            <!-- <div  id="invalidbox"  style="color:red;"><?php echo $_GET['error']; ?></div>
                        <?php } ?> -->
                        <div class="form-group">
                            <input type="text" class="form-input" required id="userId" name="userId" v-model="userId" placeholder="Username or mobile number"/>
							<span toggle="#" class="zmdi zmdi-account field-icon"></span>
							<p class="text" ><a href="forget_username.php" >Don’t know your username or mobile number?</a></p>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-input"  required name="password" id="password" v-model="password" placeholder="Password"/>
                            <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
							<p class="text" ><a href="forget_password.php" >Forgot your password?</a></p>
                        </div>
                        <div class="form-group">
                            <input type="checkbox" name="rememberme" id="rememberme" class="agree-term" />
                            <label for="rememberme" class="label-agree-term"><span><span></span></span>Keep me signed in</label>
                        </div>
                        <div id="recaptcha_widget"  style="margin-top:10px;">
                            <div id="recaptcha_image" style="text-align: center;" >
                                    <!-- <div id="capcha" style="display: grid;"><?php $utility->getCaptchaValues(); ?>
                                </div> -->
                            </div>
                            <div class="invalid_captcha" style="text-align: center;color: red;"></div>

                        </div>

                        <div  style="text-align: center;">
                            <input type="submit"   name="submit" id="submit" class="form-submit" value="Sign In"/>
                        </div>
                    </form>
                    <form role="form" class="signup-form text-center" id="form2" method="post" style="display: none;">
                        
                        <div class="form-group">
                            <label for="" class="label-agree-term">Verify your Mobile Number</label>
                            <input type="text" name="userMobileNumber" class="form-input text-center" readonly id="userMobileNumber" disabled/>
                            <button type="button" id="sendCodeBtn" class="form-submit2" style="display:none; margin-top: 10px;margin-bottom: 10px;width: 100%;">Send Verification Code Again</button>
                            <p id="codeMsg" class="alert alert-success text-center" style="margin-top: 10px;margin-bottom: 10px;padding: 5px;">Verification code has been sent.</p> 
                        </div>
                        
                        <div class="form-group">
                            <div class="col-sm-12" style="padding:0px;">
                                <!-- <label for="verifyCode" class="label-agree-term">Enter Verification Code</label> -->
                            </div>
                            <div class="" style="padding:0px;">
                                <input type="text" name="verifyCode" class="form-input text-center"  id="verifyCode" maxlength="4" placeholder="Enter Verification Code" onkeyup="if (/\D/g.test(this.value)) this.value = this.value.replace(/\D/g,'')" />
                                <p id="invalidCode" class="text-danger" style="display: none;">Invalid code</p>
                            </div>
                            <div class="text-center" id="timerText" style="padding:10px 0px; color:#273266"></div>
                            <div class="col-sm-12" style="padding:0px 0px;margin-top:5px">
                                <p class="alert alert-danger" id="serverMsg" style="display: none;"></p> 
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="" style="">
                                <button type="button" name="verifyCodeBtn" class="form-submit" id="verifyCodeBtn"> Next </button>
                            </div>
                            
                        </div>
                        
                    </form>
                    <div style="display:none;margin-top:20px;" id="errorCard">
                        <p class="alert alert-danger"></p>
                    </div>
                    <p class="bar"></p>
                    <p class="loginhere">
                        GET CONNECTED NOW! <br> <a href="signup.php" class="loginhere-link">Sign Up</a>
                    </p>
                </div></div>
  <div class="col-sm-8 hidden-xs"></div>
</div>
</div>
    </div>
</div>
</template>

<style scoped>
@import '../assets/fonts/material-icon/css/material-design-iconic-font.min.css';
/* @import '../assets/login_style.css'; */

@import '../assets/login_bootstrap.min.css';
.invalid_captcha p{
    color:red;
}
#captchaDiv {
    margin: 0px auto;
    display: flex;
    flex-direction: row;
}
label.error {
    color: red;
    font-weight: normal;
    display: inline;
}        
select.error,input.error {
border:1px solid red !important;
-webkit-box-shadow: 0px 0px 3px 0px red;
-moz-box-shadow: 0px 0px 3px 0px red;
box-shadow: 0px 0px 3px 0px red;
}
.heading {
  padding: 20px 0px;
    display: flex;
    justify-content: flex-start;
    padding-left: 17px;
}
.bar {
    border-top: 1px solid #273266;
    border-bottom: 1px solid #273266;
    padding: 2px;
}

/* @extend display-flex; */
display-flex, .display-flex, .display-flex-center {
  display: flex;
  display: -webkit-flex; }

/* @extend list-type-ulli; */
list-type-ulli {
  list-style-type: none;
  margin: 0;
  padding: 0; }

/* Montserrat-300 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  src: url("../assets/fonts/montserrat/Montserrat-Light.ttf");
  /* IE9 Compat Modes */ }
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url("../assets/fonts/montserrat/Montserrat-Regular.ttf");
  /* IE9 Compat Modes */ }
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 400;
  src: url("../assets/fonts/montserrat/Montserrat-Italic.ttf");
  /* IE9 Compat Modes */ }
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  src: url("../assets/fonts/montserrat/Montserrat-Medium.ttf");
  /* IE9 Compat Modes */ }
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  src: url("../assets/fonts/montserrat/Montserrat-SemiBold.ttf");
  /* IE9 Compat Modes */ }
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: url("../assets/fonts/montserrat/Montserrat-Bold.ttf");
  /* IE9 Compat Modes */ }
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: normal;
  src: url("../assets/fonts/montserrat/Montserrat-BoldItalic.ttf");
  /* IE9 Compat Modes */ }
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 900;
  src: url("../assets/fonts/montserrat/montserrat-v12-latin-900.ttf"), url("../assets/fonts/montserrat/montserrat-v12-latin-900.eot") format("embedded-opentype"), url("../assets/fonts/montserrat/montserrat-v12-latin-900.svg") format("woff2"), url("../assets/fonts/montserrat/montserrat-v12-latin-900.woff") format("woff"), url("../assets/fonts/montserrat/montserrat-v12-latin-900.woff2") format("truetype"); }
a:focus, a:active {
  text-decoration: none;
  outline: none;
  transition: all 300ms ease 0s;
  -moz-transition: all 300ms ease 0s;
  -webkit-transition: all 300ms ease 0s;
  -o-transition: all 300ms ease 0s;
  -ms-transition: all 300ms ease 0s; }

input, select, textarea {
  outline: none;
  appearance: unset !important;
  -moz-appearance: unset !important;
  -webkit-appearance: unset !important;
  -o-appearance: unset !important;
  -ms-appearance: unset !important; }

input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
  appearance: none !important;
  -moz-appearance: none !important;
  -webkit-appearance: none !important;
  -o-appearance: none !important;
  -ms-appearance: none !important;
  margin: 0; }

input:focus, select:focus, textarea:focus {
  outline: none;
  box-shadow: none !important;
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  -o-box-shadow: none !important;
  -ms-box-shadow: none !important; }

input[type=checkbox] {
  appearance: checkbox !important;
  -moz-appearance: checkbox !important;
  -webkit-appearance: checkbox !important;
  -o-appearance: checkbox !important;
  -ms-appearance: checkbox !important; }

input[type=radio] {
  appearance: radio !important;
  -moz-appearance: radio !important;
  -webkit-appearance: radio !important;
  -o-appearance: radio !important;
  -ms-appearance: radio !important; }

img {
  max-width: 100%;
  height: auto; }

figure {
  margin: 0; }

p {
  margin-bottom: 0px;
  font-size: 15px;
  color: #777; }

h2 {
  line-height: 1.66;
  margin: 0;
  padding: 0;
  font-weight: 900;
  color: #273266;
  font-family: 'Montserrat';
  font-size: 24px;
  
  text-align: left;
  margin-bottom: 40px; }

.clear {
  clear: both;
}

.h2, h2 {
    font-size: 20px !important;
	font-weight: normal;
	color: #273266 !important;
}

.login_view {
  font-size: 14px;
  line-height: 1.8;
  color: #222;
  font-weight: 400;
  font-family: 'Montserrat';
  height: 100vh;
  background-image: url("../assets/login/signup-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  background-position: top center !important;
   }

.container {
  position: relative;
  margin: 0 auto; }

.display-flex {
  justify-content: space-between;
  -moz-justify-content: space-between;
  -webkit-justify-content: space-between;
  -o-justify-content: space-between;
  -ms-justify-content: space-between;
  align-items: center;
  -moz-align-items: center;
  -webkit-align-items: center;
  -o-align-items: center;
  -ms-align-items: center; }

.display-flex-center {
  justify-content: center;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -o-justify-content: center;
  -ms-justify-content: center;
  align-items: center;
  -moz-align-items: center;
  -webkit-align-items: center;
  -o-align-items: center;
  -ms-align-items: center; }

.position-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); }
  
.signup-content {
    background: #fff;
    border-radius: 30px;
    -moz-border-radius: 30px;
    -webkit-border-radius: 30px;
    -o-border-radius: 30px;
    -ms-border-radius: 30px;
    /* padding: 25px 20px !important; */
    /* padding: 20px 16px 10px 16px !important; */
    padding: 15px 26px 5px 26px !important;
}

.signup-content-2 {
    background: #fff;
    border-radius: 30px;
    -moz-border-radius: 30px;
    -webkit-border-radius: 30px;
    -o-border-radius: 30px;
    -ms-border-radius: 30px;
    padding: 15px 26px 5px 26px !important;
    height: 512px;
}

.form-group {
  overflow: hidden;
  margin-bottom: 20px; }

.username {
    margin: 20px 0px 20px 0px !important;
}

.form-input {
  margin-top: 0px;	
  width: 100%;
  border: 1px solid #273266;
  border-radius: 30px;
  -moz-border-radius: 30px;
  -webkit-border-radius: 30px;
  -o-border-radius: 30px;
  -ms-border-radius: 30px;
  /*padding: 17px 20px;*/
  padding: 12px 20px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
  color: #273266; }
  .form-input::-webkit-input-placeholder {
    color: #273266; }
  .form-input::-moz-placeholder {
    color: #273266; }
  .form-input:-ms-input-placeholder {
    color: #273266; }
  .form-input:-moz-placeholder {
    color: #273266; }
  .form-input::-webkit-input-placeholder {
    font-weight: 500; }
  .form-input::-moz-placeholder {
    font-weight: 500; }
  .form-input:-ms-input-placeholder {
    font-weight: 500; }
  .form-input:-moz-placeholder {
    font-weight: 500; }
	.form-input:focus {
		outline: none;
	}
    .form-input:focus::-webkit-input-placeholder {
      color: #222; }
    .form-input:focus::-moz-placeholder {
      color: #222; }
    .form-input:focus:-ms-input-placeholder {
      color: #222; }
    .form-input:focus:-moz-placeholder {
      color: #222; }

.form-submit {
  width: 40%;
  border-radius: 30px;
  -moz-border-radius: 30px;
  -webkit-border-radius: 30px;
  -o-border-radius: 30px;
  -ms-border-radius: 30px;
  padding: 12px 0px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 300;
  color: #fff;
  text-transform: uppercase;
  border: none;
  background-image: -moz-linear-gradient(to left, #74ebd5, #9face6);
  background-image: -ms-linear-gradient(to left, #74ebd5, #9face6);
  background-image: -o-linear-gradient(to left, #74ebd5, #9face6);
  background-image: -webkit-linear-gradient(to left, #74ebd5, #9face6);
  background-image: linear-gradient(to left, #74ebd5, #9face6); 
  background: #273266 !important;margin-bottom: 10px; }
  
  .form-submit2 {
    /* width: 100%; */
    border-radius: 30px;
    -moz-border-radius: 30px;
    -webkit-border-radius: 30px;
    -o-border-radius: 30px;
    -ms-border-radius: 30px;
    padding: 12px 0px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 300;
    color: #fff;
    text-transform: uppercase;
    border: none;
    background-image: -moz-linear-gradient(to left, #74ebd5, #9face6);
    background-image: -ms-linear-gradient(to left, #74ebd5, #9face6);
    background-image: -o-linear-gradient(to left, #74ebd5, #9face6);
    background-image: -webkit-linear-gradient(to left, #74ebd5, #9face6);
    background-image: linear-gradient(to left, #74ebd5, #9face6);
    background: #273266 !important;
    margin-bottom: 10px;
}
.disabled{
    background: #4272a1 !important;
  }
input[type=checkbox]:not(old) {
  width: 2em;
  margin: 0;
  padding: 0;
  font-size: 1em;
  display: none; }

input[type=checkbox]:not(old) + label {
    display: inline-block;
    margin-top: 0px;
    margin-bottom: 5px;
}

input[type=checkbox]:not(old) + label > span {
  display: inline-block;
  width: 13px;
  height: 13px;
  margin-right: 8px;
  margin-bottom: 3px;
  border: 1px solid #273266 !important;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  -o-border-radius: 2px;
  -ms-border-radius: 2px;
  background: white;
  background-image: -moz-linear-gradient(white, white);
  background-image: -ms-linear-gradient(white, white);
  background-image: -o-linear-gradient(white, white);
  background-image: -webkit-linear-gradient(white, white);
  background-image: linear-gradient(white, white);
  vertical-align: bottom; }

input[type=checkbox]:not(old):checked + label > span {
  background-image: -moz-linear-gradient(white, white);
  background-image: -ms-linear-gradient(white, white);
  background-image: -o-linear-gradient(white, white);
  background-image: -webkit-linear-gradient(white, white);
  background-image: linear-gradient(white, white); }

input[type=checkbox]:not(old):checked + label > span:before {
  content: '\f26b';
  display: block;
  color: #222;
  font-size: 11px;
  line-height: 1.2;
  text-align: center;
  font-family: 'Material-Design-Iconic-Font';
  font-weight: bold; }

.label-agree-term {
  font-size: 12px;
  font-weight: 600;
  color: #273266; }

.term-service {
  color: #555; }

.loginhere {
  color: #273266;
  font-weight: 500;
  text-align: left;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 18px;
}

.loginhere-link {
  font-weight: normal;
  color: #273266; 
  font-size: 14px;
}

.field-icon {
  float: right;
  margin-right: 17px;
  margin-top: -32px;
  position: relative;
  z-index: 2;
  color: #273266; }

.text {
    color: #273266;
    font-size: 13px;
    padding: 5px 0px 0px 20px;
}

#verficationMsg {
    margin: -8px 0px 5px 0px;
    font-size: 12px;
    color: #FFF;
    background-color: #273266;
    padding: 3px 5px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    text-align: center;
}
.verify {
	margin: 5px 0px 5px 0px;
	font-size: 13px;
	color: #FFF;background-color: #273266;
	padding: 3px 5px;
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	border-radius: 4px;
	text-align: center;
}
.text2 {
    color: #273266;
    font-size: 11px;
    padding: 0px 0px 0px 20px;
    margin: auto;
}
.text3 {
    color: #273266;
    font-size: 11px;
    padding: 0px 0px 0px 20px;
}

.zmdi-assignment-account {
    float: right;
    margin-right: 17px;
    margin-top: -32px;
    position: relative;
    z-index: 2;
    color: #273266;
}

.field-icon {
    float: right;
    margin-right: 17px;
    margin-top: -32px;
    position: relative;
    z-index: 2;
    color: #273266;
}

label {
  font-size: 11px;
  margin-left: 20px;
}

@media screen and (max-width: 1024px) {
.type {
    font-size: 10px !important;
}
.zmdi-assignment-account {
    margin-top: -27px;
}
.field-icon {
    margin-top: -27px;
}
	
}

@media screen and (max-width: 768px) {
  .container {
    width: calc(100% - 40px);
    max-width: 100%; } 

/*body {
  font-size: 14px;
  line-height: 1.8;
  color: #222;
  font-weight: 400;
  font-family: 'Montserrat';
  background-image: url("../images/login/signup-bg-copy.jpg") !important;
  background-repeat: no-repeat;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  background-position: center center;
  padding: 115px 0; }
}*/

.login_view {
    font-size: 14px;
    line-height: 1.8;
    color: #222;
    font-weight: 400;
    font-family: 'Montserrat';

    background-color: #233977 !important;
    background-image: none !important;
}
	
.text {
	color: #273266;
	font-size:11px !important;	
}
.verify {
	font-size: 13px;
	text-align: center;
}
	
}

@media screen and (max-width: 480px) {
  .signup-content {
    padding: 15px 25px !important; }

/*body {
  font-size: 14px;
  line-height: 1.8;
  color: #222;
  font-weight: 400;
  font-family: 'Montserrat';
  background-image: url("../images/login/signup-bg-copy.jpg") !important;
  background-repeat: no-repeat;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  background-position: center center;
  padding: 115px 0; }

}*/
	
.login_view {
    font-size: 14px;
    line-height: 1.8;
    color: #222;
    font-weight: 400;
    font-family: 'Montserrat';

    background-color: #233977 !important;
    background-image: none !important;
}

.text {
	color: #273266;
	font-size:11px !important;	
}
.verify {
	font-size: 11px;
	text-align: center;
}
	
.type {
    font-size: 11px !important;
}
.zmdi-assignment-account {
    margin-top: -28px !important;
}

#capcha div {
    float: left;
}

}
</style>
<script>
import axios from 'axios'
export default {
    name:'SfLogin',
    data(){
        return {
            userId: "",
            password:"",
            showBackground: true
        };
    },
    mounted() {
    // Assuming redirection logic happens here
    // After redirecting to the dashboard, set showBackground to false
    this.showBackground = false;
  },
    methods:{
        
      async Login(e){
        e.preventDefault()
    const formData = new FormData();
    formData.append('userName', this.userId);
    formData.append('password', this.password);

    axios.post('http://storm.local/test/getTestapi.php', formData)
      .then(response => {
        // Handle the response
        console.log(response.data);

        localStorage.setItem('user_info','Israr');
        this.$router.push({name:'Dashboard'});
      })
      .catch(error => {
        // Handle any error
        console.error(error);
      });

            
          
        }
    }
 }

</script>