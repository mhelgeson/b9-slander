var ADJ1 = require('./words/adj1');
var ADJ2 = require('./words/adj2');
var NOUN = require('./words/noun');

// random array element
function random ( list ){
  // rotate array for better distribution
  list.unshift( list.pop() );
  // return a random value
  return list[ Math.floor( Math.random() * list.length ) ];
}

module.exports = function( b9 ){

  b9.command(
    'slander [user] [channel]',
    'Make false and damaging statements',
    function( msg ){
      b9.send({
        type: 'message',
        channel: msg.argv.channel || msg.channel,
        text: [
          msg.argv.user || random( b9.users ).name,
          'is',
          b9.slander()
        ].join(' ')
      });
    }
  );

  b9.slander = function(){
    return [
      random( ADJ1 ),
      random( ADJ2 ),
      random( NOUN )
    ].join(' ');
  }
};
