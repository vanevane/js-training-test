/**
 * Created by vanessavargas on 7/24/2015.
 */

var ParsleyPageTest = function()
{
    this.parsley;

};

ParsleyPageTest.prototype.verifyTheFormIsFilledWithValidValues = function()
{
    this.parsley = new ParsleyPage();
    this.parsley.setFullName('Jun');
    this.parsley.setEmail('jun@gmail.com');
    this.parsley.selectGender('male');
    this.parsley.selectHobbies('Coding');
    this.parsley.selectHobbies('Reading');
    this.parsley.selectHeardAboutUs('Internet');
    this.parsley.setMessage('This is an example of a message');
    this.parsley.clickValidate();

    var div = $('[class="bs-callout bs-callout-info"]').find('p');
    var actRes = div.text();

    var expRes = 'Everything seems to be ok :)';

    if(actRes == expRes)
        console.log("PASSED: The form was filled with valid values");

    else
        console.log("FALIED: The form was filled with invalid values");

};

ParsleyPageTest.prototype.verifyMessageBoxDoesntAllowLessThan20Charcters = function()
{
    this.parsley = new ParsleyPage();
    this.parsley.setMessage('some text');
    this.parsley.clickValidate();


    var actRes = $('li[class="parsley-minlength"]').text();

    var expRes = 'Come on! You need to enter at least a 20 character comment..';

    if(actRes == expRes)
        console.log("PASSED: The message doesn't allow less than 20 characters");

    else
        console.log("FALIED: The message allows less than 20 characters");

};


var parsleyTest = new ParsleyPageTest();