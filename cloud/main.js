
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

[PFCloud callFunctionInBackground:@"hello"
                   withParameters:@{}
                            block:^(NSString *result, NSError *error) {
   if (!error) {
     // result is @"Hello world!"
   }
}];