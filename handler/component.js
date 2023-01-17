class Component {
    constructor(object, id) {
        this.check = false;
        this.title = object.title;
        this.a1 = object[1];
        this.a2 = object[2];
        this.a3 = object[3];
        this.id = id + 1;
    }

    #randomize() {
        const questions = [this.a1, this.a2, this.a3];
        
        questions.sort(() => Math.random() - 0.5);

        return `
            <li data-value='${questions[0].correct}'>${questions[0].text}</li>
            <li data-value='${questions[1].correct}'>${questions[1].text}</li>
            <li data-value='${questions[2].correct}'>${questions[2].text}</li>
        `;
    }

    getComponentData() {
        return this.data;
    }

    getComponent() {
        return `<div class='card' id='${this.id}'>
                              <h1>${this.title}</h1>
                                  <ul id='ul-${this.id}'>
                                    ${this.#randomize()}
                                  </ul>
                              </div>`;
    }

    #checkAnswere(li) {
        if (li.getAttribute("data-value") === "true") {
            li.style.textDecoration = "underline";
            li.style.backgroundColor = "#3dfc89";
            if (!this.check) {
                document.getElementById("c-score").innerHTML =
                    parseInt(document.getElementById("c-score").innerHTML) + 1;
            }
        }

        if (li.getAttribute("data-value") === "false") {
            li.style.textDecoration = "line-through";
            if (!this.check) {
                document.getElementById("i-score").innerHTML =
                    parseInt(document.getElementById("i-score").innerHTML) + 1;
            }
        }

        this.check = true;
    }

    setCorrectTrigger() {
      const liArray = Array.from(
        document.getElementById(`ul-${this.id}`).children
      );

      liArray.forEach((e) => {
        e.addEventListener("click", this.#checkAnswere.bind(this, e));
      });
    }
}