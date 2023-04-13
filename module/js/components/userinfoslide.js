class UserInfoSlide extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- USER INFORMATION SLIDE STRUCTURE -->
            <div class="user-info-slide-page-display">
                
                <!-- Add token to remove parent container-->
                <div class="add-token-removebtn" id="user-info-removebtn"></div>
            
                <!-- -------------------- -------------------- TOKEN PAGE PARENT CONTAINER -------------------- -------------------- -->
                
                <div class="add-token-parent user-info-parent-margin">
                    <!-- -------------------- User information slide container -------------------- -->
                        <div class="container">
                            <!-- Header container -->
                            <div class="userinfoslide-header-wrap">
                                <div class="userinfoslide-header-txt">Account Info</div>
                            </div>
                            
                            <!-- User information slide info container -->
                            <div class="userinfoslide-info-wrap">
                                <!-- Image -->
                                <div class="userinfoslide-info-img">
                                    <img src="img/user.png" class="img-fluid">
                                </div>
                                <div class="userinfoslide-info"><span class="user-personal-name"></span> Binance</div>
                                <div class="assets-unverified-btn" id="user-verified-btn" style="margin: 0px" >
                                
                                </div>
                            </div>
                            
                            <!-- Registeration number -->
                            <div class="userinfoslide-reg-con">
                                <div class="userinfoslide-reg-left">Registration Email</div>
                                <div class="userinfoslide-reg-right"><span class="user-personal-email"></span></div>
                            </div>
                            
                            
                            <!-- note section -->
                            <div class="userinfoslide-note-wrap">
                                <!-- Absolute container -->
                                <div class="userinfoslide-absolute"></div>
                            
                                <div class="container">
                                    <!-- note starts here -->
                                    <div class="userinfoslide-note-con" id="userinfoslide-note-con">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    <!-- -------------------- -------------------- -------------------- -->
                    <!-- -------------------- -------------------- -------------------- -->


                    
                    <!-- --------------------  -------------------- -->			
                        <!-- Link button at bottom of page-->
                        <div class="container">
                            <div class="userinfoslide-btn" id="userinfoslide-btn">Go to Assets</div>
                        </div>
                    <!-- -------------------- -------------------- -------------------- -->
                    <!-- -------------------- -------------------- -------------------- -->
                </div>
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("user-info-slide-page", UserInfoSlide);

