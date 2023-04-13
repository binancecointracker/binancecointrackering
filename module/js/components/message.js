class Message extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- MESSAGE STRUCTURE -->
            <div class="message-page-display">
                MENSSAGE PAGE
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("message-page", Message);