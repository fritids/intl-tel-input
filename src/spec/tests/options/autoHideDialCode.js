"use strict";

describe("testing autoHideDialCode option", function() {

  var defaultDialCode = "+1";

  beforeEach(function() {
    input = $("<input>");
  });

  afterEach(function() {
    input = null;
  });


  describe("init plugin with autoHideDialCode = true", function() {
  
    beforeEach(function() {
      input.intlTelInput({
        autoHideDialCode: true
      });
      getParentElement().appendTo($("body"));
    });

    afterEach(function() {
      getParentElement().remove();
    });

    it("does not automatically insert the default dial code", function() {
      expect(getInputVal()).toEqual("");
    });

    it("focusing the input adds the default dial code and blurring it removes it again", function() {
      input.focus();
      expect(getInputVal()).toEqual(defaultDialCode);
      input.blur();
      expect(getInputVal()).toEqual("");
    });



    describe("with a phone number", function() {
    
      var number = "+1 702 987 2345";

      beforeEach(function() {
        input.val(number);
      });

      it("focusing and blurring the input doesn't change it", function() {
        input.focus();
        expect(getInputVal()).toEqual(number);
        input.blur();
        expect(getInputVal()).toEqual(number);
      });
    
    });
  
  });


  describe("init plugin with autoHideDialCode = false", function() {
  
    beforeEach(function() {
      input.intlTelInput({
        autoHideDialCode: false
      });
      getParentElement().appendTo($("body"));
    });

    afterEach(function() {
      getParentElement().remove();
    });

    it("automatically inserts the default dial code", function() {
      expect(getInputVal()).toEqual(defaultDialCode);
    });

    it("focusing and bluring the input dont change the val", function() {
      input.focus();
      expect(getInputVal()).toEqual(defaultDialCode);
      input.blur();
      expect(getInputVal()).toEqual(defaultDialCode);
    });


    describe("with a phone number", function() {
    
      var number = "+1 702 987 2345";

      beforeEach(function() {
        input.val(number);
      });

      it("focusing and blurring the input doesn't change it", function() {
        input.focus();
        expect(getInputVal()).toEqual(number);
        input.blur();
        expect(getInputVal()).toEqual(number);
      });
    
    });
  
  });

});