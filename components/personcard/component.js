fetch('./components/personcard/component.html')
    .then(res => res.text())
    .then(content => {
        customElements.define('person-card', class extends HTMLElement {
            constructor() {
                super();
                const template = document.createElement('template');
                template.innerHTML = content;
                this.attachShadow({ mode: 'open' })
                    .appendChild(template.content.cloneNode(true));
            }

            connectedCallback() {
                const name = this.getAttribute('name');
                const desc = this.getAttribute('desc');
                const nameHeader = this.shadowRoot.getElementById('person-name');
                const descParagraph = this.shadowRoot.getElementById('person-desc');
                nameHeader.innerHTML = name;
                descParagraph.innerHTML = desc;
            }
        });
    });
