var ch = prompt("Enter any no , character wrather thecharacter is in lower or uppercase")
        if(ch >="A" && ch <= "Z")
        {
            alert("It is the uppercase character")
        }
        else if(ch >="a" && ch <= "z")
        {
            alert("It is the lowercase character")
        }
        else if(ch >=0)
        {
            alert("It is the numeric character")
        }
        else
        {
            alert("INVALID CHARACTER")
        }

        // Question 2
        var num1 = +prompt("Enter first integer")
        var num2 = +prompt("Enter second integer")
        if(num1 > num2)
        {
            alert(num1+" IS GREATER THAN "+num2)
        }
        else if(num1 < num2)
        {
            alert(num1+" IS LESSER THAN "+num2)
        }
        else{
            alert("THEY ARE EQUAL")
        }

        // Question 3
        var num = +prompt("Enter first integer")
        if(num > 0)
        {
            alert(num+" IS A POSITIVE CHARACTER")
        }
        else if(num < 0)
        {
            alert(num+" IS A NEGATIVE CHARACTER")
        }
        else{
            alert("IT IS EQUAL TO ZERO")
        }

        // Question 5
        var OG_password = "eyru58gi4$"
        var user_password = prompt("Enter your password","Please enter your password")
        if(user_password == OG_password)
        {
            alert("Correct! The password you entered matches the original password.")
        }
        else if(user_password != OG_password)
        {
            alert("Incorrect password")
        }
        else
        {
            alert("Please enter your password")
        }

        // Question 6
        var greeting;
        var hour = 13;
         if (hour < 18) {
            greeting = "Good day";
            console.log(greeting);
         }
         else
         {
            greeting = "Good evening";
            console.log(greeting);
         }

        // Question 7
        var time = prompt("Enter Current Time in this format , 1900 = 7pm")
        if (time >= "0000" && time < "1200") {
            console.log("Good Morning");
        }
        else if (time >= "1200" && time < "1700") {
            console.log("Good Afternoon");
        }
        else if (time >= "1700" && time < "2100") {
            console.log("Good Evening");
        }
        else if (time >= "2100" && time <= "2359") {
            console.log("Good Night");
        }