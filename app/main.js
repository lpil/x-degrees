'use strict';

const graph = new Springy.Graph();

const nodes = [
  'Adam',
  'Betty',
  'Charles',
  'Danny',
  'Erik',
  'Fara',
];

const edges = [
  ['Fara', 'Danny'],
  ['Charles', 'Adam'],
  ['Danny', 'Adam'],
  ['Danny', 'Charles'],
  ['Danny', 'Erik'],
  ['Danny', 'Betty'],
  ['Adam', 'Fara'],
  ['Erik', 'Fara'],
  ['Charles', 'Fara'],
];

graph.addNodes.apply(graph, nodes);
graph.addEdges.apply(graph, edges.map(x => x.sort()));

$('canvas').springy({ graph: graph });
