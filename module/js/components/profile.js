class Profile extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- PROFILE SETTINGS STRUCTURE -->
            <div class="profile-page-display">
                PROFILE PAGE
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("profile-page", Profile);