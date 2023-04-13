class NotificationMain extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- NOTIFICATION MAIN PAGE -->
            <verification-page class="page-display"></verification-page>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("notification-page", NotificationMain);