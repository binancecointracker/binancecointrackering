class Home extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- HOME STRUCTURE -->
                <div class="home-page-display page-display">
                    <!-- Home ~ Head container start -->
                        <div class="hmepg-head-wrap">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="hmepg-head-container">
                                            
                                            <!-- Left Head container -->
                                            <div class="hmepg-left-head-container" onclick="HomeToUserInfoSlide()">
                                                <!-- Ripple effect -->
                                                <div class="ripple left-head-container-ripple"></div>
                                                <!-- User icon image in head container -->
                                                <div class="hmepg-user-icon-wrap">
                                                    <span class="hmepg-user-icon">
                                                        <img src="img/user.png" class="img-fluid">
                                                    </span>
                                                </div>
                                                
                                                <!-- User name and promo column -->
                                                <div class="hmepg-username-promo-wrap">
                                                    <!-- Username -->
                                                    <div class="hmepg-username-txt line-height one-line">Hello, <span class="user-personal-name"></span></div>
                                                    <!-- promo -->
                                                    <div class="hmepg-promo-wrap">
                                                        <div class="hmepg-promo-img">
                                                            <img src="img/promo.png" class="img-fluid">
                                                        </div>
                                                        <span class="line-height hmepg-promo-txt one-line">Binance Promo (x8)</span>	
                                                    </div>
                                                </div>
                                            </div>		
                                            
                                            
                                            <!-- Right Head container-->
                                            <div class="hmepg-right-head-container">
                                                <!-- Nav Links -->
                                                <div class="hmepg-nav-link" id="hmepg-nav-verify" onclick="HomeToNotification()">
                                                    
                                                </div>
                                                <!-------------------->
                                                <div class="hmepg-nav-link" onclick="document.location.href='./js/support.html'">
                                                    <div class="ripple nav-link-btn-ripple"></div>
                                                    <img src="img/supportB.png" class="img-fluid">
                                                </div>
                                                <!-------------------->
                                                <div class="hmepg-nav-link-sub" id="menu-dis-btn" onclick="HomeToMenu()">
                                                    <div class="ripple nav-link-btn-ripple"></div>
                                                    <img src="img/menu.png" class="img-fluid">
                                                </div>
                                                <!-------------------->
                                                <div class="hmepg-nav-link-sub" id="settings-dis-btn" onclick="HomeToSettings()">
                                                    <div class="ripple nav-link-btn-ripple"></div>
                                                    <img src="img/settings.png" class="img-fluid">
                                                </div>
                                                <!-------------------->
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <!-- -->
                    
                    
                    
                    
                    
                    <!-- Home ~ Card container start -->
                        <div class="hmepg-card-wrap">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="hmepg-card-container">
                                        
                                            <!-- First out of 3 containers -->
                                            <div class="card-top-container">
                                                <!-- Left part of the cards first container -->
                                                <div class="card-top-span">
                                                    <!-- Card logo Image-->
                                                    <span class="card-logo-img">
                                                        <img src="img/binance.png" class="img-fluid">
                                                    </span>
                                                    <span class="card-txt one-line">Total Balance</span>
                                                    <div class="eye-icon" onclick="hmepgEye()">
                                                        <img src="img/visibility.png" class="img-fluid">
                                                        <div id="div-eye-cover"></div>
                                                    </div>
                                                </div>
                                                
                                                
                                                <!-- Right part of the cards first container -->
                                                <div class="card-top-span cursor" onclick="HomeToTransactionHistory()">
                                                    <span class="card-txt one-line">Transaction History</span>
                                                    <span class="eye-icon">
                                                        <img src="img/transactionArrow.png" class="img-fluid">
                                                    </span>
                                                </div>			
                                            </div>
                                            
                                            <!-- Second out of three containers-->
                                            <p class="card-amount line-height one-line" id="user-balance">$0.00</p>
                                            
                                            <!-- Third container -->
                                            <div class="card-bottom-wrap">
                                                <div class="card-bottom-container">
                                                    <!-- card buttons-->
                                                    <div class="card-btns cursor" onclick="HomeToSendSelect()">
                                                        <div class="card-btn-img-wrap">
                                                            <div class="card-btn-img">
                                                                <img src="img/cardSend.png" class="img-fluid">
                                                            </div>
                                                        </div>
                                                        <label class="card-btn-label line-height-zero">Send</label>
                                                    </div>
                                                    
                                                    <div class="card-btns cursor" onclick="HomeToReceiveSelect()">
                                                        <div class="card-btn-img-wrap">
                                                            <div class="card-btn-img">
                                                                <img src="img/cardReceive.png" class="img-fluid">
                                                            </div>
                                                        </div>
                                                        <label class="card-btn-label line-height-zero">Receive</label>
                                                    </div>
                                                    
                                                    <div class="card-btns cursor" onclick="HomeToConvert()">
                                                        <div class="card-btn-img-wrap">
                                                            <div class="card-btn-img">
                                                                <img src="img/cardSwap.png" class="img-fluid">
                                                            </div>
                                                        </div>
                                                        <label class="card-btn-label line-height-zero">Swap</label>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <!-- -->
                    
                    
                    
                    
                    <!-- Home ~ Token container start -->
                    <div class="hmepg-token-wrap">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="hmepg-token-container">
                                        
                                        <label class="hmepg-token-acc-txt one-line">Your Token Accounts</label>
                                        
                                        <hmepgloopscript></hmepgloopscript>

                                        <div class="hmepg-display-background" id="hmepg-display-background">
                                            <!-- Images -->
                                            <div class="hmepg-display-img">
                                                <img src="img/binance.png" class="img-fluid">
                                            </div>
                                            <div class="hmepg-token-img-txt one-line">No added Tokens</div>
                                        </div>
                                                    
                                        <!-- Add token container -->
                                        <div class="hmepg-token-add-container">
                                            <div class="hmepg-token-add-span cursor" onclick="HomeToAddToken()">		
                                                <div class="hmepg-token-add-img">
                                                    <img src="img/addTokenB.png" class="img-fluid">
                                                </div>
                                                <span class="hmepg-token-add-txt one-line">Add Token</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- -->
                    <!-- -->
                    <!-- -->
                </div>


                <bottom-nav-page></bottom-nav-page>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("home-page", Home);
    




// -------------------- Eye for home - PAGE --------------------         
    //   
    var change = 1;
    function hmepgEye() {
        change++;
        if (Number(change) % 2 === 0 ) {
            document.getElementById("user-balance").innerHTML = document.getElementById("user-balance").textContent = `$****`;
            document.getElementById("div-eye-cover").style.display = "flex";
        } else {
            document.getElementById("user-balance").innerHTML = document.getElementById("user-balance").textContent = `$0.00`;
            document.getElementById("div-eye-cover").style.display = "none";
        };
    }
    // -------------------- 
//  -------------------- -------------------- -------------------- 