beforeEach(function () {
  browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', function () {

  beforeEach(function () {
    console.log('Inside the describe block!');
  });


  it('Should be able to submit a successful submission via contact us form', function (done) {
    browser.setValue("[name='first_name']", 'Joe');
    browser.setValue("[name='last_name']", 'Blogs');
    browser.setValue("[name='email']", 'joe_blogs@gmail.com');
    browser.setValue("[name='message']", 'How much does product x cost');
    browser.click("[type='submit']");

    var successfulContactConfirmation = browser.isExisting("//div[@id='contact_reply']/h1");
    expect(successfulContactConfirmation, 'Successful Submission message does not exist').to.be.true;

    var successfilSubmission = browser.getText("//div[@id='contact_reply']/h1");
    expect(successfilSubmission).to.equal('Thank You for your Message!');
  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
    browser.setValue("[name='first_name']", 'Mike');
    browser.setValue("[name='last_name']", 'Woods');
    browser.setValue("[name='email']", 'mike_woods@gmail.com');
    browser.click("[type='submit']");

    var successfulContactConfirmation = browser.isExisting("//div[@id='contact_reply']/h1");
    expect(successfulContactConfirmation, 'Successful Submission message does not exist').to.be.false;


  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
    browser.setValue("[name='first_name']", 'Sarah');
    browser.setValue("[name='email']", 'sarah_woods@gmail.com');
    browser.click("[type='submit']");

    var successfulContactConfirmation = browser.isExisting("//div[@id='contact_reply']/h1");
    expect(successfulContactConfirmation, 'Successful Submission message does not exist').to.be.false;
  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
    browser.setValue("[name='first_name']", 'Jim');
    browser.setValue("[name='last_name']", 'Jomes');
    browser.click("[type='submit']");

    var errorText = browser.getText('body');
    expect(errorText).to.include('Error: all fields are required');

    var errorText = browser.isVisible('body');
    expect(errorText, 'Error message is not visible').to.be.true;

  });
});