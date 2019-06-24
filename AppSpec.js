
export default function(spec) {

    spec.beforeEach(function() {
      // This function will run before each test in this spec file.
    });
  
    spec.describe('My feature', function() {
      spec.it('works', async function() {
        for (i=0;i<10;i++) {
        await spec.fillIn('Scene.Login', Math.round(Math.random()*1000000)+'')
        await spec.fillIn('Scene.Password', Math.random()+'')
        await spec.press('Scene.LoginButton')
        }
        await spec.fillIn('Scene.Login', 'abc')
        await spec.fillIn('Scene.Password', 'def')
        await spec.press('Scene.LoginButton')
      });
    });
  }