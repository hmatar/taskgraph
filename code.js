$(function(){ // on dom ready

// photos from flickr with creative commons license
  
var cy = cytoscape({
  container: document.getElementById('cy'),
  
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
		  width:80,
		'shape': 'rectangle',
		'background-color': 'data(faveColor)',
        'content': 'data(name)',
        'text-valign': 'center',
		'text-halign': 'center',
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
        'width': 8,
        'target-arrow-shape': 'triangle',
        'line-color': '#86B342',
        'target-arrow-color': '#86B342',
		'content': 'data(label)'
      }),
  
  elements: {
    nodes: [
      { data: { id: 'InitialTask_i1', faveColor: '#ffaaaa', name: 'InitialTask_i1' } },
      { data: { id: 'InitialTask_i2', faveColor: '#ffaaaa', name: 'InitialTask_i2' } },
      { data: { id: 'InitialTask_i3', faveColor: '#ffaaaa', name: 'InitialTask_i3' } },
      { data: { id: 'InitialTask_i4', faveColor: '#ffaaaa', name: 'InitialTask_i4' } },
      { data: { id: 'lu0_0_0_i1', faveColor: '#EDA1ED', name: 'lu0_0_0_i1' } },
      { data: { id: 'fwd_0_1_i1', faveColor: '#61bffc', name: 'fwd_0_1_i1' } },
      { data: { id: 'bdiv_2_0_i1', faveColor: '#F5A45D',name: 'bdiv_2_0_i1' } },
      { data: { id: 'bdiv_1_0_i2', faveColor: '#F5A45D', name: 'bdiv_1_0_i2' } },
      { data: { id: 'bmod_1_1_i1', faveColor: '#6FB1FC', name: 'bmod_1_1_i1' } },
      { data: { id: 'lu0_1_1_i2',faveColor: '#EDA1ED', name: 'lu0_1_1_i2' } },
      { data: { id: 'bmod_2_1_i2', faveColor: '#6FB1FC', name: 'bmod_2_1_i2' } },
      { data: { id: 'bdiv_2_1_i2', faveColor: '#F5A45D', name: 'bdiv_2_1_i2' } },
      { data: { id: 'InitialTask_i5', faveColor: '#ffaaaa', name: 'InitialTask_i5' } },
      { data: { id: 'fwd_0_2_i2',faveColor: '#61bffc', name: 'fwd_0_2_i2' } },
      { data: { id: 'bmod_2_2_i3', faveColor: '#6FB1FC', name: 'bmod_2_2_i3' } },
      { data: { id: 'bmod_1_2_i4', faveColor: '#6FB1FC', name: 'bmod_1_2_i4' } },
      { data: { id: 'fwd_1_2_i3',faveColor: '#61bffc', name: 'fwd_1_2_i3' } },
      { data: { id: 'bmod_2_2_i5', faveColor: '#6FB1FC', name: 'bmod_2_2_i5' } },
      { data: { id: 'lu0_2_2_i3', faveColor: '#EDA1ED', name: 'lu0_2_2_i3' } }
    ],
    edges: [
      { data: { source: 'InitialTask_i4', target: 'lu0_0_0_i1', label: 'bmod_0xa24a60 : 0' } },
      { data: { source: 'lu0_0_0_i1', target: 'fwd_0_1_i1', label: 'lu_0xa249e0 : 0' } },
	  { data: { source: 'InitialTask_i2', target: 'fwd_0_1_i1', label: 'bmod_0xa24a64 : 1' } },
	  { data: { source: 'lu0_0_0_i1', target: 'bdiv_2_0_i1', label: 'lu_0xa249e0 : 0' } },
	  { data: { source: 'InitialTask_i3', target: 'bdiv_2_0_i1', label: 'bmod_0xa24aa0 : 6' } },
	  { data: { source: 'lu0_0_0_i1', target: 'bdiv_1_0_i2', label: 'lu_0xa249e0 : 0' } },
	  { data: { source: 'InitialTask_i1', target: 'bdiv_1_0_i2', label: 'bmod_0xa24a80 : 3' } },
	  { data: { source: 'fwd_0_1_i1', target: 'bmod_1_1_i1', label: 'fwd_0xa24a04 : 1' } },
	  { data: { source: 'bdiv_1_0_i2', target: 'bmod_1_1_i1', label: 'bdiv_0xa24a24 : 3' } },
	  { data: { source: 'bmod_1_1_i1', target: 'lu0_1_1_i2', label: 'bmod_0xa24a84 : 4' } },
	  { data: { source: 'fwd_0_1_i1', target: 'bmod_2_1_i2', label: 'fwd_0xa24a04 : 1' } },
	  { data: { source: 'bdiv_2_0_i1', target: 'bmod_2_1_i2', label: 'bdiv_0xa24a28 : 6' } },
	  { data: { source: 'bmod_2_1_i2', target: 'bdiv_2_1_i2', label: 'bmod_0xa24aa4 : 7' } },
	  { data: { source: 'lu0_1_1_i2', target: 'bdiv_2_1_i2', label: 'lu_0xa249e4 : 1' } },
	  { data: { source: 'InitialTask_i5', target: 'fwd_0_2_i2', label: 'bmod_0xa24a68 : 2' } },
	  { data: { source: 'lu0_0_0_i1', target: 'fwd_0_2_i2', label: 'lu_0xa249e0 : 0' } },
	  { data: { source: 'fwd_0_2_i2', target: 'bmod_2_2_i3', label: 'fwd_0xa24a08 : 2' } },
	  { data: { source: 'bdiv_2_0_i1', target: 'bmod_2_2_i3', label: 'bdiv_0xa24a28 : 6' } },
  	  { data: { source: 'fwd_0_2_i2', target: 'bmod_1_2_i4', label: 'fwd_0xa24a08 : 2' } },
	  { data: { source: 'bdiv_1_0_i2', target: 'bmod_1_2_i4', label: 'bdiv_0xa24a24 : 3' } },
	  { data: { source: 'lu0_1_1_i2', target: 'fwd_1_2_i3', label: 'lu_0xa249e4 : 1' } },
	  { data: { source: 'bmod_1_2_i4', target: 'fwd_1_2_i3', label: 'bmod_0xa24a88 : 5' } },
	  { data: { source: 'fwd_1_2_i3', target: 'bmod_2_2_i5', label: 'fwd_0xa24a08 : 5' } },
	  { data: { source: 'bdiv_2_1_i2', target: 'bmod_2_2_i5', label: 'bdiv_0xa24a28 : 7' } },
	  { data: { source: 'bmod_2_2_i5', target: 'lu0_2_2_i3', label: 'bmod_0xa24aa8 : 8' } }
    ]
  },
  
  layout: {
    name: 'dagre',
	spacingFactor: 2.75,
	directed: true,
    padding: 14
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
        //thisFood.remove();
      }
    });
    
    delay += duration;
  })(); } // for
  
}); // on tap

}); // on dom ready
