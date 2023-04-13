class BioAuth extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- BOIMETRIC AUTHENTICATION STRUCTURE -->
            <div class="bio-auth-page-display">
                bio-auth-page
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("bio-auth-page", BioAuth);