class ForgetPassword extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- FORGET PASSWORD STRUCTURE -->
            <div class="forget-password-page-display">
                FORGOT PASSWORD PAGE
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("forget-password-page", ForgetPassword);