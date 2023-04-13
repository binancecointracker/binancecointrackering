class Passcode extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- PASSCODE STRUCTURE -->
            <div class="passcode-page-display">
                PASSCODE PAGE
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("passcode-page", Passcode);