class Todo {

    userId = 0;
    id = 0;
    title = '';
    completed = false;

    constructor(convertedResponse) {
        Object.assign(this, convertedResponse);
    }

    render() {
        const container = document.createElement('div');

        const titleElement = document.createElement('p');
        titleElement.innerHTML = this.title;

        container.appendChild(titleElement);

        return container;
    }

}