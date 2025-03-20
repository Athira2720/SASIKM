// Redirect to UPI app
function redirectToUPI(upiIdOrPhone) {
  const paymentLink = `upi://pay?pa=${upiIdOrPhone}&pn=Sasi%20KM`;
  window.location.href = paymentLink;
}

// Copy bank details to clipboard
function copyBankDetails() {
  const bankDetails = document.getElementById("bank-details").innerText;
  navigator.clipboard.writeText(bankDetails).then(() => {
    alert("Bank details copied to clipboard!");
  }).catch((err) => {
    console.error("Failed to copy bank details: ", err);
  });
}

// Redirect to Google Pay
function redirectToGooglePay() {
  const upiId = "aryanoop199@okicici";
  const googlePayLink = `intent://upi/pay?pa=${upiId}&pn=Sasi%20KM#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end`;
  window.location.href = googlePayLink;
}

// Call Lathika
function callLathika() {
  const phoneNumber = "+919496575109"; // Matches the HTML phone number
  window.location.href = `tel:${phoneNumber}`;
}