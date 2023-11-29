let qSlno = document.getElementById("a");
let score = document.getElementById("b");
let btn = document.querySelector("#start");
const opn = document.querySelectorAll("h4");
const parent = document.querySelector("#parent");

const clr = document.querySelector("#clr");

let ques = document.querySelector("#ques");
console.log(parent[0]);

let num = 0;
let answers = ["Nirmala Sita Raman", "RBI", "SEBI", "IRDAI", "Delhi", "Gross Domestic Product", "S.Jaysankar", "Elon Musk", "Active Pharamseutical Ingredients", "Internet Protocal"]

let quesSlno = 0;
function checkAns(e) {
  let content = e.target.textContent;
  let checkans = false;
  function check(){
    for(let a=0;a<10;a++){
      if(content == answers[a]){
        return checkans=true
      }
    }
  }
  check();
  if (checkans) {
    num += 1;
    score.textContent = `Score: ${num}`;
    console.log("answer is corerct");
    alert('answer is correct')
    
  }
  else {
    alert('answer is wrong')
    console.log("answer is wrong")
  }
 
}


let question = ["Who is the finance minister of India ?",
  "Who is the regulator of all Indian Banks ?",
  "who is the regulator of share market in India ?",
  "Who  Regulates the  Insurance business market in India ?",
  "Where is the PMO of Indian Government ?",
  "GDP Stands for what ?",
  "Who is the Foreign minister of India ?",
  "Who is the Richhest Man In The World according to Forbes Magazine ?",
  "What is the full form of API in context of Pharma ?",
  "What is IP Stands for In the context of Internet?"
];

const ansOption =[ ["Narendra Modi", "Aswini Baisnava", "Aravinda    Kejeriwal", "Nirmala Sita Raman"],
["SEBI", "FBI", "CBI", "RBI"], ["CID", "World Bank", "SEBI", "SBI"], ["ICMR", "NHRC", "LIC", "IRDAI"], ["New Delhi", "Gujrat", "India Gate", "Delhi"], ["Garments Of Public", "Goods Delivey Pipe", "God Doing it For Public", "Gross Domestic Product"], ["Nitin Gadkari", "S.Jaysankar", "Piyush Goyeal", "Ajit Doval"], ["Jeff Bejos", "Bill Gates", "Elon Musk", "George Bush"], ["Active Pharamseutical Ingredients", "Application Protecttion Internet", "Application Intterface Programming", "Active Property Inform"], ["Internet Probelms", "Invisible Probelm", "Internet Programm", "Internet Protocal"]
]
function updateQues() {
  for (let i = 0; i < 10; i++) {
    if (quesSlno == i) {
      ques.textContent = question[i];
      qSlno.textContent = (`Question ${quesSlno + 1}/10`);
      updateOpn()
    }
  }

  quesSlno += 1;
  if (quesSlno == 11) {
    alert("You have No Question left");
    quesSlno = 0;
  }
}
function updateOpn(){
  
  for(let x=0;x<4;x++){
    for (let i = 0; i <= quesSlno; i++) {
      for (let j = 0; j <= x; j++) {
        // console.log(ansOption[i][x])
        opn[x].textContent = ansOption[i][x]
        
      }
    }
  }
}



parent.addEventListener("click", checkAns);
btn.addEventListener("click", updateQues,);
function start(){
  btn.removeEventListener('click',updateQues);
  parent.removeEventListener("click", checkAns);
  console.log("event is clear now")
}

start.addEventListener('click',start);


