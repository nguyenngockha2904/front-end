class FillinBlank extends Question{
    constructor(questionType, id, content, answers) {
        super(questionType, id, content, answers);
    }
    /**
     * Render html của câu hỏi 
     * @return {String} content
     */
    render(i){
        return `<div class="w-50">
        <p class="lead text-primary">Câu ${i} : ${this.content}</p>
        <input type="text" class="form-control" id="answers-${this.id}">
    </div>`;
    }
    checkExact(){
        let value=document.getElementById(`answers-${this.id}`).value;
        value=value.toLowerCase();
        if(value===this.answers[0].content.toLowerCase()){
            return true;
        }
        return false;
    }
}
// const newQuestion =new FillinBlank(1,10,'hôm nay là thứ mấy',[{content:'thứ 2'},{content:'thứ 3'},{content:'thứ 4'}]);
// console.log(newQuestion.render());