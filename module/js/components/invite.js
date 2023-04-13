class Invite extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- INVITE STRUCTURE -->
            <div class="invite-page-display">
                
                <!-- -------------------- -------------------- INVITE PAGE PARENT CONTAINER -------------------- -------------------- -->
                    <div class="refhow-parent">
                        <!-- -------------------- Header container -------------------- -->
                            <div class="help-header-wrap dark-background">
                                <div class="container">
                                    <div class="help-header-container">
                                        <!-- Left container-->
                                        <div class="help-left-container">
                                            <div class="help-header-img btn-display" onclick="BackToReferral()">
                                                <img src="img/arrow-left.png" class="img-fluid">
                                            </div>
                                            <span class="help-header-txt">How to use invitation code </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="container">
                                <div class="refhow-head-txt-wrap">
                                    <span class="refhow-head-lg-txt">What is invitation code?</span>
                                    <span class="refhow-head-sm-txt">If you invite friends to join Binance CoinTracker with your invitation code, you can get x3 their first deposit as bonus.</span>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->


                        
                        <!-- --------------------  -------------------- -->
                            <div class="invite-token-wrap">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="hmepg-token-container">
                                                
                                                <div class="refhow-head-lg-txt refhow-align">How to use your invitation code?</div>
                                                
                                                <div class="refhow-guide-wrap">
                                                    <div class="refhow-guide-absolute">1.</div>
                                                    <div class="refhow-guide-txt">Share your invitation code with friends to invite them to download Binance CoinTracker.</div>
                                                    <div class="refhow-guide-img"><img src="img/inviteOne.png" class="img-fluid border-img"></div>
                                                </div>
                                                
                                                <div class="refhow-guide-wrap">
                                                    <div class="refhow-guide-absolute">2.</div>
                                                    <div class="refhow-guide-txt">Once your friend registers to the Binance CoinTracker app with your invitation code, they will be eligible get x8 their first deposit as welcome bonus instantly after depositing</div>
                                                    <div class="refhow-guide-img"><img src="img/inviteTwo.jpeg" class="img-fluid border-img"></div>
                                                </div>
                                                
                                                <div class="refhow-guide-wrap">
                                                    <div class="refhow-guide-absolute">3.</div>
                                                    <div class="refhow-guide-txt">Immediately your friend fund their Binance CoinTracker, you will get account x3 their first deposit</div>
                                                    <div class="refhow-guide-img"><img src="img/inviteThree.jpeg" class="img-fluid border-img"></div>
                                                </div>
                                                
                                            </div>
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

customElements.define("invite-page", Invite);