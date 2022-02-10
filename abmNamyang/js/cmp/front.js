function paintPager(page, cpp, totalCnt, funcName){
	if(page == "" || !Number(page)){
    	page = 1; 
    }
    
    if(cpp == "" || !Number(cpp)){
    	cpp = 10; 
    }
    
    page = parseInt(page);
	var pageBlockCnt = 10;
    var startBlockNum = (Math.floor((page-1)/pageBlockCnt) * pageBlockCnt) + 1;
    var endBlockNum = (Math.ceil(page/pageBlockCnt) * pageBlockCnt);
    var lastBlockNum = Math.ceil(totalCnt/cpp);
    
    var prev = page - 1; if(prev < 1) prev = 1;
    var next = page + 1; if(next > lastBlockNum) next = lastBlockNum;
    if(lastBlockNum == 0) lastBlockNum = 1;
    if(funcName == null) funcName = 'doSearch';
    
    var pagerHtml = '<ul>';
    
    if(totalCnt == 0) pagerHtml += '<li class="prev"><a href="javascript:_goPage(1, \'' +funcName+ '\');" role="button">이전</a> ';
    else pagerHtml += '<li class="prev"><a href="javascript:_goPage('+prev+ ', \'' +funcName+ '\');" role="button">이전</a>';
   
    var j = 0;

    for(var i=startBlockNum;i<=endBlockNum;i++){
        if(i > lastBlockNum) continue;
        if( i == page )
        	pagerHtml += ' <li class="active"><a role="button">'+i+'</a></li>';
        else
            pagerHtml += ' <li><a href="javascript:_goPage('+i+ ', \'' +funcName+ '\');" role="button">' +i+ '</a></li>';
        
        j ++;
    }
    
    if (j==0) pagerHtml += ' <li class="active"><a role="button">1</a></li>';
    
    if(totalCnt == 0) pagerHtml += ' <li class="next"><a href="javascript:_goPage(1, \'' +funcName+ '\');" role="button">다음</a></li>';
    else pagerHtml += ' <li class="next"><a href="javascript:_goPage('+next+ ', \'' +funcName+ '\');" role="button">다음</a></li>';

    pagerHtml += '</ul>';
    return pagerHtml;
}

//레이어 open
var __isLayer = false;
function showLayer(urls, opt){
	if(__isLayer == true) return;
	__isLayer = true;
	
	var box = "";
	var idx = $("._layerbox").length;
	var data = {};
	var opacity = "0.5";
	
	if(opt){
		if(opt.position) position = opt.position;
		if(opt.opacity) opacity = opt.opacity;
		if(opt.data) data = opt.data;
		if(opt.loading) {
			loading(true);
		}
	}
	
	box +="<div id=\"_layerbox_"+idx+"\" class=\"_layerbox\" style=\"display:none;\">";
	//box +="	<span class=\"b-close\" style=\"display:none;\" id=\"_layerboxX_"+idx+"\"><span>닫기</span></span>";
	box +="</div>";
	var dobj = $(box).appendTo("body");
	
	var at = "?";
	if(urls.indexOf("?") > -1){
		at = "&";
	}
	
	dobj.bPopup({
        loadUrl: urls + at
        , content:'ajax' //'iframe'
        , modalClose: false
        , positionStyle: 'fixed' //'fixed' or 'absolute'
        , transition: 'fadeIn'
    	, transitionClose: 'slideUp'
    	, loadData : data
    	, opacity : opacity
        , onClose: function() {
        	$("#_layerbox_"+idx).remove();
        }
    }, 
	function() {
    	setTimeout(function() {
    		$("#_layerboxX_"+idx).show("fade");
		}, 50 );
    	setTimeout(function() {
    		__isLayer = false;
    		if(opt && opt.loading) {
        		loading(false);
        	}
		}, 250);
	});
}