$(function() {

	var seatNumber;

	$("form").hide();
	$(".available").on("click", function() {
		$("form").show();
		seatNumber = $(this).attr("id");
		$(".yourSeat").text("seat #" + seatNumber + ":");

	});

	var reservation = {

	};

	$("#button").on("click", function() {
		var name = $("#name").val();
		var phone = $("#phone_number").val();
		var email = $("#email").val();
		var yourSeat = $(".yourSeat").text();

		reservation.seat = yourSeat;
		reservation.name = name;
		reservation.phone = phone;
		reservation.email = email;

		$("#formArea").html("<p>Thank you for your reservation!</p>")
	});

});
