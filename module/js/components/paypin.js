class PayPin extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- PAYMENT PIN STRUCTURE -->
            <div class="pay-pin-page-display">
                PAYMENT PIN PAGE
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("pay-pin-page", PayPin);