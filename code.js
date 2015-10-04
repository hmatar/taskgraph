$(function(){ // on dom ready

// photos from flickr with creative commons license
  
var cy = cytoscape({
  container: document.getElementById('cy'),
  
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'height': 120,
        'width': 120,
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2,
        'text-outline-color': '#888'
      })
    .selector('.eating')
      .css({
        'border-color': 'red'
      })
    .selector('.eater')
      .css({
        'border-width': 9
      })
    .selector('edge')
      .css({
        'width': 6,
        'target-arrow-shape': 'triangle',
        'line-color': '#ffaaaa',
        'target-arrow-color': '#ffaaaa'
      })
    .selector('#bird')
      .css({
        'background-image': 'https://farm8.staticflickr.com/7272/7633179468_3e19e45a0c_b.jpg'
      })
    .selector('#cat')
      .css({
        'background-image': 'https://farm2.staticflickr.com/1261/1413379559_412a540d29_b.jpg'
      })
    .selector('#ladybug')
      .css({
        'background-image': 'https://farm4.staticflickr.com/3063/2751740612_af11fb090b_b.jpg'
      })
  .selector('#aphid')
      .css({
        'background-image': 'https://farm9.staticflickr.com/8316/8003798443_32d01257c8_b.jpg'
      })
  .selector('#rose')
      .css({
        'background-image': 'https://farm6.staticflickr.com/5109/5817854163_eaccd688f5_b.jpg'
      })
  .selector('#grasshopper')
      .css({
        'background-image': 'https://farm7.staticflickr.com/6098/6224655456_f4c3c98589_b.jpg'
      })
  .selector('#plant')
      .css({
        'background-image': 'https://farm1.staticflickr.com/231/524893064_f49a4d1d10_z.jpg'
      })
  .selector('#wheat')
      .css({
        'background-image': 'https://farm3.staticflickr.com/2660/3715569167_7e978e8319_b.jpg'
      }),
  
  elements: {
    nodes: [
      { data: { id: 'InitialTask_i1', name: 'InitialTask_i1' } },
      { data: { id: 'InitialTask_i2', name: 'InitialTask_i2' } },
      { data: { id: 'InitialTask_i3', name: 'InitialTask_i3' } },
      { data: { id: 'InitialTask_i4', name: 'InitialTask_i4' } },
      { data: { id: 'lu0_0_0_i1', name: 'lu0_0_0_i1' } },
      { data: { id: 'fwd_0_1_i1', name: 'fwd_0_1_i1' } },
      { data: { id: 'bdiv_2_0_i1', name: 'bdiv_2_0_i1' } },
      { data: { id: 'bdiv_1_0_i2', name: 'bdiv_1_0_i2' } },
      { data: { id: 'bmod_1_1_i1', name: 'bmod_1_1_i1' } },
      { data: { id: 'lu0_1_1_i2', name: 'lu0_1_1_i2' } },
      { data: { id: 'bmod_2_1_i2', name: 'bmod_2_1_i2' } },
      { data: { id: 'bdiv_2_1_i2', name: 'bdiv_2_1_i2' } },
      { data: { id: 'InitialTask_i5', name: 'InitialTask_i5' } },
      { data: { id: 'fwd_0_2_i2', name: 'fwd_0_2_i2' } },
      { data: { id: 'bmod_2_2_i3', name: 'bmod_2_2_i3' } },
      { data: { id: 'bmod_1_2_i4', name: 'bmod_1_2_i4' } },
      { data: { id: 'fwd_1_2_i3', name: 'fwd_1_2_i3' } },
      { data: { id: 'bmod_2_2_i5', name: 'bmod_2_2_i5' } },
      { data: { id: 'lu0_2_2_i3', name: 'lu0_2_2_i3' } }
    ],
    edges: [
      { data: { source: 'InitialTask_i4', target: 'lu0_0_0_i1' } },
      { data: { source: 'lu0_0_0_i1', target: 'fwd_0_1_i1' } }
    ]
  },
  
  layout: {
    name: 'breadthfirst',
    directed: true,
    padding: 10
  }
}); // cy init
  
cy.on('tap', 'node', function(){
  var nodes = this;
  var tapped = nodes;
  var food = [];
  
  nodes.addClass('eater');
  
  for(;;){
    var connectedEdges = nodes.connectedEdges(function(){
      return !this.target().anySame( nodes );
    });
    
    var connectedNodes = connectedEdges.targets();
    
    Array.prototype.push.apply( food, connectedNodes );
    
    nodes = connectedNodes;
    
    if( nodes.empty() ){ break; }
  }
        
  var delay = 0;
  var duration = 500;
  for( var i = food.length - 1; i >= 0; i-- ){ (function(){
    var thisFood = food[i];
    var eater = thisFood.connectedEdges(function(){
      return this.target().same(thisFood);
    }).source();
            
    thisFood.delay( delay, function(){
      eater.addClass('eating');
    } ).animate({
      position: eater.position(),
      css: {
        'width': 10,
        'height': 10,
        'border-width': 0,
        'opacity': 0
      }
    }, {
      duration: duration,
      complete: function(){
        thisFood.remove();
      }
    });
    
    delay += duration;
  })(); } // for
  
}); // on tap

}); // on dom ready
