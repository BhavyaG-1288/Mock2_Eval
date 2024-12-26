export function nav () {

    document.getElementById("navbar");

let nav =`
        #nav {
            background-color: blueviolet;
            display: flex;
            justify-content: space-between;
            width:800px;
            height:200px;
        }
        #navbar{
            background-color: blueviolet;
            display: flex;
            justify-content: space-between;
            width:800px;
            height:200px;
        }
        <div id ="navbar">
    <a href="index.html">Home</a>
    <a href="quiz.html">Quiz</a>
    <a href="questions.html">Questions</a>
</div>`
    return navbar;
}

