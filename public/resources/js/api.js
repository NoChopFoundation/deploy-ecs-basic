// Print an error if 'name' doesn't exist in data, otherwise return data[name]
function privateApiGetProperty(data, name) {
	if (data[name]) {
		return data[name]; 
	} else {
		console.error('Unable to find property ' + name);
		return 'NA!';
	}
}

// Initialize web3
console.log('Initializing web3');
if (typeof web3 !== 'undefined') {
	web3 = new Web3(web3.currentProvider);
} else {
	// set the provider you want from Web3.providers
	web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/sOvORNSPUEvDFPv1LWb0"));
}
console.log('Initializing web3 - COMPLETE');

//web3 = 

function printAccountBalance() {
		var GET = {};
		var query = window.location.search.substring(1).split("&");
		for (var i = 0, max = query.length; i < max; i++)
		{
			if (query[i] === "") // check for trailing & with no param
				continue;
			var param = query[i].split("=");
			GET[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || "");
		}
		var account = GET.account;
		account = "0x1c94E9F589b3e165AEdE921cbc13c9928B2Df4Da";

		var balanceWei = web3.eth.getBalance(account).toNumber();
		var balance = web3.fromWei(balanceWei, 'ether');

		document.write('[' + account + ']<br><br>')
		document.write(balance + ' Ether');			
}

$(function () {
	$.get('/name', function (data) {
		console.log("Received from /name ")
		updateGreeting(data.firstName, data.lastName);
	});
	
	$.get('/properties/brand', function (data) {
		console.log("Received from /properties/brand");
		$('.brandName').text( privateApiGetProperty(data, 'NAME') );
		$('.navbar-brand').attr('href', privateApiGetProperty(data.link, 'url') );
		$('.navbar-brand').attr('target', privateApiGetProperty(data.link, 'target') );
	});
	
	$('#generateLocalAccount').click(function () {
		console.log('generateLocalAccount click');
		
//		account = web3.eth.accounts.create(); // entropy
		console.log(web3.eth);
		
		$.get('/account', function (data) {
			console.log("Received from /account ");
		});
		
		/**
		web3.eth.getAccounts(function(error, result) {
		    if(error != null)
		        console.log("Couldn't get accounts");
		   console.log(result[0])
			console.log(web3.eth);
		});
		
		web3.eth.getProtocolVersion(function(error, version) {
			console.log("Version=" + version);
		});**/
				
				


		
	});

  $('#nameUpdate').click(function () {
    $.ajax({
      url: '/name',
      type: 'PUT',
      data: {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val()
      },
      success: function (data) {
        updateGreeting(data.firstName, data.lastName);
      }
    });

  });

  function updateGreeting(firstName, lastName) {
    $('#nameGreeting').text('Hello, ' + firstName + ' ' + lastName);
    $('#firstNameInput').val(firstName);
    $('#lastNameInput').val(lastName);
    $('#nameUpdate').prop('disabled', false);
  }
});