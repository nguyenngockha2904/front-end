class multipleChoice extends Question {
    constructor(questionType, id, content, answers) {
        super(questionType, id, content, answers);
    }
    /**
     * Render HTML của câu hỏi
     * @param {Number} index
     * @param {Array} arr
     * @return {String} html content
     */
    render(i) {
        var answersHtml = '';
        for (let item of this.answers) {
            answersHtml += `
            <div class="d-flex align-items-baseline">
            <input value="${item._id}" type="radio" class="mr-2 answer-${this.id}" name="answer-${this.id}">
            <p class="lead text-dark">${item.content}</p>
        </div>`
        }
        return ` <div>
        <p class="lead text-primary">Câu ${i} : ${this.content}</p>
        ${answersHtml}
    </div>`;
    }
    checkExact() {
        let id;
        const ipList = document.getElementsByClassName(`answer-${this.id}`);
        for (let ip of ipList) {
            if (ip.checked) {
                id = ip.value;
            }
        }
        if (!id) return false;
        for (let item of this.answers) {
            if (item._id === id) {
                return item.exact;
            }
        }
        return false;
    }
}
// const newQuestion =new multipleChoice(1,10,'hôm nay là thứ mấy',[{content:'thứ 2'},{content:'thứ 3'},{content:'thứ 4'}]);

// console.log(newQuestion.render());