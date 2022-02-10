var i = 0;

// 크롬 외 브라우저 접속 시 안내 모달 스크립트
var ua = window.navigator.userAgent;
function browserVerification() {
	// alert("it's not chrome")
	//console.log('현재 접속한 환경: ' + ua)
}
// 모달 오픈 후 닫기 버튼 클릭시 작동하는 스크립트
// $(".modalCloseBtn").click(function(){
//     $(".modalPopup").removeClass("on");
//     $(".modalPopup > div").removeClass("on");
//     $('.modalBg').removeClass("on");
//     $('body').css('overflow','auto');
//     $('body').attr('scroll','yes');
// });
if (ua.indexOf("MSIE") > 0 || ua.indexOf("Trident") > 0) {
	// IE
	browserVerification();
} else if (navigator.userAgent.toLowerCase().indexOf("edge") > -1) {
	// IE Edge
	browserVerification();
} else if (ua.indexOf("Opera") > 0 || ua.indexOf("OPR") > 0) {
	// Opera
	browserVerification();
} else if (ua.indexOf("Firefox") > 0) {
	// Firefox
	browserVerification();
} else if (ua.indexOf("Safari") > 0) {
	if (ua.indexOf("Chrome") > 0) {
		// Chrome
	} else if (ua.indexOf("Safari") > 0) {
		// Safari
		browserVerification();
	}
}
// 크롬 외 브라우저 접속 시 안내 모달 스크립트 End

// swpark 모달
var popup = {};

popup.iframeOpen = function (
	url,
	iframeWidth,
	iframeHeight,
	scrollFlag,
	reloadFlag
) {
	scrollFlag = scrollFlag !== "" ? scrollFlag : "no";
	reloadFlag = reloadFlag != null ? "yes" : "no";

	var ww = $(window).width();

	iframeWidth = Math.floor(ww) > 800 ? iframeWidth : Math.floor(ww) - 100;

	var markup =
		'<div class="iframe-popup white-popup-admin" >' +
		'<iframe class="mfp-iframe" frameborder="0" scrolling="' +
		scrollFlag +
		'" allowtransparency="true" allowfullscreen style="width:' +
		iframeWidth +
		"px;height:" +
		iframeHeight +
		'px;"></iframe>' +
		//'<div class="mfp-close"></div>'+
		"</div>";

	if (
		typeof url.split("?")[0] != "undefined" &&
		(url.split("?")[0] == "/advertiser/media_script_all" ||
			url.split("?")[0] == "/advertiser/media_script_advance_all")
	) {
		markup =
			'<div class="iframe-popup white-popup-admin" ><div class="loadingArea"><img src="/content/img/common/loading.gif" alt="로딩중" /></div>' +
			'<iframe class="mfp-iframe" frameborder="0" scrolling="' +
			scrollFlag +
			'" allowtransparency="true" allowfullscreen style="width:' +
			iframeWidth +
			"px;height:" +
			iframeHeight +
			'px;"></iframe>' +
			//'<div class="mfp-close"></div>'+
			"</div>";
	}

	$.magnificPopup.open({
		items: { src: url },
		type: "iframe",
		closeOnBgClick: true,
		iframe: {
			markup: markup,
		},
		callbacks: {
			close: function () {
				if (reloadFlag === "yes") {
					location.reload();
				}
			},
		},
	});

	return $.magnificPopup.instance;
};
// 모달

var magnificPopup;
var common = {};

// 메뉴
common.menu = function () {
	// 유저 메뉴 작동
	$(".userMenu > button").on("click", function () {
		$(".userMenu ul").stop().slideToggle(300);
	});
	// 유저 메뉴 작동 End

	// 햄버거 메뉴 작동
	$("#hamburger").on("click", function () {
		$("#nav").toggleClass("minimization");
		$(".navBG").toggleClass("minimization");
		$("#sectionWrap, #footer").toggleClass("Maximize");
		$(".depth > li > ul").slideUp(100);
		$(".depth li").removeClass("on");
	});
	// 햄버거 메뉴 작동 End

	// 2depth 메뉴 클릭 이벤트
	$(".depth > li > a").on("click", function () {
		let mini = $("#nav").hasClass("minimization");
		$(this).parent().toggleClass("on");
		if (mini === true) {
			$(".depth > li > ul").slideUp(100);
			$(".depth li").removeClass("on");
		}
		$(this).next().stop().slideToggle(200);
	});
	// 2depth 메뉴 클릭 이벤트 End

	// 3depth 메뉴 클릭 이벤트
	$(".threeDepthMenu > a").on("click", function () {
		$(this).next().stop().slideToggle(200);
		$(this).parent().toggleClass("on");
	});
	// 3depth 메뉴 클릭 이벤트 End
};
// 메뉴

//KPI 영역
common.kpi = function () {
	// KPI 영역 script
	let kpi_target = $(".kpiShow");
	kpi_target.find(".kpiSet").css("display", "none");
	$(".kpiOpenButton").on("click", function () {
		kpi_target.toggleClass("on");
		kpi_target.removeClass("edit");
	});
	$("#kpiEdit").on("click", function () {
		kpi_target.addClass("edit");
		kpi_target.find(".kpiSet").css("display", "");
		kpi_target.find(".kpiView").css("display", "none");
	});
	$("#kpiCancel").on("click", function () {
		kpi_target.removeClass("edit");
		kpi_target.find(".kpiSet").css("display", "none");
		kpi_target.find(".kpiView").css("display", "");
	});
	scrollFunction = function () {
		var height = $(document).scrollTop();
		console.log(height);
	};

	$(".kpiBtn").on("click", function () {
		var kpiList = $(".kpiBox .kpiList").eq(0).clone();
		var kpiListCnt = kpi_target.find(".kpiList").length;
		if (kpiListCnt > 2) {
			alert("kpi설정은 최대 3개까지 가능합니다.");
		} else {
			kpiList.find("th:eq(0)").text("KPI " + (kpiListCnt + 1));
			kpiList.find(".kpiBtn").addClass("delete");
			kpiList.find(".kpiBtn").addClass("kpiDelBtn");
			kpiList.find(".kpiBtn").removeClass("add");
			kpi_target.find(".kpiEtc").before(kpiList);
		}
	});
	$(document).on("click", ".kpiDelBtn", function () {
		$(this).parent().parent().remove();
	});

	// kpi 닫기 -JB추가
	$(document).mouseup(function (e) {
		var kpiBoxWrap = $(".kpiManagement");
		if (!kpiBoxWrap.is(e.target) && kpiBoxWrap.has(e.target).length === 0) {
			$(".kpiShow").removeClass("on");
			kpi_target.find(".kpiSet").css("display", "none");
			kpi_target.find(".kpiView").css("display", "");
		}
	});
};
// KPI 영역 script End

// sectionNav 공통 script
function sectionNavLocation() {
	let locationTop = $(window).scrollTop();
	if (locationTop > 50) {
		$(".SectionNav").css("top", locationTop + 182 + "px");
	}
	if (locationTop > 70) {
		$(".kpiManagement .kpiShow").css("top", "0");
	} else {
		$(".kpiManagement .kpiShow").css("top", 70 - locationTop);
	}
}
$(window).scroll(function () {
	sectionNavLocation();
});
$(function () {
	sectionNavLocation();
});
// sectionNav 공통 script End

common.daterangepicker = function () {
	// 날짜 선택 script
	$("#dateInput").daterangepicker(
		{
			autoApply: true,
			locale: {
				format: "YYYY-MM-DD",
				daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
				monthNames: [
					"01",
					"02",
					"03",
					"04",
					"05",
					"06",
					"07",
					"08",
					"09",
					"10",
					"11",
					"12",
				],
				customRangeLabel: "사용자 선택",
			},
			ranges: {
				오늘: [moment(), moment()],
				어제: [moment().subtract(1, "days"), moment().subtract(1, "days")],
				이번달: [moment().startOf("month"), moment().endOf("month")],
				전월: [
					moment().subtract(1, "month").startOf("month"),
					moment().subtract(1, "month").endOf("month"),
				],
				전전월: [
					moment().subtract(2, "month").startOf("month"),
					moment().subtract(2, "month").endOf("month"),
				],
				"최근 7일": [
					moment().subtract(7, "days"),
					moment().subtract(1, "days"),
				],
				"최근 30일": [
					moment().subtract(30, "days"),
					moment().subtract(1, "days"),
				],
				"최근 90일": [
					moment().subtract(90, "days"),
					moment().subtract(1, "days"),
				],
				"최근 180일": [
					moment().subtract(180, "days"),
					moment().subtract(1, "days"),
				],
			},
		},
		function (start, end, label) {
			if (
				window.location.pathname == "/product/category" &&
				$("#is_supervisor").length > 0 &&
				$("#is_supervisor").val() == "" &&
				start.format("YYYYMMDD") < "20200801"
			) {
				// 최고관리자가 아닐땐 20200801 이전 데이터는 조회못하게
				var date = new Date();
				var sDate = "20200801";
				var eDate =
					date.getFullYear() +
					("0" + (date.getMonth() + 1)).slice(-2) +
					("0" + date.getDate()).slice(-2);

				$("#dateInput").data("daterangepicker").setStartDate(sDate);
				$("#dateInput").data("daterangepicker").setEndDate(eDate);
				$("input[name=sDate]").val(sDate);
				$("input[name=eDate]").val(eDate);
				alert("2020-08-01 이후 통계부터 조회 가능합니다.");
				return false;
			}

			// console.log("Choice Date: " + start.format('YYYYMMDD') + ' ~ ' + end.format('YYYYMMDD'));
			$("input[name=sDate]").val(start.format("YYYYMMDD"));
			$("input[name=eDate]").val(end.format("YYYYMMDD"));
			if (window.location.href.indexOf("customized_setting") < 0) {
				$("#loadingBg").removeClass("complete");
			}
			$("#searchForm").submit();
		}
	);
	$("#dateInput2").daterangepicker(
		{
			autoApply: true,
			locale: {
				format: "YYYY-MM-DD",
				daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
				monthNames: [
					"01",
					"02",
					"03",
					"04",
					"05",
					"06",
					"07",
					"08",
					"09",
					"10",
					"11",
					"12",
				],
				customRangeLabel: "사용자 선택",
			},
			ranges: {
				오늘: [moment(), moment()],
				어제: [moment().subtract(1, "days"), moment().subtract(1, "days")],
				이번달: [moment().startOf("month"), moment().endOf("month")],
				전월: [
					moment().subtract(1, "month").startOf("month"),
					moment().subtract(1, "month").endOf("month"),
				],
				전전월: [
					moment().subtract(2, "month").startOf("month"),
					moment().subtract(2, "month").endOf("month"),
				],
				"최근 7일": [
					moment().subtract(7, "days"),
					moment().subtract(1, "days"),
				],
				"최근 30일": [
					moment().subtract(30, "days"),
					moment().subtract(1, "days"),
				],
				"최근 90일": [
					moment().subtract(90, "days"),
					moment().subtract(1, "days"),
				],
				"최근 180일": [
					moment().subtract(180, "days"),
					moment().subtract(1, "days"),
				],
			},
		},
		function (start, end, label) {
			if (
				window.location.pathname == "/product/category" &&
				$("#is_supervisor").length > 0 &&
				$("#is_supervisor").val() == "" &&
				start.format("YYYYMMDD") < "20200801"
			) {
				// 최고관리자가 아닐땐 20200801 이전 데이터는 조회못하게
				var date = new Date();
				var sDate = "20200801";
				var eDate =
					date.getFullYear() +
					("0" + (date.getMonth() + 1)).slice(-2) +
					("0" + date.getDate()).slice(-2);

				$("#dateInput").data("daterangepicker").setStartDate(sDate);
				$("#dateInput").data("daterangepicker").setEndDate(eDate);
				$("input[name=sDate]").val(sDate);
				$("input[name=eDate]").val(eDate);
				alert("2020-08-01 이후 통계부터 조회 가능합니다.");
				return false;
			}
			// console.log("Choice Date: " + start.format('YYYYMMDD') + ' ~ ' + end.format('YYYYMMDD'));
			$("input[name=sDate]").val(start.format("YYYYMMDD"));
			$("input[name=eDate]").val(end.format("YYYYMMDD"));
			$("#loadingBg").removeClass("complete");
			$("#searchForm").submit();
		}
	);
};

common.tableResize = function () {
	// 테이블 크기 산출 script
	var tableWidth = 0;
	$(".tableSection").each(function () {
		var $tableSection = $(this);
		$(this)
			.find("th")
			.each(function () {
				var e = $(this).outerWidth();
				var index = $(this).index();
				$tableSection.find("tbody tr").each(function () {
					$(this)
						.find("td")
						.eq(index)
						.css("width", e + "px");
				});
				$tableSection.find("tfoot tr").each(function () {
					$(this)
						.find("td")
						.eq(index)
						.css("width", e + "px");
				});
				tableWidth += e;
			});
		$(this).find("table").width(tableWidth);
		tableWidth = 0;
	});
	// 테이블 크기 산출 script End
};

common.modal = function () {
	$(document).on("click", ".modalOpen", function () {
		magnificPopup = popup.iframeOpen(
			$(this).data("url"),
			$(this).data("width"),
			$(this).data("hegiht"),
			$(this).data("scroll")
		);
	});

	$(".cancel").on("click", function () {
		parent.magnificPopup.close();
	});
};

// 전체 페이지 공통 script
$(function () {
	$(".popup").parent().css("background", "#f5f5f5");

	common.menu();
	common.kpi();
	common.daterangepicker();
	common.tableResize();
	common.modal();

	// 모달 오픈 script
	// 모달 사용법
	// 1. 클릭 대상에 클래스(modalOpen), modal속성(오픈할려고 하는 모달 id)를 추가
	// 2. modalOpen 클래스를 가진 타겟을 클릭하면 해당 타겟의 modal 속성값을 저장
	// 3. 변수로 modal 속성값을 id로 변환
	// 4. 해당 id 값을 가진 모달에 display block으로 모달 오픈
	// Close
	// 1. 윈도우 화면을 클릭하면 오픈되어 있는 모달 객체를 저장.
	// 2. 해당 id 값을 가진 객체가 모달 오픈시 저장해놨던 id 값을 가진 객체의 값이 같으면 display none으로 모달 종료
	saveModalName = null;
	// $('.modalOpen').on('click', function(){
	//     saveModalName = $(this).attr('modal');
	//     openTarget = $('#' + saveModalName);
	//     openTarget.css('display','block');
	//     $('body').css('overflow','hidden');
	//     $('body').attr('scroll','no');
	// });
	//
	//
	// $('.modalContent .cancel').on('click', function(){
	//     openTarget.css('display','none');
	//     $('body').css('overflow','auto');
	//     $('body').attr('scroll','yes');
	// });
	//
	// window.onclick = function(event) {
	//     var a = event.target;
	//     var b = a.id;
	//     if(b === saveModalName) {
	//         a.style.display = 'none';
	//         $('body').css('overflow','auto');
	//         $('body').attr('scroll','yes');
	//     }
	// }
	// 모달 오픈 script End

	// 권한관리 그룹 리스트 script
	$(document).on("click", ".groupManagement .groupList > li > a", function () {
		$(this).parent().find("ul").slideToggle(300);
	});
	// 권한관리 그룹 리스트 script End

	// 메뉴 권한 관리 리스트 script
	$(document).on("click", ".menuDropDownList li > a", function () {
		$(this).parent().find("ul").first().slideToggle(150);
	});
	// 메뉴 권한 관리 리스트 script End

	//메뉴 select box
	$("body").on("click", "#nav .nav-selectbox span", function () {
		$(this).parent().toggleClass("on");
	});

	// 메뉴 select box 닫기
	$(document).mouseup(function (e) {
		var kpiBoxWrap = $(".nav-selectbox");
		if (!kpiBoxWrap.is(e.target) && kpiBoxWrap.has(e.target).length === 0) {
			$(".nav-selectbox").removeClass("on");
		}
	});

	// kpi 그룹 관리, 테이블 내 관리 버튼
	$(".kpiAddTbl .btnbox button").click(function () {
		$(this).next().toggle();
	});

	//지정일 선택
	$(".kpiAddTbl .dateSet select").on("change", function () {
		var $index = $(".kpiAddTbl .dateSet select").index(this);

		console.log($index);

		var val = $(this).find("option:selected").val();
		if (val == "04") {
			$(".datepickSelect").eq($index).addClass("on");
		} else {
			$(".datepickSelect").eq($index).removeClass("on");
		}
	});

	$(".datepickSelect .inputBox span").click(function () {
		$(".dateLayer").fadeIn(200);
	});
	$(".dateLayer .btnBox .btn_cancel").click(function () {
		$(".dateLayer").fadeOut(300);
	});

	var fixedDate = $(".datepickSelect"),
		dateNum = fixedDate.find(".dateLayer strong em"),
		dateListNum = fixedDate.find(".dateLayer ul li a");

	dateListNum.click(function () {
		$(".dateLayer ul li a").removeClass("on");
		$(this).addClass("on");
		var numtxt = $(this).text();
		dateNum.text(numtxt);
		$(".dateLayer .btnBox .btn_confirm").click(function () {
			$(".dateLayer").fadeOut(300);
			$(".inputBox input[id='selectDay']").val(numtxt + "일");
			$(".inputBox input[name='standDttm']").val(numtxt);
		});
	});
});

// 개별 페이지 script
$(function () {
	// 날짜 선택 (오늘, 어제..) script
	$(".optionBox .date .datePeriod li").on("click", function () {
		$(".optionBox .date .datePeriod li").removeClass("on");
		$(this).toggleClass("on");
	});
	// 날짜 선택 (오늘, 어제..) script End

	$(".choiceSection .tabTitle > li").on("click", function () {
		$(this).closest(".tabTitle").find("li").removeClass("on");
		$(this).addClass("on");
		var target = $(this).attr("id");
		var targetClass = $("." + target);
		$(this).closest(".tabBox").find(".tabList li").removeClass("on");
		targetClass.addClass("on");
	});

	// 광고주 유저 체인지 모달 영역 script
	$(".modalContent.userChange tbody > tr").on("click", function () {
		$(".modalContent.userChange tbody > tr").removeClass("on");
		$("input[name=member_id]").val($(this).data("advertiser-id"));
		//$("input[name=member_id]").val($('.modalContent.userChange tbody > tr > td').eq(2).text().trim());
		$(this).addClass("on");
		$(".reEnterPassword").slideDown(300);
	});
	// 광고주 유저 체인지 모달 영역 script End

	// 권한관리 - 사용자 추가 모달 관련 script
	$("ul.selectList > li").on("click", function () {
		$(this).parent().children("li").removeClass("on");
		$(this).addClass("on");
	});
	// 권한관리 - 사용자 추가 모달 관련 script End

	// 권한관리 - 메뉴 권한 관리 script
	$(".menuDropDownList input[type=checkbox]").on("click", function () {
		let valueCheck = $(this).prop("checked");
		let target = $(".menuDropDownList input[type=checkbox]");
		target.attr("disabled", true);
		$(this).attr("disabled", false);
		if (valueCheck === true) {
			target.attr("disabled", true);
			$(this).attr("disabled", false);
		} else if (valueCheck === false) {
			target.attr("disabled", false);
		}
	});
	// 권한관리 - 메뉴 권한 관리 script End

	// 정보수정 - 앱 패키지 정보 사용 모달 관련 script
	$(document).on(
		"click",
		".useAppPackageInformation .appList input[name=useAppPackageInformation]",
		function () {
			var checkVal = $(this).is(":checked");
			var index = $(this).data("index");
			var title = $("td[data-title=" + index + "]").text();
			if (checkVal === true) {
				$(".useAppPackageInformation .selectedItems tbody").append(
					'<tr data-selected-items="' +
						index +
						'">' +
						'                                <td style="width: 448px;">' +
						title +
						"</td>" +
						'                                <td style="width: 50px;">' +
						'                                    <button type="button" class="delete" data-item-button="' +
						index +
						'"></button>' +
						"                                </td>" +
						"                            </tr>"
				);
			} else if (checkVal === false) {
				$(
					".useAppPackageInformation .selectedItems tbody tr[data-selected-items=" +
						index +
						"]"
				).remove();
			}
		}
	);
	$(document).on(
		"click",
		".useAppPackageInformation .selectedItems button.delete",
		function () {
			var buttonIndex = $(this).attr("data-item-button");
			var target = $("input[data-index=" + buttonIndex + "]");
			target.prop("checked", false);
			$(this).parent().parent().remove();
		}
	);
	// 정보수정 - 앱 패키지 정보 사용 모달 관련 script End

	// 페이징 ul 가운데 정렬 가로 크기 계산 script
	var pagingWidth = 0;
	$(".paging > ul > li").each(function () {
		var liWidth = $(this).outerWidth(true);
		pagingWidth += liWidth;
	});
	$(".paging > ul").width(pagingWidth);
	// 페이징 ul 가운데 정렬 가로 크기 계산 script End

	// 정보수정 - 앱패키지 정보사용 모달 관련 script
	$(document).on(
		"click",
		".useAppPackageInformation .appList input[name=useAppPackageInformationAppListCheckbox]",
		function () {
			var checkVal = $(this).is(":checked");
			var index = $(this).data("index");
			var title = $(this)
				.parent()
				.parent()
				.parent()
				.find("td[data-title=" + index + "]")
				.text();
			var checkboxCount = $(this).closest("tbody").find("input[type=checkbox]")
				.length;
			var nonCheckboxCount = $(this)
				.closest("tbody")
				.find("input[type=checkbox]:checked").length;
			if (nonCheckboxCount === checkboxCount) {
				$('input[name="useAppPackageInformationCheckbox"]').prop(
					"checked",
					true
				);
			} else if (nonCheckboxCount < checkboxCount) {
				$('input[name="useAppPackageInformationCheckbox"]').prop(
					"checked",
					false
				);
			}
			if (checkVal === true) {
				$(".useAppPackageInformation .selectedItems tbody").append(
					'<tr data-selected-items="' +
						index +
						'">' +
						'                                <td style="width: 448px;">' +
						title +
						"</td>" +
						'                                <td style="width: 50px;">' +
						'                                    <button type="button" class="delete" data-item-button="' +
						index +
						'"></button>' +
						"                                </td>" +
						"                            </tr>"
				);
			} else if (checkVal === false) {
				$(
					".useAppPackageInformation .selectedItems tbody tr[data-selected-items=" +
						index +
						"]"
				).remove();
			}
		}
	);
	$(document).on(
		"click",
		".useAppPackageInformation .selectedItems button",
		function () {
			var buttonIndex = $(this).attr("data-item-button");
			var target = $("input[data-index=" + buttonIndex + "]");
			target.prop("checked", false);
			$(this).parent().parent().remove();
		}
	);
	// 정보수정 - 앱패키지 정보사용 모달 관련 script End
	// 정보수정 - 앱패키지 정보사용 모달 전체 선택 스크립트
	$(document).on(
		"click",
		'input[name="useAppPackageInformationCheckbox"]',
		function () {
			var valueCheck = $(this).prop("checked");
			if (valueCheck === true) {
				$(this)
					.parent()
					.parent()
					.parent()
					.parent()
					.find("td:nth-of-type(1) input[type=checkbox]")
					.prop("checked", true);
				var i = 0;
				$(".useAppPackageInformation .appList tbody > tr").each(function () {
					var Existence = $(
						".useAppPackageInformation .selectedItems tbody"
					).find("tr[data-selected-items=" + i + "]").length;
					var title = $(
						".useAppPackageInformation td[data-title=" + i + "]"
					).text();
					if (Existence === 0) {
						$(".useAppPackageInformation .selectedItems tbody").append(
							'<tr data-selected-items="' +
								i +
								'">' +
								'                                <td style="width: 448px;">' +
								title +
								"</td>" +
								'                                <td style="width: 50px;">' +
								'                                    <button type="button" class="delete" data-item-button="' +
								i +
								'"></button>' +
								"                                </td>" +
								"                            </tr>"
						);
					}
					i++;
				});
			} else if (valueCheck === false) {
				$(this)
					.parent()
					.parent()
					.parent()
					.parent()
					.find("td:nth-of-type(1) input[type=checkbox]")
					.prop("checked", false);
				$(".useAppPackageInformation .selectedItems tbody tr").remove();
			}
		}
	);
	// 정보수정 - 앱패키지 정보사용 모달 전체 선택 스크립트 End

	// 팝업 슬라이드
	$("#comboBox").on("click", function () {
		$(".comboBox").stop().slideToggle(200);
	});
	$("#comboBox1").on("click", function () {
		$(".comboBox").stop().slideUp(200);
		$(".comboBox1").stop().slideToggle(200);
	});
	$("#comboBox2").on("click", function () {
		$(".comboBox").stop().slideUp(200);
		$(".comboBox2").stop().slideToggle(200);
	});
	// 콤보박스 닫기 -JB추가
	$(document).mouseup(function (e) {
		var comboBoxWrap = $(".comboBox");
		if (!comboBoxWrap.is(e.target) && comboBoxWrap.has(e.target).length === 0) {
			comboBoxWrap.fadeOut(200);
		}
	});
	// 폴딩 테이블에 사용되는 스크립트
	$(".folding_table .tableSection tbody > tr > .folding").on(
		"click",
		function () {
			$(this).toggleClass("on");
		}
	);
	// 폴딩 테이블에 사용되는 스크립트 End

	//테이블내 값 수정 - JB
	$(".edit-input").each(function () {
		var $this = $(this);
		$(this)
			.find(".edit")
			.click(function () {
				$this.hide();
				$this.next(".edit-input-save").show();
			});
	});
	$(".edit-input-save").each(function () {
		var $this = $(this);
		$this.find("button").click(function () {
			$this.hide();
			$this.prev(".edit-input").show();
		});
	});

	//더보기
	$(".btn-toggle").on("click", function () {
		var thisTxt = $(this).text();
		$(".frameSet_checkbox").toggle(
			function () {
				$(this).addClass("on");
				$(".btn-toggle").text("▼ 접기");
			},
			function () {
				$(this).removeClass("on");
				$(".btn-toggle").text("▼ 더보기");
			}
		);
	});
});

// 전체 선택 스크립트
$(document).on(
	"click",
	'.allCheckItems input[name="allCheckbox"]',
	function () {
		var valueCheck = $(this).prop("checked");
		if (valueCheck === true) {
			$(this)
				.closest(".checkboxArea")
				.find("input[type=checkbox]")
				.prop("checked", true);
		} else if (valueCheck === false) {
			$(this)
				.closest(".checkboxArea")
				.find("input[type=checkbox]")
				.prop("checked", false);
		}
	}
);
$(document).on("click", ".allCheckItems input[type=checkbox]", function () {
	var selectName = $(this).attr("name");
	var deselectAll = $(this)
		.closest(".checkboxArea")
		.find('input[name="' + selectName + '"]').length;
	var selectCount = 0;
	$(this)
		.closest(".checkboxArea")
		.find('input[name="' + selectName + '"]')
		.each(function () {
			var deselectCount = $(this).prop("checked");
			if (deselectCount === true) {
				selectCount += 1;
			}
		});
	if (selectCount === 0) {
		$(this)
			.closest(".checkboxArea")
			.find("input[name=allCheckbox]")
			.prop("checked", false);
	} else if (selectCount === deselectAll) {
		$(this)
			.closest(".checkboxArea")
			.find("input[name=allCheckbox]")
			.prop("checked", true);
	} else if (selectCount !== deselectAll) {
		$(this)
			.closest(".checkboxArea")
			.find("input[name=allCheckbox]")
			.prop("checked", false);
	}
});
// 전체 선택 스크립트 End

function uncomma(str) {
	str = String(str);
	return str.replace(/[^\d]+/g, "");
}

function comma(str) {
	str = String(str).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
	return str;
}

//3자리 단위마다 콤마 생성
function addCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//모든 콤마 제거
function removeCommas(x) {
	if (!x || x.length === 0) return "";
	else return x.split(",").join("");
}

// 숫자만 입력받는 함수
// 사용방법 클래스 .numberInput 추가
$(".numberInput")
	.on("focus", function () {
		var x = $(this).val();
		x = removeCommas(x);
		$(this).val(x);
	})
	.on("focusout", function () {
		var x = $(this).val();
		if (x && x.length > 0) {
			if (!$.isNumeric(x)) {
				x = x.replace(/[^0-9]/g, "");
			}
			x = addCommas(x);
			$(this).val(x);
		}
	})
	.on("keyup", function () {
		$(this).val(
			$(this)
				.val()
				.replace(/[^0-9]/g, "")
		);
	});
// 숫자만 입력받는 함수 End
