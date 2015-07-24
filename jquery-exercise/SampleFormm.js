/**
 * Created by vanessavargas on 7/24/2015.
 */

var ParsleyPage = function()
{

    this.genders = {
        'male': 'M',
        'female': 'F'
    };


    this.hobbies = {
        'Skiing': 'ski',
        'Running': 'run',
        'Eating': 'eat',
        'Sleeping': 'sleep',
        'Reading': 'read',
        'Coding': 'code'
    };

    this.aboutUS = {
        'Press': 'press',
        'Internet': 'net',
        'Word of mouth': 'mouth',
        'Other..': 'other'

    };
};

ParsleyPage.prototype.fillForm = function(data)
{
    this.setFullName(data.name);
    this.setEmail(data.mail);
    this.selectGender(data.gender);
    this.selectHobbies(data.hobbie1);
    this.selectHobbies(data.hobbie2);
    this.selectHeardAboutUs(data.via);
    this.setMessage(data.message);
    this.clickValidate();
    this.clickValidate();

};

ParsleyPage.prototype.setFullName = function(name)
{
    $('input[name="fullname"]').val(name);
};

ParsleyPage.prototype.setEmail = function(mail)
{
    $('input[name="email"]').val(mail);
};

ParsleyPage.prototype.selectGender = function(gender)
{
    $('input[value="'+this.genders[gender]+'"]').click();
};


ParsleyPage.prototype.selectHobbies = function(hobbie)
{
    $('input[value="'+this.hobbies[hobbie]+'"]').click();
};

ParsleyPage.prototype.selectHeardAboutUs = function(via)
{
    $('select[id="heard"]').val(this.aboutUS[via]);
};

ParsleyPage.prototype.setMessage = function(message)
{
    $('textarea').val(message);
};

ParsleyPage.prototype.clickValidate = function()
{
    $('[class="btn btn-default"]').click();
};

//var data = {
//    'name': 'Jun',
//    'mail': 'jun@gmail.com',
//    'gender': 'male',
//    'hobbie1': 'Coding',
//    'hobbie2': 'Reading',
//    'via': 'Internet',
//    'message': 'This is an example of a message'
//};

//var parsleyPO = new ParsleyPage();
//parsleyPO.setFullName('Jun');
//parsleyPO.setEmail('jun@gmail.com');
//parsleyPO.selectGender('male');
//parsleyPO.selectHobbies('Coding');
//parsleyPO.selectHobbies('Reading');
//parsleyPO.selectHeardAboutUs('Internet');
//parsleyPO.setMessage('This is an example of a message');
//parsleyPO.clickValidate();

//parsleyPO.clickValidate();



