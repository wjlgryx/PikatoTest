function saveResponse(uuid, barCode, storeId, offerId, response, successFun) {
	var responseXML = "<response><offerId>" + offerId + "</offerId>" + "<response>" + response + "</response><time>"
			+ (new Date().getTime()) + "</time>" + "</response>";

	var xml = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>";
	xml += "<responses>";
	xml += "<brandCode>" + barCode + "</brandCode>";
	xml += "<customerUUID>" + uuid + "</customerUUID>";
	xml += "<offerResponses>"
	xml += responseXML
	xml += "</offerResponses>"
	xml += "<storeId>" + storeId + "</storeId>";
	xml += "</responses>";
	$.ajax({
		url : basePath + "/rest/recom/saveResponses",
		processData : false,
		data : xml,
		contentType : "application/xml",
		type : "PUT",
		dataType : "xml",
		success : function() {
			if (successFun) {
				successFun();
			}
		}
	});
}