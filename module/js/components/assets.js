class Assets extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- ASSETS STRUCTURE -->
            <div class="assets-page-display">
                
                <!-- -------------------- -------------------- ASSETS PAGE PARENT CONTAINER -------------------- -------------------- -->
                    <div class="assets-parent-container">
                        <!-- -------------------- Assets header container -------------------- -->
                        <div class="assets-header">
                            <div class="container">
                                <!-- Assets link container-->
                                <div class="assets-header-link-wrap" id="assets-header-link-wrapper">
                                    <div class="help-header-img asset-visi">
                                        <img src="img/backArrowB.png" class="img-fluid">
                                    </div>
                                    <div class="help-header-img" id="language-index">
                                        <img src="img/globe.png" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            <!-- assets large image -->
                            <div class="assets-img">
                                <img src="img/binanceBackground.jpg" class="img-fluid">
                            </div>
                            <div  class="assets-header-circle" id="trans-1"></div>
                            <!-- Username Container -->
                            <div class="container">
                                <!-- Username -->
                                <div class="assets-username-wrap">
                                    <span class="assets-username-txt">Hello, <span class="user-personal-name"></span></span>
                                    <div class="assets-unverified-btn" id="assets-unverified-identifier-1">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->


                        
                        <!-- -------------------- Header Bottom -------------------- -->
                        
                        <div class="asset-header-bottom-wrap" id="trans-2">
                            <div class="asset-header-bottom"></div>
                            <div class="asset-header-bottom"></div>
                        </div>
                        
                        <!-- Assets  -->
                        <div class="container"><p class="assets-txt-main">Total Assets</p></div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->


                        
                        <!-- -------------------- Assets Binance card container --- The first container -------------------- -->
                        <div class="assets-card-wrap">
                            <div class="assets-card-background"></div>
                            <div class="container">
                                <div class="assets-card-first-pad">
                                    <div class="container">
                                        <!-- Asset card first row -->
                                        <div class="assets-card-first-row">
                                            <div class="assets-card-first-left">
                                                <div class="assets-card-binance-logo">
                                                    <img src="img/binance.png" class="img-fluid">
                                                </div>
                                                <span class="assets-card-user-txt one-line">Binance User</span>
                                            </div>
                                            <div class="assets-card-first-img">
                                                <img src="img/user.png" class="img-fluid">
                                            </div>
                                        </div>
                                        
                                        <!-- Asset card second set of containers -->
                                        <div class="assets-card-value">$0.00</div>
                                        <div class="assets-card-value-txt one-line">Binance Coin Vault</div>
                                            
                                        <div class="assets-card-second-row">
                                            <div class="assets-unverified-btn" style="margin: 0px" id="assets-unverified-identifier-2">
                                                
                                            </div>
                                            <!-- Date -->
                                            <span id="assets-date"></span>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            <!-- Seperation line -->
                            <div class="assets-card-line"></div>
                            
                            <div class="assets-card-second-pad">
                            <div class="container-fluid">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-9 p-2">
                                        <div class="assets-card-btn" id="assets-card-btn-1"><span id="assets-card-verify-txt" class="assets-card-btn-txt one-line"></span></div>
                                    </div>
                                    
                                    <div class="col-3 p-2">
                                        <div class="assets-card-btn" id="assets-card-btn-2" onclick="AssetsToAbout()">
                                            <div class="assets-card-btn-img">
                                                <img src="img/info.png" class="img-fluid" style="padding: 0.2em">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->


                        
                        <!-- -------------------- User information container -------------------- -->
                            <div class="asset-info-wrap">
                                <div class="container">
                                    <div class="assets-info">
                                        <div class="assets-info-txt">Name</div>
                                        <div class="assets-info-txt"><span class="user-personal-name"></span></div>
                                    </div>
                                    
                                    <div class="assets-info">
                                        <div class="assets-info-txt">Email</div>
                                        <div class="assets-info-txt"><span class="user-personal-email"></span></div>
                                    </div>
                                </div>
                                
                                <!-- Seperation line -->
                                <div class="assets-user-seperation-line"></div>
                                
                                <div class="container">
                                    <div class="row">
                                        <div class="col-6 p-2">
                                            <div class="assets-card-btn assets-btn-border" id="assets-card-btn-id"><span class="assets-card-btn-txt" >User Information</span></div>
                                        </div>
                                
                                        <div class="col-6 p-2">
                                            <div class="assets-card-btn yellow-color" onclick="HomeToSettings()">
                                                <span class="assets-card-btn-txt">Go to Settings</span>
                                                <div class="verify-img">
                                                    <img src="img/settings.png" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->


                        
                        <!-- -------------------- Support button -------------------- -->
                        <div class="assets-support-btn-wrap" onclick="AssetsToSupport()">
                            <div class="container">
                                <div class="assets-support-btn">
                                    <div class="assets-support-left-wrap">
                                        <div class="assets-support-img-wrap">
                                            <div class="assets-support-img-left">
                                                <img src="img/supportB.png" class="img-fluid">
                                            </div>			
                                        </div>
                                        <span class="assets-support-txt">Go to support for more</span>
                                    </div>
                                    <div class="assets-support-img-right">
                                        <img src="img/backArrowB.png" style="rotate: 180deg;" class="img-fluid">
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
        `;
    }
}

customElements.define("assets-page", Assets);
//  -------------------- -------------------- --------------------  





// -------------------- Assets page -------------------- 
    //  Display date in assets page
    function showDate() {
        let date = new Date();
        let d = date.getDate();
        let months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        let m = months[date.getMonth()];
        let y = date.getFullYear();
        let assetsDate = document.querySelector("#assets-date");
        assetsDate.innerHTML = `${d} · ${m} · ${y}`;
    };
    showDate();
    // -------------------- 
//  -------------------- -------------------- --------------------  