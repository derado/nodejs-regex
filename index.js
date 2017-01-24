console.log("regex sandbox. enter expression to test");

function test(str) {

    // xxxx-xxxxx-xxxx-xxx
    var regexStr = "^(\\d{4})(-{1})(\\d{5})(-{1})(\\d{4})(-{1})(\\d{3})$";

    var regex = new RegExp(regexStr);

    // var regex = /^(\d{4})(-{1})(\d{5})(-{1})(\d{4})(-{1})(\d{3})$/;

    return regex.test(str);

}

var stdin = process.openStdin();

stdin.addListener("data", function (data) {

   exp = data.toString().trim();

   console.log('Regex match for', exp, 'is', test(exp));
});

