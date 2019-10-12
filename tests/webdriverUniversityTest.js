describe("Verify whether webdriveruniversity link on homepage work correctly", function () {
    it("check that the contact us button opens the contact us page", function (done) {
        browser.setViewportSize({
            width: 1200,
            height: 800
        });
        browser.url('/');
        let title = browser.getTitle();
        expect(title).to.equal('WebDriverUniversity.com');
        console.log('Title is: ' + title);

        browser.click('#contact-us');
        let tabIds = browser.getTabIds();
        console.log(tabIds);
        browser.switchTab(tabIds[1]);

        let title2 = browser.getTitle();
        expect(title2).to.equal('WebDriver | Contact Us');

        let url = browser.getUrl();
        expect(url).to.include('Contact-Us', 'URL Mismatch');
        browser.close();
    });

    it("check that the login button opens the login portal page", function (done) {
        browser.url('/');
        let title = browser.getTitle();
        expect(title).to.equal('WebDriverUniversity.com');
        title.should.equal('WebDriverUniversity.com');
        console.log('Title is: ' + title);

        browser.click('#login-portal');
        let tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]);

        let title2 = browser.getTitle();
        expect(title2).to.equal('WebDriver | Login Portal');

        let url = browser.getUrl();
        expect(url).to.include('Login-Portal', 'URL Mismatch');

    });
});