class RememberPassword extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- REMEMBER PASSWORD STRUCTURE -->
            <div class="remember-password-page-display">
                REMEMBER PASSWORD PAGE
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("remember-password-page", RememberPassword);