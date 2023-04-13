class Pattern extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- PATTERN STRUCTURE -->
            <div class="pattern-page-display">
                PATTERN PAGE
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("pattern-page", Pattern);