// lib.js

class Figure {
    constructor(title, url) {
        // Encapsulate title and validate it
        // home work: encapsulate title
        // home work: validate the title so:
                //not empty, not contain dangerous script: </> - invalid sumbols | String
        this.__title = this.validateTitle(title);
        this.__url = url;
    }

    render(selector) {
        let parent = document.querySelector(selector);
        parent.innerHTML = `
        <figure>
            <img src="${this.__url}"/>
            <figcaption>
                ${this.__title}
            </figcaption>
        </figure>
        `;
    }

    get url() {
        return this.__url;
    }

    set url(value) {
        if (value === undefined || value === "") {
            console.error("ERROR: Figure URL cannot be empty.");
        } else {
            this.__url = value;
        }
    }

    // Encapsulation for title with validation
    get title() {
        return this.__title;
    }

    set title(value) {
        this.__title = this.validateTitle(value);
    }

    // Validate title
    validateTitle(title) {
        if (typeof title === "string" && title !== "" && !/<\/?[a-z][\s\S]*>/i.test(title)) {
            return title;
        } else {
            console.error("ERROR: Invalid title format.");
            return "Untitled";
        }
    }
}
