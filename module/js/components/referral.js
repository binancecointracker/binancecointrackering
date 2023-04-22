class Referral extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- REFERRAL STRUCTURE -->
            <div class="referral-page-display">
                
                <!-- -------------------- -------------------- CONVERT PAGE PARENT CONTAINER -------------------- -------------------- -->
                    <div class="referral-parent">
                        <!-- -------------------- Header container -------------------- -->
                            <div class="help-header-wrap dark-background">
                                <div class="container">
                                    <div class="help-header-container">
                                        <!-- Left container-->
                                        <div class="help-left-container">
                                            <div class="help-header-img btn-display" id="referral-back-btn">
                                                <img src="img/arrow-left.png" class="img-fluid">
                                            </div>
                                            <span class="help-header-txt">Earn Money </span>
                                        </div>
                                        <!-- Right container-->
                                        <div class="help-header-txt cursor" onclick="ReferalToRules()">Rules</div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->


                        
                        <!-- -------------------- Refer Notification news -------------------- -->
                            <div class="refer-news-wrap">
                                <div class="container">
                                    <div class="refer-news-con">
                                        <!-- Left -->
                                        <div class="refer-news-left">
                                            <div class="refer-news-icon">
                                                <img src="img/sound.png" class="img-fluid">
                                            </div>
                                        </div>
                                        <!-- Right -->
                                        <div class="refer-news-right"><span id="displayName">Binance User</span> just referred a friend and got <span id="displayAmount" class="referraltext">referral reward</span></div>
                                    </div>
                                </div>
                            </div>
                        <!-- -------------------- -------------------- -------------------- -->
                        <!-- -------------------- -------------------- -------------------- -->


                        
                        <!-- -------------------- Body container -------------------- -->
                            <div class="refer-split">

                                <div class="container">
                                    <!-- main refer container - wrap-->
                                    <div class="refer-body-wrap">
                                        <!-- Upper container -->
                                        <div class="container">
                                            <div class="refer-upper-body">
                                                <div class="refer-invite-txt">My invitations</div>
                                                <div class="refer-upper-row">
                                                    <span id="refer-code-txt" class="refer-code-txt one-line">https://binancecointracker.github.io/binancecointracker/</span>
                                                </div>
                                                <!-- Copy button -->
                                                <div class="referral-btn" onclick="copyReferral()">
                                                    <span class="receive-btn-txt" id="referral-share">Copy</span>	
                                                </div>

                                                <div class="refer-lg-txt">
                                                    REFER AND EARN! Invite one user and get x3 of your referred friends first deposit!
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="refer-sep-line"></div>
                                        
                                        <!-- Bottom container -->
                                        <div class="container">
                                            <div class="refer-bottom-body">
                                                <div class="refer-invite-txt">How to Earn</div>
                                                <!-- Guide container -->
                                                <div class="refer-guide-wrap">
                                                    <div class="refer-guide-con">
                                                        <div class="refer-guide-img-wrap"><div class="refer-guide-img"><img src="img/share.png" class="img-fluid"></div></div>
                                                        <div class="refer-guide-txt">Share Link</div>
                                                    </div>
                                                    
                                                    <div class="refer-arrow-img">
                                                        <img src="img/right-arrow.png" class="img-fluid">
                                                    </div>
                                                                                                
                                                    <div class="refer-guide-con">
                                                        <div class="refer-guide-img-wrap"><div class="refer-guide-img"><img src="img/verified-user.png" class="img-fluid"></div></div>
                                                        <div class="refer-guide-txt">Friends accept invite</div>
                                                    </div>
                                                    
                                                    <div class="refer-arrow-img">
                                                        <img src="img/right-arrow.png" class="img-fluid">
                                                    </div>
                                                    
                                                    <div class="refer-guide-con">
                                                        <div class="refer-guide-img-wrap"><div class="refer-guide-img"><img src="img/dollar-symbol.png" class="img-fluid"></div></div>
                                                        <div class="refer-guide-txt">Friends deposit</div>
                                                    </div>
                                                </div>		
                                            </div>
                                        </div>
                                        
                                        
                                        <div class="refer-bottom-wrap">
                                            <div class="container">
                                                <div class="refer-bottom-txt">
                                                    The more FRIENDS you invite, the more you earn!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    
                                    
                                
                                <div class="bottom-refferal-wrap">
                                    <div class="container">
                                        <!-- Button container -->
                                        <div class="row">
                                            <div class="col-7 p-2">
                                                <div class="refer-btn" onclick="ReferalToInvite()">How to use invitation code</div>
                                            </div>
                                            
                                            <div class="col-5 p-2">
                                                <div class="refer-btn" onclick="ReferalToHistory()">Referral History</div>
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

customElements.define("referral-page", Referral);





// --------------------  - PAGE --------------------         
    // NAME 
    var names = [
        "Liam", "Noah", "Oliver", "Elijah", "William", "James", "Benjamin", "Lucas", "Henry", "Alexander",
        "Mason", "Michael", "Ethan", "Daniel", "Jacob", "Logan", "Jackson", "Levi", "Sebastian", "Mateo",
        "Jack", "Owen", "Theodore", "Aiden", "Samuel", "Joseph", "John", "David", "Matthew", "Fedinard",
        "Luke", "Asher", "Carter", "Julian" , "Grayson" ,"Leo" , "Jayden", "Gabriel", "Isaac", "Lincoln" ,
        "Anthony", "Hudson", "Dylan", "Ezra", "Thomas", "Charles", "Christopher", "Jaxon", "Maverick", "Josiah", 
        "Isaiah", "Andrew", "Elias", "Joshua", "Nathan", "Caleb", "Ryan", "Adrian", "Miles", "Eli",
        "Nolan", "Christian", "Aaron", "Cameron", "Ezekiel", "Colton", "Luca", "Landon", "Hunter", "Jonathan",
        "Santiago", "Axel", "Easton", "Cooper", "Jeremiah", "Angel", "Roman", "Connor", "Jameson", "Robert", 
        "Greyson", "Jordan", "Ian", "Carson", "Jaxson", "Leonardo", "Nicholas", "Dominic", "Austin", "Everett",
        "Brook", "Xavier", "Kai", "Jose", "Parker", "Adam", "Jace", "Wesley", "Kayden", "Silas"
    ];
    
    function getRandomName() {
        const randomDrink = names[Math.floor(Math.random() * names.length)];
        document.getElementById("displayName").innerHTML = randomDrink;
    }
    // -------------------- 
    //  NUMBER
    var amount = [
        "$1000", "$1730", "$120", "$1175", "$2295", "$1785", "$1870", "$3100", "$2100", "$175", 
        "$3000", "$4000", "$1256", "$3190", "$1990", "$3200", "$3100", "$1000", "$1000", "$1000", 
        "17500", "7500", "4520", "2750", "2500", "1200", "4190", "5470", "2935", "1287", 
        "$1273", "$4273", "$130", "$4275", "$900", "$865", "$740", "$755", "$415", "$127", 
        "$665", "$4000", "$1256", "$3576", "$670", "$2410", "$976", "$8336", "$2900", "$5014", 
        "1477", "1320", "1880", "2326", "9705", "10234", "15200", "13050", "1756", "875",
        "$4170", "$3017", "$120", "$7115", "$2925", "$1785", "$1870", "$3100", "$2100", "$715", 
        "$3055", "$4035", "$2516", "$9310", "$1099", "$3440", "$3010", 
    ];
    
    function getRandomAmount() {
        const randomAmount = amount[Math.floor(Math.random() * amount.length)];
        document.getElementById("displayAmount").innerHTML = randomAmount;
    }
    // -------------------- 
    setInterval(function(){
        getRandomName();
        getRandomAmount();
      },12500);
//  -------------------- -------------------- -------------------- 
 




// --------------------  - PAGE --------------------         
    //  
    function copyReferral() {
        var $copyText = document.getElementById("refer-code-txt").innerText;
        var button = document.getElementById("referral-share");
        navigator.clipboard.writeText($copyText).then(function() {
            var originalText = button.innerText;
            let imgTag = '<img src="img/check-mark.png" style="height:1.25em;width:1.25em;margin-left: 0.125em">'
            button.innerHTML = `Copied ${imgTag}`;
            setTimeout(function(){
            button.innerText = originalText;
            }, 1500);
        }, function() {
            button.style.cssText = "background-color: var(--red);";
            button.innerText = 'Error';
        });
    }
    // -------------------- 
//  -------------------- -------------------- -------------------- 
