export function sendInvoice({name, messageText, textButton}) {
    return `
    <html>
<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
</head>

<body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
	<table width="600" border="0" cellpadding="0" cellspacing="0" align="center"
		style="font-family: 'Roboto', sans-serif;">
		<!-- header -->
		<tr>
			<td style="text-align: center;">
				<figure style="padding: 20px; border-bottom: 1px solid #4338CA;">
					<img src=""
						alt="">
				</figure>
			</td>
		</tr>
		<tr>
			<td style="padding:0 40px;">
				<img width="600"
					src="https://firebasestorage.googleapis.com/v0/b/expressbuy-finalchallenge.appspot.com/o/BannerInvoice.png?alt=media&token=bb166d7d-6d5d-497e-8478-34d4e28522f3"
					alt="">
			</td>
		</tr>
		<tr>
			<td height="20"></td>
		</tr>
		<tr>
			<td>
				<p style="font-weight: 300; color: #4338CA; text-align: center;">Hello, ${name}</p>
			</td>
		</tr>
		<tr>
			<td height="20"></td>
		</tr>
		<tr>
			<td style="font-size: 14px; font-weight: 500; text-align: center;">${messageText}</td>
		</tr>
		<tr>
			<td height="20"></td>
		</tr>
		
		<tr>
			<td height="20"></td>
		</tr>
		<tr>
			<td style="text-align: center;">
				<a style="border:0; outline:0; text-decoration:none; padding: 10px; background-color: #4338CA; border-radius: 20px; color: #fff;"
					target="_blank" href="http://localhost:5173/verify">
        ${textButton}
				</a>
			</td>
		</tr>
        <tr>
			<td height="20"></td>
		</tr>
	</table>

</body>

</html>
    `
}