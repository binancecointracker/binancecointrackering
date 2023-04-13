class Account extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- ACCOUNT STRUCTURE -->
            <div class="account-page-display">
                ACCOUNT SECURITY
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("account-page", Account);