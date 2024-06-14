// 좋은 글귀
var words = []

words[0] = "안녕하세요?";
words[1] = "고맙습니다.";
words[2] = "날씨가 참 좋네요";
words[3] = "좋은 하루 되세요";

var rand = Math.floor(Math.random()*words.length);

document.write(words[rand]);