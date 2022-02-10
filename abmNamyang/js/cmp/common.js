function _goPage(p, funcName){ eval(funcName+'('+p+')'); }

//정수체크
function isNumber(str){
	var tempstr ="0123456789";
	if(str == "") return false;
	
    for (var i=0; i<str.length;i++){
    	if(i == 0 && str.substring(i, i+1) == 0) return false; 
		if (tempstr.indexOf(str.substring(i, i+1)) == -1){
			return false;
			break;
		}
	  }
	return true;
	//return /^\d+$/.test(str)
}

function enterCheck(fn){
	if(event.keyCode == 13){
		eval(fn);
	}
}

function checkboxAll(obj, name){
	if($(obj).is(":checked")){
		$("input[name="+name+"]").prop("checked", true);
	}else{
		$("input[name="+name+"]").prop("checked", false);
	}
}

function alertRequired(title){
	var str = title;
	var strTemp = str.substr(str.length-1);
	var ck = false;
	var jo = "";
	
	if(isNumber(strTemp)){
		var tNum = Number(strTemp);
		if(0==tNum || 1==tNum || 3==tNum || 6==tNum || 7==tNum || 8==tNum){
			ck = true;
		}
	}else{
		ck = ((strTemp.charCodeAt(0)-16)%28!=0);
	}
	
	if(ck) jo = "을";
	else jo = "를";
	
	/* title = "<font color='#342FC7'>" +title + "</font>"  + jo + " 필수입력 입니다.";
	$.alert(title, '알림'); */
	alert("" + title + ""  + jo + " 입력하세요.");
}


/**
 * 문자열 14자리 변경
 * @param str
 * @param types 1 : 2001.10.20 11:22
 * @return
 */
function stringToDate(str, types){
	
	if(null == str || str.length < 8) return "";
	
	var returnVal = "";
	
	var yyyy = "";
	var mm = "";
	var dd = "";
      
	var hh = "";
	var mi = "";
	var ss = "";

	if(str.length == 8){
		yyyy = str.substring(0, 4);
    	mm = str.substring(4, 6);
    	dd = str.substring(6, 8);
	}else if(str.length == 10){
		yyyy = str.substring(0, 4);
    	mm = str.substring(5, 7);
    	dd = str.substring(8, 10);
	}else{
		yyyy = str.substring(0, 4);
    	mm = str.substring(5, 7);
    	dd = str.substring(8, 10);
        
    	hh = str.substring(11, 13);
    	mi = str.substring(14, 16);
    	ss = str.substring(17, 19);
	}
	
	switch (types) {
		case 1: 
			returnVal = yyyy+"."+mm+"."+dd;
			break;
		case 2: 
			returnVal = yyyy+"."+mm+"."+dd+" "+hh+":"+mi;
			break;
		case 3: 
			returnVal = yyyy+"."+mm+"."+dd+" "+hh+":"+mi+":"+ss;
			break;
		case 4: 
			returnVal = mm+"."+dd+" "+hh+":"+mi;
			break;
		case 5: 
			returnVal = mm+"-"+dd;
			break;
		case 11: 
			returnVal = yyyy+"-"+mm+"-"+dd;
			break;
		case 12: 
			returnVal = mm+"/"+dd;
			break;
		case 13: 
			returnVal = yyyy+"-"+mm+"-"+dd+" "+hh+":"+mi+":"+ss;
			break;
		case 21: 
			returnVal = yyyy+"년 "+mm+"월 "+dd+"일";
			break;
		case 22: 
			returnVal = yyyy+"년 "+mm+"월 "+dd+"일 "+hh+"시 "+mi+"분";
			break;
		case 23: 
			returnVal = yyyy+"년 "+mm+"월 "+dd+"일 "+hh+"시 "+mi+"분 "+ss+"초";
			break;
		case 31: 
			returnVal = yyyy+". "+mm+". "+dd;
			break;
		case 41: 
			returnVal = yyyy+mm+dd;
			break;
		case 51: 
			returnVal = yyyy+"."+mm;
			break;
		case 52: 
			returnVal = yyyy+"-"+mm;
			break;
		case 61: 
			returnVal = hh+":"+mi;
			break;
		default:
			break;
	}
	    	
	return returnVal;
}

function emailCheck(txt){
	var filter = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
	return filter.test(txt);
}

function agent(){
	var agt = navigator.userAgent.toLowerCase();
	if (agt.indexOf("chrome") != -1) return 'Chrome'; 
	if (agt.indexOf("opera") != -1) return 'Opera'; 
	if (agt.indexOf("staroffice") != -1) return 'Star Office'; 
	if (agt.indexOf("webtv") != -1) return 'WebTV'; 
	if (agt.indexOf("beonex") != -1) return 'Beonex'; 
	if (agt.indexOf("chimera") != -1) return 'Chimera'; 
	if (agt.indexOf("netpositive") != -1) return 'NetPositive'; 
	if (agt.indexOf("phoenix") != -1) return 'Phoenix'; 
	if (agt.indexOf("firefox") != -1) return 'Firefox'; 
	if (agt.indexOf("safari") != -1) return 'Safari'; 
	if (agt.indexOf("skipstone") != -1) return 'SkipStone'; 
	if (agt.indexOf("msie") != -1) return 'Internet Explorer'; 
	if (agt.indexOf("netscape") != -1) return 'Netscape'; 
	if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla'; 
}

/**
 * 쿠키설정
 */
function setCookie(name, value, expiredays) {
	var today = new Date();
	today.setDate(today.getDate() + expiredays);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + today.toGMTString() + ";"
}

/**
 * 쿠키조회
 */
function getCookie(key) {
	var cook = document.cookie + ";";
	var idx = cook.indexOf(key, 0);
	var val = "";
	
	if (idx != -1) {
		cook = cook.substring(idx, cook.length);
		begin = cook.indexOf("=", 0) + 1;
		end = cook.indexOf(";", begin);
		val = unescape( cook.substring(begin, end) );
	}
	
	return val;
}

function isBlank(_str) {
	var b = true;
	
	if (_str != null && _str != undefined && _str.trim() != "") {
		b = false;
	}
	
	return b;
}

function format() {
	var args = Array.prototype.slice.call(arguments, 1);
	return arguments[0].replace(/\{(\d+)\}/g, function(match, index) {
		return args[index];
	});
}

function telValidator(args) {
    const msg = '유효하지 않는 전화번호입니다.';
    // IE 브라우저에서는 당연히 var msg로 변경
    
    if (/^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/.test(args)) {
        return true;
    }
    // alert(msg);
    return false;
}

function getByteLength(str) {
	var strByte = 0;

	if (str) {
		for(var i=0; i<str.length; i++) {
			if(escape(str.charAt(i)).length >= 4){
				strByte += 2;
			} else if(escape(str.charAt(i)) == "%A7"){
				strByte += 2;
			} else {
				if(escape(str.charAt(i)) != "%0D"){
					strByte++;
				}
			}
		}
	}

	return strByte;
}

function parseBoolean(str) {
	var result = false;

	if (typeof(str) != "undefined") {
		str = str.toLowerCase().trim();
		result = str === "true";
	}

	return result;
}

function addComma(str) {
	if(!str){
		str = "0";
	}
	if(typeof str != "string"){
		str = String(str);
	}
	return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function deleteComma(str) {
	if(!str){
		str = "";
	}
	if(typeof str != "string"){
		str = String(str);
	}
	return Number(str.replace(/,/gi,""));
}


// 숫자만 추출
function getOnlyNumber(str) {
	return str.replace(/[^0-9]/g,"");
}

// 유효하지 않은 전화번호인가?
function isInvalidPhoneNumber(pn) {
	pn = getOnlyNumber(pn);
	return (pn.length < 10 || pn.length > 11 || pn.substr(0, 2) != "01");
}

// 유효하지 않은 이메일인가?
function isInvalidEmail(eml) {
	var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	return ! regExp.test(eml);
}

/* 바이트 관련 객체 선언 */
var byteObj = {

	// 바이트수 가져오기
	getByteSize : function(s) {

		var size = 0;

		if (s == null || s.length == 0) {
			return size;
		}

		for (var i = 0; i < s.length; i++) {
			size += this.charByteSize(s.charAt(i));
		}

		return size;
	},

	// 바이트수 만큼 자르기
	cutByteStr : function(s, len) {

		var size = 0;

		if (s == null || s.length == 0) {
			return size;
		}

		var rIndex = s.length;

		for (var i = 0; i < s.length; i++) {
			size += this.charByteSize(s.charAt(i));

			if (size == len) {
				rIndex = i + 1;
				break;
			} else if (size > len) {
				rIndex = i;
				break;
			}
		}

		return s.substring(0, rIndex);
	},

	charByteSize : function(ch) {

		var size = 0;

		if (ch == null || ch.length == 0) {
			return size;
		}

		var charCode = ch.charCodeAt(0);

		if (charCode <= 0x00007F) {
			size = 1;
		} else if (charCode <= 0x0007FF) {
			size = 2;
		} else if (charCode <= 0x00FFFF) {
			size = 3;
		} else {
			size = 4;
		}

		return size;
	}
};

function delay(callback, ms) {
	var timer = 0;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timer);
		timer = setTimeout(function () {
			callback.apply(context, args);
		}, ms || 0);
	};
}

// input text 숫자만 입력 가능하게
function inputSetOnlyNumber(obj){
	var number = obj.value.replace(/[^0-9]/g,"");
	obj.value = number;
}

// input text 전화번호 하이픈 추가
function inputSetTelNumber(obj){
	var number = obj.value.replace(/[^0-9]/g,"");
	var phone = "";
	if (number.length < 4) {
		return number;
	} else if (number.length <= 7) {
		phone += number.substr(0, 3);
		phone += "-";
		phone += number.substr(3);
	} else if( number.length == 8 ){
		phone += number.substr(0, 4);
		phone += "-";
		phone += number.substr(4);
	}else if( number.length == 9 ){
		phone += number.substr(0, 2);
		phone += "-";
		phone += number.substr(2, 3);
		phone += "-";
		phone += number.substr(5);
	}else if( number.length == 10){
		phone += number.substr(0, 3);
		phone += "-";
		phone += number.substr(3, 3);
		phone += "-";
		phone += number.substr(6);
	}else if( number.length >= 11){
		phone += number.substr(0, 3);
		phone += "-";
		phone += number.substr(3, 4);
		phone += "-";
		phone += number.substr(7);
	}
	obj.value = phone;
}

// 발신번호 검증
function validationTelNumber( number ) {
	// 숫자만 남기기
	number = number.replace(/[^0-9]/g, "");
	var length = number.length

	// 전국 대표 번호
	var nationwideNumber = [ "1566", "1600", "1670", "1577", "1588", "1899", "1522", "1544", "1644", "1661", "1599", "1688", "1666", "1855", "1811", "1877" ];
	// 지역 번호
	var regionNumber = ["02", "051", "053", "032", "062", "042", "052", "044", "031", "033", "043", "041", "063", "061", "054", "055", "064"];

	if (length < 8 || length > 12){
		return false;
	}else if( length == 8 ){ 	// 전국 대표번호 1566 - 6666
		if( $.inArray( number.substr( 0, 4 ), nationwideNumber ) == -1){
			return false;
		}
	}else if( length == 9 ){	// 지역번호 02 333 4444
		if( number.substr(0,2) != "02" || $.inArray( number.substr( 2,1), [ "0", "1" ] ) != -1  ){
			return false;
		}
	}else if( length == 10 ){	// 지역번호 051 333 4444 , 02 3333 4444
		if(  ( number.substr(0,2) != "02" && $.inArray( number.substr(0,3), regionNumber) == -1 ) || $.inArray( number.substr( 3,1), [ "0", "1" ] ) != -1 ){
			return false;
		}
	}else if( length == 11 || length == 12 ){ // 휴대폰 010 2222 4444

	}

	return true;
}

//휴대폰번호 하이픈 삽입
function inputPhoneNumber(obj) {
	var number = obj.value.replace(/[^0-9]/g, "");
	var phone = "";

	if (number.length < 4) {
		return number;

	} else if (number.length < 7) {
		phone += number.substr(0, 3);
		phone += "-";
		phone += number.substr(3);

	} else if (number.length < 11) {
		phone += number.substr(0, 3);
		phone += "-";
		phone += number.substr(3, 3);
		phone += "-";
		phone += number.substr(6);

	} else {
		phone += number.substr(0, 3);
		phone += "-";
		phone += number.substr(3, 4);
		phone += "-";
		phone += number.substr(7);
	}

	obj.value = phone;
}
function addTelHyphen( str ) {
	var number = str.replace(/[^0-9]/g, "");
	var phone = "";

	if (number.length < 4) {
		return number;
	} else if (number.length <= 7) {
		phone += number.substr(0, 3);
		phone += "-";
		phone += number.substr(3);
	} else if( number.length == 8 ){
		phone += number.substr(0, 4);
		phone += "-";
		phone += number.substr(4);
	}else if( number.length == 9 ){
		phone += number.substr(0, 2);
		phone += "-";
		phone += number.substr(2, 3);
		phone += "-";
		phone += number.substr(5);
	}else if( number.length == 10){
		phone += number.substr(0, 3);
		phone += "-";
		phone += number.substr(3, 3);
		phone += "-";
		phone += number.substr(6);
	}else if( number.length >= 11){
		phone += number.substr(0, 3);
		phone += "-";
		phone += number.substr(3, 4);
		phone += "-";
		phone += number.substr(7);
	}

	return phone;
}
