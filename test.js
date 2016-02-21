var assert = require('assert');
var B9 = require('b9');
var b9_slander = require('./index');

describe('src/index', function(){

  var bot = new B9({ package:false });
  bot.self.id = 'UB9M3';
  bot.users = [{ name:'bot', id:'U123' }];
  bot.install( b9_slander );

  it('b9.slander() method',function(){
    assert.equal( typeof bot.slander, 'function' );
    assert.equal( typeof bot.slander(), 'string' );
    assert.equal( bot.slander().length > 0, true );
  });

  it('registers `slander` command',function(){
    // check the help command is defined
    simulate('help slander',function( txt ){
      assert.equal( /Command not found/.test( txt ), false );
      assert.equal( /slander/.test( txt ), true );
    });
  });

  it('generates a slanderous statement',function(){
    var sent;
    bot.send = function( msg ){
      assert.equal( msg.type, 'message' );
      assert.equal( msg.text.split(' ').length > 5, true );
      sent = true;
    };
    simulate('slander');
    // make sure the assertions ran
    assert.equal( sent, true );
  });

  it('can be directed at any name',function(){
    var sent;
    bot.send = function( msg ){
      assert.equal( msg.type, 'message' );
      assert.equal( msg.text.indexOf('Clu'), 0 );
      sent = true;
    };
    simulate('slander Clu');
    // make sure the assertions ran
    assert.equal( sent, true );
  });

  it('can be directed to any channel',function(){
    var sent;
    bot.send = function( msg ){
      assert.equal( msg.type, 'message' );
      assert.equal( msg.channel, '#C123' );
      sent = true;
    };
    simulate('slander user #C123');
    // make sure the assertions ran
    assert.equal( sent, true );
  });

  // simulate an event
  function simulate ( str, reply ){
    bot.emit('message', {
      text: ( str || '' ),
      channel: 'D' // direct msg
    }, reply );
  }

});
