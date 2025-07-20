function tips5() {
                            document.getElementById("tip").value="5";
                        }
function tips10() {
                            document.getElementById("tip").value="10";
                        }
function tips15() {
                            document.getElementById("tip").value="15";
                        }
function tips20() {
                            document.getElementById("tip").value="20";
                        }
const calculate= () => {
                        const bill=Number(document.getElementById("bill").value.trim());
                        const tipPercent=Number(document.getElementById("tip").value.trim());
                        const persons=Number(document.getElementById("people").value.trim());
                        if(!bill || bill<=0 || tipPercent<0 || persons<=0 ) {
                            document.getElementById("result").innerText="Please enter valid poisitve numbers!";
                            return;
                        }
                        
                        const tip=bill*(tipPercent/100);
                        const total=bill+tip;
                        const perPerson=total/persons;
                        
                        // document.getElementById("result").innerText=`Total: ₹${total.toFixed(2)} | Each Pays: ₹${perPerson.toFixed(2)}`;
                        document.getElementById("result").innerText =
  `Bill: ₹${bill.toFixed(2)} | Tip: ₹${tip.toFixed(2)}\nTotal: ₹${total.toFixed(2)} | Each Pays: ₹${perPerson.toFixed(2)}`;

                    }
