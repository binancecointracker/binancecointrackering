class Menu extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- HAMBURGER MENU STRUCTURE -->
            <div class="menu-page-display page-display">
                <!-- Remove container button -->
                <div class="menu-remove-btn" onclick="MenuToHome()"></div>
                
                <!-- -------------------- -------------------- MENU PAGE PARENT CONTAINER -------------------- -------------------- -->
                    <div class="menu-parent-container">



                        <!-- -------------------- Menu Header Container -------------------- -->
                            <div class="menu-header-wrapper">
                                <div class="container">
                                    <div class="menu-header-container">
                                        <div class="menu-header-img">
                                            <img src="img/binance.png" class="img-fluid">
                                        </div>
                                        <span class="menu-header-txt">Binance</span>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- -------------------- Menu user container -------------------- -->
                            <div class="menu-user-con">
                                <div class="menu-option-wrapper" onclick="MenuToHome()" id="menu1">
                                    <div class="container">
                                        <div class="menu-option-container">
                                            <div class="menu-option-left-container">
                                                <div class="menu-option-img">
                                                    <img src="img/user.png" class="img-fluid">
                                                </div>
                                                <span class="menu-option-txt">Dear, <span class="user-personal-name"></span></span>
                                            </div>
                                            <!-- Right container input -->
                                            <div class="menu-option-right-img" id="menu-option-right-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- -------------------- Total Asset Link -------------------- -->
                            <div class="menu-option-wrapper" onclick="MenuToAssets()" id="menu2">
                                <div class="container">
                                    <div class="menu-option-container">
                                        <div class="menu-option-left-container">
                                            <div class="menu-option-img">
                                                <img src="img/totalAsset.png" class="img-fluid">
                                            </div>
                                            <span class="menu-option-txt">Total Asset</span>
                                        </div>
                                        
                                        <div class="menu-option-right-img"></div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- -------------------- Notification Link -------------------- -->
                            <div class="menu-option-wrapper" onclick="HomeToNotification()" id="menu3">
                                <div class="container">
                                    <div class="menu-option-container">
                                        <div class="menu-option-left-container" id="menu-option-right-2">
                                            
                                        </div>
                                        
                                        <div class="menu-option-right-img"></div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- -------------------- Seperation line && All labels container-------------------- -->
                            <!-- All labels -->
                            <div class="container"><p class="menu-label-txt line-height">All Labels</p></div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- -------------------- Add Token Link -------------------- -->
                            <div class="menu-option-wrapper" onclick="HomeToAddToken()" id="menu4">
                                <div class="container">
                                    <div class="menu-option-container">
                                        <div class="menu-option-left-container">
                                            <div class="menu-option-img">
                                                <img src="img/addTokenB.png" class="img-fluid">
                                            </div>
                                            <span class="menu-option-txt">Add Token</span>
                                        </div>
                                        
                                        <div class="menu-option-right-img"></div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- -------------------- Convert Link -------------------- -->
                            <div class="menu-option-wrapper" onclick="MenuToConvert()" id="menu5">
                                <div class="container">
                                    <div class="menu-option-container">
                                        <div class="menu-option-left-container">
                                            <div class="menu-option-img">
                                                <img src="img/convert.png" class="img-fluid">
                                            </div>
                                            <span class="menu-option-txt">Convert</span>
                                        </div>
                                        
                                        <div class="menu-option-right-img"></div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- -------------------- Transaction History Link -------------------- -->
                            <div class="menu-option-wrapper" onclick="HomeToTransactionHistory()" id="menu6">
                                <div class="container">
                                    <div class="menu-option-container">
                                        <div class="menu-option-left-container">
                                            <div class="menu-option-img">
                                                <img src="img/transactionHistory.png" class="img-fluid">
                                            </div>
                                            <span class="menu-option-txt">Transaction History</span>
                                        </div>
                                        
                                        <div class="menu-option-right-img"></div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- -------------------- Refer Friends Link -------------------- -->
                            <div class="menu-option-wrapper" onclick="MenuToReferral()" id="menu7">
                                <div class="container">
                                    <div class="menu-option-container">
                                        <div class="menu-option-left-container">
                                            <div class="menu-option-img">
                                                <img src="img/referFriend.png" class="img-fluid">
                                            </div>
                                            <span class="menu-option-txt">Refer Friends</span>
                                        </div>
                                        
                                        <div class="menu-option-right-img"></div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <!-- -------------------- Language Link -------------------- -->
                            <div class="menu-option-wrapper" onclick="MenuToLanguage()" id="menu8">
                                <div class="container">
                                    <div class="menu-option-container">
                                        <div class="menu-option-left-container">
                                            <div class="menu-option-img">
                                                <img src="img/globe.png" class="img-fluid">
                                            </div>
                                            <span class="menu-option-txt">Language</span>
                                        </div>
                                        
                                        <div class="menu-option-right-img"></div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->



                        <div class="menu-seperation-line">
                            <!-- -------------------- Settings Link -------------------- -->
                                <div class="menu-option-wrapper" onclick="HomeToSettings()" id="menu9">
                                    <div class="container">
                                        <div class="menu-option-container">
                                            <div class="menu-option-left-container">
                                                <div class="menu-option-img">
                                                    <img src="img/settings.png" class="img-fluid">
                                                </div>
                                                <span class="menu-option-txt">Settings</span>
                                            </div>
                                            
                                            <div class="menu-option-right-img"></div>
                                        </div>
                                    </div>
                                </div>
                            <!-- -------------------- -------------------- -------------------- -->
                            <!-- -------------------- -------------------- -------------------- -->



                            <!-- -------------------- Help & Support -------------------- -->
                                <div class="menu-option-wrapper" onclick="MenuToHelp()" id="menu10">
                                    <div class="container">
                                        <div class="menu-option-container">
                                            <div class="menu-option-left-container">
                                                <div class="menu-option-img">
                                                    <img src="img/helpAndSupport.png" class="img-fluid">
                                                </div>
                                                <span class="menu-option-txt">Help & Support</span>
                                            </div>
                                            
                                            <div class="menu-option-right-img"></div>
                                        </div>
                                    </div>
                                </div>
                            <!-- -------------------- -------------------- -------------------- -->
                            <!-- -------------------- -------------------- -------------------- -->



                            <!-- -------------------- LogOut -------------------- -->
                                <div class="menu-option-wrapper" id="menu11" onclick="logout()">
                                    <div class="container">
                                        <div class="menu-option-container">
                                            <div class="menu-option-left-container">
                                                <div class="menu-option-img">
                                                    <img src="img/logout.png" class="img-fluid">
                                                </div>
                                                <span class="menu-option-txt menu-red-txt">LogOut</span>
                                            </div>
                                            
                                            <div class="menu-option-right-img"></div>
                                        </div>
                                    </div>
                                </div>
                            <!-- -------------------- -------------------- -------------------- -->
                            <!-- -------------------- -------------------- -------------------- -->
                        </div>



                        <!-- -------------------- Telegram button -------------------- -->
                            <div class="container">
                                <div class="menu-telegram-btn" onclick="document.location.href='./js/support.html'">
                                    <span class="menu-telegram-txt">Contact Binance Support</span>
                                    <div class="menu-telegram-img">
                                        <img src="img/telegram.png" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->
                    </div>
                <!--   -------------------- -------------------- -------------------- -------------------- -------------------- -->

            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("menu-page", Menu);