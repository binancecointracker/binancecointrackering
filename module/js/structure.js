// -------------------- -------------------- CREAQTED DURING STRUCTURE SCRIPT -------------------- -------------------- 
    // --------------------  -------------------- 
        //  Add padding to general page
        function addBootstrapContainer(bootstrapContainer) {
            var firstSection = document.getElementById('first-section');
            var secondSection = document.getElementById('second-section');
            var thirdSection = document.getElementById('third-section');
            if (bootstrapContainer.matches) {
                firstSection.classList.add("p-2");
                secondSection.classList.add("p-2");
                thirdSection.classList.add("p-2");
            } else {
                firstSection.classList.remove("p-2");
                secondSection.classList.remove("p-2");
                thirdSection.classList.remove("p-2");
            };
        };
        
        var bootstrapContainer = window.matchMedia("(min-width: 1200px)");
        addBootstrapContainer(bootstrapContainer) ;
        bootstrapContainer.addListener(addBootstrapContainer) ;
        // -------------------- 
    //  -------------------- -------------------- -------------------- 





    // --------------------  -------------------- 
        // Screen to display structures
        var firstDisplay = document.getElementById('first-section');
        var secondDisplay = document.getElementById('second-section');
        var thirdDisplay = document.getElementById('third-section');
        // -------------------- 
        
        // Screen to adjust second dcreen for tablet mode
        var structureSpacerVar = document.getElementById('structure-spacer');
        
        // -------------------- 

        //  Make first container display
        function firstContainer(){
            // first container
            firstDisplay.classList.remove("first-section-change");
            firstDisplay.classList.add("first-section-changed");
            secondDisplay.classList.add("second-section-change");
            secondDisplay.classList.remove("second-section-changed");
            thirdDisplay.classList.add("third-section-change");
            thirdDisplay.classList.remove("third-section-changed");
            
            // Statement to add spacer for responsiveness
            structureSpacerVar.classList.add("structure-spacer");
        };
        // -------------------- 

        //  Make Second container display
        function secondContainer(){
            firstDisplay.classList.add("first-section-change");
            firstDisplay.classList.remove("first-section-changed");
            secondDisplay.classList.remove("second-section-change");
            secondDisplay.classList.add("second-section-changed");
            thirdDisplay.classList.add("third-section-change");
            thirdDisplay.classList.remove("third-section-changed");
            
            // Statement to remove spacer for responsiveness
            structureSpacerVar.classList.remove("structure-spacer");
        };
        // -------------------- 

        //  Make Third container display
        function thirdContainer(){
            firstDisplay.classList.add("first-section-change");
            firstDisplay.classList.remove("first-section-changed");
            secondDisplay.classList.add("second-section-change");
            secondDisplay.classList.remove("second-section-changed");
            thirdDisplay.classList.remove("third-section-change");
            thirdDisplay.classList.add("third-section-changed");
            
            // Statement to remove spacer for responsiveness
            structureSpacerVar.classList.remove("structure-spacer");
        };
        // -------------------- 
    //  -------------------- -------------------- -------------------- 
    
// -------------------- -------------------- -------------------- -------------------- -------------------- 










// -------------------- -------------------- PAGE DISPLAY ONCLICK BUTTON FUNCTIONS -------------------- --------------------// --------------------  -------------------- 
        
    // -------------------- Page ID selectors -------------------- 
    
        //  
        var about = document.getElementById("about-page");
        // -------------------- 
    
        //  
        var account = document.getElementById("account-page");
        // -------------------- 
    
        //  
        var addtoken = document.getElementById("add-token-page");
        // -------------------- 
    
        //  
        var assets = document.getElementById("assets-page");
        // -------------------- 
    
        //  
        var bioauth = document.getElementById("bioauth-page");
        // -------------------- 
    
        //  
        var changepassword = document.getElementById("change-password-page");
        // -------------------- 
    
        //  
        var convert = document.getElementById("convert-page");
        // -------------------- 
    
        //  
        var convertselect = document.getElementById("convert-select-page");
        // -------------------- 
    
        //  
        var forgotpassword = document.getElementById("forgot-password-page");
        // -------------------- 
    
        //  
        var help = document.getElementById("help-page");
        // -------------------- 
    
        //  
        var home = document.getElementById("home-page");
        // -------------------- 
    
        //  
        var language = document.getElementById("language-page");
        // -------------------- 
    
        //  
        var marketinfo = document.getElementById("market-info-page");
        // -------------------- 
    
        //  
        var menu = document.getElementById("menu-page");
        // -------------------- 
    
        //  
        var message = document.getElementById("message-page");
        // -------------------- 
    
        //  
        var notification = document.getElementById("notification-page");
        // -------------------- 
    
        //  
        var passcode = document.getElementById("passcode-page");
        // -------------------- 
    
        //  
        var pattern = document.getElementById("pattern-page");
        // -------------------- 
    
        //  
        var paypin = document.getElementById("pay-pin-page");
        // -------------------- 
    
        //  
        var profile = document.getElementById("profile-page");
        // -------------------- 
    
        //  
        var receive = document.getElementById("receive-page");
        // -------------------- 
    
        //  
        var referral = document.getElementById("referral-page");
        // -------------------- 
    
        //  
        var rememberpassword = document.getElementById("remember-password-page");
        // -------------------- 
    
        //  
        var rules = document.getElementById("rules-page");
        // -------------------- 
    
        //  
        var sendselect = document.getElementById("select-send-page");
        // -------------------- 
    
        //  
        var receiveselect = document.getElementById("select-receive-page");
        // -------------------- 
    
        //  
        var send = document.getElementById("send-page");
        // -------------------- 
    
        //  
        var settingsfirst = document.getElementById("settings-first-page");
        // -------------------- 
    
        //  
        var settingssecond = document.getElementById("settings-second-page");
        // -------------------- 
    
        //  
        var support = document.getElementById("support-page");
        // -------------------- 
    
        //  
        var token = document.getElementById("token-page");
        // -------------------- 
    
        //  
        var transactionhistory = document.getElementById("transaction-history-page");
        // -------------------- 
    
        //  
        var verification = document.getElementById("verification-page");
        // -------------------- 
    
        //  
        var userinfoslide = document.getElementById("user-info-slide-page");
        // -------------------- 
    
        //  
        var invite = document.getElementById("invite-page");
        // -------------------- 
    
        //  
        var refhis = document.getElementById("refhis-page");
        // -------------------- 
    //  -------------------- -------------------- -------------------- 
    
    



    // -------------------- IF FUNCTION -------------------- 
        //  SETTING FIRST CONTAINEWR
        function SettingsFirstClose() {
            if (settingsfirst.classList.contains("setting-first-show")) {
                settingsfirst.classList.add("page-hide");
                settingsfirst.classList.remove("setting-first-show");
            };
        }

        function SettingsFirstOpen() {
            if (settingsfirst.classList.contains("page-hide")) {
                settingsfirst.classList.add("setting-first-show");
                settingsfirst.classList.remove("page-hide");
            };
        }
        // -------------------- 

        //  SETTING FIRST CONTAINEWR
        function SettingsSecondClose() {
            if (settingssecond.classList.contains("setting-second-show")) {
                settingssecond.classList.add("page-hide");
                settingssecond.classList.remove("setting-second-show");
            };
        }

        function SettingsSecondOpen() {
            if (settingssecond.classList.contains("page-hide")) {
                settingssecond.classList.add("setting-second-show");
                settingssecond.classList.remove("page-hide");
            };
        }
        // -------------------- 
        
        //  
        
        // -------------------- 
        //  
        
        // -------------------- 
        
        //  
        
        // -------------------- 
        
        //  
        
        // -------------------- 
        
        //  
        
        // -------------------- 
        //  
        
        // -------------------- 
        
        //  
        
        // -------------------- 
        
        //  
        
        // -------------------- 
        
        //  
        
        // -------------------- 
        
        //  
        
        // -------------------- 
        
        //  
        
        // --------------------         
    //  -------------------- -------------------- -------------------- 





    // -------------------- MENU BUTTON LINK FUNCTION -------------------- 
        //  
        
        // -------------------- 
        
        //  
        
        // -------------------- 
        
        //  
        
        // -------------------- 
        
        //  
        
        // -------------------- 
        
        //  
        
        // -------------------- 
        
        //  
        
        // -------------------- 
        
        //  
        
        // -------------------- 
        
        //  
        
        // -------------------- 
        
        //  
        
        // -------------------- 
        
        //  
        
        // -------------------- 
        
        //  
        
        // -------------------- 
        
        //  
        
        // -------------------- 
        
        //  
        
        // -------------------- 
        
        //  
        
        // -------------------- 
    //  -------------------- -------------------- -------------------- 





    // --------------------  -------------------- 
        //  

        // -------------------- 
    //  -------------------- -------------------- -------------------- 





    // --------------------  -------------------- 
        //  

        // -------------------- 
    //  -------------------- -------------------- -------------------- 





    // --------------------  -------------------- 
        //  

        // -------------------- 
    //  -------------------- -------------------- -------------------- 
// -------------------- -------------------- -------------------- -------------------- -------------------- 










// -------------------- -------------------- PAGE DISPLAY ONCLICK BUTTON FUNCTIONS -------------------- --------------------
    
    // -------------------- HOME PAGE LINKING BUTTON FUNCTIONS -------------------- 
        //  Home to menu     ##### 1
            function HomeToMenu() {
                firstContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "flex";  // -------------------- Container -------------------- 
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "flex" //; -------------------- Container -------------------- 
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
        
        //  Home to token     ##### 2
            function HomeToAddToken() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "flex"; // -------------------- Container -------------------- 
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "flex"; // -------------------- Container -------------------- 
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
            };
        // --------------------
        
        //  Home to setting     ##### 3
            function HomeToSettings() {
                secondContainer();

                //  first container
                SettingsFirstOpen(); // -------------------- Container -------------------- 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex";  // -------------------- Container -------------------- 
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondOpen(); // -------------------- Container -------------------- 
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "flex"; // -------------------- Container -------------------- 
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
            }
        // -------------------- 
        
        //  Home to user information slide     ##### 4
            function HomeToUserInfoSlide() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "flex";  // -------------------- Container -------------------- 
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "none"; 
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "flex"; // -------------------- Container --------------------
                invite.style.display = "none";
                refhis.style.display = "none";

                document.getElementById("userinfoslide-btn").classList.remove("userinfoslide-btn-res");
                document.getElementById("userinfoslide-btn").classList.add("userinfoslide-btn");
                document.getElementById("user-info-removebtn").onclick = function() { MenuToHome() };
                document.getElementById("userinfoslide-btn").onclick = function() { MenuToAssets() };
                document.getElementById("language-index").onclick = function() { MenuToLanguage() };
                document.getElementById("userinfoslide-btn").style.display = "flex";
            };
        // -------------------- 
        
        //  Home to notification page     ##### 5
            function HomeToNotification() {
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "flex"; // -------------------- Container -------------------- 
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "flex"; // -------------------- Container -------------------- 
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                scanout()
               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
            };
        // -------------------- 
        
        //  Home to help page     ##### 6
            function HomeToHelp() {
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "flex"; // -------------------- Container -------------------- 
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "flex"; // -------------------- Container -------------------- 
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "rgba(75, 181, 67, 0.4";
                    document.getElementById("menu11").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu11").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
                
                document.getElementById("help-header-back").setAttribute("onclick", "javascript: MenuToHome()");
                document.getElementById("help-right-back").setAttribute("onclick", "javascript: HelpToSupport()");
                document.getElementById("help-bottom-back").setAttribute("onclick", "javascript: HelpToSupport()");
            };
        // -------------------- 
        
        //  Home to transaction history page     ##### 7
            function HomeToTransactionHistory() {
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "flex"; // -------------------- Container -------------------- 

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "flex"; // -------------------- Container -------------------- 
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();

                document.getElementById("transact-main-left-container").innerHTML = `
                    <div class="help-header-img btn-display" onclick="BackToHome()">
                        <img src="img/arrow-left.png" class="img-fluid">
                    </div>
                    <span class="help-header-txt">Transaction History</span>
                `;
            };
        // -------------------- 
        
        //  Home to token main land page     ##### 8
            function HomeToToken() {
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "flex"; // -------------------- Container -------------------- 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "flex"; // -------------------- Container -------------------- 
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
        
        //  Home to select page     ##### 9
            function HomeToSendSelect() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "flex"; // -------------------- Container -------------------- 
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "flex"; // -------------------- Container --------------------
                receiveselect.style.display = "none";  
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
        
        //  Home to select page     ##### 9
            function HomeToReceiveSelect() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "flex"; // -------------------- Container -------------------- 
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "flex";  // -------------------- Container --------------------
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
        
        //  Home to Convert page     ##### 9
            function HomeToConvert() {
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "flex"; // -------------------- Container -------------------- 
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "flex"; // -------------------- Container -------------------- 
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
            };
            function HomeToSend() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 
        
                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "flex"; // -------------------- Container -------------------- 
                transactionhistory.style.display = "none";
        
                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "flex"; // -------------------- Container --------------------  
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
        
        
        
        
        
        
        
        
        
        
        
        
        
        //  Token to receive page     ##### 2
            function HomeToReceive() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 
        
                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "flex"; // -------------------- Container -------------------- 
                transactionhistory.style.display = "none";
        
                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "flex"; // -------------------- Container -------------------- 
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none"; 
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
    //  -------------------- -------------------- -------------------- 
    
    



    
    



    
    



    // -------------------- MENU LINKING BUTTON FUNCTIONS -------------------- 
        //  Menu to home     ##### 1
            function MenuToHome() {
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "flex";  // -------------------- Container -------------------- 
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "flex" //; -------------------- Container -------------------- 
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
            };
        // -------------------- 
        
        //  Menu to assets     ##### 2
            function MenuToAssets() {
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container -------------------- 
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "none"; 
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "flex"; // -------------------- Container --------------------
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();

                document.getElementById("assets-header-link-wrapper").innerHTML = `
                    <div class="help-header-img asset-visi" onclick="MenuToHome()">
                        <img src="img/backArrowB.png" class="img-fluid">
                    </div>
                    <div class="help-header-img" id="language-index" onclick="AssetsToLanguage()">
                        <img src="img/globe.png" class="img-fluid">
                    </div>
                `;

                
                document.getElementById("assets-card-btn-id").onclick = function() { AssetsToProfileMen() }
            };
        // --------------------
        
        //  Menu to convert token page     ##### 3
            function MenuToConvert() {
                secondContainer();

                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "flex"; // -------------------- Container -------------------- 
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "flex"; // -------------------- Container -------------------- 
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
            }
        // -------------------- 
        
        //  Menu to referral     ##### 4
            function MenuToReferral() {
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "flex"; // -------------------- Container -------------------- 
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "none"; 
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "flex"; // -------------------- Container --------------------
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();

                document.getElementById("referral-back-btn").setAttribute("onclick", "javascript: BackToHome()");
            };
        // -------------------- 
        
        //  Menu to referral     ##### 4
            function BackToReferral() {
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "flex"; // -------------------- Container -------------------- 
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "none"; 
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "flex"; // -------------------- Container --------------------
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
            };
        // -------------------- 
        
        //  Menu to language page     ##### 5
            function MenuToLanguage() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container -------------------- 
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";  
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "flex"; // -------------------- Container --------------------
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();

                
                document.getElementById("asset-help-left-container").innerHTML = `
                    <div class="help-header-img btn-display" onclick="BackToHome()">
                        <img src="img/arrow-left.png" class="img-fluid">
                    </div>
                    <span class="help-header-txt">Langage</span>
                `;
            };
        // -------------------- 
        
        //  Menu to support page     ##### 6
            function MenuToHelp() {
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none"; 
                convert.style.display = "none";
                help.style.display = "flex"; // -------------------- Container --------------------
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";  
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "flex"; // -------------------- Container --------------------
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu11").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu11").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();
                
                document.getElementById("help-header-back").setAttribute("onclick", "javascript: MenuToHome()");
                document.getElementById("help-right-back").setAttribute("onclick", "javascript: HelpToSupport()");
                document.getElementById("help-bottom-back").setAttribute("onclick", "javascript: HelpToSupport()");
            };
        // --------------------         
    //  -------------------- -------------------- -------------------- 





    
    



    
    



    // -------------------- HELP BUTTON LINK FUNCTION -------------------- 
        //  Help to support page     ##### 1
            function HelpToSupport() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none"; 
                convert.style.display = "none";
                help.style.display = "flex"; // -------------------- Container --------------------
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";  
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "flex"; // -------------------- Container --------------------
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
    //  -------------------- -------------------- -------------------- 

    
    



    
    







    // -------------------- NOTIFICATION BUTTON LINK FUNCTION --------------------         
        //  Menu to support page     ##### 1
            function NotificationToMessage() {
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none"; 
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "flex"; // -------------------- Container --------------------
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "flex"; // -------------------- Container --------------------  
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
    //  -------------------- -------------------- -------------------- 

    
    



    
    







    // -------------------- SUPPORT BUTTON LINK FUNCTION --------------------         
        //  Support to assets page     ##### 1
            function SupportToAssets() {
                secondContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container --------------------
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "flex"; // -------------------- Container --------------------  
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
    //  -------------------- -------------------- -------------------- 




    
    



    
    




    // -------------------- ASSETS BUTTON LINK FUNCTION --------------------         
        //  Assets to verification page     ##### 1
            function AssetsToVerification() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container -------------------- 
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "flex"; // -------------------- Container --------------------  
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 

        //  Assets to profile page     ##### 2
            function AssetsToProfileSet() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container --------------------
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";  
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "flex"; // -------------------- Container --------------------
                invite.style.display = "none";
                refhis.style.display = "none";

                document.getElementById("userinfoslide-btn").classList.add("userinfoslide-btn-res")
                document.getElementById("userinfoslide-btn").classList.remove("userinfoslide-btn")

                document.getElementById("user-info-removebtn").onclick = function() { SettingToAsset() }
                document.getElementById("userinfoslide-btn").style.display = "none";
            };
        // -------------------- 

        //  Assets to profile page     ##### 3
            function AssetsToProfileMen() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container --------------------
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";  
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "flex"; // -------------------- Container --------------------
                invite.style.display = "none";
                refhis.style.display = "none";

                document.getElementById("userinfoslide-btn").classList.add("userinfoslide-btn-res")
                document.getElementById("userinfoslide-btn").classList.remove("userinfoslide-btn")

                document.getElementById("user-info-removebtn").onclick = function() { MenuToAssets() }
                document.getElementById("userinfoslide-btn").style.display = "none";
            };
        // -------------------- 
        
        //  Assets to support page     ##### 1
            function AssetsToSupport() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container --------------------
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none"; 
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "flex"; // -------------------- Container -------------------- 
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 

        //  Assets to about page     ##### 1
            function AssetsToAbout() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container -------------------- 
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "flex"; // -------------------- Container -------------------- 
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                document.getElementById("about-header-back").setAttribute("onclick", "javascript: AssetsToAbout()");
            };
        // -------------------- 
        
        //  Assets to language page     ##### 5
            function AssetsToLanguage() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container -------------------- 
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";  
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "flex"; // -------------------- Container --------------------
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();

                
                document.getElementById("asset-help-left-container").innerHTML = `
                    <div class="help-header-img btn-display" onclick="MenuToAssets()">
                        <img src="img/arrow-left.png" class="img-fluid">
                    </div>
                    <span class="help-header-txt">Langage</span>
                `;
            };
        // -------------------- 
    //  -------------------- -------------------- -------------------- 



    


    // -------------------- TOKEN BUTTON LINK FUNCTION --------------------         
        //  Token to Send page     ##### 1
            function TokenToSend() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "flex"; // -------------------- Container -------------------- 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "flex"; // -------------------- Container --------------------  
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 

        //  Token to receive page     ##### 2
            function TokenToReceive() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "flex"; // -------------------- Container -------------------- 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "flex"; // -------------------- Container -------------------- 
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none"; 
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                scanout()
            };
        // -------------------- 
        
        //  Token to market information page     ##### 1
            function TokenToMarketInfo() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "flex"; // -------------------- Container -------------------- 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "flex"; // -------------------- Container --------------------  
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
    //  -------------------- -------------------- -------------------- 





    // -------------------- MENU LINKING BUTTON FUNCTIONS -------------------- 
        //  Menu to home     ##### 1
        function BackToHome() {
            secondContainer();
            
            //  first container
            SettingsFirstClose(); 
            menu.style.display = "flex"; // -------------------- Container -------------------- 

            //  second container
            account.style.display = "none";
            assets.style.display = "none";
            convert.style.display = "none";
            help.style.display = "none";
            home.style.display = "flex";  // -------------------- Container -------------------- 
            message.style.display = "none";
            notification.style.display = "none";
            referral.style.display = "none";
            SettingsSecondClose();
            token.style.display = "none";
            transactionhistory.style.display = "none";

            //  third container
            about.style.display = "none";
            addtoken.style.display = "flex" //; -------------------- Container -------------------- 
            bioauth.style.display = "none";
            changepassword.style.display = "none";
            convertselect.style.display = "none";
            forgotpassword.style.display = "none";
            language.style.display = "none";
            marketinfo.style.display = "none";
            passcode.style.display = "none";
            pattern.style.display = "none";
            paypin.style.display = "none";
            profile.style.display = "none";
            receive.style.display = "none";
            rememberpassword.style.display = "none";
            rules.style.display = "none";
            sendselect.style.display = "none";
            receiveselect.style.display = "none";
            send.style.display = "none";
            support.style.display = "none";
            verification.style.display = "none";
            userinfoslide.style.display = "none";
            invite.style.display = "none";
            refhis.style.display = "none";

               
            function isVerifiedMenu() {
                document.getElementById("menu1").style.background = "rgba(75, 181, 67, 0.4)";
                document.getElementById("menu2").style.background = "";
                document.getElementById("menu3").style.background = "";
                document.getElementById("menu4").style.background = "";
                document.getElementById("menu5").style.background = "";
                document.getElementById("menu6").style.background = "";
                document.getElementById("menu7").style.background = "";
                document.getElementById("menu8").style.background = "";
                document.getElementById("menu9").style.background = "";
                document.getElementById("menu10").style.background = "";
                document.getElementById("menu11").style.background = "";
            }
            function isUnverifiedMenu() {
                document.getElementById("menu1").style.background = "rgba(166, 50, 50, 0.4)";
                document.getElementById("menu2").style.background = "";
                document.getElementById("menu3").style.background = "";
                document.getElementById("menu4").style.background = "";
                document.getElementById("menu5").style.background = "";
                document.getElementById("menu6").style.background = "";
                document.getElementById("menu7").style.background = "";
                document.getElementById("menu8").style.background = "";
                document.getElementById("menu9").style.background = "";
                document.getElementById("menu10").style.background = "";
                document.getElementById("menu11").style.background = "";
            }
            function isVerificationMenu() {
                if (isVerify === true) {
                    isVerifiedMenu();
                } else{
                    isUnverifiedMenu()
                };
            }isVerificationMenu();
        };
        // -------------------- 
    //  -------------------- -------------------- -------------------- 
// -------------------- -------------------- -------------------- -------------------- -------------------- 





    // -------------------- SETTINGS BUTTON LINK FUNCTION -------------------- 
        //  
            function BackToSetting() {
                secondContainer();

                //  first container
                SettingsFirstOpen(); // -------------------- Container -------------------- 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex";  // -------------------- Container -------------------- 
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondOpen(); // -------------------- Container -------------------- 
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "flex"; // -------------------- Container -------------------- 
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            }
        // -------------------
    
        //  
            function SettingToAsset() {
                secondContainer();
                
                //  first container
                SettingsFirstOpen(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container --------------------
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none"; 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none"; 
                support.style.display = "none";
                verification.style.display = "flex"; // -------------------- Container -------------------- 
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                document.getElementById("assets-header-link-wrapper").innerHTML = `
                    <div class="help-header-img asset-visi" onclick="HomeToSettings()">
                        <img src="img/backArrowB.png" class="img-fluid">
                    </div>
                    <div class="help-header-img" id="language-index" onclick="MenuToLanguage()">
                        <img src="img/globe.png" class="img-fluid">
                    </div>
                `;

                document.getElementById("assets-card-btn-id").onclick = function() { AssetsToProfileSet() }
                document.getElementById("language-index").onclick = function() { SettingToLanguage() }
            };
        // -------------------- 
    
        //  
            function SettingToUserInfo() {
                thirdContainer();
                
                //  first container
                SettingsFirstOpen(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "flex";
                referral.style.display = "none";
                SettingsSecondOpen();
                token.style.display = "none"; 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none"; 
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "flex"; // -------------------- Container -------------------- 
                invite.style.display = "none";
                refhis.style.display = "none";

                document.getElementById("assets-header-link-wrapper").innerHTML = `
                    <div class="help-header-img asset-visi" onclick="HomeToSettings()">
                        <img src="img/backArrowB.png" class="img-fluid">
                    </div>
                    <div class="help-header-img" id="language-index" onclick="MenuToLanguage()">
                        <img src="img/globe.png" class="img-fluid">
                    </div>
                `;

                document.getElementById("user-info-removebtn").onclick = function() { HomeToSettings() }
                document.getElementById("userinfoslide-btn").onclick = function() { SettingToAsset() };
                document.getElementById("userinfoslide-btn").style.display = "flex";
            };

        // -------------------- //  
            function SettingToVerification() {
                secondContainer();
                
                //  first container
                SettingsFirstOpen(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "flex";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none"; 
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none"; 
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "flex"; // -------------------- Container -------------------- 
                invite.style.display = "none";
                refhis.style.display = "none";

                document.getElementById("assets-header-link-wrapper").innerHTML = `
                    <div class="help-header-img asset-visi" onclick="HomeToSettings()">
                        <img src="img/backArrowB.png" class="img-fluid">
                    </div>
                    <div class="help-header-img" id="language-index" onclick="MenuToLanguage()">
                        <img src="img/globe.png" class="img-fluid">
                    </div>
                `;

                document.getElementById("user-info-removebtn").onclick = function() { HomeToSettings() }
                document.getElementById("userinfoslide-btn").onclick = function() { SettingToAsset() };
                document.getElementById("userinfoslide-btn").style.display = "flex";
            };
        // -------------------- 
    
        //  
        function SettingToHistory() {
                secondContainer();
                
                //  first container
                SettingsFirstOpen(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none"; 
                transactionhistory.style.display = "flex"; // -------------------- Container --------------------

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none"; 
                support.style.display = "flex"; // -------------------- Container -------------------- 
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                document.getElementById("transact-main-left-container").innerHTML = `
                    <div class="help-header-img btn-display" onclick="HomeToSettings()">
                        <img src="img/arrow-left.png" class="img-fluid">
                    </div>
                    <span class="help-header-txt">Transaction History</span>
                `;
            };
        // -------------------- 
        
        //  Menu to referral     ##### 4
            function SettingToReferral() {
                secondContainer();
                
                //  first container
                SettingsFirstOpen(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "flex"; // -------------------- Container -------------------- 
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container
                about.style.display = "none";
                addtoken.style.display = "none"; 
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "flex"; // -------------------- Container --------------------
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "";
                    document.getElementById("menu11").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();

                document.getElementById("referral-back-btn").setAttribute("onclick", "javascript:  HomeToSettings()");
            };
        // -------------------- 
        //  Help to support page     ##### 1
            function SettingToSupport() {
                thirdContainer();
                
                //  first container
                SettingsFirstOpen(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none"; 
                convert.style.display = "none";
                help.style.display = "flex"; // -------------------- Container --------------------
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";  
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "flex"; // -------------------- Container --------------------
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
    //  -------------------- -------------------- -------------------- 
        
        //  Menu to support page     ##### 6
            function SettingToHelp() {
                secondContainer();
                
                //  first container
                SettingsFirstOpen(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none"; 
                convert.style.display = "none";
                help.style.display = "flex"; // -------------------- Container --------------------
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";  
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "flex"; // -------------------- Container --------------------
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

               
                function isVerifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "rgba(75, 181, 67, 0.4)";
                    document.getElementById("menu11").style.background = "";
                }
                function isUnverifiedMenu() {
                    document.getElementById("menu1").style.background = "";
                    document.getElementById("menu2").style.background = "";
                    document.getElementById("menu3").style.background = "";
                    document.getElementById("menu4").style.background = "";
                    document.getElementById("menu5").style.background = "";
                    document.getElementById("menu6").style.background = "";
                    document.getElementById("menu7").style.background = "";
                    document.getElementById("menu8").style.background = "";
                    document.getElementById("menu9").style.background = "";
                    document.getElementById("menu10").style.background = "rgba(166, 50, 50, 0.4)";
                    document.getElementById("menu11").style.background = "";
                }
                function isVerificationMenu() {
                    if (isVerify === true) {
                        isVerifiedMenu();
                    } else{
                        isUnverifiedMenu()
                    };
                }isVerificationMenu();

                document.getElementById("help-header-back").setAttribute("onclick", "javascript: HomeToSettings()");
                document.getElementById("help-right-back").setAttribute("onclick", "javascript: SettingToSupport()");
                document.getElementById("help-bottom-back").setAttribute("onclick", "javascript: SettingToSupport()");
            };
        // --------------------  

        //  Assets to about page     ##### 1
            function SettingToAbout() {
                thirdContainer();
                
                //  first container
                SettingsFirstOpen(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container -------------------- 
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "flex"; // -------------------- Container -------------------- 
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                document.getElementById("about-header-back").setAttribute("onclick", "javascript: HomeToSettings()");
            };
        // -------------------- 
        
        //  Menu to language page     ##### 5
            function SettingToLanguage() {
                thirdContainer();
                
                //  first container
                SettingsFirstOpen(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "flex"; // -------------------- Container -------------------- 
                convert.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";  
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "none";
                forgotpassword.style.display = "none";
                language.style.display = "flex"; // -------------------- Container --------------------
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";

                document.getElementById("asset-help-left-container").onclick = function() { SettingToAsset() }
            };
        // -------------------- 
        
        //  Home to token main land page     ##### 8
            function ConvertToConvert() {
                thirdContainer();
                
                //  first container
                SettingsFirstClose(); 
                menu.style.display = "flex"; // -------------------- Container -------------------- 

                //  second container
                account.style.display = "none";
                assets.style.display = "none";
                convert.style.display = "flex"; // -------------------- Container -------------------- 
                help.style.display = "none";
                home.style.display = "none";
                message.style.display = "none";
                notification.style.display = "none";
                referral.style.display = "none";
                SettingsSecondClose();
                token.style.display = "none";
                transactionhistory.style.display = "none";

                //  third container 
                about.style.display = "none";
                addtoken.style.display = "none";
                bioauth.style.display = "none";
                changepassword.style.display = "none";
                convertselect.style.display = "flex"; // -------------------- Container -------------------- 
                forgotpassword.style.display = "none";
                language.style.display = "none";
                marketinfo.style.display = "none";
                passcode.style.display = "none";
                pattern.style.display = "none";
                paypin.style.display = "none";
                profile.style.display = "none";
                receive.style.display = "none";
                rememberpassword.style.display = "none";
                rules.style.display = "none";
                sendselect.style.display = "none";
                receiveselect.style.display = "none";
                send.style.display = "none";
                support.style.display = "none";
                verification.style.display = "none";
                userinfoslide.style.display = "none";
                invite.style.display = "none";
                refhis.style.display = "none";
            };
        // -------------------- 
            
        //  
        function ReferalToRules() {
            thirdContainer();
            
            //  first container
            SettingsFirstClose(); 
            menu.style.display = "flex"; // -------------------- Container -------------------- 

            //  second container
            account.style.display = "none";
            assets.style.display = "none";
            convert.style.display = "none";
            help.style.display = "none";
            home.style.display = "none";
            message.style.display = "none";
            notification.style.display = "none";
            referral.style.display = "flex"; // -------------------- Container -------------------- 
            SettingsSecondClose();
            token.style.display = "none";
            transactionhistory.style.display = "none";

            //  third container 
            about.style.display = "none";
            addtoken.style.display = "none";
            bioauth.style.display = "none";
            changepassword.style.display = "none";
            convertselect.style.display = "none";
            forgotpassword.style.display = "none";
            language.style.display = "none";
            marketinfo.style.display = "none";
            passcode.style.display = "none";
            pattern.style.display = "none";
            paypin.style.display = "none";
            profile.style.display = "none";
            receive.style.display = "none";
            rememberpassword.style.display = "none";
            rules.style.display = "flex"; // -------------------- Container -------------------- 
            sendselect.style.display = "none";
            receiveselect.style.display = "none";
            send.style.display = "none";
            support.style.display = "none";
            verification.style.display = "none";
            userinfoslide.style.display = "none";
            invite.style.display = "none";
            refhis.style.display = "none";
        }
        // -------------------
        
        //
        function ReferalToHistory() {
            thirdContainer();
            
            //  first container
            SettingsFirstClose(); 
            menu.style.display = "flex"; // -------------------- Container -------------------- 

            //  second container
            account.style.display = "none";
            assets.style.display = "none";
            convert.style.display = "none";
            help.style.display = "none";
            home.style.display = "none";
            message.style.display = "none";
            notification.style.display = "none";
            referral.style.display = "flex"; // -------------------- Container -------------------- 
            SettingsSecondClose();
            token.style.display = "none";
            transactionhistory.style.display = "none";

            //  third container 
            about.style.display = "none";
            addtoken.style.display = "none";
            bioauth.style.display = "none";
            changepassword.style.display = "none";
            convertselect.style.display = "none";
            forgotpassword.style.display = "none";
            language.style.display = "none";
            marketinfo.style.display = "none";
            passcode.style.display = "none";
            pattern.style.display = "none";
            paypin.style.display = "none";
            profile.style.display = "none";
            receive.style.display = "none";
            rememberpassword.style.display = "none";
            rules.style.display = "none"; 
            sendselect.style.display = "none";
            receiveselect.style.display = "none";
            send.style.display = "none";
            support.style.display = "none";
            verification.style.display = "none";
            userinfoslide.style.display = "none";
            invite.style.display = "none";
            refhis.style.display = "flex"; // -------------------- Container --------------------
        }
        // -------------------
        
        // 
        function ReferalToInvite() {
            thirdContainer();
            
            //  first container
            SettingsFirstClose(); 
            menu.style.display = "flex"; // -------------------- Container -------------------- 

            //  second container
            account.style.display = "none";
            assets.style.display = "none";
            convert.style.display = "none";
            help.style.display = "none";
            home.style.display = "none";
            message.style.display = "none";
            notification.style.display = "none";
            referral.style.display = "flex"; // -------------------- Container -------------------- 
            SettingsSecondClose();
            token.style.display = "none";
            transactionhistory.style.display = "none";

            //  third container 
            about.style.display = "none";
            addtoken.style.display = "none";
            bioauth.style.display = "none";
            changepassword.style.display = "none";
            convertselect.style.display = "none";
            forgotpassword.style.display = "none";
            language.style.display = "none";
            marketinfo.style.display = "none";
            passcode.style.display = "none";
            pattern.style.display = "none";
            paypin.style.display = "none";
            profile.style.display = "none";
            receive.style.display = "none";
            rememberpassword.style.display = "none";
            rules.style.display = "none"; 
            sendselect.style.display = "none";
            receiveselect.style.display = "none";
            send.style.display = "none";
            support.style.display = "none";
            verification.style.display = "none";
            userinfoslide.style.display = "none";
            invite.style.display = "flex"; // -------------------- Container --------------------
            refhis.style.display = "none";
        }
        // -------------------
        
        // Login
        function login() {
            var logg = document.getElementsByClassName("log-out-main");
            for (let i = 0; i < logg.length; i++) {
                logg[i].style.display = "none";
            }
        }
        // -------------------- 
        
        // Login
        function logout() {
            var logg = document.getElementsByClassName("log-out-main");
            for (let i = 0; i < logg.length; i++) {
                logg[i].style.display = "flex";
            }
        }
        // --------------------   
        
        // Scan
        function scanin() {
            var logg = document.getElementsByClassName("scan-out-main");
            for (let i = 0; i < logg.length; i++) {
                logg[i].style.display = "flex";
            }
        }
        // -------------------- 
        
        // Scan
        function scanout() {
            var logg = document.getElementsByClassName("scan-out-main");
            for (let i = 0; i < logg.length; i++) {
                logg[i].style.display = "none";
            }
        }
        // --------------------   
    //  -------------------- -------------------- -------------------- 