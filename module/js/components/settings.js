class Settings extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <div class="settings-page-display">
                
                <!-- -------------------- -------------------- SETTINGS PAGE PARENT CONTAINER -------------------- -------------------- -->
                    <div class="settings-parent-wrap" >
                        <!-- -------------------- Assets header container -------------------- -->
                        <div class="assets-header settings-header">
                            <div class="container">
                                <!-- Assets link container-->
                                <div class="assets-header-link-wrap">
                                    <div class="settings-header-img">
                                        <img src="img/user.png" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            <!-- assets large image -->
                            <div class="assets-img">
                                <img src="img/binanceBackground.jpg" class="img-fluid">
                            </div>
                            <div  class="assets-header-circle"></div>
                            <!-- Username Container -->
                            <div class="container">
                                <!-- Username -->
                                <div class="settings-username-wrap">
                                    <span class="assets-username-txt one-line">Hello, <span class="user-personal-name"></span></span>
                                    <div class="assets-unverified-btn setting-verify-img">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->


                        <!-- -------------------- Header Bottom -------------------- -->
                        <div class="asset-header-bottom-wrap">
                            <div class="asset-header-bottom"></div>
                            <div class="asset-header-bottom"></div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->


                        <!-- --------------------  -------------------- -->
                        <div class="settings-link-wrapped" style="border-radius: 0 0 0.5em 0.75em;padding-top: 1em">
                            <div class="container">
                                
                                <!-- Token container -->
                                <div class="token-main-wrap" onclick="SettingToAsset()">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/totalAsset.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Total Assets</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="hmepg-sub-token-right-con">
                                                <div class="settings-hover">
                                                    <img src="img/cold.png" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap" onclick="SettingToHistory()">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/transactionHistory.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Transaction History</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="hmepg-sub-token-right-con">
                                                <div class="settings-hover">
                                                    <img src="img/cold.png" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap" onclick="SettingToUserInfo()">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/user.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">User Profile</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="hmepg-sub-token-right-con">
                                                <div class="settings-hover">
                                                    <img src="img/cold.png" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        


                        <!-- --------------------  -------------------- -->
                        <div class="settings-link-wrap settings-margin" id="verification-setting-background" onclick="SettingToVerification()">
                            <div class="container">
                                
                                <!-- Token container -->
                                <div class="token-main-wrap setting-verify-wrap">

                                </div>
                            
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        


                        <!-- --------------------  -------------------- -->
                        <div class="settings-link-wrap settings-margin">
                            <div class="container">
                                
                                <!-- Token container -->
                                <div class="token-main-wrap" onclick="SettingToHelp()">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/helpAndSupport.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Help Center</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="hmepg-sub-token-right-con">
                                                <div class="settings-hover">
                                                    <img src="img/cold.png" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap" onclick="SettingToAbout()">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/info.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">About</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="hmepg-sub-token-right-con">
                                                <div class="settings-hover">
                                                    <img src="img/cold.png" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap" onclick="SettingToReferral()">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/referFriend.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Refer Friends and Earn</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="hmepg-sub-token-right-con">
                                                <div class="settings-hover">
                                                    <img src="img/cold.png" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        


                        <!-- --------------------  -------------------- -->
                        <div class="settings-link-wrap settings-margin">
                            <div class="container">
                                
                                <!-- Token container -->
                                <div class="token-main-wrap" onclick="document.location.href='./js/support.html'">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/telegram.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name one-line">Contact Telegram Support</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="hmepg-sub-token-right-con">
                                                <div class="settings-hover">
                                                    <img src="img/cold.png" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                                
                                    
                                <!-- Token container -->
                                <div class="token-main-wrap" onclick="logout()">
                                    <!-- Token image container -->
                                    <div class="settings-img-wrap">
                                        <div class="settings-img">
                                            <img src="img/logout.png" class="img-fluid">
                                        </div>
                                    </div>		
                                    <!-- Token container -->
                                    <div class="hmepg-sub-token-left-wrap">
                                        <div class="hmepg-main-token-con add-token-main-token-con-pad">
                                            <!-- Left container -->
                                            <div class="hmepg-sub-token-left-con">
                                                <span class="hmepg-token-name settings-token-name red one-line">LogOut</span>
                                            </div>
                                            <!-- Right container-->
                                            <div class="hmepg-sub-token-right-con">
                                                <div class="settings-hover">
                                                    <img src="img/cold.png" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>			
                                        <!-- Token line -->
                                        <div class="hmepg-sub-token-line"></div>				
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->
                    </div>
                <!-- -------------------- -------------------- -------------------- -------------------- -------------------- -->

            </div>
            <!--  -------------------- -->


            <bottom-nav-page></bottom-nav-page>
        `;
    }
}

customElements.define("settings-page", Settings);