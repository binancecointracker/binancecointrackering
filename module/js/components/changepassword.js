class ChangePassword extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- CHANGE PASSWORD STRUCTURE -->
            <div class="change-password-page-display">
                CHANGE PASSWORD PAGE
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("change-password-page", ChangePassword);