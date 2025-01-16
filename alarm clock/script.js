// 배터리 표시
let nowBattery = 101; // 초기 배터리
let isDead = false; // 방전 추적

function updateBattery() {
    if (nowBattery > 0) {
        nowBattery -= 1; // 배터리 1% 감소
    } else if (!isDead){
        console.log('배터리가 모두 소진되었습니다.');
        isDead = true; // 방전 
        clearInterval(batteryInterval); // 배터리가 0%가 되면 인터벌 중지
        deadBattery();
    }
    const batteryContent = `배터리: ${nowBattery}%`;
    document.getElementById('battery').textContent = batteryContent;
}
let batteryInterval = setInterval(updateBattery, 1000);
batteryInterval; // 배터리 업데이트
updateBattery(); // 초기 화면 배터리 표시


// 배터리 방전
function deadBattery () {
    clearInterval(timeInterval); // 방전시 배터리 멈춤
    document.getElementById('time').id = 'dead-time';

}

// 시간 표시
function updateTime() {
    // 시간 가져오기
    let now = new Date();
    const nowYear = String(now.getFullYear());
    const nowMonth = String(now.getMonth() + 1).padStart(2, '0');
    const nowDay = String(now.getDate());
    const nowHour = String(now.getHours()).padStart(2, '0');
    const nowMinute = String(now.getMinutes()).padStart(2, '0');
    const nowSecond = String(now.getSeconds()).padStart(2, '0');
    
    // 날짜와 시간 합쳐서 나타내기
    let timeContent = `${nowYear}-${nowMonth}-${nowDay}
                        ${nowHour}:${nowMinute}:${nowSecond}`;
    // html에 표시하기
    document.getElementById('time').textContent = timeContent;
}
let timeInterval = setInterval(updateTime, 1000); // 시간 업데이트
timeInterval;
updateTime(); // 초기 시간 표시

let alarms = []; // 알람을 저장할 배열

// 알람을 추가하는 함수
function addAlarm() {
    // 작성된 알람 시분초 html에서 가져오기
    const hour = document.getElementById('hour').value
    const minute = document.getElementById('minute').value
    const second = document.getElementById('second').value
    const name = document.getElementById('name').value

    // 모두 입력하지 않았을 경우 경고
    if (!hour || !minute || !second || !name) {
    alert('모두 입력해주세요.')
    return;
    };

    // 새로운 알람 객체
    const newAlarm = {
    hour: hour,
    minute: minute,
    second: second,
    name: name
    };

    // 새로운 알람을 알람 목록에 추가
    alarms.push(newAlarm);

    // 입력칸 초기화
    document.getElementById('hour').value = ''
    document.getElementById('minute').value = ''
    document.getElementById('second').value = ''
    document.getElementById('name').value = ''

    // 화면에 목록 업데이트
    updateAlarmList();
}

// 추가된 알람을 표시하는 함수
function updateAlarmList() {
    if (alarms.length > 3) {
        alarms.shift();
    }
    const alarmListDiv = document.getElementById('alarm-list')
    alarmListDiv.innerHTML = '';

    alarms.forEach(function(alarm) {
        const alarmList = document.createElement('div');
        alarmList.classList.add('alarm-item');

        alarmList.innerHTML = `
            <div>${alarm.hour}:${alarm.minute}:${alarm.second}</div>
            <div>${alarm.name}</div>`;
        
        alarmListDiv.appendChild(alarmList);
    })
}

// 알람을 울리는 함수
// function ringAlarm {
//     if (){

//     }
// }