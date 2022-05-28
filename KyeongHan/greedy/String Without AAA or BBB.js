// leetcode : 984. String Without AAA or BBB
/* 
    문제 설명 :
    1. 정수 a와 b를 input받는다.
    2. 길이가 a+b인 string을 return한다.
    3. string은 'a'가 a개, 'b'가 b개인 string이다.
    4. 단 'aaa', 'bbb' 처럼 'a' 또는 'b'가 3개 이상 continious 하면 안된다.
    
    idea :
    ( a가 더 긴 string이라고 가정)
    a를 2개씩 끊어서 배열에 저장.
    b를 div 갯수 만큼의 길이 배열에 저장 (b의 개수가 over 될 시, 0번 인덱스로 돌아와 하나씩 추가)
    a와 b 번갈아 가며 Str 출력
    
    좋지 않은 방법인듯...
    
*/

var strWithout3a3b = function(a, b) {
    
  // more longer character, 길이가 더 긴 알파벳
  let ml_c = 'a';
  // less longer character
  let ll_c = 'b';
  // more longer character의 길이
  let ml_len = a;
  // less longer character의 길이
  let ll_len = b;
  
  const ml_arr = [];
  const ll_arr = [];
  const rest_arr = [];
  
  let str = '';
  
  if(a<b){
      ml_c = 'b';
      ll_c = 'a';
      ml_len = b;
      ll_len = a;
  }
  
  // division의 갯수
  let div_count = parseInt(ml_len/2);
  
  // ml_c를 2개씩 끊어서 배열에 저장
  for(let i = 0; i< div_count; i++){
      ml_arr[i] = ml_c + ml_c;
  }
  // 1개 남은 ml_c 배열에 추가
  if(ml_len % 2 === 1 ){
      ml_arr[ml_arr.length] = ml_c;
  }
  
  // ll_c를 div_count 길이 배열에 추가
  for(let i = 0; i< ll_len; i++){
      if(i >= div_count && div_count != 0){
          // 이미 div 가 가득 찼을 경우
          if(ll_arr[i % div_count].length > 1){
              rest_arr.push(ll_c);
          }else{
              ll_arr[i % div_count] = ll_arr[i % div_count] + ll_c;
          }
      }else{
          ll_arr[i] = ll_c;     
      }
  }
  
  // 번갈아 가며 STR에 저장
  for(let i = 0; i< ml_arr.length; i++){
      str = str + ml_arr[i];
      if(i < ll_arr.length){
          str = str + ll_arr[i];
      }
  }
  
  for(const rest of rest_arr){
      str = str + rest;
  }
  return str;  
};