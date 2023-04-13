class Rules extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- RULES STRUCTURE -->
            <div class="rules-page-display">
                
                <!-- -------------------- -------------------- POLICY PAGE PARENT CONTAINER -------------------- -------------------- -->
                    <div class="rulespolicy-parent">
                        <!-- -------------------- Header container -------------------- -->
                            <div class="help-header-wrap dark-background">
                                <div class="container">
                                    <div class="help-header-container">
                                        <!-- Left container-->
                                        <div class="help-left-container">
                                            <div class="help-header-img btn-display">
                                                <img src="img/arrow-left.png" onclick="BackToReferral()" class="img-fluid">
                                            </div>
                                            <span class="help-header-txt">Refer and earn</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->


                        
                        <!-- --------------------  -------------------- -->
                            <div class="container">
                                <!--  -->
                                <div class="rulespolicy-txt">REFFERAL RULES</div>
                                
                                <!--  -->
                                <p class="line-height-zero rulepolicy-lg-txt">1.How do referrals work?</p>
                                <p class="rulespolicy-sm-txt">When your friend registers an account and makes a deposit through the link you've shared, you will get x3 of their first deposit and your referred friend gets x8 their deposit (x11 will be given out by Binance in total).</p>
                                
                                <!--  -->
                                <p class="line-height-zero rulepolicy-lg-txt">2. Who is a valid user?</p>
                                <p class="rulespolicy-sm-txt">A. The invitee's should be one that has not yet been registered and verified with Binance CoinTracker as at the time the inviter makes hes first deposit.
                                <br>
                                B. After signing up on Binance CoinTracker, the invitee should make deposits to get x8 their deposit.</p>
                                
                                <!--  -->
                                <p class="line-height-zero rulepolicy-lg-txt">3.About Promo reward</p>
                                <p class="rulespolicy-sm-txt">After your friend has been invited to register and has successfully made his first deposit, both of you will get your rewards immediately. Our highest time rate is 20 seconds.</p>
                                
                                <!--  -->
                                <p class="line-height-zero rulepolicy-lg-txt">4.How can I check my referrals?</p>
                                <p class="rulespolicy-sm-txt">To know the number or history of your invited friends, you go to select Home > Menu > Refer friend > Referral History, to see the person you invited if they've made a deposit.</p>
                                
                                <!--  -->
                                <p class="line-height-zero rulepolicy-lg-txt">5.Other</p>
                                <p class="rulespolicy-sm-txt">A new user can only bind the inviter once, and one device and one account can only participate once. For suspicious invitation, Binance reserves the right to suspend the reward. There are many uncertain factors on the Internet, please understand and agree that, due to force majeure, network, communication line failure, large-scale computer paralysis, and large-scale cheating during the event, Binance CoinTracker has the right to take measures including but not limited to eliminating abnormalities or adjusting, suspending or canceling this activity through various methods and Binance CoinTracker will not be liable for any losses caused to you.</p>
                                
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

customElements.define("rules-page", Rules);