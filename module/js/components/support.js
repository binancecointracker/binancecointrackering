class Support extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- SUPPORT STRUCTURE -->
            <div class="support-page-display">

                
                <div class="weef">
                    <!-- -------------------- Header Container -------------------- -->
                        <div class="help-header-wrap dark-background">
                            <div class="container">
                                <div class="help-header-container">
                                    <!-- Left container-->
                                    <div class="help-left-container">
                                        <div class="help-header-img btn-display" onclick="MenuToHelp()">
                                            <img src="img/arrow-left.png" class="img-fluid">
                                        </div>
                                        <span class="help-header-txt">Get to Support</span>
                                    </div>
                                    <!-- Right container-->
                                    <div class="help-header-img"></div>
                                </div>
                            </div>
                        </div>
                    <!-- -------------------- -------------------- -------------------- -->
                    <!-- -------------------- -------------------- -------------------- -->

                    <div class="container">                            
                        <!-- User information slide info container -->
                        <div class="userinfoslide-info-wrap ver-margin">
                            <!-- Image -->
                            <div class="userinfoslide-info-img" style="margin-top: 5em;">
                                <img src="img/user.png" class="img-fluid">
                            </div>
                            <div class="userinfoslide-info"><span class="user-personal-name"></span> Binance</div>
                            <div class="assets-unverified-btn" id="support-verify-btn" style="margin: 0px" >
                                
                            </div>
                        </div>
                        
                        <div class="userinfoslide-note-txt" style="text-align:center;padding-top:1.5em;">Dear <span class="user-personal-name"></span>, In order to make contact with us, click on the "Go to Support Page" button below.</div>
                    </div>
                </div>
                
                <div class="weief" id="support-bottom">
                    
                </div>
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("support-page", Support);