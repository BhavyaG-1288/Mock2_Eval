const navbar =(){


    document.getElementById("nav");
    let form =`<style>
    #nav{
                #nav {
                background-color: blueviolet;
                display: flex;
                justify-content: space-between;
                width:100%;
                padding:15px;
            }
            #navbar{
                background-color: blueviolet;
                display: flex;
                justify-content: space-between;
                width:100%;
                height:50px;
            }
            }
        </style>
    
        
        <div id ="nav">
            <div id ="navbar">
                <a href="index.html">Home</a>
                <a href="quiz.html">Quiz</a>
                <a href="questions.html">Questions</a>
            </div>
            <form id ="login">
                <input id ="Email" type ="text" placeholder="Enter Email">
                <input id ="password" type ="password" placeholder="Enter Password">
           </form>
        </div>`;
     
}

display navbar();


