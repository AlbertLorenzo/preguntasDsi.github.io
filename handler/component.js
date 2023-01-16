class Component {
    constructor(object, id) {
        this.check = false;
        this.title = object.title;
        this.a1 = object[1];
        this.a2 = object[2];
        this.a3 = object[3];
        this.id = id + 1;
    }

    getComponentData() {
        return this.data;
    }

    getComponent() {
        return `<div class='card' id='${this.id}'>
                              <h1>${this.title}</h1>
                                  <ul id='ul-${this.id}'>
                                      <li class='option' data-value='${this.a1.correct}'><p>${this.a1.text}</p></li>
                                      <li class='option' data-value='${this.a2.correct}'><p>${this.a2.text}</p></li>
                                      <li class='option' data-value='${this.a3.correct}'><p>${this.a3.text}</p></li>
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