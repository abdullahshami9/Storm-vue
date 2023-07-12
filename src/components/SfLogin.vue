
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
							<p class="text" >
                <!-- <a href="forget_password.php" >Forgot your password?</a> -->
                <RouterLink to="/forgetpassword">Forgot your password?</RouterLink>
              
              </p>
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
@import '../assets/login_style.css';

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
    },
        mounted(){
          // alert(111);
          // return false;
          //  let user=localStorage.getItem('user_info');
          //  if(user){
          //    this.$router.push({name:'Dashboard'})
          //  }
          
        }
 }

</script>