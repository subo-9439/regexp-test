const str = `
.010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
동해물과_백두산이 마르고 닳도록
http://localhost/8080
`
// const regexp = new RegExp('the','') 
//const regexp = new RegExp('the','g') //["the","the"] 똑같은 단어 찾기
//const regexp = new RegExp('the','gi') //["the","the","The"] 대문자 소문자 구별않고 찾기

// const regexp = /the/gi//const regexp = new RegExp('the','gi') // 같은 출력을 나타냄
// const regexp = /hello/gi  // true of false
// const regexp = /fox/gi
// console.replace(regexp,'AAA')
// console.log(regexp.test(str))

// const regexp = /the/g
// console.log(str.match(regexp)) 
// console.log(str.match(/\.$/gim)) //명령어로 사용되는 특수문자는 \추가해주어야한다 $끝나는 문자열


// console.log(
//   str.match(/http/g), //http
//   str.match(/h..p/g), //http
//   str.match(/./g),  //모든문자
//   str.match(/./g), //모든문자
//   str.match(/fox|dog/), //둘중에 먼저 찾아지는 단어만 반환된다. <g붙이면 둘다>
//   str.match(/https?/g) // s가 있을수도 있고 없을 수도 있는 단어 찾기
// )

// console.log(
//   str.match(/d{2}/), //dd가 잇는가
//   str.match(/\b\w{2,3}\b/g) //\w =>숫자를 포함한 영어 알파벳 , \b =>경계 특수문자,공백을 기준으로 구별해준다.
// )

// console.log(
//   str.match(/[fox]/g),
//   str.match(/[0-9]{1,}/g),
//   str.match(/[가-힣]{1,}/g),

//   str.match(/\w/g),
//   str.match(/\b/g),
//   str.match(/\bf\w{1,}\b/g), //f로 시작하는 모든 문자 찾기
//   str.match(/\d/g), //숫자만 검색
//   str.match(/\d{1,}/g),  //숫자 덩어리들
//   str.match(/\s/g)//공백
// )

// const h = `    the hello world   !`

// console.log(
//   h.replace(/\s/g,'')
// )

console.log(
  str.match(/.{1,}(?=@)/g), //@를 기준으로 앞의 문자 출력  thesecon
  str.match(/(?<=@).{1,}/g) //@를 기준으로 뒤의 문자 출력  gmail.com 
)