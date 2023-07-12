
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
			border             : 1px solid red !important;
			-webkit-box-shadow : 0px 0px 3px 0px red;
			-moz-box-shadow    : 0px 0px 3px 0px red;
			box-shadow         : 0px 0px 3px 0px red;
		}

</style>

<template>
    <div class="login_view">
 <div class="main">
    <div class="container">
        <div class="row">
            <div class="col-sm-12"><img src="../assets/images/login/heading.png" style="margin-bottom: 5px;" /></div>
            <div class="col-sm-4">

                <div class="signup-content-2">
                    <form name="form1" method="POST" id="form1" class="signup-form">
						<img src="../assets/images/logo.png" />
                        <h2 class="form-title">Retrieve Your Password</h2>
						<p style="border-bottom: 1px solid #273266;"></p>
                        <div class="form-group username">
                            <input type="text" class="form-input type" required id="userId" name="userId"  placeholder="Enter your Username or Mobile Number"/>
							<span toggle="#" class="zmdi zmdi-account field-icon"></span>
                        </div>
						<div class="form-group">

							<div id="recaptcha_widget"  style="margin-top:10px;">
								<div id="recaptcha_image" style="text-align: center;" >
										<div id="capcha" style="display: grid;">
									</div>
								</div>
								<div class="invalid_captcha" style="text-align: center;color: red;"></div>

							</div>
						</div>
						<div class="form-group username">
	
							<p class="text3">How would you like to get your password?
							</p>
							<label><input type="radio" name="sendingMethod" id="byemail" checked="" value="1">&nbsp;&nbsp;&nbsp;Email</label>
							
							<label> <input type="radio" name="sendingMethod" id="bysms" value="2">&nbsp;&nbsp;&nbsp;SMS</label>
							
							<label><input type="radio" name="sendingMethod" id="byboth" value="3">&nbsp;&nbsp;&nbsp;Both</label>


						</div>
						<div id="serverMsg" ></div>

                        <div class="form-group" style="text-align: center;">

							<button type="submit" onclick="$('#invalidbox').hide();$('#serverMsg').removeClass('alert-success');
							$('#serverMsg').removeClass('alert-danger');
							$('#serverMsg').html('');if($('#recaptcha_response_field').val()=='') { $('.invalid_captcha').hide();}" id="submit" name="submit" class="form-submit">SEND</button>

	
							<button type="button" onclick="window.location.href='signin.php'" class="form-submit">Back</button>
                        </div>
                    </form>

                </div>

            </div>    

        </div>
    </div>
 </div>
 </div>
</template>



<script>
 export default {
    name:'SFForgetPassword',

    methods:{
        
        send(){

        }
      }
}



</script>
