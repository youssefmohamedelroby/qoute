var qoute=[
    {'Quote':"Be yourself; everyone else is already taken.",'Auther':"― Oscar Wilde"},
    {'Quote':"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",'Auther':"― Marilyn Monroe"},
    {'Quote':"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",'Auther':"― Albert Einstein"},
    {'Quote':"So many books, so little time",'Auther':"― Frank Zappa"},
    {'Quote':"A room without books is like a body without a soul.",'Auther':"― Marcus Tullius Cicero"},
    {'Quote':"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",'Auther':"― Bernard M. Baruch"},
]
function getqoute(){
    var n=Math.floor(Math.random()*qoute.length)
    
    document.getElementById('quote').innerHTML=qoute[n].Quote
    document.getElementById('outher').innerHTML=qoute[n].Auther

}