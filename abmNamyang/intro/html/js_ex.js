/* if else문 */
//두가지로 정의가 가능할 때 사용
function getResult(score) {
	return score > 5 ? 'good' : 'bad';
}



/* nullish-coalescing -> ?? */
// 메시지가 text인 경우 콘솔에 text 출력, 아닌경우 'Nothing to display' 출력
// undefined인 경우와 null인 경우에도 사용할 수 있음
function printMessage(text) {
	const message = text ?? 'Nothing to display';
	console.log(message);
}

printMessage('Hello'); //'hello' 출력
printMessage(undefined); // 'Nothing to display' 출력
printMessage(null);  // 'Nothing to display' 출력
printMessage(0);  // 'Nothing to display' 출력
printMessage('');  // 'Nothing to display' 출력
// ??인 경우 null, undefined 인 경우에 오른쪽 실행, || 인 경우 falsy인 경우에만 오른쪽 실행



/* nullish-coalescing -2 */
// getInitialState 실행 후 값이 undefined, null 인 경우 fetchFromServer 실행 후 result에 값을 넣어줌
const result = getInitialState() ?? fetchFromServer();
console.log(result);

function getInitialState() {
  return null;
}
function fetchFromServer() {
  return 'Hiya from 💻';
}



/* object-destructuring */
function displayPerson(person) {
  const { name, age } = person; // person을 name, age에 각각 넣어 줌 => person.name, person.age => person. 적는 것을 줄여줌
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}