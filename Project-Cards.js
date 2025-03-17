class myProjects extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const projTitle = this.getAttribute('title') || 'No Title';
        const projDesc = this.getAttribute('description') || 'No Description';
        const projImg = this.getAttribute('image') || 'noImg.jpg';
        const imgAlt = this.getAttribute('imgAlt') || 'Project Image';
        const projLink = this.getAttribute('link') || '#';

        this.classList.add("project-card");

        this.innerHTML=``;
        this.innerHTML=`
        <h2>${projTitle}</h2>
        <picture>
            <img src="${projImg}" alt="${imgAlt}">
        </picture>
        <p>${projDesc}</p>
        <a href="${projLink}"> Link to Github Repository`;

    }
}
customElements.define('project-card', myProjects);