$( '#index' ).on( 'pageinit',function(event){
  alert('foo');
});

function scanCode() {
	window.plugins.barcodeScanner.scan(function(result) {
		alert("Scanned Code: " + result.text + ". Format: " + result.format
				+ ". Cancelled: " + result.cancelled);
	}, function(error) {
		alert("Scan failed: " + error);
	});
}

function encodeText() {
	window.plugins.barcodeScanner.encode(BarcodeScanner.Encode.TEXT_TYPE,
			"http://www.mobiledevelopersolutions.com", function(success) {
				alert("Encode success: " + success);
			}, function(fail) {
				alert("Encoding failed: " + fail);
			});
}
