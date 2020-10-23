let url = "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
fetch(url)
    .then(function (res) {
        return res.json()
    })
    .then(function (res) {
        let answer = ""
        let data = res.results
        let isOver = false
        let results = 0;
        document.getElementById("next").addEventListener("click", function () {
            data.shift()
            loadQuiz(data[0])
            document.getElementById("next").classList.add("hide")
        })
        function loadQuiz(quiz) {
            if (!quiz) {
                return document.getElementById("game").innerHTML = `<p class="gameover">Chúc Mừng! Bạn được  ` + results + ` Điểm</p>`;
            }
            isOver = false
            document.getElementById("question").innerHTML = quiz.question
            let choice = []
            answer = quiz.correct_answer
            choice.push(quiz.correct_answer)
            choice.push(...quiz.incorrect_answers)
            choice.sort(function () {
                return 0.5 - Math.random()
            })
            let alphabets = ['A', 'B', 'C', 'D']
            for (let i = 0; i < alphabets.length; i++) {
                document.getElementById(`choice${alphabets[i]}`).innerHTML = choice[i]
                document.getElementById(`choice${alphabets[i]}`).addEventListener("click", checkAns)
                document.getElementById(`choice${alphabets[i]}`).parentNode.firstElementChild.classList.remove("fail")
                document.getElementById(`choice${alphabets[i]}`).parentNode.firstElementChild.classList.remove("success")
            }
        }
        function checkAns() {
            if (isOver == false) {
                if (answer == this.innerHTML) {
                    this.parentNode.firstElementChild.classList.add("success")
                    results = results + 10;
                } else {
                    this.parentNode.firstElementChild.classList.add("fail")
                    alert("Câu trả lời sai")
                }
                isOver = true;
                document.getElementById("next").classList.remove("hide")
            }
            document.getElementById("point").innerHTML = "Điểm:" + results
        }
        loadQuiz(data[0])
    })