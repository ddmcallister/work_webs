<?php

    session_start();

    if (verifyFormToken('form1')) {
    
        // CHECK TO SEE IF THIS IS A MAIL POST
        if (isset($_POST['URL-main'])) {
        
            // Building a whitelist array with keys which will send through the form, no others would be accepted later on
            $whitelist = array('token','req-name','req-email','typeOfChange','urgency','URL-main','addURLS', 'curText', 'newText', 'save-stuff', 'mult');
            
            // Building an array with the $_POST-superglobal 
            foreach ($_POST as $key=>$item) {
                    
                    // Check if the value $key (fieldname from $_POST) can be found in the whitelisting array, if not, die with a short message to the hacker
            		if (!in_array($key, $whitelist)) {
            			
            			writeLog('Unknown form fields');
            			die("Hack-Attempt detected. Please use only the fields in the form");
            			
            		}
            }
        
            // Lets check the URL whether it's a real URL or not. if not, stop the script
            
            if(!filter_var($_POST['URL-main'],FILTER_VALIDATE_URL)) {
            			writeLog('URL Validation');
            		die('Hack-Attempt detected. Please insert a valid URL');
            }

			$message = '<html><body>';
			$message =. "<strong>Contractor Name:</strong>" . strip_tags($_POST['cont_name']);
			$message =. "<strong>My Name:</strong>" . strip_tags($_POST['myname']);
			$message =. "<strong>Phone:</strong>" . strip_tags($_POST['phone']);
			$message =. "<strong>Email:</strong>" . strip_tags($_POST['myemail']);
			$message =. "<strong>Site Name:</strong>" . strip_tags($_POST['site-name']);
			$message =. "<strong>Start Date:</strong>" . strip_tags($_POST['start-date']);
			$message =. "<strong>Contact/Foreman:</strong>" . strip_tags($_POST['contact']);
			$message =. "<strong>Address:</strong>" . strip_tags($_POST['address']);
			$message =. "<strong>Start Time:</strong>" . strip_tags($_POST['time']);
			$message =. "<strong>Contact Cell Phone:</strong>" . strip_tags($_POST['job-phone']);
			$message =. "<strong>Job Length:</strong>" . strip_tags($_POST['job-length']);
			$message =. "<strong>Specialties:</strong>" . strip_tags($_POST['spec-line']);
			$message =. "<strong>Additional Comments:</strong>" . strip_tags($_POST['comments']);
			$message .= "</body></html>";

			$pattern = "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i"; 
            if (preg_match($pattern, trim(strip_tags($_POST['myemail'])))) { 
                $cleanedFrom = trim(strip_tags($_POST['myemail'])); 
            } else { 
                return "The email address you entered was invalid. Please try again!"; 
            } 

            $to = 'destanie@gmail.com';
			
			$subject = 'Workforce Request Form';
			$headers = "From: " . $cleanedFrom . "\r\n";
			$headers .= "Reply-To: ". strip_tags($_POST['req-email']) . "\r\n";
			$headers .= "MIME-Version: 1.0\r\n";
			$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

            if (mail($to, $subject, $message, $headers)) {
              echo 'Your message has been sent.';
            } else {
              echo 'There was a problem sending the email.';
            }
            
            // DON'T BOTHER CONTINUING TO THE HTML...
            die();
        
        }
    } else {
    
   		if (!isset($_SESSION[$form.'_token'])) {
   		
   		} else {
   			echo "Hack-Attempt detected. Got ya!.";
   			writeLog('Formtoken');
   	    }
   
   	}




?>


<!DOCTYPE html>

<html>
	<head>

		<title>referralhall.com</title>
		<link rel="stylesheet" type="text/css" href="css/main.css">
		<link rel="stylesheet" href="css/font-awesome.min.css">
		<link href='http://fonts.googleapis.com/css?family=Roboto:400,300,700' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Orienta' rel='stylesheet' type='text/css'>
		<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/underscore-min.js"></script>
		<script type="text/javascript" src="js/application.js"></script>
	</head>

<?php
   // generate a new token for the $_SESSION superglobal and put them in a hidden field
	$newToken = generateFormToken('form1');   
?>

	<body>
	<header>
		<h1>Local 28 Referral Hall </h1>
		<h1 id="subhead">Workforce Requests</h1>
		<p class="header-sentnc">Request workers using the form below, <a href="instructions.html" tabindex = "1">get instructions</a>, <a href="feedback.html" tabindex = "5">leave feedback</a> or <a href="tips.html" tabindex = "10">read our tips</a> on making the Referral Hall work for you.</p>
	</header>

	<div id="main">
		<form action="index2.php" method="post" id="contr_form" enctype="text/plain" autocomplete="off">
			<input type="hidden" name="token" value="<?php echo $newToken; ?>">
			<div class="form-group">
				<h2 class="heading">Company Info</h2>
				<div class="left-col">
					<div class="controls">
						<input type="text" id="cont_name" class="floatlabel" name="cont_name" tabindex = "15" maxlength = "50" required>
						<label for="cont_name">Contractor Name</label>
					</div>
					<div class="controls">
						<input type="text" id="myname" class="floatlabel" name="myname" tabindex = "25" maxlength="30" required>
						<label for="myname">My Name</label>
					</div>
				</div>
				<div class="right-col">
					<div class="controls">
						<input type="tel" id="phone" class="floatlabel" name="phone" tabindex = "20" maxlength= "11" minlength="10" required>
						<label for="phone">Office or Cell Phone</label>
					</div>
					<div class="controls">
						<input type="email" id="myemail" class="floatlabel" name="myemail" tabindex = "30" maxlength = "40">
						<label for="email">Email</label>
					</div>
				</div>
			</div>
			<div class="form-group">
				<h2 class="heading">Job Info</h2>
				<div class="left-col">
					<div class="controls">
						<input type="text" id="site-name" class="floatlabel" name="site-name" tabindex = "35" maxlength="50">
						<label for="site-name">Site Name</label>
					</div>	
					<div class="controls">
						<input type="text" id="start-date" class="floatlabel" name="start-date" tabindex = "45" maxlength="15" required>
						<label for="start-date">Start Date</label>
					</div>	
					<div class="controls">
						<input type="text" id="contact" class="floatlabel" name="contact" tabindex = "55" maxlength="30" required>
						<label for="contact">Contact/Foreman</label>
					</div>
				</div>
				<div class="right-col">
					<div class="controls">
						<input type="text" id="address" class="floatlabel" name="address" tabindex = "40" maxlength="50" required>
						<label for="address">Address</label>
					</div>
					<div class="controls">
						<input type="text" id="time" class="floatlabel" name="time" tabindex = "50" maxlength="15" required>
						<label for="time">Start Time</label>
					</div>
					<div class="controls">
						<input type="tel" id="job-phone" class="floatlabel" name="job-phone" tabindex = "60" maxlength= "11" minlength="10" required>
						<label for="job-phone">Contact Cell Phone</label>
					</div>
				</div>
				<div class="controls">
					<label for="job-length">Estimated Job Length</label>
		 			<select name="job-length" id="job-length" class="select-style" tabindex = "70" required>
						<option value disabled selected></option>
						<option id="short-Term" name="Short_Term" value="short_term">Short Term:<span> may last 12 business days or fewer</span></option>
						<option id="STandard" name="Standard" value="standard">Standard:<span> may last more than 12 business days</span></option>
					</select>
				</div>
			</div>
		 	<div class="form-group" id="space-correct">
				<h2 class="heading">Workforce Info</h2>
				<div id="instr-container">
					<p>Click to highlight your specialty requirements, then indicate how many workers you need and click the add button.</p>
					<p><span class="emph">You can use this form to make multiple requests. </span>For additional workers with different specialties, repeat the process. Your full request is displayed in the box labelled "You have requested...".</p>
				</div>
				<div class="left-col">
					<div id="spec-container" tabindex = "75">
						<div class="specialties" id="field">Field Mechanic</div>
			  			<div class="specialties" id="shop">Shop Mechanic</div>
			  			<div class="specialties" id="roofing">Roofer</div>
			  			<div class="specialties" id="decking">Decker</div>
			  			<div class="specialties" id="siding">Sider</div>
			  			<div class="specialties" id="enclosures">Enclosures</div>
			  			<div class="specialties" id="louvers">Louvers</div>
			  			<div class="specialties" id="tab">Testing and Balancing</div>
			  			<div class="specialties" id="general_welding">Welder (uncertified)</div>
			  			<div class="specialties" id="certified_welding">Certified Welder (specify type below)</div>
			  			<div class="specialties" id="cad_sketching">Sketcher/CAD (specify type below)</div>
			  		</div>
			  		<div id="clicked-reqs"></div>
			  		<div id= "num-line">
			  			<label for="quantity">Number of Workers</label>
			  			<input type="number" name="quantity" id="quantity" max="25" step="1" tabindex = "80">
			  		</div>
					<div id="save-line">
						<div>Add To Your Request <span id="save" tabindex = "85" <i class="fa fa-plus"></i></span></div>
					</div>
				</div>
				<div class="right-col">
		   			<div id="request_one"><label for="request_one">You have requested ...</label></div>
		   			<div id="clear-request">
						<p>Clear Your Request <span id="clear" tabindex = "90"<i class="fa fa-undo"></i></span></p>
					</div>
				</div>
		  		<input type="hidden" name="spec-line" id="spec-line" value="specs">
		  	</div>
			<div class="form-group">
		    	<h2 class="heading">Additional Specialties, Certifications, Comments or Special Instructions</h2>
		    	<div class="controls" id="comment-container">
		      		<textarea name="comments" class="floatLabel" id="comments" tabindex = "95" maxlength="250"></textarea>
		      		<button type="submit" name="request_submit" value="send_request" id="submit_butn" tabindex = "100">Submit</button>
		      	</div>
		      			<div id="pdf-line">
			<p>Download a pdf of this form <a href="./img/Contractor_Request_Form.pdf" download><span id="pdf"<i class="fa fa-file-pdf-o" tabindex = "105" name="PDF"></i></span></a></p>
		</div>
		    </div>
		</form>

	</div>
	</body>
</html>